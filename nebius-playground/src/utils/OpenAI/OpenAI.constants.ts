import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "deepseek-ai/DeepSeek-R1": {
    id: "deepseek-ai/DeepSeek-R1",
    name: "deepseek-ai/DeepSeek-R1",
    inputFee: 0.80,
    outputFee: 2.40,
    context: 128000,
    maxLimit: 8192
  },
  "deepseek-ai/DeepSeek-V3": {
    id: "deepseek-ai/DeepSeek-V3",
    name: "deepseek-ai/DeepSeek-V3",
    inputFee: 0.5,
    outputFee: 1.5,
    context: 128000,
    maxLimit: 8192
  },
  "meta-llama/Llama-3.3-70B-Instruct": {
    id: "meta-llama/Llama-3.3-70B-Instruct",
    name: "meta-llama/Llama-3.3-70B-Instruct",
    inputFee: 0.25,
    outputFee: 0.75,
    context: 128000,
    maxLimit: 8192
  },
  "meta-llama/Meta-Llama-3.1-405B-Instruct": {
    id: "meta-llama/Meta-Llama-3.1-405B-Instruct",
    name: "meta-llama/Meta-Llama-3.1-405B-Instruct",
    inputFee: 1.0,
    outputFee: 3.0,
    context: 128000,
    maxLimit: 8192
  },
  "Qwen/Qwen2.5-72B-Instruct": {
    id: "Qwen/Qwen2.5-72B-Instruct",
    name: "Qwen/Qwen2.5-72B-Instruct",
    inputFee: 0.25,
    outputFee: 0.75,
    context: 128000,
    maxLimit: 8192
  },
  "Qwen/Qwen2.5-32B-Instruct": {
    id: "Qwen/Qwen2.5-32B-Instruct",
    name: "Qwen/Qwen2.5-32B-Instruct",
    inputFee: 0.13,
    outputFee: 0.40,
    context: 128000,
    maxLimit: 8192
  },
  "Qwen/Qwen2.5-Coder-32B-Instruct": {
    id: "Qwen/Qwen2.5-Coder-32B-Instruct",
    name: "Qwen/Qwen2.5-Coder-32B-Instruct",
    inputFee: 0.10,
    outputFee: 0.30,
    context: 40960,
    maxLimit: 8192
  },
};
