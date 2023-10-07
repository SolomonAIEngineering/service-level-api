/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { AskSolomonAILayout } from './AskSolomonAILayout';

const meta: Meta<typeof AskSolomonAILayout> = {
  title: 'Component/AskSolomonAi',
  component: AskSolomonAILayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof AskSolomonAILayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div>hello</div>,
    context: '',
    sampleQuestions: [
      "What's my balance?",
      'What are my recent transactions?',
      'hi',
    ],
    userKey: 'test-user',
    financialContext: {},
    userAccount: {},
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
