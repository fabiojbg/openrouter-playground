import { useOpenAI } from "@/context/OpenAIProvider";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { usePlayground } from "@/context/PlaygroundProvider";
export default function PlaygroundMessage(_a) {
    var _b = _a.message, id = _b.id, role = _b.role, content = _b.content;
    var showConversations = usePlayground().showConversations;
    var _c = React.useState(false), focus = _c[0], setFocus = _c[1];
    var textAreaRef = React.useRef(null);
    var _d = useOpenAI(), updateMessageContent = _d.updateMessageContent, removeMessage = _d.removeMessage, toggleMessageRole = _d.toggleMessageRole;
    var handleContentChange = function (e) {
        if (e.target.value === content || id === undefined)
            return;
        updateMessageContent(id, e.target.value);
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "40px";
            textAreaRef.current.style.height = "".concat(textAreaRef.current.scrollHeight, "px");
        }
    };
    React.useEffect(function () {
        var resize = function () {
            if (textAreaRef.current) {
                textAreaRef.current.style.height = "40px";
                textAreaRef.current.style.height = "".concat(textAreaRef.current.scrollHeight, "px");
            }
        };
        resize();
        // Handle the 300ms delay on showing the conversation
        var timeout = setTimeout(function () {
            resize();
        }, 300);
    }, [content, showConversations]);
    var handleRemove = function () {
        if (id === undefined)
            return;
        removeMessage(id);
    };
    var handleToggleRole = function () {
        if (id === undefined)
            return;
        toggleMessageRole(id);
    };
    return (<div className={"group flex cursor-pointer flex-row items-center border-b border-gray-300 p-4 transition-all hover:bg-gray-100 ".concat(focus && "bg-gray-100")} onFocus={function () { return setFocus(true); }} onBlur={function () { return setFocus(false); }}>
      <div className="basis-3/12">
        <button className={"select-none rounded p-2 text-sm font-semibold text-gray-700 transition-all group-hover:bg-gray-100 ".concat(focus && "bg-gray-300")} onClick={handleToggleRole}>
          {role.toUpperCase()}
        </button>
      </div>
      <div className="basis-8/12 items-center">
        <textarea className="text-md w-full resize-none rounded bg-transparent p-4 text-gray-700 focus:border-transparent focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-600" value={content} onChange={handleContentChange} placeholder={"Enter ".concat(role, " message here")} ref={textAreaRef}/>
      </div>

      <div className="flex basis-1/12 justify-center">
        <button className={"group-hover:text-gray-300 text-transparent transition-all focus:outline-none hover:text-gray-700"} onClick={handleRemove}>
          <MdOutlineCancel size={24}/>
        </button>
      </div>
    </div>);
}
