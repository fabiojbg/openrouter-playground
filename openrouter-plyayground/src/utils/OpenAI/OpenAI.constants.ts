import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "google/gemini-2.0-flash-thinking-exp:free": {
    id: "google/gemini-2.0-flash-thinking-exp:free",
    name: "Gemini 2.0 Flash Thinking Experimental 01-21 (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 1048576,
    maxLimit: 8192
  },
  "deepseek/deepseek-r1:free": {
    id: "deepseek/deepseek-r1:free",
    name: "DeepSeek R1 (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 128000,
    maxLimit: 8192
  },
  "sophosympatheia/rogue-rose-103b-v0.2:free": {
    id: "sophosympatheia/rogue-rose-103b-v0.2:free",
    name: "Rogue Rose 103B v0.2 (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 4096,
    maxLimit: 8192
  },
  "google/gemini-2.0-flash-thinking-exp-1219:free": {
    id: "google/gemini-2.0-flash-thinking-exp-1219:free",
    name: "Gemini 2.0 Flash Thinking Experimental (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 40000,
    maxLimit: 8192
  },
  "google/gemini-2.0-flash-exp:free": {
    id: "google/gemini-2.0-flash-exp:free",
    name: "Gemini Flash 2.0 Experimental (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 1048576,
    maxLimit: 8192
  },
  "google/gemini-exp-1206:free": {
    id: "google/gemini-exp-1206:free",
    name: "Gemini Experimental 1206 (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 2097152,
    maxLimit: 8192
  },
  "google/gemini-exp-1121:free": {
    id: "google/gemini-exp-1121:free",
    name: "Gemini Experimental 1121 (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 40960,
    maxLimit: 8192
  },
  "google/learnlm-1.5-pro-experimental:free": {
    id: "google/learnlm-1.5-pro-experimental:free",
    name: "LearnLM 1.5 Pro Experimental (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 40960,
    maxLimit: 8192
  },
  "google/gemini-exp-1114:free": {
    id: "google/gemini-exp-1114:free",
    name: "Gemini Experimental 1114 (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 40960,
    maxLimit: 8192
  },
  "meta-llama/llama-3.2-3b-instruct:free": {
    id: "meta-llama/llama-3.2-3b-instruct:free",
    name: "Llama 3.2 3B Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 4096,
    maxLimit: 8192
  },
  "meta-llama/llama-3.2-1b-instruct:free": {
    id: "meta-llama/llama-3.2-1b-instruct:free",
    name: "Llama 3.2 1B Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 4096,
    maxLimit: 8192
  },
  "meta-llama/llama-3.2-90b-vision-instruct:free": {
    id: "meta-llama/llama-3.2-90b-vision-instruct:free",
    name: "Llama 3.2 90B Vision Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 4096,
    maxLimit: 8192
  },
  "meta-llama/llama-3.2-11b-vision-instruct:free": {
    id: "meta-llama/llama-3.2-11b-vision-instruct:free",
    name: "Llama 3.2 11B Vision Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 131072,
    maxLimit: 8192
  },
  "google/gemini-flash-1.5-exp": {
    id: "google/gemini-flash-1.5-exp",
    name: "Gemini Flash 1.5 Experimental",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 1000000,
    maxLimit: 8192
  },
  "google/gemini-flash-1.5-8b-exp": {
    id: "google/gemini-flash-1.5-8b-exp",
    name: "Gemini Flash 1.5 8B Experimental",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 1000000,
    maxLimit: 8192
  },
  "google/gemini-pro-1.5-exp": {
    id: "google/gemini-pro-1.5-exp",
    name: "Gemini Pro 1.5 Experimental",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 1000000,
    maxLimit: 8192
  },
  "meta-llama/llama-3.1-405b-instruct:free": {
    id: "meta-llama/llama-3.1-405b-instruct:free",
    name: "Llama 3.1 405B Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8000,
    maxLimit: 8192
  },
  "meta-llama/llama-3.1-8b-instruct:free": {
    id: "meta-llama/llama-3.1-8b-instruct:free",
    name: "Llama 3.1 8B Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8192,
    maxLimit: 8192
  },
  "meta-llama/llama-3.1-70b-instruct:free": {
    id: "meta-llama/llama-3.1-70b-instruct:free",
    name: "Llama 3.1 70B Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8192,
    maxLimit: 8192
  },
  "qwen/qwen-2-7b-instruct:free": {
    id: "qwen/qwen-2-7b-instruct:free",
    name: "Qwen 2 7B Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8192,
    maxLimit: 8192
  },
  "google/gemma-2-9b-it:free": {
    id: "google/gemma-2-9b-it:free",
    name: "Gemma 2 9B (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8192,
    maxLimit: 8192
  },
  "mistralai/mistral-7b-instruct:free": {
    id: "mistralai/mistral-7b-instruct:free",
    name: "Mistral 7B Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8192,
    maxLimit: 8192
  },
  "microsoft/phi-3-mini-128k-instruct:free": {
    id: "microsoft/phi-3-mini-128k-instruct:free",
    name: "Phi-3 Mini 128K Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8192,
    maxLimit: 8192
  },
  "microsoft/phi-3-medium-128k-instruct:free": {
    id: "microsoft/phi-3-medium-128k-instruct:free",
    name: "Phi-3 Medium 128K Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8192,
    maxLimit: 8192
  },
  "meta-llama/llama-3-8b-instruct:free": {
    id: "meta-llama/llama-3-8b-instruct:free",
    name: "Llama 3 8B Instruct (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8192,
    maxLimit: 8192
  },
  "openchat/openchat-7b:free": {
    id: "openchat/openchat-7b:free",
    name: "OpenChat 3.5 7B (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 8192,
    maxLimit: 8192
  },
  "undi95/toppy-m-7b:free": {
    id: "undi95/toppy-m-7b:free",
    name: "Toppy M 7B (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 4096,
    maxLimit: 8192
  },
  "huggingfaceh4/zephyr-7b-beta:free": {
    id: "huggingfaceh4/zephyr-7b-beta:free",
    name: "Zephyr 7B (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 4096,
    maxLimit: 8192
  },
  "gryphe/mythomax-l2-13b:free": {
    id: "gryphe/mythomax-l2-13b:free",
    name: "MythoMax 13B (free)",
    inputFee: 0.0,
    outputFee: 0.0,
    context: 4096,
    maxLimit: 8192
  },
  "liquid/lfm-7b": {
    id: "liquid/lfm-7b",
    name: "LFM 7B",
    inputFee: 0.01,
    outputFee: 0.01,
    context: 32768,
    maxLimit: 8192
  },
  "meta-llama/llama-3.2-1b-instruct": {
    id: "meta-llama/llama-3.2-1b-instruct",
    name: "Llama 3.2 1B Instruct",
    inputFee: 0.01,
    outputFee: 0.01,
    context: 131072,
    maxLimit: 8192
  },
  "meta-llama/llama-3.2-3b-instruct": {
    id: "meta-llama/llama-3.2-3b-instruct",
    name: "Llama 3.2 3B Instruct",
    inputFee: 0.015,
    outputFee: 0.025,
    context: 131000,
    maxLimit: 8192
  },
  "liquid/lfm-3b": {
    id: "liquid/lfm-3b",
    name: "LFM 3B",
    inputFee: 0.02,
    outputFee: 0.02,
    context: 32768,
    maxLimit: 8192
  },
  "meta-llama/llama-3.1-8b-instruct": {
    id: "meta-llama/llama-3.1-8b-instruct",
    name: "Llama 3.1 8B Instruct",
    inputFee: 0.02,
    outputFee: 0.05,
    context: 131072,
    maxLimit: 8192
  },
  "nousresearch/hermes-2-pro-llama-3-8b": {
    id: "nousresearch/hermes-2-pro-llama-3-8b",
    name: "Hermes 2 Pro - Llama-3 8B",
    inputFee: 0.025,
    outputFee: 0.04,
    context: 131000,
    maxLimit: 8192
  },
  "qwen/qwen-2.5-7b-instruct": {
    id: "qwen/qwen-2.5-7b-instruct",
    name: "Qwen2.5 7B Instruct",
    inputFee: 0.025,
    outputFee: 0.05,
    context: 32768,
    maxLimit: 8192
  },
  "mistralai/mistral-7b-instruct": {
    id: "mistralai/mistral-7b-instruct",
    name: "Mistral 7B Instruct",
    inputFee: 0.03,
    outputFee: 0.055,
    context: 32768,
    maxLimit: 8192
  },
  "mistralai/mistral-7b-instruct-v0.3": {
    id: "mistralai/mistral-7b-instruct-v0.3",
    name: "Mistral 7B Instruct v0.3",
    inputFee: 0.03,
    outputFee: 0.055,
    context: 32768,
    maxLimit: 8192
  },
  "sao10k/l3-lunaris-8b": {
    id: "sao10k/l3-lunaris-8b",
    name: "Llama 3 8B Lunaris",
    inputFee: 0.03,
    outputFee: 0.06,
    context: 8192,
    maxLimit: 8192
  },
  "google/gemma-2-9b-it": {
    id: "google/gemma-2-9b-it",
    name: "Gemma 2 9B",
    inputFee: 0.03,
    outputFee: 0.06,
    context: 8192,
    maxLimit: 8192
  },
  "meta-llama/llama-3-8b-instruct": {
    id: "meta-llama/llama-3-8b-instruct",
    name: "Llama 3 8B Instruct",
    inputFee: 0.03,
    outputFee: 0.06,
    context: 8192,
    maxLimit: 8192
  },
  "mistralai/mistral-nemo": {
    id: "mistralai/mistral-nemo",
    name: "Mistral Nemo",
    inputFee: 0.035,
    outputFee: 0.08,
    context: 131072,
    maxLimit: 8192
  },
  "mistralai/ministral-3b": {
    id: "mistralai/ministral-3b",
    name: "Ministral 3B",
    inputFee: 0.04,
    outputFee: 0.04,
    context: 128000,
    maxLimit: 8192
  },
  "amazon/nova-micro-v1": {
    id: "amazon/nova-micro-v1",
    name: "Nova Micro 1.0",
    inputFee: 0.035,
    outputFee: 0.14,
    context: 128000,
    maxLimit: 8192
  },
  "cohere/command-r7b-12-2024": {
    id: "cohere/command-r7b-12-2024",
    name: "Command R7B (12-2024)",
    inputFee: 0.0375,
    outputFee: 0.15,
    context: 128000,
    maxLimit: 8192
  },
  "google/gemini-flash-1.5-8b": {
    id: "google/gemini-flash-1.5-8b",
    name: "Gemini Flash 1.5 8B",
    inputFee: 0.0375,
    outputFee: 0.15,
    context: 1000000,
    maxLimit: 8192
  },
  "qwen/qwen-2-7b-instruct": {
    id: "qwen/qwen-2-7b-instruct",
    name: "Qwen 2 7B Instruct",
    inputFee: 0.054,
    outputFee: 0.054,
    context: 32768,
    maxLimit: 8192
  },
  "meta-llama/llama-3.2-11b-vision-instruct": {
    id: "meta-llama/llama-3.2-11b-vision-instruct",
    name: "Llama 3.2 11B Vision Instruct",
    inputFee: 0.055,
    outputFee: 0.055,
    context: 131072,
    maxLimit: 8192
  },
  "openchat/openchat-7b": {
    id: "openchat/openchat-7b",
    name: "OpenChat 3.5 7B",
    inputFee: 0.055,
    outputFee: 0.055,
    context: 8192,
    maxLimit: 8192
  },
  "qwen/qwen-turbo": {
    id: "qwen/qwen-turbo",
    name: "Qwen-Turbo",
    inputFee: 0.05,
    outputFee: 0.2,
    context: 1000000,
    maxLimit: 8192
  },
  "gryphe/mythomax-l2-13b": {
    id: "gryphe/mythomax-l2-13b",
    name: "MythoMax 13B",
    inputFee: 0.065,
    outputFee: 0.065,
    context: 4096,
    maxLimit: 8192
  },
  "mistralai/mistral-7b-instruct:nitro": {
    id: "mistralai/mistral-7b-instruct:nitro",
    name: "Mistral 7B Instruct (nitro)",
    inputFee: 0.07,
    outputFee: 0.07,
    context: 32768,
    maxLimit: 8192
  },
  "microsoft/wizardlm-2-7b": {
    id: "microsoft/wizardlm-2-7b",
    name: "WizardLM-2 7B",
    inputFee: 0.07,
    outputFee: 0.07,
    context: 32000,
    maxLimit: 8192
  },
  "undi95/toppy-m-7b:nitro": {
    id: "undi95/toppy-m-7b:nitro",
    name: "Toppy M 7B (nitro)",
    inputFee: 0.07,
    outputFee: 0.07,
    context: 4096,
    maxLimit: 8192
  },
  "undi95/toppy-m-7b": {
    id: "undi95/toppy-m-7b",
    name: "Toppy M 7B",
    inputFee: 0.07,
    outputFee: 0.07,
    context: 4096,
    maxLimit: 8192
  },
  "mistralai/mistral-small-24b-instruct-2501": {
    id: "mistralai/mistral-small-24b-instruct-2501",
    name: "Mistral Small 3",
    inputFee: 0.07,
    outputFee: 0.14,
    context: 32768,
    maxLimit: 8192
  },
  "microsoft/phi-4": {
    id: "microsoft/phi-4",
    name: "Phi 4",
    inputFee: 0.07,
    outputFee: 0.14,
    context: 16384,
    maxLimit: 8192
  },
  "amazon/nova-lite-v1": {
    id: "amazon/nova-lite-v1",
    name: "Nova Lite 1.0",
    inputFee: 0.06,
    outputFee: 0.24,
    context: 300000,
    maxLimit: 8192
  },
  "qwen/qwen-2.5-coder-32b-instruct": {
    id: "qwen/qwen-2.5-coder-32b-instruct",
    name: "Qwen2.5 Coder 32B Instruct",
    inputFee: 0.07,
    outputFee: 0.16,
    context: 33000,
    maxLimit: 8192
  },
  "google/gemini-flash-1.5": {
    id: "google/gemini-flash-1.5",
    name: "Gemini Flash 1.5",
    inputFee: 0.075,
    outputFee: 0.3,
    context: 1000000,
    maxLimit: 8192
  },
  "mistralai/ministral-8b": {
    id: "mistralai/ministral-8b",
    name: "Ministral 8B",
    inputFee: 0.1,
    outputFee: 0.1,
    context: 128000,
    maxLimit: 8192
  },
  "mistralai/pixtral-12b": {
    id: "mistralai/pixtral-12b",
    name: "Pixtral 12B",
    inputFee: 0.1,
    outputFee: 0.1,
    context: 4096,
    maxLimit: 8192
  },
  "qwen/qwen-2-vl-7b-instruct": {
    id: "qwen/qwen-2-vl-7b-instruct",
    name: "Qwen2-VL 7B Instruct",
    inputFee: 0.1,
    outputFee: 0.1,
    context: 4096,
    maxLimit: 8192
  },
  "microsoft/phi-3.5-mini-128k-instruct": {
    id: "microsoft/phi-3.5-mini-128k-instruct",
    name: "Phi-3.5 Mini 128K Instruct",
    inputFee: 0.1,
    outputFee: 0.1,
    context: 128000,
    maxLimit: 8192
  },
  "microsoft/phi-3-mini-128k-instruct": {
    id: "microsoft/phi-3-mini-128k-instruct",
    name: "Phi-3 Mini 128K Instruct",
    inputFee: 0.1,
    outputFee: 0.1,
    context: 128000,
    maxLimit: 8192
  },
  "deepseek/deepseek-r1-distill-qwen-32b": {
    id: "deepseek/deepseek-r1-distill-qwen-32b",
    name: "DeepSeek R1 Distill Qwen 32B",
    inputFee: 0.12,
    outputFee: 0.18,
    context: 131072,
    maxLimit: 8192
  },
  "qwen/qwq-32b-preview": {
    id: "qwen/qwq-32b-preview",
    name: "QwQ 32B Preview",
    inputFee: 0.12,
    outputFee: 0.18,
    context: 32768,
    maxLimit: 8192
  },
  "meta-llama/llama-3.3-70b-instruct": {
    id: "meta-llama/llama-3.3-70b-instruct",
    name: "Llama 3.3 70B Instruct",
    inputFee: 0.12,
    outputFee: 0.3,
    context: 131072,
    maxLimit: 8192
  },
  "nvidia/llama-3.1-nemotron-70b-instruct": {
    id: "nvidia/llama-3.1-nemotron-70b-instruct",
    name: "Llama 3.1 Nemotron 70B Instruct",
    inputFee: 0.12,
    outputFee: 0.3,
    context: 131000,
    maxLimit: 8192
  },
  "nousresearch/hermes-3-llama-3.1-70b": {
    id: "nousresearch/hermes-3-llama-3.1-70b",
    name: "Hermes 3 70B Instruct",
    inputFee: 0.12,
    outputFee: 0.3,
    context: 131000,
    maxLimit: 8192
  },
  "meta-llama/llama-3.1-70b-instruct": {
    id: "meta-llama/llama-3.1-70b-instruct",
    name: "Llama 3.1 70B Instruct",
    inputFee: 0.12,
    outputFee: 0.3,
    context: 131072,
    maxLimit: 8192
  },
  "liquid/lfm-40b": {
    id: "liquid/lfm-40b",
    name: "LFM 40B MoE",
    inputFee: 0.15,
    outputFee: 0.15,
    context: 32768,
    maxLimit: 8192
  },
  "google/gemma-7b-it": {
    id: "google/gemma-7b-it",
    name: "Gemma 7B",
    inputFee: 0.15,
    outputFee: 0.15,
    context: 8192,
    maxLimit: 8192
  },
  "teknium/openhermes-2.5-mistral-7b": {
    id: "teknium/openhermes-2.5-mistral-7b",
    name: "OpenHermes 2.5 Mistral 7B",
    inputFee: 0.17,
    outputFee: 0.17,
    context: 4096,
    maxLimit: 8192
  },
  "nousresearch/nous-hermes-llama2-13b": {
    id: "nousresearch/nous-hermes-llama2-13b",
    name: "Hermes 13B",
    inputFee: 0.17,
    outputFee: 0.17,
    context: 4096,
    maxLimit: 8192
  },
  "deepseek/deepseek-r1-distill-qwen-1.5b": {
    id: "deepseek/deepseek-r1-distill-qwen-1.5b",
    name: "Deepseek R1 Distill Qwen 1.5B",
    inputFee: 0.18,
    outputFee: 0.18,
    context: 131072,
    maxLimit: 8192
  },
  "cohere/command-r-08-2024": {
    id: "cohere/command-r-08-2024",
    name: "Command R (08-2024)",
    inputFee: 0.1425,
    outputFee: 0.57,
    context: 128000,
    maxLimit: 8192
  },
  "openai/gpt-4o-mini": {
    id: "openai/gpt-4o-mini",
    name: "GPT-4o-mini",
    inputFee: 0.15,
    outputFee: 0.6,
    context: 128000,
    maxLimit: 8192
  },
  "openai/gpt-4o-mini-2024-07-18": {
    id: "openai/gpt-4o-mini-2024-07-18",
    name: "GPT-4o-mini (2024-07-18)",
    inputFee: 0.15,
    outputFee: 0.6,
    context: 128000,
    maxLimit: 8192
  },
  "perplexity/llama-3.1-sonar-small-128k-chat": {
    id: "perplexity/llama-3.1-sonar-small-128k-chat",
    name: "Llama 3.1 Sonar 8B",
    inputFee: 0.2,
    outputFee: 0.2,
    context: 131072,
    maxLimit: 8192
  },
  "meta-llama/llama-guard-2-8b": {
    id: "meta-llama/llama-guard-2-8b",
    name: "LlamaGuard 2 8B",
    inputFee: 0.2,
    outputFee: 0.2,
    context: 8192,
    maxLimit: 8192
  },
  "meta-llama/llama-3-8b-instruct:nitro": {
    id: "meta-llama/llama-3-8b-instruct:nitro",
    name: "Llama 3 8B Instruct (nitro)",
    inputFee: 0.2,
    outputFee: 0.2,
    context: 8192,
    maxLimit: 8192
  },
  "mistralai/mistral-7b-instruct-v0.1": {
    id: "mistralai/mistral-7b-instruct-v0.1",
    name: "Mistral 7B Instruct v0.1",
    inputFee: 0.2,
    outputFee: 0.2,
    context: 32768,
    maxLimit: 8192
  },
  "gryphe/mythomax-l2-13b:nitro": {
    id: "gryphe/mythomax-l2-13b:nitro",
    name: "MythoMax 13B (nitro)",
    inputFee: 0.2,
    outputFee: 0.2,
    context: 4096,
    maxLimit: 8192
  },
  "ai21/jamba-1-5-mini": {
    id: "ai21/jamba-1-5-mini",
    name: "Jamba 1.5 Mini",
    inputFee: 0.2,
    outputFee: 0.4,
    context: 256000,
    maxLimit: 8192
  },
  "meta-llama/llama-2-13b-chat": {
    id: "meta-llama/llama-2-13b-chat",
    name: "Llama 2 13B Chat",
    inputFee: 0.22,
    outputFee: 0.22,
    context: 4096,
    maxLimit: 8192
  },
  "mistralai/mistral-small": {
    id: "mistralai/mistral-small",
    name: "Mistral Small",
    inputFee: 0.2,
    outputFee: 0.6,
    context: 32000,
    maxLimit: 8192
  },
  "mistralai/mixtral-8x7b-instruct": {
    id: "mistralai/mixtral-8x7b-instruct",
    name: "Mixtral 8x7B Instruct",
    inputFee: 0.24,
    outputFee: 0.24,
    context: 32768,
    maxLimit: 8192
  },
  "qwen/qwen-2.5-72b-instruct": {
    id: "qwen/qwen-2.5-72b-instruct",
    name: "Qwen2.5 72B Instruct",
    inputFee: 0.23,
    outputFee: 0.4,
    context: 32768,
    maxLimit: 8192
  },
  "meta-llama/llama-3-70b-instruct": {
    id: "meta-llama/llama-3-70b-instruct",
    name: "Llama 3 70B Instruct",
    inputFee: 0.23,
    outputFee: 0.4,
    context: 8192,
    maxLimit: 8192
  },
  "mistralai/codestral-mamba": {
    id: "mistralai/codestral-mamba",
    name: "Codestral Mamba",
    inputFee: 0.25,
    outputFee: 0.25,
    context: 256000,
    maxLimit: 8192
  },
  "mistralai/mistral-tiny": {
    id: "mistralai/mistral-tiny",
    name: "Mistral Tiny",
    inputFee: 0.25,
    outputFee: 0.25,
    context: 32000,
    maxLimit: 8192
  },
  "google/gemma-2-27b-it": {
    id: "google/gemma-2-27b-it",
    name: "Gemma 2 27B",
    inputFee: 0.27,
    outputFee: 0.27,
    context: 8192,
    maxLimit: 8192
  },
  "deepseek/deepseek-r1-distill-llama-70b": {
    id: "deepseek/deepseek-r1-distill-llama-70b",
    name: "DeepSeek R1 Distill Llama 70B",
    inputFee: 0.23,
    outputFee: 0.69,
    context: 131072,
    maxLimit: 8192
  },
  "qwen/qvq-72b-preview": {
    id: "qwen/qvq-72b-preview",
    name: "QvQ 72B Preview",
    inputFee: 0.25,
    outputFee: 0.5,
    context: 128000,
    maxLimit: 8192
  },
  "infermatic/mn-inferor-12b": {
    id: "infermatic/mn-inferor-12b",
    name: "Mistral Nemo Inferor 12B",
    inputFee: 0.25,
    outputFee: 0.5,
    context: 32000,
    maxLimit: 8192
  },
  "thedrummer/rocinante-12b": {
    id: "thedrummer/rocinante-12b",
    name: "Rocinante 12B",
    inputFee: 0.25,
    outputFee: 0.5,
    context: 32768,
    maxLimit: 8192
  },
  "neversleep/llama-3.1-lumimaid-8b": {
    id: "neversleep/llama-3.1-lumimaid-8b",
    name: "Lumimaid v0.2 8B",
    inputFee: 0.1875,
    outputFee: 1.125,
    context: 32768,
    maxLimit: 8192
  },
  "neversleep/llama-3-lumimaid-8b:extended": {
    id: "neversleep/llama-3-lumimaid-8b:extended",
    name: "Llama 3 Lumimaid 8B (extended)",
    inputFee: 0.1875,
    outputFee: 1.125,
    context: 24576,
    maxLimit: 8192
  },
  "neversleep/llama-3-lumimaid-8b": {
    id: "neversleep/llama-3-lumimaid-8b",
    name: "Llama 3 Lumimaid 8B",
    inputFee: 0.1875,
    outputFee: 1.125,
    context: 24576,
    maxLimit: 8192
  },
  "meta-llama/llama-3-8b-instruct:extended": {
    id: "meta-llama/llama-3-8b-instruct:extended",
    name: "Llama 3 8B Instruct (extended)",
    inputFee: 0.1875,
    outputFee: 1.125,
    context: 16384,
    maxLimit: 8192
  },
  "minimax/minimax-01": {
    id: "minimax/minimax-01",
    name: "MiniMax-01",
    inputFee: 0.2,
    outputFee: 1.1,
    context: 1000192,
    maxLimit: 8192
  },
  "anthropic/claude-3-haiku:beta": {
    id: "anthropic/claude-3-haiku:beta",
    name: "Claude 3 Haiku (self-moderated)",
    inputFee: 0.25,
    outputFee: 1.25,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3-haiku": {
    id: "anthropic/claude-3-haiku",
    name: "Claude 3 Haiku",
    inputFee: 0.25,
    outputFee: 1.25,
    context: 200000,
    maxLimit: 8192
  },
  "qwen/qwen-2-72b-instruct": {
    id: "qwen/qwen-2-72b-instruct",
    name: "Qwen 2 72B Instruct",
    inputFee: 0.34,
    outputFee: 0.39,
    context: 32768,
    maxLimit: 8192
  },
  "mistralai/codestral-2501": {
    id: "mistralai/codestral-2501",
    name: "Codestral 2501",
    inputFee: 0.3,
    outputFee: 0.9,
    context: 256000,
    maxLimit: 8192
  },
  "qwen/qwen-2-vl-72b-instruct": {
    id: "qwen/qwen-2-vl-72b-instruct",
    name: "Qwen2-VL 72B Instruct",
    inputFee: 0.4,
    outputFee: 0.4,
    context: 4096,
    maxLimit: 8192
  },
  "qwen/qwen-plus": {
    id: "qwen/qwen-plus",
    name: "Qwen-Plus",
    inputFee: 0.4,
    outputFee: 1.2,
    context: 131072,
    maxLimit: 8192
  },
  "thedrummer/unslopnemo-12b": {
    id: "thedrummer/unslopnemo-12b",
    name: "Unslopnemo 12b",
    inputFee: 0.5,
    outputFee: 0.5,
    context: 32000,
    maxLimit: 8192
  },
  "microsoft/wizardlm-2-8x22b": {
    id: "microsoft/wizardlm-2-8x22b",
    name: "WizardLM-2 8x22B",
    inputFee: 0.5,
    outputFee: 0.5,
    context: 65536,
    maxLimit: 8192
  },
  "cognitivecomputations/dolphin-mixtral-8x7b": {
    id: "cognitivecomputations/dolphin-mixtral-8x7b",
    name: "Dolphin 2.6 Mixtral 8x7B 🐬",
    inputFee: 0.5,
    outputFee: 0.5,
    context: 32768,
    maxLimit: 8192
  },
  "mistralai/mixtral-8x7b-instruct:nitro": {
    id: "mistralai/mixtral-8x7b-instruct:nitro",
    name: "Mixtral 8x7B Instruct (nitro)",
    inputFee: 0.5,
    outputFee: 0.5,
    context: 32768,
    maxLimit: 8192
  },
  "jondurbin/airoboros-l2-70b": {
    id: "jondurbin/airoboros-l2-70b",
    name: "Airoboros 70B",
    inputFee: 0.5,
    outputFee: 0.5,
    context: 4000,
    maxLimit: 8192
  },
  "ai21/jamba-instruct": {
    id: "ai21/jamba-instruct",
    name: "Jamba Instruct",
    inputFee: 0.5,
    outputFee: 0.7,
    context: 256000,
    maxLimit: 8192
  },
  "deepseek/deepseek-chat": {
    id: "deepseek/deepseek-chat",
    name: "DeepSeek V3",
    inputFee: 0.49,
    outputFee: 0.89,
    context: 16000,
    maxLimit: 8192
  },
  "cohere/command-r": {
    id: "cohere/command-r",
    name: "Command R",
    inputFee: 0.475,
    outputFee: 1.425,
    context: 128000,
    maxLimit: 8192
  },
  "cohere/command-r-03-2024": {
    id: "cohere/command-r-03-2024",
    name: "Command R (03-2024)",
    inputFee: 0.475,
    outputFee: 1.425,
    context: 128000,
    maxLimit: 8192
  },
  "google/gemini-pro-vision": {
    id: "google/gemini-pro-vision",
    name: "Gemini Pro Vision 1.0",
    inputFee: 0.5,
    outputFee: 1.5,
    context: 16384,
    maxLimit: 8192
  },
  "google/gemini-pro": {
    id: "google/gemini-pro",
    name: "Gemini Pro 1.0",
    inputFee: 0.5,
    outputFee: 1.5,
    context: 32760,
    maxLimit: 8192
  },
  "openai/gpt-3.5-turbo": {
    id: "openai/gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    inputFee: 0.5,
    outputFee: 1.5,
    context: 16385,
    maxLimit: 8192
  },
  "openai/gpt-3.5-turbo-0125": {
    id: "openai/gpt-3.5-turbo-0125",
    name: "GPT-3.5 Turbo 16k",
    inputFee: 0.5,
    outputFee: 1.5,
    context: 16385,
    maxLimit: 8192
  },
  "nousresearch/nous-hermes-2-mixtral-8x7b-dpo": {
    id: "nousresearch/nous-hermes-2-mixtral-8x7b-dpo",
    name: "Hermes 2 Mixtral 8x7B DPO",
    inputFee: 0.6,
    outputFee: 0.6,
    context: 32768,
    maxLimit: 8192
  },
  "mistralai/mixtral-8x7b": {
    id: "mistralai/mixtral-8x7b",
    name: "Mixtral 8x7B (base)",
    inputFee: 0.6,
    outputFee: 0.6,
    context: 32768,
    maxLimit: 8192
  },
  "sao10k/l3.3-euryale-70b": {
    id: "sao10k/l3.3-euryale-70b",
    name: "Llama 3.3 Euryale 70B",
    inputFee: 0.7,
    outputFee: 0.8,
    context: 131072,
    maxLimit: 8192
  },
  "sao10k/l3.1-euryale-70b": {
    id: "sao10k/l3.1-euryale-70b",
    name: "Llama 3.1 Euryale 70B v2.2",
    inputFee: 0.7,
    outputFee: 0.8,
    context: 131072,
    maxLimit: 8192
  },
  "sao10k/l3-euryale-70b": {
    id: "sao10k/l3-euryale-70b",
    name: "Llama 3 Euryale 70B v2.1",
    inputFee: 0.7,
    outputFee: 0.8,
    context: 8192,
    maxLimit: 8192
  },
  "nousresearch/hermes-3-llama-3.1-405b": {
    id: "nousresearch/hermes-3-llama-3.1-405b",
    name: "Hermes 3 405B Instruct",
    inputFee: 0.8,
    outputFee: 0.8,
    context: 131000,
    maxLimit: 8192
  },
  "meta-llama/llama-3.1-405b-instruct": {
    id: "meta-llama/llama-3.1-405b-instruct",
    name: "Llama 3.1 405B Instruct",
    inputFee: 0.8,
    outputFee: 0.8,
    context: 32768,
    maxLimit: 8192
  },
  "sophosympatheia/midnight-rose-70b": {
    id: "sophosympatheia/midnight-rose-70b",
    name: "Midnight Rose 70B",
    inputFee: 0.8,
    outputFee: 0.8,
    context: 4096,
    maxLimit: 8192
  },
  "aetherwiing/mn-starcannon-12b": {
    id: "aetherwiing/mn-starcannon-12b",
    name: "Starcannon 12B",
    inputFee: 0.8,
    outputFee: 1.2,
    context: 16384,
    maxLimit: 8192
  },
  "nothingiisreal/mn-celeste-12b": {
    id: "nothingiisreal/mn-celeste-12b",
    name: "Mistral Nemo 12B Celeste",
    inputFee: 0.8,
    outputFee: 1.2,
    context: 16384,
    maxLimit: 8192
  },
  "pygmalionai/mythalion-13b": {
    id: "pygmalionai/mythalion-13b",
    name: "Mythalion 13B",
    inputFee: 0.8,
    outputFee: 1.2,
    context: 4096,
    maxLimit: 8192
  },
  "undi95/remm-slerp-l2-13b": {
    id: "undi95/remm-slerp-l2-13b",
    name: "ReMM SLERP 13B",
    inputFee: 0.8,
    outputFee: 1.2,
    context: 4096,
    maxLimit: 8192
  },
  "meta-llama/llama-3-70b-instruct:nitro": {
    id: "meta-llama/llama-3-70b-instruct:nitro",
    name: "Llama 3 70B Instruct (nitro)",
    inputFee: 0.88,
    outputFee: 0.88,
    context: 8192,
    maxLimit: 8192
  },
  "deepseek/deepseek-r1": {
    id: "deepseek/deepseek-r1",
    name: "DeepSeek R1",
    inputFee: 0.75,
    outputFee: 2.4,
    context: 16000,
    maxLimit: 8192
  },
  "meta-llama/llama-3.2-90b-vision-instruct": {
    id: "meta-llama/llama-3.2-90b-vision-instruct",
    name: "Llama 3.2 90B Vision Instruct",
    inputFee: 0.9,
    outputFee: 0.9,
    context: 131072,
    maxLimit: 8192
  },
  "cognitivecomputations/dolphin-mixtral-8x22b": {
    id: "cognitivecomputations/dolphin-mixtral-8x22b",
    name: "Dolphin 2.9.2 Mixtral 8x22B 🐬",
    inputFee: 0.9,
    outputFee: 0.9,
    context: 16000,
    maxLimit: 8192
  },
  "mistralai/mixtral-8x22b-instruct": {
    id: "mistralai/mixtral-8x22b-instruct",
    name: "Mixtral 8x22B Instruct",
    inputFee: 0.9,
    outputFee: 0.9,
    context: 65536,
    maxLimit: 8192
  },
  "meta-llama/llama-2-70b-chat": {
    id: "meta-llama/llama-2-70b-chat",
    name: "Llama 2 70B Chat",
    inputFee: 0.9,
    outputFee: 0.9,
    context: 4096,
    maxLimit: 8192
  },
  "perplexity/llama-3.1-sonar-large-128k-chat": {
    id: "perplexity/llama-3.1-sonar-large-128k-chat",
    name: "Llama 3.1 Sonar 70B",
    inputFee: 1.0,
    outputFee: 1.0,
    context: 131072,
    maxLimit: 8192
  },
  "microsoft/phi-3-medium-128k-instruct": {
    id: "microsoft/phi-3-medium-128k-instruct",
    name: "Phi-3 Medium 128K Instruct",
    inputFee: 1.0,
    outputFee: 1.0,
    context: 128000,
    maxLimit: 8192
  },
  "amazon/nova-pro-v1": {
    id: "amazon/nova-pro-v1",
    name: "Nova Pro 1.0",
    inputFee: 0.8,
    outputFee: 3.2,
    context: 300000,
    maxLimit: 8192
  },
  "cohere/command": {
    id: "cohere/command",
    name: "Command",
    inputFee: 0.95,
    outputFee: 1.9,
    context: 4096,
    maxLimit: 8192
  },
  "anthropic/claude-3.5-haiku-20241022:beta": {
    id: "anthropic/claude-3.5-haiku-20241022:beta",
    name: "Claude 3.5 Haiku (2024-10-22) (self-moderated)",
    inputFee: 0.8,
    outputFee: 4.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3.5-haiku-20241022": {
    id: "anthropic/claude-3.5-haiku-20241022",
    name: "Claude 3.5 Haiku (2024-10-22)",
    inputFee: 0.8,
    outputFee: 4.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3.5-haiku:beta": {
    id: "anthropic/claude-3.5-haiku:beta",
    name: "Claude 3.5 Haiku (self-moderated)",
    inputFee: 0.8,
    outputFee: 4.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3.5-haiku": {
    id: "anthropic/claude-3.5-haiku",
    name: "Claude 3.5 Haiku",
    inputFee: 0.8,
    outputFee: 4.0,
    context: 200000,
    maxLimit: 8192
  },
  "openai/gpt-3.5-turbo-0613": {
    id: "openai/gpt-3.5-turbo-0613",
    name: "GPT-3.5 Turbo (older v0613)",
    inputFee: 1.0,
    outputFee: 2.0,
    context: 4095,
    maxLimit: 8192
  },
  "openai/gpt-3.5-turbo-1106": {
    id: "openai/gpt-3.5-turbo-1106",
    name: "GPT-3.5 Turbo 16k (older v1106)",
    inputFee: 1.0,
    outputFee: 2.0,
    context: 16385,
    maxLimit: 8192
  },
  "google/palm-2-chat-bison-32k": {
    id: "google/palm-2-chat-bison-32k",
    name: "PaLM 2 Chat 32k",
    inputFee: 1.0,
    outputFee: 2.0,
    context: 32768,
    maxLimit: 8192
  },
  "google/palm-2-codechat-bison-32k": {
    id: "google/palm-2-codechat-bison-32k",
    name: "PaLM 2 Code Chat 32k",
    inputFee: 1.0,
    outputFee: 2.0,
    context: 32768,
    maxLimit: 8192
  },
  "google/palm-2-chat-bison": {
    id: "google/palm-2-chat-bison",
    name: "PaLM 2 Chat",
    inputFee: 1.0,
    outputFee: 2.0,
    context: 9216,
    maxLimit: 8192
  },
  "google/palm-2-codechat-bison": {
    id: "google/palm-2-codechat-bison",
    name: "PaLM 2 Code Chat",
    inputFee: 1.0,
    outputFee: 2.0,
    context: 7168,
    maxLimit: 8192
  },
  "undi95/remm-slerp-l2-13b:extended": {
    id: "undi95/remm-slerp-l2-13b:extended",
    name: "ReMM SLERP 13B (extended)",
    inputFee: 1.125,
    outputFee: 1.125,
    context: 6144,
    maxLimit: 8192
  },
  "gryphe/mythomax-l2-13b:extended": {
    id: "gryphe/mythomax-l2-13b:extended",
    name: "MythoMax 13B (extended)",
    inputFee: 1.125,
    outputFee: 1.125,
    context: 8192,
    maxLimit: 8192
  },
  "databricks/dbrx-instruct": {
    id: "databricks/dbrx-instruct",
    name: "DBRX 132B Instruct",
    inputFee: 1.2,
    outputFee: 1.2,
    context: 32768,
    maxLimit: 8192
  },
  "openai/o3-mini": {
    id: "openai/o3-mini",
    name: "o3 Mini",
    inputFee: 1.1,
    outputFee: 4.4,
    context: 200000,
    maxLimit: 8192
  },
  "openai/o1-mini-2024-09-12": {
    id: "openai/o1-mini-2024-09-12",
    name: "o1-mini (2024-09-12)",
    inputFee: 1.1,
    outputFee: 4.4,
    context: 128000,
    maxLimit: 8192
  },
  "openai/o1-mini": {
    id: "openai/o1-mini",
    name: "o1-mini",
    inputFee: 1.1,
    outputFee: 4.4,
    context: 128000,
    maxLimit: 8192
  },
  "openai/gpt-3.5-turbo-instruct": {
    id: "openai/gpt-3.5-turbo-instruct",
    name: "GPT-3.5 Turbo Instruct",
    inputFee: 1.5,
    outputFee: 2.0,
    context: 4095,
    maxLimit: 8192
  },
  "neversleep/noromaid-20b": {
    id: "neversleep/noromaid-20b",
    name: "Noromaid 20B",
    inputFee: 1.5,
    outputFee: 2.25,
    context: 8192,
    maxLimit: 8192
  },
  "mancer/weaver": {
    id: "mancer/weaver",
    name: "Weaver (alpha)",
    inputFee: 1.5,
    outputFee: 2.25,
    context: 8000,
    maxLimit: 8192
  },
  "google/gemini-pro-1.5": {
    id: "google/gemini-pro-1.5",
    name: "Gemini Pro 1.5",
    inputFee: 1.25,
    outputFee: 5.0,
    context: 2000000,
    maxLimit: 8192
  },
  "deepseek/deepseek-r1-distill-qwen-14b": {
    id: "deepseek/deepseek-r1-distill-qwen-14b",
    name: "DeepSeek R1 Distill Qwen 14B",
    inputFee: 1.6,
    outputFee: 1.6,
    context: 131072,
    maxLimit: 8192
  },
  "anthracite-org/magnum-v4-72b": {
    id: "anthracite-org/magnum-v4-72b",
    name: "Magnum v4 72B",
    inputFee: 1.875,
    outputFee: 2.25,
    context: 16384,
    maxLimit: 8192
  },
  "alpindale/magnum-72b": {
    id: "alpindale/magnum-72b",
    name: "Magnum 72B",
    inputFee: 1.875,
    outputFee: 2.25,
    context: 16384,
    maxLimit: 8192
  },
  "meta-llama/llama-3.1-405b": {
    id: "meta-llama/llama-3.1-405b",
    name: "Llama 3.1 405B (base)",
    inputFee: 2.0,
    outputFee: 2.0,
    context: 32768,
    maxLimit: 8192
  },
  "deepseek/deepseek-chat-v2.5": {
    id: "deepseek/deepseek-chat-v2.5",
    name: "DeepSeek V2.5",
    inputFee: 2.0,
    outputFee: 2.0,
    context: 8192,
    maxLimit: 8192
  },
  "qwen/qwen-max": {
    id: "qwen/qwen-max",
    name: "Qwen-Max",
    inputFee: 1.6,
    outputFee: 6.4,
    context: 32768,
    maxLimit: 8192
  },
  "mistralai/mistral-large-2411": {
    id: "mistralai/mistral-large-2411",
    name: "Mistral Large 2411",
    inputFee: 2.0,
    outputFee: 6.0,
    context: 128000,
    maxLimit: 8192
  },
  "mistralai/mistral-large-2407": {
    id: "mistralai/mistral-large-2407",
    name: "Mistral Large 2407",
    inputFee: 2.0,
    outputFee: 6.0,
    context: 128000,
    maxLimit: 8192
  },
  "mistralai/pixtral-large-2411": {
    id: "mistralai/pixtral-large-2411",
    name: "Pixtral Large 2411",
    inputFee: 2.0,
    outputFee: 6.0,
    context: 128000,
    maxLimit: 8192
  },
  "mistralai/mistral-large": {
    id: "mistralai/mistral-large",
    name: "Mistral Large",
    inputFee: 2.0,
    outputFee: 6.0,
    context: 128000,
    maxLimit: 8192
  },
  "ai21/jamba-1-5-large": {
    id: "ai21/jamba-1-5-large",
    name: "Jamba 1.5 Large",
    inputFee: 2.0,
    outputFee: 8.0,
    context: 256000,
    maxLimit: 8192
  },
  "eva-unit-01/eva-qwen-2.5-32b": {
    id: "eva-unit-01/eva-qwen-2.5-32b",
    name: "EVA Qwen2.5 32B",
    inputFee: 2.6,
    outputFee: 3.4,
    context: 16384,
    maxLimit: 8192
  },
  "x-ai/grok-2-vision-1212": {
    id: "x-ai/grok-2-vision-1212",
    name: "Grok 2 Vision 1212",
    inputFee: 2.0,
    outputFee: 10.0,
    context: 32768,
    maxLimit: 8192
  },
  "x-ai/grok-2-1212": {
    id: "x-ai/grok-2-1212",
    name: "Grok 2 1212",
    inputFee: 2.0,
    outputFee: 10.0,
    context: 131072,
    maxLimit: 8192
  },
  "sao10k/l3.1-70b-hanami-x1": {
    id: "sao10k/l3.1-70b-hanami-x1",
    name: "Llama 3.1 70B Hanami x1",
    inputFee: 3.0,
    outputFee: 3.0,
    context: 16000,
    maxLimit: 8192
  },
  "anthracite-org/magnum-v2-72b": {
    id: "anthracite-org/magnum-v2-72b",
    name: "Magnum v2 72B",
    inputFee: 3.0,
    outputFee: 3.0,
    context: 32768,
    maxLimit: 8192
  },
  "01-ai/yi-large": {
    id: "01-ai/yi-large",
    name: "Yi Large",
    inputFee: 3.0,
    outputFee: 3.0,
    context: 32768,
    maxLimit: 8192
  },
  "cohere/command-r-plus-08-2024": {
    id: "cohere/command-r-plus-08-2024",
    name: "Command R+ (08-2024)",
    inputFee: 2.375,
    outputFee: 9.5,
    context: 128000,
    maxLimit: 8192
  },
  "openai/gpt-3.5-turbo-16k": {
    id: "openai/gpt-3.5-turbo-16k",
    name: "GPT-3.5 Turbo 16k",
    inputFee: 3.0,
    outputFee: 4.0,
    context: 16385,
    maxLimit: 8192
  },
  "openai/gpt-4o-2024-11-20": {
    id: "openai/gpt-4o-2024-11-20",
    name: "GPT-4o (2024-11-20)",
    inputFee: 2.5,
    outputFee: 10.0,
    context: 128000,
    maxLimit: 8192
  },
  "inflection/inflection-3-pi": {
    id: "inflection/inflection-3-pi",
    name: "Inflection 3 Pi",
    inputFee: 2.5,
    outputFee: 10.0,
    context: 8000,
    maxLimit: 8192
  },
  "inflection/inflection-3-productivity": {
    id: "inflection/inflection-3-productivity",
    name: "Inflection 3 Productivity",
    inputFee: 2.5,
    outputFee: 10.0,
    context: 8000,
    maxLimit: 8192
  },
  "openai/gpt-4o-2024-08-06": {
    id: "openai/gpt-4o-2024-08-06",
    name: "GPT-4o (2024-08-06)",
    inputFee: 2.5,
    outputFee: 10.0,
    context: 128000,
    maxLimit: 8192
  },
  "openai/gpt-4o": {
    id: "openai/gpt-4o",
    name: "GPT-4o",
    inputFee: 2.5,
    outputFee: 10.0,
    context: 128000,
    maxLimit: 8192
  },
  "mistralai/mistral-medium": {
    id: "mistralai/mistral-medium",
    name: "Mistral Medium",
    inputFee: 2.75,
    outputFee: 8.1,
    context: 32000,
    maxLimit: 8192
  },
  "meta-llama/llama-3.1-70b-instruct:nitro": {
    id: "meta-llama/llama-3.1-70b-instruct:nitro",
    name: "Llama 3.1 70B Instruct (nitro)",
    inputFee: 3.25,
    outputFee: 3.25,
    context: 64000,
    maxLimit: 8192
  },
  "neversleep/llama-3.1-lumimaid-70b": {
    id: "neversleep/llama-3.1-lumimaid-70b",
    name: "Lumimaid v0.2 70B",
    inputFee: 3.375,
    outputFee: 4.5,
    context: 16384,
    maxLimit: 8192
  },
  "neversleep/llama-3-lumimaid-70b": {
    id: "neversleep/llama-3-lumimaid-70b",
    name: "Llama 3 Lumimaid 70B",
    inputFee: 3.375,
    outputFee: 4.5,
    context: 8192,
    maxLimit: 8192
  },
  "xwin-lm/xwin-lm-70b": {
    id: "xwin-lm/xwin-lm-70b",
    name: "Xwin 70B",
    inputFee: 3.75,
    outputFee: 3.75,
    context: 8192,
    maxLimit: 8192
  },
  "cohere/command-r-plus": {
    id: "cohere/command-r-plus",
    name: "Command R+",
    inputFee: 2.85,
    outputFee: 14.25,
    context: 128000,
    maxLimit: 8192
  },
  "cohere/command-r-plus-04-2024": {
    id: "cohere/command-r-plus-04-2024",
    name: "Command R+ (04-2024)",
    inputFee: 2.85,
    outputFee: 14.25,
    context: 128000,
    maxLimit: 8192
  },
  "anthropic/claude-3.5-sonnet:beta": {
    id: "anthropic/claude-3.5-sonnet:beta",
    name: "Claude 3.5 Sonnet (self-moderated)",
    inputFee: 3.0,
    outputFee: 15.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3.5-sonnet": {
    id: "anthropic/claude-3.5-sonnet",
    name: "Claude 3.5 Sonnet",
    inputFee: 3.0,
    outputFee: 15.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3.5-sonnet-20240620:beta": {
    id: "anthropic/claude-3.5-sonnet-20240620:beta",
    name: "Claude 3.5 Sonnet (2024-06-20) (self-moderated)",
    inputFee: 3.0,
    outputFee: 15.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3.5-sonnet-20240620": {
    id: "anthropic/claude-3.5-sonnet-20240620",
    name: "Claude 3.5 Sonnet (2024-06-20)",
    inputFee: 3.0,
    outputFee: 15.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3-sonnet:beta": {
    id: "anthropic/claude-3-sonnet:beta",
    name: "Claude 3 Sonnet (self-moderated)",
    inputFee: 3.0,
    outputFee: 15.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3-sonnet": {
    id: "anthropic/claude-3-sonnet",
    name: "Claude 3 Sonnet",
    inputFee: 3.0,
    outputFee: 15.0,
    context: 200000,
    maxLimit: 8192
  },
  "eva-unit-01/eva-llama-3.33-70b": {
    id: "eva-unit-01/eva-llama-3.33-70b",
    name: "EVA Llama 3.33 70b",
    inputFee: 4.0,
    outputFee: 6.0,
    context: 16384,
    maxLimit: 8192
  },
  "eva-unit-01/eva-qwen-2.5-72b": {
    id: "eva-unit-01/eva-qwen-2.5-72b",
    name: "EVA Qwen2.5 72B",
    inputFee: 4.0,
    outputFee: 6.0,
    context: 16384,
    maxLimit: 8192
  },
  "raifle/sorcererlm-8x22b": {
    id: "raifle/sorcererlm-8x22b",
    name: "SorcererLM 8x22B",
    inputFee: 4.5,
    outputFee: 4.5,
    context: 16000,
    maxLimit: 8192
  },
  "perplexity/llama-3.1-sonar-small-128k-online": {
    id: "perplexity/llama-3.1-sonar-small-128k-online",
    name: "Llama 3.1 Sonar 8B Online",
    inputFee: 0.2,
    outputFee: 0.2,
    context: 127072,
    maxLimit: 8192
  },
  "perplexity/sonar": {
    id: "perplexity/sonar",
    name: "Sonar",
    inputFee: 1.0,
    outputFee: 1.0,
    context: 127072,
    maxLimit: 8192
  },
  "perplexity/llama-3.1-sonar-large-128k-online": {
    id: "perplexity/llama-3.1-sonar-large-128k-online",
    name: "Llama 3.1 Sonar 70B Online",
    inputFee: 1.0,
    outputFee: 1.0,
    context: 127072,
    maxLimit: 8192
  },
  "perplexity/sonar-reasoning": {
    id: "perplexity/sonar-reasoning",
    name: "Sonar Reasoning",
    inputFee: 1.0,
    outputFee: 5.0,
    context: 127000,
    maxLimit: 8192
  },
  "x-ai/grok-vision-beta": {
    id: "x-ai/grok-vision-beta",
    name: "Grok Vision Beta",
    inputFee: 5.0,
    outputFee: 15.0,
    context: 8192,
    maxLimit: 8192
  },
  "x-ai/grok-beta": {
    id: "x-ai/grok-beta",
    name: "Grok Beta",
    inputFee: 5.0,
    outputFee: 15.0,
    context: 131072,
    maxLimit: 8192
  },
  "openai/chatgpt-4o-latest": {
    id: "openai/chatgpt-4o-latest",
    name: "ChatGPT-4o",
    inputFee: 5.0,
    outputFee: 15.0,
    context: 128000,
    maxLimit: 8192
  },
  "openai/gpt-4o-2024-05-13": {
    id: "openai/gpt-4o-2024-05-13",
    name: "GPT-4o (2024-05-13)",
    inputFee: 5.0,
    outputFee: 15.0,
    context: 128000,
    maxLimit: 8192
  },
  "deepseek/deepseek-r1:nitro": {
    id: "deepseek/deepseek-r1:nitro",
    name: "DeepSeek R1 (nitro)",
    inputFee: 7.0,
    outputFee: 7.0,
    context: 163840,
    maxLimit: 8192
  },
  "openai/gpt-4o:extended": {
    id: "openai/gpt-4o:extended",
    name: "GPT-4o (extended)",
    inputFee: 6.0,
    outputFee: 18.0,
    context: 128000,
    maxLimit: 8192
  },
  "alpindale/goliath-120b": {
    id: "alpindale/goliath-120b",
    name: "Goliath 120B",
    inputFee: 9.375,
    outputFee: 9.375,
    context: 6144,
    maxLimit: 8192
  },
  "anthropic/claude-2:beta": {
    id: "anthropic/claude-2:beta",
    name: "Claude v2 (self-moderated)",
    inputFee: 8.0,
    outputFee: 24.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-2": {
    id: "anthropic/claude-2",
    name: "Claude v2",
    inputFee: 8.0,
    outputFee: 24.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-2.1:beta": {
    id: "anthropic/claude-2.1:beta",
    name: "Claude v2.1 (self-moderated)",
    inputFee: 8.0,
    outputFee: 24.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-2.1": {
    id: "anthropic/claude-2.1",
    name: "Claude v2.1",
    inputFee: 8.0,
    outputFee: 24.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-2.0:beta": {
    id: "anthropic/claude-2.0:beta",
    name: "Claude v2.0 (self-moderated)",
    inputFee: 8.0,
    outputFee: 24.0,
    context: 100000,
    maxLimit: 8192
  },
  "anthropic/claude-2.0": {
    id: "anthropic/claude-2.0",
    name: "Claude v2.0",
    inputFee: 8.0,
    outputFee: 24.0,
    context: 100000,
    maxLimit: 8192
  },
  "perplexity/llama-3.1-sonar-huge-128k-online": {
    id: "perplexity/llama-3.1-sonar-huge-128k-online",
    name: "Llama 3.1 Sonar 405B Online",
    inputFee: 5.0,
    outputFee: 5.0,
    context: 127072,
    maxLimit: 8192
  },
  "openai/gpt-4-turbo": {
    id: "openai/gpt-4-turbo",
    name: "GPT-4 Turbo",
    inputFee: 10.0,
    outputFee: 30.0,
    context: 128000,
    maxLimit: 8192
  },
  "openai/gpt-4-turbo-preview": {
    id: "openai/gpt-4-turbo-preview",
    name: "GPT-4 Turbo Preview",
    inputFee: 10.0,
    outputFee: 30.0,
    context: 128000,
    maxLimit: 8192
  },
  "openai/gpt-4-1106-preview": {
    id: "openai/gpt-4-1106-preview",
    name: "GPT-4 Turbo (older v1106)",
    inputFee: 10.0,
    outputFee: 30.0,
    context: 128000,
    maxLimit: 8192
  },
  "meta-llama/llama-3.1-405b-instruct:nitro": {
    id: "meta-llama/llama-3.1-405b-instruct:nitro",
    name: "Llama 3.1 405B Instruct (nitro)",
    inputFee: 14.62,
    outputFee: 14.62,
    context: 8000,
    maxLimit: 8192
  },
  "openai/o1": {
    id: "openai/o1",
    name: "o1",
    inputFee: 15.0,
    outputFee: 60.0,
    context: 200000,
    maxLimit: 8192
  },
  "openai/o1-preview": {
    id: "openai/o1-preview",
    name: "o1-preview",
    inputFee: 15.0,
    outputFee: 60.0,
    context: 128000,
    maxLimit: 8192
  },
  "openai/o1-preview-2024-09-12": {
    id: "openai/o1-preview-2024-09-12",
    name: "o1-preview (2024-09-12)",
    inputFee: 15.0,
    outputFee: 60.0,
    context: 128000,
    maxLimit: 8192
  },
  "anthropic/claude-3-opus:beta": {
    id: "anthropic/claude-3-opus:beta",
    name: "Claude 3 Opus (self-moderated)",
    inputFee: 15.0,
    outputFee: 75.0,
    context: 200000,
    maxLimit: 8192
  },
  "anthropic/claude-3-opus": {
    id: "anthropic/claude-3-opus",
    name: "Claude 3 Opus",
    inputFee: 15.0,
    outputFee: 75.0,
    context: 200000,
    maxLimit: 8192
  },
  "openai/gpt-4": {
    id: "openai/gpt-4",
    name: "GPT-4",
    inputFee: 30.0,
    outputFee: 60.0,
    context: 8191,
    maxLimit: 8192
  },
  "openai/gpt-4-0314": {
    id: "openai/gpt-4-0314",
    name: "GPT-4 (older v0314)",
    inputFee: 30.0,
    outputFee: 60.0,
    context: 8191,
    maxLimit: 8192
  },
  "openai/gpt-4-32k": {
    id: "openai/gpt-4-32k",
    name: "GPT-4 32k",
    inputFee: 60.0,
    outputFee: 120.0,
    context: 32767,
    maxLimit: 8192
  },
  "openai/gpt-4-32k-0314": {
    id: "openai/gpt-4-32k-0314",
    name: "GPT-4 32k (older v0314)",
    inputFee: 60.0,
    outputFee: 120.0,
    context: 32767,
    maxLimit: 8192
  },
  "inflatebot/mn-mag-mell-r1": {
    id: "inflatebot/mn-mag-mell-r1",
    name: "Mag Mell R1 12B",
    inputFee: -1,
    outputFee: -1,
    context: 32000,
    maxLimit: 8192
  },
  "x-ai/grok-2": {
    id: "x-ai/grok-2",
    name: "Grok 2",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "x-ai/grok-2-mini": {
    id: "x-ai/grok-2-mini",
    name: "Grok 2 mini",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "eva-unit-01/eva-qwen-2.5-14b": {
    id: "eva-unit-01/eva-qwen-2.5-14b",
    name: "EVA Qwen2.5 14B",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "mattshumer/reflection-70b": {
    id: "mattshumer/reflection-70b",
    name: "Reflection 70B",
    inputFee: -1,
    outputFee: -1,
    context: 131072,
    maxLimit: 8192
  },
  "lynn/soliloquy-v3": {
    id: "lynn/soliloquy-v3",
    name: "Llama 3 Soliloquy 7B v3 32K",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "01-ai/yi-1.5-34b-chat": {
    id: "01-ai/yi-1.5-34b-chat",
    name: "Yi 1.5 34B Chat",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "01-ai/yi-large-turbo": {
    id: "01-ai/yi-large-turbo",
    name: "Yi Large Turbo",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "01-ai/yi-large-fc": {
    id: "01-ai/yi-large-fc",
    name: "Yi Large FC",
    inputFee: -1,
    outputFee: -1,
    context: 16384,
    maxLimit: 8192
  },
  "01-ai/yi-vision": {
    id: "01-ai/yi-vision",
    name: "Yi Vision",
    inputFee: -1,
    outputFee: -1,
    context: 16384,
    maxLimit: 8192
  },
  "cognitivecomputations/dolphin-llama-3-70b": {
    id: "cognitivecomputations/dolphin-llama-3-70b",
    name: "Dolphin Llama 3 70B 🐬",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "nousresearch/hermes-2-theta-llama-3-8b": {
    id: "nousresearch/hermes-2-theta-llama-3-8b",
    name: "Hermes 2 Theta 8B",
    inputFee: -1,
    outputFee: -1,
    context: 16384,
    maxLimit: 8192
  },
  "sao10k/l3-stheno-8b": {
    id: "sao10k/l3-stheno-8b",
    name: "Llama 3 Stheno 8B v3.3 32K",
    inputFee: -1,
    outputFee: -1,
    context: 32000,
    maxLimit: 8192
  },
  "nvidia/nemotron-4-340b-instruct": {
    id: "nvidia/nemotron-4-340b-instruct",
    name: "Nemotron-4 340B Instruct",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "microsoft/phi-3-medium-4k-instruct": {
    id: "microsoft/phi-3-medium-4k-instruct",
    name: "Phi-3 Medium 4K Instruct",
    inputFee: -1,
    outputFee: -1,
    context: 4000,
    maxLimit: 8192
  },
  "bigcode/starcoder2-15b-instruct": {
    id: "bigcode/starcoder2-15b-instruct",
    name: "StarCoder2 15B Instruct",
    inputFee: -1,
    outputFee: -1,
    context: 16384,
    maxLimit: 8192
  },
  "openchat/openchat-8b": {
    id: "openchat/openchat-8b",
    name: "OpenChat 3.6 8B",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "deepseek/deepseek-coder": {
    id: "deepseek/deepseek-coder",
    name: "DeepSeek-Coder-V2",
    inputFee: -1,
    outputFee: -1,
    context: 128000,
    maxLimit: 8192
  },
  "perplexity/llama-3-sonar-large-32k-chat": {
    id: "perplexity/llama-3-sonar-large-32k-chat",
    name: "Llama3 Sonar 70B",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "perplexity/llama-3-sonar-large-32k-online": {
    id: "perplexity/llama-3-sonar-large-32k-online",
    name: "Llama3 Sonar 70B Online",
    inputFee: -1,
    outputFee: -1,
    context: 28000,
    maxLimit: 8192
  },
  "perplexity/llama-3-sonar-small-32k-chat": {
    id: "perplexity/llama-3-sonar-small-32k-chat",
    name: "Llama3 Sonar 8B",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "perplexity/llama-3-sonar-small-32k-online": {
    id: "perplexity/llama-3-sonar-small-32k-online",
    name: "Llama3 Sonar 8B Online",
    inputFee: -1,
    outputFee: -1,
    context: 28000,
    maxLimit: 8192
  },
  "meta-llama/llama-3-8b": {
    id: "meta-llama/llama-3-8b",
    name: "Llama 3 8B (Base)",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "meta-llama/llama-3-70b": {
    id: "meta-llama/llama-3-70b",
    name: "Llama 3 70B (Base)",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "liuhaotian/llava-yi-34b": {
    id: "liuhaotian/llava-yi-34b",
    name: "LLaVA v1.6 34B",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "allenai/olmo-7b-instruct": {
    id: "allenai/olmo-7b-instruct",
    name: "OLMo 7B Instruct",
    inputFee: -1,
    outputFee: -1,
    context: 2048,
    maxLimit: 8192
  },
  "qwen/qwen-110b-chat": {
    id: "qwen/qwen-110b-chat",
    name: "Qwen 1.5 110B Chat",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "qwen/qwen-72b-chat": {
    id: "qwen/qwen-72b-chat",
    name: "Qwen 1.5 72B Chat",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "qwen/qwen-32b-chat": {
    id: "qwen/qwen-32b-chat",
    name: "Qwen 1.5 32B Chat",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "qwen/qwen-14b-chat": {
    id: "qwen/qwen-14b-chat",
    name: "Qwen 1.5 14B Chat",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "qwen/qwen-7b-chat": {
    id: "qwen/qwen-7b-chat",
    name: "Qwen 1.5 7B Chat",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "qwen/qwen-4b-chat": {
    id: "qwen/qwen-4b-chat",
    name: "Qwen 1.5 4B Chat",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "snowflake/snowflake-arctic-instruct": {
    id: "snowflake/snowflake-arctic-instruct",
    name: "Arctic Instruct",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "fireworks/firellava-13b": {
    id: "fireworks/firellava-13b",
    name: "FireLLaVA 13B",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "lynn/soliloquy-l3": {
    id: "lynn/soliloquy-l3",
    name: "Llama 3 Soliloquy 8B v2",
    inputFee: -1,
    outputFee: -1,
    context: 24576,
    maxLimit: 8192
  },
  "sao10k/fimbulvetr-11b-v2": {
    id: "sao10k/fimbulvetr-11b-v2",
    name: "Fimbulvetr 11B v2",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "huggingfaceh4/zephyr-orpo-141b-a35b": {
    id: "huggingfaceh4/zephyr-orpo-141b-a35b",
    name: "Zephyr 141B-A35B",
    inputFee: -1,
    outputFee: -1,
    context: 65536,
    maxLimit: 8192
  },
  "mistralai/mixtral-8x22b": {
    id: "mistralai/mixtral-8x22b",
    name: "Mixtral 8x22B (base)",
    inputFee: -1,
    outputFee: -1,
    context: 65536,
    maxLimit: 8192
  },
  "nousresearch/nous-hermes-2-mistral-7b-dpo": {
    id: "nousresearch/nous-hermes-2-mistral-7b-dpo",
    name: "Hermes 2 Mistral 7B DPO",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "meta-llama/codellama-70b-instruct": {
    id: "meta-llama/codellama-70b-instruct",
    name: "CodeLlama 70B Instruct",
    inputFee: -1,
    outputFee: -1,
    context: 2048,
    maxLimit: 8192
  },
  "recursal/eagle-7b": {
    id: "recursal/eagle-7b",
    name: "Eagle 7B",
    inputFee: -1,
    outputFee: -1,
    context: 10000,
    maxLimit: 8192
  },
  "01-ai/yi-34b-200k": {
    id: "01-ai/yi-34b-200k",
    name: "Yi 34B 200K",
    inputFee: -1,
    outputFee: -1,
    context: 200000,
    maxLimit: 8192
  },
  "nousresearch/nous-hermes-2-mixtral-8x7b-sft": {
    id: "nousresearch/nous-hermes-2-mixtral-8x7b-sft",
    name: "Hermes 2 Mixtral 8x7B SFT",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "austism/chronos-hermes-13b": {
    id: "austism/chronos-hermes-13b",
    name: "Chronos Hermes 13B v2",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "jondurbin/bagel-34b": {
    id: "jondurbin/bagel-34b",
    name: "Bagel 34B v0.2",
    inputFee: -1,
    outputFee: -1,
    context: 200000,
    maxLimit: 8192
  },
  "neversleep/noromaid-mixtral-8x7b-instruct": {
    id: "neversleep/noromaid-mixtral-8x7b-instruct",
    name: "Noromaid Mixtral 8x7B Instruct",
    inputFee: -1,
    outputFee: -1,
    context: 8000,
    maxLimit: 8192
  },
  "nousresearch/nous-hermes-yi-34b": {
    id: "nousresearch/nous-hermes-yi-34b",
    name: "Hermes 2 Yi 34B",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "mistralai/mistral-7b-instruct-v0.2": {
    id: "mistralai/mistral-7b-instruct-v0.2",
    name: "Mistral 7B Instruct v0.2",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "rwkv/rwkv-5-world-3b": {
    id: "rwkv/rwkv-5-world-3b",
    name: "RWKV v5 World 3B",
    inputFee: -1,
    outputFee: -1,
    context: 10000,
    maxLimit: 8192
  },
  "recursal/rwkv-5-3b-ai-town": {
    id: "recursal/rwkv-5-3b-ai-town",
    name: "RWKV v5 3B AI Town",
    inputFee: -1,
    outputFee: -1,
    context: 10000,
    maxLimit: 8192
  },
  "togethercomputer/stripedhyena-nous-7b": {
    id: "togethercomputer/stripedhyena-nous-7b",
    name: "StripedHyena Nous 7B",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "togethercomputer/stripedhyena-hessian-7b": {
    id: "togethercomputer/stripedhyena-hessian-7b",
    name: "StripedHyena Hessian 7B (base)",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "koboldai/psyfighter-13b-2": {
    id: "koboldai/psyfighter-13b-2",
    name: "Psyfighter v2 13B",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "01-ai/yi-34b-chat": {
    id: "01-ai/yi-34b-chat",
    name: "Yi 34B Chat",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "01-ai/yi-34b": {
    id: "01-ai/yi-34b",
    name: "Yi 34B (base)",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "01-ai/yi-6b": {
    id: "01-ai/yi-6b",
    name: "Yi 6B (base)",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "gryphe/mythomist-7b": {
    id: "gryphe/mythomist-7b",
    name: "MythoMist 7B",
    inputFee: -1,
    outputFee: -1,
    context: 32768,
    maxLimit: 8192
  },
  "nousresearch/nous-hermes-2-vision-7b": {
    id: "nousresearch/nous-hermes-2-vision-7b",
    name: "Hermes 2 Vision 7B (alpha)",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "openrouter/cinematika-7b": {
    id: "openrouter/cinematika-7b",
    name: "Cinematika 7B (alpha)",
    inputFee: -1,
    outputFee: -1,
    context: 8000,
    maxLimit: 8192
  },
  "nousresearch/nous-capybara-7b": {
    id: "nousresearch/nous-capybara-7b",
    name: "Capybara 7B",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "jebcarter/psyfighter-13b": {
    id: "jebcarter/psyfighter-13b",
    name: "Psyfighter 13B",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "intel/neural-chat-7b": {
    id: "intel/neural-chat-7b",
    name: "Neural Chat 7B v3.1",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "anthropic/claude-instant-1.1": {
    id: "anthropic/claude-instant-1.1",
    name: "Claude Instant v1.1",
    inputFee: -1,
    outputFee: -1,
    context: 100000,
    maxLimit: 8192
  },
  "liuhaotian/llava-13b": {
    id: "liuhaotian/llava-13b",
    name: "LLaVA 13B",
    inputFee: -1,
    outputFee: -1,
    context: 2048,
    maxLimit: 8192
  },
  "nousresearch/nous-capybara-34b": {
    id: "nousresearch/nous-capybara-34b",
    name: "Capybara 34B",
    inputFee: -1,
    outputFee: -1,
    context: 200000,
    maxLimit: 8192
  },
  "openai/gpt-4-vision-preview": {
    id: "openai/gpt-4-vision-preview",
    name: "GPT-4 Vision",
    inputFee: -1,
    outputFee: -1,
    context: 128000,
    maxLimit: 8192
  },
  "lizpreciatior/lzlv-70b-fp16-hf": {
    id: "lizpreciatior/lzlv-70b-fp16-hf",
    name: "lzlv 70B",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "openrouter/auto": {
    id: "openrouter/auto",
    name: "Auto Router",
    inputFee: -1,
    outputFee: -1,
    context: 2000000,
    maxLimit: 8192
  },
  "teknium/openhermes-2-mistral-7b": {
    id: "teknium/openhermes-2-mistral-7b",
    name: "OpenHermes 2 Mistral 7B",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "open-orca/mistral-7b-openorca": {
    id: "open-orca/mistral-7b-openorca",
    name: "Mistral OpenOrca 7B",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "nousresearch/nous-hermes-llama2-70b": {
    id: "nousresearch/nous-hermes-llama2-70b",
    name: "Hermes 70B",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "migtissera/synthia-70b": {
    id: "migtissera/synthia-70b",
    name: "Synthia 70B",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "meta-llama/codellama-34b-instruct": {
    id: "meta-llama/codellama-34b-instruct",
    name: "CodeLlama 34B Instruct",
    inputFee: -1,
    outputFee: -1,
    context: 8192,
    maxLimit: 8192
  },
  "phind/phind-codellama-34b": {
    id: "phind/phind-codellama-34b",
    name: "CodeLlama 34B v2",
    inputFee: -1,
    outputFee: -1,
    context: 4096,
    maxLimit: 8192
  },
  "anthropic/claude-instant-1": {
    id: "anthropic/claude-instant-1",
    name: "Claude Instant v1",
    inputFee: -1,
    outputFee: -1,
    context: 100000,
    maxLimit: 8192
  },
  "anthropic/claude-1": {
    id: "anthropic/claude-1",
    name: "Claude v1",
    inputFee: -1,
    outputFee: -1,
    context: 100000,
    maxLimit: 8192
  },
  "anthropic/claude-1.2": {
    id: "anthropic/claude-1.2",
    name: "Claude v1.2",
    inputFee: -1,
    outputFee: -1,
    context: 100000,
    maxLimit: 8192
  },
  "anthropic/claude-instant-1.0": {
    id: "anthropic/claude-instant-1.0",
    name: "Claude Instant v1.0",
    inputFee: -1,
    outputFee: -1,
    context: 100000,
    maxLimit: 8192
  },
  "openai/shap-e": {
    id: "openai/shap-e",
    name: "Shap-e",
    inputFee: -1,
    outputFee: -1,
    context: 2048,
    maxLimit: 8192
  },
  "openai/gpt-3.5-turbo-0301": {
    id: "openai/gpt-3.5-turbo-0301",
    name: "GPT-3.5 Turbo (older v0301)",
    inputFee: -1,
    outputFee: -1,
    context: 4095,
    maxLimit: 8192
  },
};
