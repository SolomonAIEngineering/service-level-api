import { Prompt } from 'src/types/business-ai/prompt';

export interface PromptbarInitialState {
  searchTerm: string;
  filteredPrompts: Prompt[];
}

export const initialState: PromptbarInitialState = {
  searchTerm: '',
  filteredPrompts: [],
};
