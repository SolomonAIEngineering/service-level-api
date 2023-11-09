// Chat.stories.tsx
import { Story, Meta } from '@storybook/react';
import { Chat, ChatProps } from './AIChat';
import { JSX } from 'react/jsx-runtime';
import { UserAccountClass } from 'src/types';

export default {
  title: 'Components/Chat',
  component: Chat,
} as Meta;

const Template: Story<ChatProps> = (
  args: JSX.IntrinsicAttributes & ChatProps,
) => <Chat {...args} />;

// You would replace the following props with actual valid props that your component expects.
const baseContextMock = {
  contextName: 'finance',
  context: {}, // Your context object here
};

const sampleQuestionsMock = [
  'How can I improve my savings?',
  'What is the best investment strategy for me?',
];

export const Default = Template.bind({});
Default.args = {
  baseContext: baseContextMock,
  sampleQuestions: sampleQuestionsMock,
  userAccount: UserAccountClass.randomInstance(),
  userName: 'John Doe',
  model: 'gpt-3.5-turbo',
  temperature: 0.7,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  max_tokens: 800,
  apiToken: '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',

  // ...other props
};

// Add more stories here for different states of the component
// For example, if you want to show how the component behaves with secondary contexts
export const WithSecondaryContext = Template.bind({});
WithSecondaryContext.args = {
  ...Default.args,
  secondaryContext: [
    {
      contextName: 'additional',
      context: {}, // Your additional context here
    },
    // ... more contexts if necessary
  ],
};

// Add as many stories as needed to showcase all aspects of your component
