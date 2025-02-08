import { OpenAIModel } from "@/utils/OpenAI/OpenAI.types"; // Correct import path for OpenAIModel
import { OpenAIChatModels, modelsLoaded } from "@/utils/OpenAI/OpenAI.constants"; // Correct import path for OpenAIChatModels and modelsLoaded
import React from "react";
import { useAuth } from "@/context/AuthProvider";

/*
  Simple hook to fetch models from the API
*/
export default function useModels() {
  const { token } = useAuth();
  const [models, setModels] = React.useState<OpenAIModel[]>([]);
  const [loadingModels, setLoadingModels] = React.useState(false);

  React.useEffect(() => {
    const fetchModels = async () => {
      setLoadingModels(true);
      if (!token) {
        await modelsLoaded; // Wait for models to load
        setModels(Object.values(OpenAIChatModels));
        setLoadingModels(false);
        return;
      }

      const fetchedModels = await fetch("/api/models", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => res.togetherAiModels); // Use togetherAiModels from API response

      setModels(fetchedModels || []);
      setLoadingModels(false);
    };

    fetchModels();
  }, [token]);

  return { models, loadingModels };
}
