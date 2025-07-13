import { OpenAIChatMessage, OpenAIConfig, OpenAIRequest, Usage } from "./OpenAI.types"; // Added OpenAIRequest, Usage
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

export const defaultConfig = {
  model: "deepseek/deepseek-r1:free",
  temperature: 0.5,
  max_tokens: 8192,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
};

// Removed local OpenAIRequest type definition

interface StreamResponse {
  choices: Array<{
    delta: {
      content?: string;
      reasoning?: string; // Added reasoning field
    };
    finish_reason?: string;
  }>;
  usage?: Usage; // Added usage field
}

export const getOpenAICompletion = async (
  token: string,
  payload: OpenAIRequest,
  requestStartTime: number // Add requestStartTime parameter
) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const startTime = requestStartTime; // Use the passed startTime

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://github.com/fabiojbg", // Required by OpenRouter
      "X-Title": "OpenRouter Playground", // Optional but recommended
    },
    method: "POST",
    body: JSON.stringify({ ...payload, usage: { include: true } }), // Enable usage accounting
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(errorText);
    (error as any).status = response.status;
    throw error;
  }

  if (!response.body) {
    throw new Error("No response body received");
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
            const delta = json.choices && json.choices.length > 0 ? json.choices[0]?.delta : {};
            
            if (delta.reasoning) {
              const queue = encoder.encode(JSON.stringify({ type: "reasoning", value: delta.reasoning }) + "\n");
              controller.enqueue(queue);
            }

            if (delta.content) {
              const queue = encoder.encode(JSON.stringify({ type: "content", value: delta.content }) + "\n");
              controller.enqueue(queue);
            }

            // Process usage data if present in any chunk
            if (json.usage) {
              const totalTime = (Date.now() - startTime) / 1000; // Total time in seconds
              let tokensPerSecond = 0;
              if (json.usage.total_tokens && totalTime > 0) {
                tokensPerSecond = json.usage.total_tokens / totalTime;
              }

              const usageData = {
                ...json.usage,
                totalTime,
                tokensPerSecond,
              };
              const queue = encoder.encode(JSON.stringify({ type: "usage", value: usageData }) + "\n");
              controller.enqueue(queue);
            }
            // The stream will be closed when "[DONE]" is received.
            // No need to close here based on finish_reason.
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
