import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "gpt-4o": {
    id: "gpt-4o",
    name: "GPT-4 Omni",
    maxLimit: 16384,
  },
  "gpt-4": {
    id: "gpt-4",
    name: "GPT-4",
    maxLimit: 8192,
  },
  "o1-mini": {
    id: "o1-mini",
    name: "O1 Mini",
    maxLimit: 65536,
  },
  "o1-preview": {
    id: "o1-preview",
    name: "O1 Preview",
    maxLimit: 32768,
  },
  "o1": {
    id: "o1",
    name: "O1",
    maxLimit: 100000,
  },
  "gpt-4o-mini": {
    id: "gpt-4o-mini",
    name: "GPT-4 Omni Mini",
    maxLimit: 16384,
  },
  "gpt-4-0125-preview": {
    id: "gpt-4-0125-preview",
    name: "GPT-4 Turbo Preview",
    maxLimit: 8192,
  },
  "gpt-4-1106-preview": {
    id: "gpt-4-1106-preview",
    name: "GPT-4 (11/06)",
    maxLimit: 8192,
  },
  "gpt-4-0314": {
    id: "gpt-4-0314",
    name: "GPT-4 (03/14)",
    maxLimit: 8192,
  },
  "gpt-4-32k": {
    id: "gpt-4-32k",
    name: "GPT-4 (32k)",
    maxLimit: 32768,
  },
  "gpt-4-32k-0314": {
    id: "gpt-4-32k-0314",
    name: "GPT-4 (32k, 03/14)",
    maxLimit: 32768,
  },
  "gpt-3.5-turbo": {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    maxLimit: 4096,
  },
  "gpt-3.5-turbo-0301": {
    id: "gpt-3.5-turbo-0301",
    name: "GPT-3.5 Turbo (03/01)",
    maxLimit: 4096,
  },
  "gpt-3.5-turbo-0613": {
    id: "gpt-3.5-turbo-0613",
    name: "GPT-3.5 Turbo (06/13)",
    maxLimit: 4096,
  },
  "gpt-3.5-turbo-16k": {
    id: "gpt-3.5-turbo-16k",
    name: "GPT-3.5 Turbo (16k)",
    maxLimit: 16384,
  },
  "gpt-3.5-turbo-16k-0613": {
    id: "gpt-3.5-turbo-16k-0613",
    name: "GPT-3.5 Turbo (16k, 06/13) ",
    maxLimit: 16384,
  },
};
