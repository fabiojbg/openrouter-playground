export interface OpenAIChatMessage { // Removed import for OpenAIChatModels
  id?: number;
  role: "system" | "assistant" | "user";
  content: string;
  reasoning?: string; // Added reasoning field
  reasoningTime?: number; // Added reasoningTime field
  isReasoning?: boolean; // Added isReasoning field
  totalTime?: number; // Added totalTime field
  tokensPerSecond?: number; // Added tokensPerSecond field
  usage?: Usage; // Added usage field
}

export interface Usage {
  completion_tokens: number;
  completion_tokens_details: CompletionTokensDetails;
  cost: number;
  cost_details: CostDetails;
  prompt_tokens: number;
  prompt_tokens_details: PromptTokensDetails;
  total_tokens: number;
  totalTime?: number; // Added totalTime to Usage interface
  tokensPerSecond?: number; // Added tokensPerSecond to Usage interface
}

export interface CompletionTokensDetails {
  reasoning_tokens: number;
}

export interface CostDetails {
  upstream_inference_cost: number;
}

export interface PromptTokensDetails {
  cached_tokens: number;
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
