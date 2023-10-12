import type { Meta, StoryObj } from '@storybook/react';
import { BankAccountCard } from './BankAccountCard';
declare const meta: Meta<typeof BankAccountCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const RegularBankAccountCardWithDemoModeDisabled: Story;
export declare const RegularBankAccountCardWithHistoricalBankAccountBalance: Story;
