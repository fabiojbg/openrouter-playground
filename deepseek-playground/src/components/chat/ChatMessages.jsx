import { useOpenAI } from "@/context/OpenAIProvider";
import React, { useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatPlaceholder from "./ChatPlaceholder";
export default function ChatMessages(_a) {
    var _b = useOpenAI(), messages = _b.messages, submit = _b.submit;
    var messageContainer = React.useRef(null);
    var _c = React.useState(false), scrolling = _c[0], setScrolling = _c[1];
    var _d = React.useState(0), prevMessageLength = _d[0], setPrevMessageLength = _d[1];
    // Scroll handling for auto scroll
    useEffect(function () {
        var handleScroll = function () {
            if (messageContainer.current) {
                if (messageContainer.current.scrollTop <
                    messageContainer.current.scrollHeight -
                        messageContainer.current.offsetHeight) {
                    setScrolling(true);
                }
                else {
                    setScrolling(false);
                }
            }
        };
        if (messageContainer.current) {
            messageContainer.current.addEventListener("scroll", handleScroll);
        }
        return function () {
            if (messageContainer.current) {
                messageContainer.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);
    useEffect(function () {
        if (messages.length != prevMessageLength) {
            setPrevMessageLength(messages.length);
        }
        if (messageContainer.current &&
            (!scrolling || messages.length != prevMessageLength)) {
            messageContainer.current.scrollTop =
                messageContainer.current.scrollHeight;
        }
    }, [messages, scrolling]);
    // Command Enter to submit
    useEffect(function () {
        var handleKeyDown = function (e) {
            if (e.key === "Enter" && e.metaKey) {
                submit();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return function () {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [submit]);
    return (<div className="flex h-full w-full flex-col items-stretch md:pl-[260px]">
      <div className="relative flex flex-1 flex-col items-stretch overflow-auto border-b bg-tertiary pb-[10rem] scrollbar scrollbar-w-3 scrollbar-thumb-[rgb(var(--bg-primary))] scrollbar-track-[rgb(var(--bg-secondary))] scrollbar-thumb-rounded-full" ref={messageContainer}>
        {messages.length === 0 ? (<ChatPlaceholder />) : (<>
            {messages.map(function (message) { return (<ChatMessage key={message.id} message={message}/>); })}
            <hr className="border-b border-stone-400/20"/>
          </>)}
      </div>
      <ChatInput />
    </div>);
}
