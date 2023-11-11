import { Conversation } from 'src/types/business-ai/chat';
import { ConversationComponent } from './Conversation';

interface Props {
  conversations: Conversation[];
}

export const Conversations = ({ conversations }: Props) => {
  return (
    <div className="flex flex-col w-full gap-1">
      {conversations
        .filter((conversation) => !conversation.folderId)
        .slice()
        .reverse()
        .map((conversation, index) => (
          <ConversationComponent key={index} conversation={conversation} />
        ))}
    </div>
  );
};
