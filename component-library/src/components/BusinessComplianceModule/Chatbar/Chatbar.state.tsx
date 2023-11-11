import { Conversation } from 'src/types/business-ai/chat';

export interface ChatbarInitialState {
  searchTerm: string;
  filteredConversations: Conversation[];
}

export const initialState: ChatbarInitialState = {
  searchTerm: '',
  filteredConversations: [],
};
