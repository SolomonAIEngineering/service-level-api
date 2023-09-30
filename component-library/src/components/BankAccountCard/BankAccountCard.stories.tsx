/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { BankAccountCard } from './BankAccountCard';
import { AccountBalanceHistory, BankAccount } from '../..';

const meta: Meta<typeof BankAccountCard> = {
  title: 'Component/BankAccountCard',
  component: BankAccountCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof BankAccountCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegularBankAccountCardWithDemoModeDisabled: Story = {
  args: {
    bankAccount: BankAccount.randomInstance(),
    enableDemoMode: false,
    // historicalAccountBalance: Array.from({ length: 20 }, () =>
    //   AccountBalanceHistory.randomInstance(),
    // ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
  },
};

export const RegularBankAccountCardWithHistoricalBankAccountBalance: Story = {
  args: {
    bankAccount: BankAccount.randomInstance(),
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistory.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
  },
};
