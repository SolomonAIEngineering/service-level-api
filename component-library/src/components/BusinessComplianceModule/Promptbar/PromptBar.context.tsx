import { Dispatch, createContext } from 'react';

import { ActionType } from '@/hooks/useCreateReducer';

import { PromptbarInitialState } from './Promptbar.state';
import { Prompt } from 'src/types/business-ai/prompt';

export interface PromptbarContextProps {
  state: PromptbarInitialState;
  dispatch: Dispatch<ActionType<PromptbarInitialState>>;
  handleCreatePrompt: () => void;
  handleDeletePrompt: (prompt: Prompt) => void;
  handleUpdatePrompt: (prompt: Prompt) => void;
}

const PromptbarContext = createContext<PromptbarContextProps>(undefined!);

export default PromptbarContext;
