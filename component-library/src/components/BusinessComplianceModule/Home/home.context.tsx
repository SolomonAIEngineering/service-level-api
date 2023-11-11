import { Dispatch, createContext } from 'react';

import { ActionType } from '@/hooks/useCreateReducer';
import { HomeInitialState } from './home.state';
import { FolderType } from 'src/types/business-ai/folder';
import { Conversation } from 'src/types/business-ai/chat';
import { KeyValuePair } from 'src/types/business-ai/data';

export interface HomeContextProps {
  state: HomeInitialState;
  dispatch: Dispatch<ActionType<HomeInitialState>>;
  handleNewConversation: () => void;
  handleCreateFolder: (name: string, type: FolderType) => void;
  handleDeleteFolder: (folderId: string) => void;
  handleUpdateFolder: (folderId: string, name: string) => void;
  handleSelectConversation: (conversation: Conversation) => void;
  handleUpdateConversation: (
    conversation: Conversation,
    data: KeyValuePair,
  ) => void;
}

const HomeContext = createContext<HomeContextProps>(undefined!);

export default HomeContext;
