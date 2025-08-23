import type { NextApiRequest, NextApiResponse } from "next";
import { defaultConfig, getOpenAICompletion } from "@/utils/OpenAI";
import { OpenAIRequest, OpenAIChatMessage } from "@/utils/OpenAI";

export const config = {
  runtime: "edge",
};

interface Response {
  content?: string;
  error?: string;
}

export default async function handler(req: Request) {
  try {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return new Response("Missing API token", { status: 401 });
    }

    const {
      model,
      max_tokens,
      temperature,
      top_p,
      frequency_penalty,
      presence_penalty,
      messages,
      startTime, // Capture startTime from the request body
    } = await req.json().catch(() => ({}));

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid or missing messages array", { status: 400 });
    }

    if (!model) {
      return new Response("Missing model parameter", { status: 400 });
    }

    const config = {
      model,
      max_tokens: max_tokens ?? defaultConfig.max_tokens,
      temperature: temperature ?? defaultConfig.temperature,
      top_p: top_p ?? defaultConfig.top_p,
      frequency_penalty: frequency_penalty ?? defaultConfig.frequency_penalty,
      presence_penalty: presence_penalty ?? defaultConfig.presence_penalty,
      stream: true,
      n: 1,
    };

    // Handle reasoning models (o1 series)
    const isReasoningModel = typeof model === 'string' && model.startsWith('o1');
  
  // Convert system messages to assistant role for reasoning models
  const processedMessages = isReasoningModel 
    ? messages.map((m: OpenAIChatMessage) => ({
        ...m,
        role: m.role === 'system' ? 'assistant' : m.role
      }))
    : messages;

  // Omit unsupported parameters for reasoning models
  const payload: OpenAIRequest = isReasoningModel
    ? {
        model,
        messages: processedMessages,
        max_completion_tokens: config.max_tokens,
        stream: true,
        n: 1
      }
    : {
        ...config,
        messages: processedMessages
      };

    try {
      const stream = await getOpenAICompletion(token, payload, startTime); // Pass startTime to the function
      return new Response(stream);
    } catch (e: any) {
      console.error('OpenAI API Error:', e);
      const errorMessage = e.message || "Error fetching response from OpenAI API";
      const statusCode = e.status || 500;
      
      return new Response(
        JSON.stringify({
          error: errorMessage,
          code: statusCode
        }), 
        {
          status: statusCode,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
  } catch (e: any) {
    console.error('Request Processing Error:', e);
    return new Response(
      JSON.stringify({
        error: "Failed to process request",
        details: e.message
      }), 
      {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
