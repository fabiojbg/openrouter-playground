import type { NextApiRequest, NextApiResponse } from "next";

interface TogetherAIModel {
  id: string;
  object: string;
  created: number;
  type: string;
  running: boolean;
  display_name: string;
  organization: string;
  link: string;
  license: string;
  context_length?: number;
  config: {
    chat_template: string | null;
    stop: string[];
    bos_token: string | null;
    eos_token: string | null;
  };
  pricing: {
    hourly: number;
    input: number;
    output: number;
    base: number;
    finetune: number;
  };
}

interface OpenAIModel { // Keep OpenAIModel interface as it's used in OpenAI.constants.ts
  id: string;
  name: string;
  inputFee: number;
  outputFee: number;
  context: number;
  maxLimit: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = (req.headers["authorization"] as string)?.split(" ")[1];
  if (!apiKey) {
    return res.status(401).json({ error: "Missing token" });
  }

  try {
    const response = await fetch("https://api.together.xyz/v1/models", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }

    const data: TogetherAIModel[] = await response.json();
    const togetherAiModels: OpenAIModel[] = data // Rename chatModels to togetherAiModels
      .map((model) => ({
        id: model.id,
        name: model.display_name,
        inputFee: model.pricing.input,
        outputFee: model.pricing.output,
        context: model.context_length || 4096, // Default context length
        maxLimit: model.context_length || 4096, // Default max limit
      }))
      .sort((a, b) => a.id.localeCompare(b.id));

    return res.status(200).json({
      models: data.map(model => model.id), // Keep returning all model ids for now
      togetherAiModels, // Return all transformed models
    });
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
}
