import { useOpenAI } from "@/context/OpenAIProvider";
import React, { useEffect, useRef, useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatPlaceholder from "./ChatPlaceholder";

type Props = {};

export default function ChatMessages({}: Props) {
  const { messages, submit } = useOpenAI();
  const messageContainer = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);
  const [prevMessageLength, setPrevMessageLength] = useState(0);
  const [prevLastMessageContent, setPrevLastMessageContent] = useState('');

  // Scroll handling for auto scroll
  useEffect(() => {
    const handleScroll = () => {
      if (messageContainer.current) {
        const isAtBottom = messageContainer.current.scrollHeight - messageContainer.current.scrollTop <= messageContainer.current.offsetHeight + 1;
        setScrolling(!isAtBottom);
      }
    };

    if (messageContainer.current) {
      messageContainer.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (messageContainer.current) {
        messageContainer.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (!messageContainer.current) return;

    const currentLastMessageContent = messages.length > 0 ? messages[messages.length - 1].content : '';
    const isNewMessage = messages.length !== prevMessageLength;
    const isStreamingUpdate = currentLastMessageContent !== prevLastMessageContent && messages.length > 0 && messages[messages.length - 1].role === 'assistant';

    if (!scrolling || isNewMessage || isStreamingUpdate) {
      messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
    }

    // Update states for the next render cycle
    setPrevMessageLength(messages.length);
    setPrevLastMessageContent(currentLastMessageContent);

  }, [messages, scrolling]);

  // Command Enter to submit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && e.metaKey) {
        submit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [submit]);

  return (
    <div className="flex h-full w-full flex-col items-stretch md:pl-[260px]">
      <div
        className="relative flex flex-1 flex-col items-stretch overflow-auto border-b bg-tertiary pb-[10rem] scrollbar scrollbar-w-3 scrollbar-thumb-[rgb(var(--bg-primary))] scrollbar-track-[rgb(var(--bg-secondary))] scrollbar-thumb-rounded-full"
        ref={messageContainer}
      >
        {messages.length === 0 ? (
          <ChatPlaceholder />
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <hr className="border-b border-stone-400/20" />
          </>
        )}
      </div>
      <ChatInput />
    </div>
  );
}
