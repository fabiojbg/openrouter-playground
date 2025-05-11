import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { OpenAIModel } from "@/utils/OpenAI/OpenAI.types"; // Import OpenAIModel type

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = (req.headers["authorization"] as string)?.split(" ")[1];
  if (!apiKey) {
    return res.status(401).json({ error: "Missing token" });
  }

  const openAi = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: apiKey,
  });

  try {
    const response = await openAi.models.list();
    const fetchedModels = response.data;

    // Transform the fetched models to the OpenAIModel structure
    const chatModels: OpenAIModel[] = fetchedModels
      .map((model: any) => { // Use 'any' for now, or define a more specific type for OpenRouter's model structure
        // Safely access nested properties and provide defaults
        // Prices from OpenRouter are per token, UI displays per 1M tokens.
        const scaleFactor = 1000000;
        const promptPrice = (parseFloat(model.pricing?.prompt ?? "0")) * scaleFactor;
        const completionPrice = (parseFloat(model.pricing?.completion ?? "0")) * scaleFactor;
        const contextLength = model.context_length ?? 0;
        const maxCompletionTokens = model.top_provider?.max_completion_tokens ?? 0;

        // Filter out models that don't have an id or name, or essential details
        if (!model.id || !model.name) {
          return null;
        }
        
        return {
          id: model.id,
          name: model.name,
          maxLimit: maxCompletionTokens,
          inputFee: promptPrice,
          outputFee: completionPrice,
          context: contextLength,
        };
      })
      .filter((model): model is OpenAIModel => model !== null) // Remove nulls and type guard
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort by name for better UX

    return res.status(200).json({
      // models: fetchedModels.map(m => m.id), // Optionally, still return all model IDs if needed elsewhere
      chatModels,
    });
  } catch (e: any) {
    let errorMessage = "An unexpected error occurred.";
    let statusCode = 500;

    if (e.response && e.response.data && e.response.data.error && e.response.data.error.message) {
      errorMessage = e.response.data.error.message;
      statusCode = e.response.status || 500;
    } else if (e.response && e.response.data) {
       // Handle cases where error structure might be different
      errorMessage = JSON.stringify(e.response.data);
      statusCode = e.response.status || 500;
    } else if (e.message) {
      errorMessage = e.message;
    }
    
    console.error("Error fetching models:", errorMessage, "Status Code:", statusCode, "Full Error:", e);
    return res.status(statusCode).json({ error: errorMessage });
  }
}
