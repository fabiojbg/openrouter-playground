import { useOpenAI } from "@/context/OpenAIProvider";
import { OpenAIChatMessage } from "@/utils/OpenAI";
import React from "react";
import { MdPerson, MdRefresh, MdSmartToy } from "react-icons/md";
import AssistantMessageContent from "./AssistantMessageContent";
import UserMessageContent from "./UserMessageContent";

type Props = {
  message: OpenAIChatMessage;
  isLast: boolean;
};

export default function ChatMessage({ message, isLast }: Props) {
  const { id, role, content, reasoning, metadata } = message;
  const { retry, loading, chatWidth } = useOpenAI();
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className={`flex cursor-pointer flex-row items-center p-4 transition-all ${
        role === "user" ? "bg-tertiary hover:bg-secondary/50" : "bg-secondary"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div 
        className="relative mx-auto flex w-full flex-row items-center"
        style={{ maxWidth: `${chatWidth}%` }}
      >
        <div
          className={`flex sticky top-0 my-4 h-10 w-10 items-center justify-center text-4xl mr-2 self-start transition-colors ${
            hover ? "text-stone-300" : "text-primary/20"
          }`}
        >
          {role === "user" ? <MdPerson /> : <MdSmartToy />}
        </div>
        <div className="overflow-x-auto flex-1">
          <div className="text-md prose w-full max-w-none rounded p-4 text-primary dark:prose-invert prose-code:text-primary prose-pre:bg-transparent prose-pre:p-0">
            {role === "user" ? (
              <UserMessageContent content={content} />
            ) : (
              <AssistantMessageContent
                message={message} // Pass the entire message object
                isLast={isLast}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
