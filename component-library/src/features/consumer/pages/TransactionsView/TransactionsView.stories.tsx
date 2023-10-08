/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { TransactionsView } from './TransactionsView';

const meta: Meta<typeof TransactionsView> = {
  title: 'Features/TransactionsView',
  component: TransactionsView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TransactionsView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'TransactionsView',
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
