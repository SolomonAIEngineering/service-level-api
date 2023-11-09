// Chat.stories.tsx
import { Story, Meta } from '@storybook/react';
import { JSX } from 'react/jsx-runtime';
import { UserAccountClass } from 'src/types';
import { AskSolomonAILayout, SolomonProps } from './AskAILayout';

export default {
  title: 'Components/AskSolomonAILayout',
  component: AskSolomonAILayout,
} as Meta;

const Template: Story<SolomonProps> = (
  args: JSX.IntrinsicAttributes & SolomonProps,
) => <AskSolomonAILayout {...args} />;

const sampleQuestionsMock = [
  'How can I improve my savings?',
  'What is the best investment strategy for me?',
];

export const Default = Template.bind({});
Default.args = {
  sampleQuestions: sampleQuestionsMock,
  userAccount: UserAccountClass.randomInstance(),
  userName: 'John Doe',
  model: 'gpt-3.5-turbo',
  temperature: 0.7,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  max_tokens: 800,
  apiToken: '',
  componentType: 'DIALOG',

  // ...other props
};

export const Secondary = Template.bind({});
Secondary.args = {
  sampleQuestions: sampleQuestionsMock,
  userAccount: UserAccountClass.randomInstance(),
  userName: 'John Doe',
  model: 'gpt-3.5-turbo',
  temperature: 0.7,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  max_tokens: 800,
  apiToken: '',
  componentType: 'SHEET',

  // ...other props
};

// Add more stories here for different states of the component
// For example, if you want to show how the component behaves with secondary contexts
export const WithSecondaryContext = Template.bind({});
WithSecondaryContext.args = {
  ...Default.args,
};

export const WithThirdContext = Template.bind({});
WithThirdContext.args = {
  ...Secondary.args,
};

// Add as many stories as needed to showcase all aspects of your component
