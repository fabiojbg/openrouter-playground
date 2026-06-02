import type { NextApiRequest, NextApiResponse } from "next";

interface OpenRouterModelResponse {
  data: Array<{
    id: string;
    name: string;
    description: string;
    pricing: {
      prompt: string; // e.g., "0.000001"
      completion: string; // e.g., "0.000001"
      unit: string; // e.g., "1M tokens"
    };
    context_length: number;
    top_provider?: {
      context_length?: number;
      max_completion_tokens?: number;
      is_moderated?: boolean;
    };
  }>;
}

import { OpenAIModel } from "../../utils/OpenAI/OpenAI.types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = (req.headers["authorization"] as string)?.split(" ")[1];
  if (!apiKey) {
    return res.status(401).json({ error: "Missing token" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/models", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/fabiojbg", // Required by OpenRouter
        "X-Title": "OpenRouter Playground", // Optional but recommended
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data: OpenRouterModelResponse = await response.json();
    const openRouterModels: OpenAIModel[] = data.data
      .map((model) => {
        const maxCompletion = model.top_provider?.max_completion_tokens;
        const maxLimit = (typeof maxCompletion === "number" && maxCompletion > 0)
          ? maxCompletion
          : model.context_length;

        return {
          id: model.id,
          name: model.name,
          inputFee: model.pricing.prompt,
          outputFee: model.pricing.completion,
          context: model.context_length,
          maxLimit: maxLimit,
        };
      })
      .sort((a, b) => a.id.localeCompare(b.id));

    return res.status(200).json({
      models: data.data.map(model => model.id),
      openRouterModels,
    });
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
}
