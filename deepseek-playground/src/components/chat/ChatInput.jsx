import React from "react";
import { useOpenAI } from "@/context/OpenAIProvider";
import { MdSend } from "react-icons/md";
export default function ChatInput(_a) {
    var _b = useOpenAI(), addMessage = _b.addMessage, loading = _b.loading;
    var textAreaRef = React.useRef(null);
    var _c = React.useState(""), input = _c[0], setInput = _c[1];
    var handleChange = function (e) {
        setInput(e.target.value);
    };
    var handleSubmit = function (e) {
        if (loading)
            return;
        e.preventDefault();
        addMessage(input, true, "user");
        setInput("");
    };
    React.useEffect(function () {
        var resize = function () {
            if (textAreaRef.current) {
                textAreaRef.current.style.height = "40px";
                textAreaRef.current.style.height = "".concat(textAreaRef.current.scrollHeight, "px");
            }
        };
        resize();
    }, [input]);
    // Handle submitting with enter
    React.useEffect(function () {
        var handleKeyDown = function (e) {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return function () {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleSubmit]);
    return (<div className="fixed bottom-0 flex h-40 w-full bg-gradient-to-t from-[rgb(var(--bg-secondary))] to-transparent md:w-[calc(100%-260px)]">
      <form className="mx-auto flex h-full w-full max-w-4xl items-end justify-center p-4 pb-10" onSubmit={handleSubmit}>
        <div className="relative flex w-full flex-row rounded border border-stone-500/20 bg-tertiary shadow-xl">
          <textarea ref={textAreaRef} className="max-h-[200px] w-full resize-none border-none bg-tertiary p-4 text-primary outline-none" onChange={handleChange} value={input} rows={1}/>
          <button type="submit" className="rounded p-4 text-primary hover:bg-primary/50">
            {loading ? (<div className="mx-auto h-5 w-5 animate-spin rounded-full border-b-2 border-white"/>) : (<MdSend />)}
          </button>
        </div>
      </form>
    </div>);
}
