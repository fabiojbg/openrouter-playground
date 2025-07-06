import { OpenAIModel } from "@/utils/OpenAI"; // Removed OpenAIChatModels
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
    if (!token) {
      setModels([]); // Set to empty array if no token
      setLoadingModels(false); // Ensure loading is false
      return;
    }

    const fetchModels = async () => {
      setLoadingModels(true);
      try {
        const response = await fetch("/api/models", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          // Handle HTTP errors, e.g., 401 Unauthorized if token is invalid
          console.error("Failed to fetch models:", response.status, await response.text());
          setModels([]);
        } else {
          const data = await response.json();
          setModels(data.openRouterModels || []);
        }
      } catch (error) {
        console.error("Error fetching models:", error);
        setModels([]); // Set to empty array on error
      } finally {
        setLoadingModels(false);
      }
    };

    fetchModels();
  }, [token]);

  return { models, loadingModels };
}
