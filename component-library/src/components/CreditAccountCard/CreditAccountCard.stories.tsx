/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { CreditAccountCard } from './CreditAccountCard';
import { AccountBalanceHistoryClass, CreditAccountClass } from 'src/index';

const meta: Meta<typeof CreditAccountCard> = {
  title: 'Component/CreditAccountCard',
  component: CreditAccountCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CreditAccountCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CreditAccountCardDefault: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'CreditAccountCard',
    creditAccount: CreditAccountClass.randomInstance(),
    enableDemoMode: false,
    institutionName: 'Chase',
  },
};

export const CreditAccountCardAccountBalanceHistory: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'CreditAccountCard',
    creditAccount: CreditAccountClass.randomInstance(),
    enableDemoMode: false,
    institutionName: 'Chase',
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistoryClass.randomInstance(),
    ).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime()),
  },
};
