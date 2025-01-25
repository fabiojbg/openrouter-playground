import ChatMessages from "@/components/chat/ChatMessages";
import ChatSidebar from "@/components/chat/sidebar/ChatSidebar";
import Head from "next/head";
import React, { useEffect } from "react";
import { useOpenAI } from "@/context/OpenAIProvider";
import ChatHeader from "@/components/chat/ChatHeader";
export default function Chat() {
    var clearConversation = useOpenAI().clearConversation;
    useEffect(function () {
        clearConversation();
    }, []);
    return (<React.Fragment>
      <Head>
        <title>DeepSeek</title>
        <meta name="description" content="A clone of DeepSeek playground."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <div className="max-w-screen relative h-screen max-h-screen w-screen overflow-hidden">
        <ChatHeader />
        <ChatMessages />
        <ChatSidebar />
      </div>
    </React.Fragment>);
}
