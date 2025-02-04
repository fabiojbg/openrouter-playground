import { OpenAIChatMessage, OpenAIConfig } from "./OpenAI.types";
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

export const defaultConfig = {
  model: "deepseek-ai/DeepSeek-V3",
  temperature: 0.5,
  max_tokens: 8192,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
};

export type OpenAIRequest = {
  messages: OpenAIChatMessage[];
} & OpenAIConfig;

interface StreamResponse {
  choices: Array<{
    delta: {
      content?: string;
    };
    finish_reason?: string;
  }>;
}

export const getOpenAICompletion = async (
  token: string,
  payload: OpenAIRequest
) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const response = await fetch("https://api.studio.nebius.ai/v1/chat/completions", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
//      "HTTP-Referer": "https://github.com/fabiojbg", // Required by Nebius
//      "X-Title": "Nebius Playground", // Optional but recommended
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === "event") {
          const data = event.data;
          
          if (data === "[DONE]") {
            controller.close();
            return;
          }

          try {
            const json = JSON.parse(data) as StreamResponse;
const text = json.choices && json.choices.length > 0 ? json.choices[0]?.delta?.content || "" : "";
            
            if (text) {
              const queue = encoder.encode(text);
              controller.enqueue(queue);
            }

            // Check if the response is complete
            if (json.choices[0]?.finish_reason === "stop") {
              controller.close();
            }
          } catch (e) {
            console.error("Error parsing stream:", e);
            controller.error(e);
          }
        }
      }

      const parser = createParser(onParse);
      try {
        // We've already checked response.body is not null above
        const reader = (response.body as ReadableStream).getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          parser.feed(decoder.decode(value));
        }
      } catch (e) {
        console.error("Error reading stream:", e);
        controller.error(e);
          }
    },
  });

  return stream;
};
