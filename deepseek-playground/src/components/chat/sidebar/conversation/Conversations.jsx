import { useOpenAI } from "@/context/OpenAIProvider";
import Conversation from "./Conversation";
export default function Conversations(_a) {
    var _b = useOpenAI(), conversations = _b.conversations, conversationId = _b.conversationId;
    return (<div className="flex-1 overflow-y-auto py-2 scrollbar-none">
      <div className="flex flex-col gap-y-2">
        {Object.keys(conversations).map(function (key) { return (<Conversation key={key + conversations[key].name} id={key} conversation={conversations[key]} active={key === conversationId}/>); })}
      </div>
    </div>);
}
