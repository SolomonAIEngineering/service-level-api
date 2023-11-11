import { Dispatch, createContext } from 'react';

import { ActionType } from '@/hooks/useCreateReducer';

import { ChatbarInitialState } from './Chatbar.state';
import { Conversation } from 'src/types/business-ai/chat';
import { SupportedExportFormats } from 'src/types/business-ai/export';
import { PluginKey } from 'src/types/business-ai/plugin';

export interface ChatbarContextProps {
  state: ChatbarInitialState;
  dispatch: Dispatch<ActionType<ChatbarInitialState>>;
  handleDeleteConversation: (conversation: Conversation) => void;
  handleClearConversations: () => void;
  handleExportData: () => void;
  handleImportConversations: (data: SupportedExportFormats) => void;
  handlePluginKeyChange: (pluginKey: PluginKey) => void;
  handleClearPluginKey: (pluginKey: PluginKey) => void;
  handleApiKeyChange: (apiKey: string) => void;
}

const ChatbarContext = createContext<ChatbarContextProps>(undefined!);

export default ChatbarContext;
