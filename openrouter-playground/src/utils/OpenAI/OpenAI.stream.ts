import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";
import { STREAM_DONE_MESSAGE, STREAM_EVENT_TYPE_REASONING, STREAM_EVENT_TYPE_CONTENT, STREAM_EVENT_TYPE_USAGE } from "./OpenAI.constants";
import { StreamResponse, Usage } from "./OpenAI.types";

interface StreamProcessorOptions {
  startTime: number;
  firstTokenTime: number | null;
  controller: ReadableStreamDefaultController;
  encoder: TextEncoder;
}

export const createStreamProcessor = ({ startTime, firstTokenTime, controller, encoder }: StreamProcessorOptions) => {
  return (event: ParsedEvent | ReconnectInterval) => {
    if (event.type === "event") {
      const data = event.data;
      
      if (data === STREAM_DONE_MESSAGE) {
        controller.close();
        return;
      }

      try {
        const json = JSON.parse(data) as StreamResponse;            
        const delta = json.choices && json.choices.length > 0 ? json.choices[0]?.delta : {};

        // Capture first token time
        if (firstTokenTime === null && (delta.reasoning || delta.content)) {
          firstTokenTime = Date.now();
        }
        
        if (delta.reasoning) {
          const queue = encoder.encode(JSON.stringify({ type: STREAM_EVENT_TYPE_REASONING, value: delta.reasoning }) + "\n");
          controller.enqueue(queue);
        }

        if (delta.content) {
          const queue = encoder.encode(JSON.stringify({ type: STREAM_EVENT_TYPE_CONTENT, value: delta.content }) + "\n");
          controller.enqueue(queue);
        }

        // Process usage data if present in any chunk
        if (json.usage) {
          const totalTime = (Date.now() - startTime) / 1000; // Total time in seconds
          let tokensPerSecond = 0;
          if (json.usage.total_tokens && totalTime > 0) {
            tokensPerSecond = json.usage.total_tokens / totalTime;
          }

          const timeToFirstToken = firstTokenTime !== null ? (firstTokenTime - startTime) / 1000 : 0; // Time to first token in seconds

          const usageData = {
            ...json.usage,
            totalTime,
            tokensPerSecond,
            timeToFirstToken, // Add timeToFirstToken
          };
          const queue = encoder.encode(JSON.stringify({ type: STREAM_EVENT_TYPE_USAGE, value: usageData }) + "\n");
          controller.enqueue(queue);
        }
      } catch (e) {
        console.error("Error parsing stream:", e);
        controller.error(e);
      }
    }
  };
};
