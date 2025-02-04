import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "deepseek-chat": {
    id: "deepseek-chat",
    name: "deepseek-chat",
    inputFee: 0.14,
    outputFee: 0.28,
    context: 64000,
    maxLimit: 8192
  },
  "deepseek-reasoner": {
    id: "deepseek-reasoner",
    name: "deepseek-reasoner",
    inputFee: 0.55,
    outputFee: 2.19,
    context: 64000,
    maxLimit: 8192
  },
};
