import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "meta-llama/Meta-Llama-3-70B-Instruct-Turbo": {
      id: "meta-llama/Meta-Llama-3-70B-Instruct-Turbo",
      name: "Meta Llama 3 70B Instruct Turbo",
      inputFee: 0.88,
      outputFee: 0.88,
      context: 8192,
      maxLimit: 8192
  },
  "meta-llama/Meta-Llama-3-8B-Instruct-Lite": {
      id: "meta-llama/Meta-Llama-3-8B-Instruct-Lite",
      name: "Meta Llama 3 8B Instruct Lite",
      inputFee: 0.1,
      outputFee: 0.1,
      context: 8192,
      maxLimit: 8192
  },
  "meta-llama/Meta-Llama-3-8B-Instruct-Turbo": {
      id: "meta-llama/Meta-Llama-3-8B-Instruct-Turbo",
      name: "Meta Llama 3 8B Instruct Turbo",
      inputFee: 0.18,
      outputFee: 0.18,
      context: 8192,
      maxLimit: 8192
  },
  "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo": {
      id: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
      name: "Meta Llama 3.1 8B Instruct Turbo",
      inputFee: 0.18,
      outputFee: 0.18,
      context: 8192,
      maxLimit: 8192
  },
  "meta-llama/Meta-Llama-3.2-11B-Vision-Instruct-Turbo": {
      id: "meta-llama/Meta-Llama-3.2-11B-Vision-Instruct-Turbo",
      name: "Meta Llama 3.2 11B Vision Instruct Turbo",
      inputFee: 0.18,
      outputFee: 0.18,
      context: 131072,
      maxLimit: 131072
  },
  "meta-llama/Llama-2-70b-hf": {
      id: "meta-llama/Llama-2-70b-hf",
      name: "LLaMA-2 (70B)",
      inputFee: 0.9,
      outputFee: 0.9,
      context: 4096,
      maxLimit: 4096
  },
  "meta-llama/Llama-2-13b-chat-hf": {
      id: "meta-llama/Llama-2-13b-chat-hf",
      name: "LLaMA-2 Chat (13B)",
      inputFee: 0.22,
      outputFee: 0.22,
      context: 4096,
      maxLimit: 4096
  },
  "meta-llama/Llama-Vision-Free": {
      id: "meta-llama/Llama-Vision-Free",
      name: "Meta Llama Vision Free",
      inputFee: 0,
      outputFee: 0,
      context: 131072,
      maxLimit: 131072
  },
  "mistralai/Mistral-7B-v0.1": {
      id: "mistralai/Mistral-7B-v0.1",
      name: "Mistral (7B)",
      inputFee: 0.2,
      outputFee: 0.2,
      context: 4096,
      maxLimit: 4096
  },
  "mistralai/Mistral-Small-24B-Instruct-2501": {
      id: "mistralai/Mistral-Small-24B-Instruct-2501",
      name: "Mistral Small (24B) Instruct 25.01",
      inputFee: 0.8,
      outputFee: 0.8,
      context: 32768,
      maxLimit: 32768
  },
  "mistralai/Mixtral-8x7B-Instruct-v0.1": {
      id: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      name: "Mixtral-8x7B Instruct v0.1",
      inputFee: 0.18,
      outputFee: 0.18,
      context: 32768,
      maxLimit: 32768
  },
  "mistralai/Mixtral-8x22B-Instruct-v0.1": {
      id: "mistralai/Mixtral-8x22B-Instruct-v0.1",
      name: "Mixtral-8x22B Instruct v0.1",
      inputFee: 1.2,
      outputFee: 1.2,
      context: 65536,
      maxLimit: 65536
  },
  "google/gemma-2-27b-it": {
      id: "google/gemma-2-27b-it",
      name: "Gemma-2 Instruct (27B)",
      inputFee: 0.8,
      outputFee: 0.8,
      context: 8192,
      maxLimit: 8192
  },
  "google/gemma-2b-it": {
      id: "google/gemma-2b-it",
      name: "Gemma Instruct (2B)",
      inputFee: 0.1,
      outputFee: 0.1,
      context: 8192,
      maxLimit: 8192
  },
  "deepseek-ai/deepseek-llm-67b-chat": {
      id: "deepseek-ai/deepseek-llm-67b-chat",
      name: "DeepSeek LLM Chat (67B)",
      inputFee: 0.9,
      outputFee: 0.9,
      context: 4096,
      maxLimit: 4096
  },
  "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B": {
      id: "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
      name: "DeepSeek R1 Distill Qwen 14B",
      inputFee: 2,
      outputFee: 2,
      context: 131072,
      maxLimit: 131072
  },
  "deepseek-ai/DeepSeek-R1-Distill-Llama-70B": {
      id: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
      name: "DeepSeek R1 Distill Llama 70B",
      inputFee: 2,
      outputFee: 2,
      context: 131072,
      maxLimit: 131072
  },
  "deepseek-ai/DeepSeek-V3": {
      id: "deepseek-ai/DeepSeek-V3",
      name: "DeepSeek V3",
      inputFee: 1.25,
      outputFee: 1.25,
      context: 131072,
      maxLimit: 131072
  },
  "deepseek-ai/DeepSeek-R1": {
      id: "deepseek-ai/DeepSeek-R1",
      name: "DeepSeek R1",
      inputFee: 7,
      outputFee: 7,
      context: 163840,
      maxLimit: 163840
  }
}
;
