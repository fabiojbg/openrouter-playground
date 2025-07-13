export const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export const OPENROUTER_HEADERS = {
  "HTTP-Referer": "https://github.com/fabiojbg", // Required by OpenRouter
  "X-Title": "OpenRouter Playground", // Optional but recommended
};

export const STREAM_DONE_MESSAGE = "[DONE]";

export const STREAM_EVENT_TYPE_REASONING = "reasoning";
export const STREAM_EVENT_TYPE_CONTENT = "content";
export const STREAM_EVENT_TYPE_USAGE = "usage";
