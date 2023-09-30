/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { TransactionAnalyticsByMonth } from './TransactionAnalyticsByMonth';
import { Transaction } from 'src/types';

const meta: Meta<typeof TransactionAnalyticsByMonth> = {
  title: 'Example/TransactionAnalyticsByMonth',
  component: TransactionAnalyticsByMonth,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TransactionAnalyticsByMonth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TransactionAnalyticsByMonthDefault: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'TransactionAnalyticsByMonth',
    transactions: Array.from({ length: 30 }, () =>
      Transaction.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
  },
};
