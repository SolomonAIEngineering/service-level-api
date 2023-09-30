/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { CreditAccountHoverLabel } from './CreditAccountHoverLabel';
import { AccountBalanceHistory, CreditAccount } from 'src/types';

const meta: Meta<typeof CreditAccountHoverLabel> = {
  title: 'Component/CreditAccountHoverLabel',
  component: CreditAccountHoverLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CreditAccountHoverLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CreditAccountHoverLabelDefault: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'CreditAccountHoverLabel',
    creditAccount: CreditAccount.randomInstance(),
    enableDemoMode: false,
    institutionName: 'Chase',
  },
};

export const RegularHoverLabelWithHistoricalAccountBalance: Story = {
  args: {
    creditAccount: CreditAccount.randomInstance(),
    historicalAccountBalance: Array.from({ length: 20 }, () =>
      AccountBalanceHistory.randomInstance(),
    ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
  },
};
