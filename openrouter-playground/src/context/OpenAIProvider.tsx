import {
  clearHistory,
  Conversation,
  getHistory,
  storeConversation,
  History,
  deleteConversationFromHistory,
  updateConversation,
} from "@/utils/History";
import {
  defaultConfig,
  OpenAIChatMessage,
  OpenAIConfig,
  OpenAISystemMessage,
  OpenAIModel, // Added OpenAIModel, removed OpenAIChatModels
} from "@/utils/OpenAI";
import React, { PropsWithChildren, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthProvider";
import useModels from "@/components/hooks/useModels"; // Added useModels import

const CHAT_ROUTE = "/";

const defaultContext = {
  systemMessage: {
    role: "system",
    content: "You are a helpful AI chatbot.",
  } as OpenAISystemMessage,
  messages: [] as OpenAIChatMessage[],
  config: defaultConfig as OpenAIConfig,
  updateSystemMessage: (content: string) => {},
  addMessage: () => {},
  removeMessage: (id: number) => {},
  conversationName: "",
  conversationId: "",
  deleteConversation: () => {},
  updateConversationName: () => {},
  conversations: {} as History,
  clearConversations: () => {},
  clearConversation: () => {},
  loadConversation: (id: string, conversation: Conversation) => {},
  toggleMessageRole: (id: number) => {},
  updateMessageContent: (id: number, content: string) => {},
  removeLastMessage: () => {}, // Added removeLastMessage
  updateConfig: (newConfig: Partial<OpenAIConfig>) => {},
  submit: () => {},
  loading: true,
  error: "",
  models: [] as OpenAIModel[], // Added models
  loadingModels: false, // Added loadingModels
  reasoningTime: 0, // Added reasoningTime
};

const OpenAIContext = React.createContext<{
  systemMessage: OpenAISystemMessage;
  messages: OpenAIChatMessage[];
  config: OpenAIConfig;
  updateSystemMessage: (content: string) => void;
  addMessage: (
    content?: string,
    submit?: boolean,
    role?: "user" | "assistant"
  ) => void;
  removeMessage: (id: number) => void;
  conversationName: string;
  conversationId: string;
  deleteConversation: (id: string) => void;
  updateConversationName: (id: string, name: string) => void;
  conversations: History;
  clearConversation: () => void;
  clearConversations: () => void;
  loadConversation: (id: string, conversation: Conversation) => void;
  toggleMessageRole: (id: number) => void;
  updateMessageContent: (id: number, content: string, isReasoning?: boolean, time?: number, usage?: any) => void;
  removeLastMessage: () => void; // Added removeLastMessage
  updateConfig: (newConfig: Partial<OpenAIConfig>) => void;
  submit: () => void;
  loading: boolean;
  error: string;
  models: OpenAIModel[]; // Added models
  loadingModels: boolean; // Added loadingModels
  reasoningTime: number; // Added reasoningTime
}>(defaultContext);

export default function OpenAIProvider({ children }: PropsWithChildren) {
  const { token } = useAuth();
  const { models: availableModels, loadingModels } = useModels(); // Use the hook
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  // Conversation state
  const [conversations, setConversations] = React.useState<History>(
    {} as History
  );
  const [conversationId, setConversationId] = React.useState<string>("");
  const [conversationName, setConversationName] = React.useState("");
  const [systemMessage, setSystemMessage] = React.useState<OpenAISystemMessage>(
    defaultContext.systemMessage
  );
  const [config, setConfig] = React.useState<OpenAIConfig>(defaultConfig);
  const [messages, setMessages] = React.useState<OpenAIChatMessage[]>([]);
  const [reasoningTime, setReasoningTime] = React.useState(0); // New state for reasoning time

  // Load conversation from local storage
  useEffect(() => {
    setConversations(getHistory());
  }, []);

  const updateSystemMessage = (content: string) => {
    setSystemMessage({
      role: "system",
      content,
    });
  };

  const removeMessage = (id: number) => {
    setMessages((prev) => {
      return [...prev.filter((message) => message.id !== id)];
    });
  };

  const toggleMessageRole = (id: number) => {
    setMessages((prev) => {
      const index = prev.findIndex((message) => message.id === id);
      if (index === -1) return prev;
      const message = prev[index];
      return [
        ...prev.slice(0, index),
        {
          ...message,
          role: message.role === "user" ? "assistant" : "user",
        },
        ...prev.slice(index + 1),
      ];
    });
  };

  const updateConfig = (newConfig: Partial<OpenAIConfig>) => {
    setConfig((prev) => {
      const updatedConfig = { ...prev, ...newConfig };
      // If model changes set max tokens to half of the model's max tokens
      if (newConfig.model && newConfig.model !== prev.model) {
        const selectedModel = availableModels.find(m => m.id === newConfig.model);
        if (selectedModel) {
          updatedConfig.max_tokens = Math.floor(selectedModel.maxLimit / 2);
        } else {
          // Fallback or error if model not found
          console.warn(`Model ${newConfig.model} not found in available models. Max tokens not updated.`);
          // Retain previous max_tokens or set a default if necessary
          // updatedConfig.max_tokens = prev.max_tokens; // Or some other default
        }
      }
      return updatedConfig;
    });
  };

  // Ensure default config model is updated if availableModels changes and defaultConfig.model is not in it
  // Or if the current config.model is no longer in availableModels
  useEffect(() => {
    if (availableModels.length > 0 && !loadingModels) {
      const currentModelExists = availableModels.some(m => m.id === config.model);
      if (!currentModelExists) {
        // If current model doesn't exist (e.g. after API key change, or initial load)
        // set to the first available model or a preferred default if any
        const newDefaultModel = availableModels.find(m => m.id === defaultConfig.model) || availableModels[0];
        if (newDefaultModel) {
          setConfig(prev => ({
            ...prev,
            model: newDefaultModel.id,
            max_tokens: Math.floor(newDefaultModel.maxLimit / 2),
          }));
        }
      } else {
        // If current model exists, ensure its max_tokens is correctly set based on its current maxLimit
        // This handles cases where model details might update or were not set initially
        const currentModelDetails = availableModels.find(m => m.id === config.model);
        if (currentModelDetails && (!config.max_tokens || config.max_tokens !== Math.floor(currentModelDetails.maxLimit / 2)) ) {
           setConfig(prev => ({
            ...prev,
            max_tokens: Math.floor(currentModelDetails.maxLimit / 2),
          }));
        }
      }
    }
  }, [availableModels, config.model, loadingModels, config.max_tokens]); // Added config.max_tokens to dependencies


  const updateMessageContent = (id: number, content: string, isReasoning: boolean = false, time?: number, usage?: any) => {
    setMessages((prev) => {
      const index = prev.findIndex((message) => message.id === id);
      if (index === -1) return prev;
      const message = prev[index];
      return [
        ...prev.slice(0, index),
        {
          ...message,
          content: isReasoning ? message.content : content,
          reasoning: isReasoning ? content : message.reasoning,
          reasoningTime: time !== undefined ? time : message.reasoningTime, // Update reasoningTime
          isReasoning: isReasoning || message.isReasoning, // Set isReasoning
          usage: usage || message.usage, // Update usage
        },
        ...prev.slice(index + 1),
      ];
    });
  };

  const handleStoreConversation = useCallback(() => {
    if (messages.length === 0) return;

    const conversation = {
      name: conversationName,
      systemMessage,
      messages,
      config,
      lastMessage: Date.now(),
    } as Conversation;

    let id = storeConversation(conversationId, conversation);
    setConversationId(id);
    setConversations((prev) => ({ ...prev, [id]: conversation }));

    if (router.pathname === CHAT_ROUTE) router.push(`/chat/${id}`);
  }, [conversationId, messages]);

  useEffect(() => {
    handleStoreConversation();
  }, [messages, systemMessage, config]);

  const loadConversation = (id: string, conversation: Conversation) => {
    setConversationId(id);

    const { systemMessage, messages, config, name } = conversation;

    setSystemMessage(systemMessage);
    setMessages(messages);
    updateConfig(config);
    setConversationName(name);
  };

  const clearConversations = useCallback(() => {
    clearHistory();

    setMessages([]);
    setConversationId("");
    setConversations({});

    router.push("/");
  }, []);

  const clearConversation = () => {
    setMessages([]);
    setSystemMessage(defaultContext.systemMessage);
    setConversationId("");
  };

  const deleteConversation = (id: string) => {
    deleteConversationFromHistory(id);
    setConversations((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });

    if (id === conversationId) clearConversation();
  };

  const removeLastMessage = useCallback(() => {
    setMessages((prev) => {
      const newMessages = [...prev];
      // Remove the last assistant message (content and reasoning)
      if (newMessages.length > 0 && newMessages[newMessages.length - 1].role === "assistant") {
        newMessages.pop();
      }
      // Remove the last user message
      if (newMessages.length > 0 && newMessages[newMessages.length - 1].role === "user") {
        newMessages.pop();
      }
      return newMessages;
    });
  }, []);

  const updateConversationName = (id: string, name: string) => {
    setConversations((prev) => {
      const conversation = prev[id];
      if (!conversation) return prev;
      return {
        ...prev,
        [id]: {
          ...conversation,
          name,
        },
      };
    });

    if (id === conversationId) setConversationName(name);

    updateConversation(id, { name });
  };

  const submit = useCallback(async (messages_: OpenAIChatMessage[] = []) => {
    console.count("Submit function calls");
    console.log("Submit function called. Loading state:", loading);
    if (loading) return;
    setLoading(true);
    setReasoningTime(0); // Reset reasoning time at the start of a new submission

    const startTime = Date.now(); // Start timer using Date.now() for consistency

    try {
      const decoder = new TextDecoder();
      messages_ = messages_.length ? messages_ : messages;

      const payload = {
        ...config,
        messages: [systemMessage, ...messages_].map(({ role, content }) => ({
          role,
          content,
        })),
        reasoning: config.reasoning, // Pass reasoning config
      };
      console.log("Sending request to API with payload:", payload);

      const response = await fetch("/api/completion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...payload, startTime: startTime }), // Pass startTime to the API route
      });

      const { body, ok } = response;
      console.log("API response:", response);

      if (!body) {
        throw new Error("No response body received from the API");
      }

      const reader = body.getReader();

      if (!ok) {
        const { value } = await reader.read();
        const chunkValue = decoder.decode(value);
        const { error } = JSON.parse(chunkValue);
        throw new Error(
          error?.message || "Failed to fetch response, check your API key and try again."
        );
      }

      const messageId = Date.now();
      let accumulatedContent = "";
      let accumulatedReasoning = "";
      let buffer = ""; // Buffer to accumulate partial JSON chunks
      let reasoningStartTime: number | null = null; // New: Track reasoning start time
      let reasoningEndTime: number | null = null; // New: Track reasoning end time
      let finalReasoningTime: number | null = null; // New: Store the calculated reasoning duration
      
      setMessages((prev) => [...prev, {
        id: messageId,
        role: "assistant",
        content: "",
        reasoning: "",
        reasoningTime: 0, // Initialize reasoning time for the new message
        isReasoning: false, // Initialize isReasoning
      } as OpenAIChatMessage]);

      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          buffer += decoder.decode(value);
          const lines = buffer.split('\n');
          buffer = lines.pop() || ""; // Keep the last, potentially incomplete, line in the buffer

          for (const line of lines) {
            if (line.trim() === "") continue; // Skip empty lines
            try {
              const parsedChunk = JSON.parse(line);
              if (parsedChunk.type === "reasoning") {
                if (reasoningStartTime === null) { // First reasoning chunk
                  reasoningStartTime = Date.now();
                }
                accumulatedReasoning += parsedChunk.value;
                const elapsed = (Date.now() - reasoningStartTime) / 1000; // Calculate elapsed time from reasoning start
                setReasoningTime(elapsed); // Update global reasoning time state for real-time display
                updateMessageContent(messageId, accumulatedReasoning, true, elapsed); // Update message with elapsed reasoning time
              } else if (parsedChunk.type === "content") {
                if (reasoningStartTime !== null && reasoningEndTime === null) { // First content chunk after reasoning
                  reasoningEndTime = Date.now();
                  finalReasoningTime = (reasoningEndTime - reasoningStartTime) / 1000; // Calculate final reasoning duration
                  setReasoningTime(finalReasoningTime); // Update global reasoning time state with final duration
                  // Update the message with the calculated final reasoning time
                  updateMessageContent(messageId, accumulatedContent, false, finalReasoningTime ?? undefined);
                }
                accumulatedContent += parsedChunk.value;
                updateMessageContent(messageId, accumulatedContent);
              } else if (parsedChunk.type === "usage") {
                // If reasoning ended but no content started (e.g., only reasoning response)
                if (reasoningStartTime !== null && reasoningEndTime === null) {
                  reasoningEndTime = Date.now();
                  finalReasoningTime = (reasoningEndTime - reasoningStartTime) / 1000;
                  setReasoningTime(finalReasoningTime); // Update global reasoning time state
                }
                // Pass the calculated finalReasoningTime along with usage
                updateMessageContent(messageId, accumulatedContent, false, finalReasoningTime ?? undefined, parsedChunk.value);
              }
            } catch (e) {
              console.error("Error parsing line from stream:", e, line);
            }
          }
        }
      }
      // Final update for reasoningTime if reasoning occurred but no content or usage chunk followed immediately
      if (reasoningStartTime !== null && finalReasoningTime === null) {
        finalReasoningTime = (Date.now() - reasoningStartTime) / 1000;
        setReasoningTime(finalReasoningTime); // Update global reasoning time state
        updateMessageContent(messageId, accumulatedContent, false, finalReasoningTime ?? undefined);
      }
    } catch (error: any) {
      console.error("Error in submit:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "assistant",
          content: error.message || "An error occurred while processing your request",
        },
      ]);
      setError(error.message || "An error occurred while processing your request");
    } finally {
      setLoading(false);
    }
  }, [config, messages, systemMessage, loading, token]);

  const addMessage = useCallback(
    (
      content: string = "",
      submit_: boolean = false,
      role: "user" | "assistant" = "user"
    ) => {
      setMessages((prev) => {
        // Generate a unique timestamp-based ID
        const uniqueId = Date.now() + prev.length;
        const messages = [
          ...prev,
          {
            id: uniqueId,
            role,
            content: content || "",
          } as OpenAIChatMessage,
        ];
        submit_ && submit(messages);
        return messages;
      });
    },
    [submit]
  );

  const value = React.useMemo(
    () => ({
      systemMessage,
      messages,
      config,
      loading,
      updateSystemMessage,
      addMessage,
      removeMessage,
      conversationId,
      conversationName,
      updateConversationName,
      deleteConversation,
      loadConversation,
      clearConversation,
      conversations,
      clearConversations,
      toggleMessageRole,
      updateMessageContent,
      removeLastMessage, // Added removeLastMessage
      updateConfig,
      submit,
      error,
      models: availableModels, // Added models
      loadingModels, // Added loadingModels
      reasoningTime, // Added reasoningTime
    }),
    [
      systemMessage,
      messages,
      config,
      loading,
      addMessage,
      submit,
      conversationId,
      conversations,
      clearConversations,
      error,
      availableModels, // Added to dependency array
      loadingModels, // Added to dependency array
      removeLastMessage, // Added to dependency array
      reasoningTime, // Added to dependency array
    ]
  );

  return (
    <OpenAIContext.Provider value={value}>{children}</OpenAIContext.Provider>
  );
}

export const useOpenAI = () => React.useContext(OpenAIContext);
