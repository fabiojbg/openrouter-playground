import Link from "next/link";
import React from "react";
import { MdAdd, MdDeleteOutline, MdBuild } from "react-icons/md";
import { useOpenAI } from "@/context/OpenAIProvider";
// Removed: import { OpenAIChatModels } from "@/utils/OpenAI";
import Github from "../../misc/Github";
import ThemeButton from "./buttons/ThemeButton";
import ButtonContainer from "./buttons/ButtonContainer";
import Conversations from "./conversation/Conversations";
import ApiKey from "./buttons/ApiKey";
import CurrentModel from './buttons/CurrentModel';

type Props = {};

export default function ChatSidebar({}: Props) {
  const { clearConversations, config, models, loadingModels } = useOpenAI();

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
    <div className="dark left-0 top-0 h-full max-h-screen flex-col bg-gray-900 text-primary md:fixed md:flex md:w-[332px]">
      <div className="flex h-full flex-col items-stretch p-2">
        <Link
          href="/"
          className="flex items-center gap-3 rounded border border-white/20 p-4 transition-colors hover:bg-gray-500/10"
        >
          <MdAdd />
          New chat
        </Link>

        <Conversations />

        <div className="flex flex-col gap-y-2 border-y border-white/10 py-2 model-panel" >
          <div className="flex flex-col border-b border-white/10 gap-y-2">
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
        <span className="text-center text-primary/80 text-sm mt-2">
          Customized by Fabio Botelho
        </span>
      </div>
    </div>
  );
}
