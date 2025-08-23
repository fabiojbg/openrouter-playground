import { OpenAIChatMessage, OpenAIConfig, OpenAIRequest, Usage, StreamResponse } from "./OpenAI.types";
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";
import { OPENROUTER_API_URL, OPENROUTER_HEADERS } from "./OpenAI.constants";
import { OpenAIError } from "./OpenAI.errors";
import { createStreamProcessor } from "./OpenAI.stream";

export const defaultConfig = {
  model: "deepseek/deepseek-r1:free",
  temperature: 0.5,
  max_tokens: 8192,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
};

// Removed local OpenAIRequest type definition

export const getOpenAICompletion = async (
  token: string,
  payload: OpenAIRequest,
  requestStartTime: number // Add requestStartTime parameter
) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const startTime = requestStartTime; // Use the passed startTime
  let firstTokenTime: number | null = null; // Initialize firstTokenTime

  const response = await fetch(OPENROUTER_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...OPENROUTER_HEADERS,
    },
    method: "POST",
    body: JSON.stringify({ ...payload, usage: { include: true } }), // Enable usage accounting
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new OpenAIError(`OpenRouter API Error: ${errorText}`, response.status);
  }

  if (!response.body) {
    throw new OpenAIError("No response body received from OpenRouter API");
  }

  const stream = new ReadableStream({
    async start(controller) {
      const onParse = createStreamProcessor({ startTime, firstTokenTime, controller, encoder });
      const parser = createParser(onParse);
      try {
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
