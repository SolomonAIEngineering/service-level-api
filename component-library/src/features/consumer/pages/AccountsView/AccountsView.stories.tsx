/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import {
  BankAccountClass,
  CreditAccountClass,
  StudentLoanAccountClass,
  InvestmentAccountClass,
  TransactionClass,
  AccountBalanceHistoryClass,
} from 'src/types';
import { AccountsView, CombinedAccounts } from './AccountsView';

const meta: Meta<typeof AccountsView> = {
  title: 'Features/AccountsView',
  component: AccountsView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // className: { control: 'text' },
  },
} satisfies Meta<typeof AccountsView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BankAccountStory: Story = {
  args: {
    account: BankAccountClass.randomInstance() as CombinedAccounts,
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    addGoalCallback: () => {},
    addMilestoneCallback: () => {},
    // ... other props as required
  },
};

export const CreditAccountStory: Story = {
  args: {
    account: CreditAccountClass.randomInstance() as CombinedAccounts,
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    addGoalCallback: () => {},
    addMilestoneCallback: () => {},
  },
};

export const StudentLoanAccountStory: Story = {
  args: {
    account: StudentLoanAccountClass.randomInstance() as CombinedAccounts,
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    addGoalCallback: () => {},
    addMilestoneCallback: () => {},
  },
};

export const InvestmentAccountStory: Story = {
  args: {
    account: InvestmentAccountClass.randomInstance() as CombinedAccounts,
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    addGoalCallback: () => {},
    addMilestoneCallback: () => {},
  },
};

export const WithTransactions: Story = {
  args: {
    account: BankAccountClass.randomInstance() as CombinedAccounts,
    transactions: Array.from({ length: 20 }, () =>
      TransactionClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    addGoalCallback: () => {},
    addMilestoneCallback: () => {},
    // ... other props as required
  },
};

export const WithDemoMode: Story = {
  args: {
    account: BankAccountClass.randomInstance() as CombinedAccounts,
    enableDemoMode: true,
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    addGoalCallback: () => {},
    addMilestoneCallback: () => {},
    // ... other props as required
  },
};

export const WithHistoricalAccountBalance: Story = {
  args: {
    account: BankAccountClass.randomInstance() as CombinedAccounts,
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
    addGoalCallback: () => {},
    addMilestoneCallback: () => {},
    // ... other props as required
  },
};
