import { FC } from 'react';

import { Prompt } from 'src/types/business-ai/prompt';
import { PromptComponent } from './Prompt';

interface Props {
  prompts: Prompt[];
}

export const Prompts: FC<Props> = ({ prompts }) => {
  return (
    <div className="flex flex-col w-full gap-1">
      {prompts
        .slice()
        .reverse()
        .map((prompt, index) => (
          <PromptComponent key={index} prompt={prompt} />
        ))}
    </div>
  );
};
