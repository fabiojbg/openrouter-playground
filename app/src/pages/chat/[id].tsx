import ChatMessages from "@/components/chat/ChatMessages";
import ChatSidebar from "@/components/chat/sidebar/ChatSidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useCallback, useEffect } from "react";
import { getConversation } from "./../../utils/History";
import { useOpenAI } from "@/context/OpenAIProvider";
import ChatHeader from "./../../components/chat/ChatHeader";

export default function Chat() {
  const { loadConversation, conversationId } = useOpenAI();
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const { id } = useRouter().query;

  React.useEffect(() => {
    if (!id) return;
    if (typeof window !== "undefined") {
      // Get the conversation from local storage
      const conversation = getConversation(id as string);

      // If there is no conversation, redirect to the home page
      if (!conversation) {
        window.location.href = "/";
      } else if (conversationId !== id) {
        // If the conversation is not loaded, load it
        loadConversation(id as string, conversation);
      }
    }
  }, [id]);

  useEffect(() => {
    const savedWidth = localStorage.getItem("chat-sidebar-width");
    if (savedWidth) {
      setSidebarWidth(parseInt(savedWidth));
    }
  }, []);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
    localStorage.setItem("chat-sidebar-width", sidebarWidth.toString());
  }, [sidebarWidth]);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = e.clientX;
        if (newWidth > 150 && newWidth < 600) {
          setSidebarWidth(newWidth);
        }
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <React.Fragment>
      <Head>
        <title>OpenRouter</title>
        <meta name="description" content="A clone of OpenAI playground." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen relative flex h-screen max-h-screen w-screen overflow-hidden">
        <div className="hidden md:flex flex-col h-full overflow-hidden" style={{ width: `${sidebarWidth}px`, minWidth: `${sidebarWidth}px` }}>
          <ChatSidebar width={sidebarWidth} />
        </div>
        <div
          className={`hidden md:flex group relative w-1 cursor-col-resize items-center justify-center bg-transparent transition-colors hover:bg-black/10 dark:hover:bg-white/10 ${
            isResizing ? "bg-black/10 dark:bg-white/10" : ""
          }`}
          onMouseDown={startResizing}
        >
          <div className="absolute h-full w-[1px] bg-white/10 group-hover:bg-white/30" />
        </div>
        <div className="flex flex-1 flex-col h-full overflow-hidden">
          <ChatHeader />
          <ChatMessages />
        </div>
      </div>
    </React.Fragment>
  );
}
