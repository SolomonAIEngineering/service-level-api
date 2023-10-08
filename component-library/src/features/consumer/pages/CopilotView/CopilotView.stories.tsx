/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { CopilotView } from './CopilotView';

const meta: Meta<typeof CopilotView> = {
  title: 'Features/CopilotView',
  component: CopilotView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CopilotView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'CopilotView',
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
