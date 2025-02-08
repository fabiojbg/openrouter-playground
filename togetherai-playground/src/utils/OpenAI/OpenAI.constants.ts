import { OpenAIModel } from "./OpenAI.types";

export let OpenAIChatModels: Record<string, OpenAIModel> = {};
export const modelsLoaded = (async () => { // Export a promise
  try {
    const response = await fetch("/api/models");
    if (!response.ok) {
      console.error("Failed to fetch models from /api/models");
      return;
    }
    const data = await response.json();
    const models = data.togetherAiModels as OpenAIModel[]; // Use togetherAiModels from API response
    
    OpenAIChatModels = models.reduce((acc: Record<string, OpenAIModel>, model: OpenAIModel) => {
      acc[model.id] = model;
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching models:", error);
  }
})();
