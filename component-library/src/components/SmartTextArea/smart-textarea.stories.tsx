// SmartTextarea.stories.tsx

import { Meta, Story } from '@storybook/react';
import { SmartTextarea, SmartTextareaProps } from './smart-textarea';
import { UserAccountClass } from 'src/types/user/user-account';

export default {
  title: 'Smart/SmartTextarea',
  component: SmartTextarea,
  args: {
    context: {},
    sampleQuestions: ['What is the weather today?', 'How far is the moon?'], // You can provide default sample questions for the story.
    placeholder: 'Type your text here...',
    globalFinancialContext: {},
    userAccount: new UserAccountClass(),
  },
} as Meta;

const Template: Story<SmartTextareaProps> = (args) => (
  <SmartTextarea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // You can override the default args or add new ones here.
};
