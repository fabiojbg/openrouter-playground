import Link from "next/link";
import React from "react";
import { MdChatBubbleOutline, MdCheck, MdClear, MdDelete, MdDriveFileRenameOutline, } from "react-icons/md";
import { useOpenAI } from "@/context/OpenAIProvider";
export default function Conversation(_a) {
    var id = _a.id, conversation = _a.conversation, active = _a.active;
    var _b = useOpenAI(), updateConversationName = _b.updateConversationName, deleteConversation = _b.deleteConversation;
    var _c = React.useState(false), editing = _c[0], setEditing = _c[1];
    var _d = React.useState(conversation.name || conversation.messages[0].content), name = _d[0], setName = _d[1];
    var handleNameChange = function (e) {
        setName(e.target.value);
    };
    var handleNameSubmit = function () {
        updateConversationName(id, name);
        setEditing(false);
    };
    var handleNameCancel = function () {
        setName(conversation.name || conversation.messages[0].content);
        setEditing(false);
    };
    var handleNameEdit = function () {
        setEditing(true);
    };
    var handleDelete = function () {
        deleteConversation(id);
    };
    var handleKeyDown = function (e) {
        if (e.key === "Enter") {
            handleNameSubmit();
        }
    };
    return (<Link href={"/chat/".concat(id)} className={"group relative flex flex-row items-center gap-3 rounded p-3 hover:bg-secondary ".concat(active ? "bg-secondary" : "")}>
      <span>
        <MdChatBubbleOutline />
      </span>
      <div className="relative flex grow truncate text-clip">
        {editing ? (<input type="text" className="z-50 w-full rounded bg-transparent p-[1px] text-primary outline-primary" onChange={handleNameChange} value={name}/>) : (conversation.name || conversation.messages[0].content)}
        <div className={"absolute bottom-0  right-0 z-10 h-full w-24 bg-gradient-to-r from-transparent ".concat(active
            ? "to-[rgb(var(--bg-secondary))]"
            : "to-[rgb(var(--bg-primary))] group-hover:to-[rgb(var(--bg-secondary))]")}/>
      </div>

      {active && !editing && (<div className="flex items-center gap-2">
          <button className="text-xl opacity-60 transition-opacity hover:opacity-100" onClick={handleNameEdit}>
            <MdDriveFileRenameOutline />
          </button>
          <button className="text-xl opacity-60 transition-opacity hover:opacity-100" onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>)}

      {active && editing && (<div className="flex items-center gap-2">
          <button className="text-xl opacity-60 transition-opacity hover:opacity-100" onClick={handleNameSubmit} onKeyDown={handleKeyDown} tabIndex={0}>
            <MdCheck />
          </button>
          <button className="text-xl opacity-60 transition-opacity hover:opacity-100" onClick={handleNameCancel}>
            <MdClear />
          </button>
        </div>)}
    </Link>);
}
