import { OpenAIModel } from "./OpenAI.types";
import secureLocalStorage from "react-secure-storage";

export let OpenAIChatModels: Record<string, OpenAIModel> = {};
export const modelsLoaded = (async () => { // Export a promise
  try {
    const token = secureLocalStorage.getItem("open-ai-token") as string;
    const response = await fetch("/api/models", {
      headers: {
        "Authorization": token ? `Bearer ${token}` : ""
      }
    });
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
