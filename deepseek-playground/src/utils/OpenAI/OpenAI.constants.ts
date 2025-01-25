import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "deepseek-chat": {
    id: "deepseek-chat",
    name: "deepseek-chat",
    maxLimit: 8192,
  },
  "deepseek-reasoner": {
    id: "deepseek-reasoner",
    name: "deepseek-reasoner",
    maxLimit: 8192,
  },
};
