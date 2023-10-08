/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { ExpenseView } from './ExpenseView';

const meta: Meta<typeof ExpenseView> = {
  title: 'Features/ExpenseView',
  component: ExpenseView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ExpenseView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'ExpenseView',
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
