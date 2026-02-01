import Link from "next/link";
import React, { useState } from "react";
import { MdAdd, MdDeleteOutline, MdBuild } from "react-icons/md";
import { useOpenAI } from "@/context/OpenAIProvider";
// Removed: import { OpenAIChatModels } from "@/utils/OpenAI";
import Github from "../../misc/Github";
import ThemeButton from "./buttons/ThemeButton";
import ButtonContainer from "./buttons/ButtonContainer";
import Conversations from "./conversation/Conversations";
import ApiKey from "./buttons/ApiKey";
import CurrentModel from './buttons/CurrentModel';
import Slider from "../../input/Slider";

type Props = {
  width?: number;
};

export default function ChatSidebar({ width }: Props) {
  const { clearConversations, config, models, loadingModels, chatWidth, updateChatWidth } = useOpenAI();
  const [searchTerm, setSearchTerm] = useState("");

  const currentModelDetails = React.useMemo(() => {
    if (!config?.model || models.length === 0) return null;
    return models.find(m => m.id === config.model);
  }, [config?.model, models]);

  const formatPrice = (price: string | undefined) => {
    if (typeof price === 'undefined') return '0.00';
    const numericPrice = parseFloat(price) * 1_000_000; // Multiply by 1 million
    return numericPrice.toLocaleString('en-US', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    });
  };

  return (
    <div 
      className="dark h-full flex-col bg-gray-900 text-primary flex w-full"
    >
      <div className="flex h-full flex-col items-stretch p-2 overflow-hidden">
        <Link
          href="/"
          className="flex items-center gap-3 rounded border border-white/20 p-4 transition-colors hover:bg-gray-500/10"
        >
          <MdAdd />
          New chat
        </Link>
        <input
          type="text"
          placeholder="Search chats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="my-2 rounded border border-white/20 bg-transparent p-2 text-primary placeholder:text-gray-400 focus:border-white/40 focus:outline-none"
        />

        <Conversations searchTerm={searchTerm} />

        <div className="flex flex-col gap-y-2 border-y border-white/10 py-2 model-panel" >
          <div className="flex flex-col border-b border-white/10 gap-y-1">
            <CurrentModel />
            <div className="text-sm text-gray-300 space-y-1 px-4 pb-2">
              {loadingModels ? (
                <div>Loading model details...</div>
              ) : (
                <>
                  <div>Context Length: {currentModelDetails?.context?.toLocaleString('en-US') || 'N/A'}</div>
                  <div>
                    Input ($/1M tokens):{" $ "}
                    {formatPrice(currentModelDetails?.inputFee)}
                  </div>
                  <div>
                    Output ($/1M tokens):{" $"}
                    {formatPrice(currentModelDetails?.outputFee)}
                  </div>
                </>
              )}
            </div>
            <ApiKey />
          </div>
          <div className="px-4 py-0 border-b border-white/10">
            <Slider
              label="Chat Width"
              range={[40, 90]}
              step={1}
              value={chatWidth}
              onChange={updateChatWidth}
            />
          </div>
          <Link
            className="flex items-center gap-3 rounded p-3 transition-colors hover:bg-gray-500/10"
            href="/playground"
          >
            <MdBuild />
            Playground
          </Link>
          <ButtonContainer onClick={clearConversations}>
            <MdDeleteOutline />
            Clear Conversations
          </ButtonContainer>

          <ThemeButton />
        </div>
        <Github /> 
      </div>
    </div>
  );
}
