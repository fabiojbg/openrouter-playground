import { useOpenAI } from "@/context/OpenAIProvider";
import { getConversation, } from "@/utils/History";
export default function Conversation(_a) {
    var _b;
    var id = _a.id, conversation = _a.conversation;
    var loadConversation = useOpenAI().loadConversation;
    var handleClick = function () {
        // Get the conversation from the history
        var conversation = getConversation(id);
        conversation && loadConversation(id, conversation);
    };
    return (<div className="flex cursor-pointer flex-col gap-y-2 rounded-md bg-gray-100 p-4 hover:bg-gray-200" onClick={handleClick}>
      <div className="flex flex-row justify-between text-gray-700">
        <div className="text-sm font-bold">
          {
        // Get the time of day
        new Date(conversation.lastMessage).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        })}
        </div>
        <div>{conversation.name || ((_b = conversation.messages[0]) === null || _b === void 0 ? void 0 : _b.content)}</div>
      </div>
    </div>);
}
