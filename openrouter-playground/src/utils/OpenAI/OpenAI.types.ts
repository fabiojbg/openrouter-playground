export interface OpenAIChatMessage { // Removed import for OpenAIChatModels
  id?: number;
  role: "system" | "assistant" | "user";
  content: string;
  reasoning?: string; // Added reasoning field
  reasoningTime?: number; // Added reasoningTime field
  isReasoning?: boolean; // Added isReasoning field
}

export interface OpenAISystemMessage {
  role: "system";
  content: string;
}

export interface OpenAIConfig {
  model: string; // Changed from keyof typeof OpenAIChatModels to string
  reasoning?: {
    max_tokens?: number;
  };
  temperature?: number;
  max_tokens?: number;
  max_completion_tokens?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  stream?: boolean;
  n?: number;
}

export type OpenAIRequest = OpenAIConfig & {
  messages: OpenAIChatMessage[];
};

export interface OpenAIModel {
  id: string;
  name: string;
  maxLimit: number;
  inputFee: string;
  outputFee: string;
  context: number;
}
