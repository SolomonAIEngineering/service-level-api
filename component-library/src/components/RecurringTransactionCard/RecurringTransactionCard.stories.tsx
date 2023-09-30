/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { RecurringTransactionCard } from './RecurringTransactionCard';
import {
  BankAccount,
  CreditAccount,
  ReOccuringTransaction,
  Transaction,
} from 'src/types';

const meta: Meta<typeof RecurringTransactionCard> = {
  title: 'Component/RecurringTransactionCard',
  component: RecurringTransactionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof RecurringTransactionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecurringTransactionCardWithDetailedDisplayOff: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance(),
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
export const RecurringTransactionCardWithDetailedDisplayOn: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance(),
    enableDetailedDisplay: true,
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
export const RecurringTransactionCardWithTransactions: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance(),
    enableDetailedDisplay: true,
    participantTransactions: Array.from({ length: 20 }, () =>
      Transaction.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
  },
};

export const RecurringTransactionCardWithTransactionsAndBankAccount: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance(),
    enableDetailedDisplay: true,
    participantTransactions: Array.from({ length: 20 }, () =>
      Transaction.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
    account: BankAccount.randomInstance(),
  },
};

export const RecurringTransactionCardWithTransactionsAndCreditAccount: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance(),
    enableDetailedDisplay: true,
    participantTransactions: Array.from({ length: 20 }, () =>
      Transaction.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
    account: CreditAccount.randomInstance(),
  },
};
