/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { ExpenseIncomeView } from './ExpenseView';
import { AccountBalanceHistoryClass } from 'src/types/financial/account-balance-history';
import {
  ExpenseMetricsClass,
  IncomeMetricsClass,
  TransactionClass,
} from 'src/index';

const meta: Meta<typeof ExpenseIncomeView> = {
  title: 'Features/ExpenseView',
  component: ExpenseIncomeView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ExpenseIncomeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expense: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'ExpenseView',
    historicalAccountBalance: Array.from({ length: 100 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    data: Array.from(
      { length: 20 },
      () => ExpenseMetricsClass.randomInstance() as ExpenseMetricsClass,
    ).sort((a, b) => (a.month && b.month ? a.month - b.month : 0)),
    transactions: Array.from({ length: 20 }, () =>
      TransactionClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
  },
};

export const Income: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'ExpenseView',
    historicalAccountBalance: Array.from({ length: 100 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    data: Array.from(
      { length: 20 },
      () => IncomeMetricsClass.randomInstance() as IncomeMetricsClass,
    ).sort((a, b) => (a.month && b.month ? a.month - b.month : 0)),
    transactions: Array.from({ length: 20 }, () =>
      TransactionClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
