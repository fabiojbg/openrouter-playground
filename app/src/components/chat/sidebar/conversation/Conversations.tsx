import { useOpenAI } from "@/context/OpenAIProvider";
import Conversation from "./Conversation";

type Props = {
  searchTerm: string;
};

export default function Conversations({ searchTerm }: Props) {
  const { conversations, conversationId } = useOpenAI();

  const filteredConversations = Object.keys(conversations).filter((key) => {
    // Determine the text to search in: conversation name or the first message content.
    const textToSearch = (
      conversations[key].name ||
      conversations[key].messages[0]?.content ||
      ""
    ).toLowerCase();

    return textToSearch.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex-1 overflow-y-auto py-0 scrollbar-none">
      <div className="flex flex-col gap-y-0">
        {filteredConversations.map((key) => (
          <Conversation
            key={key + conversations[key].name}
            id={key}
            conversation={conversations[key]}
            active={key === conversationId}
          />
        ))}
      </div>
    </div>
  );
}
