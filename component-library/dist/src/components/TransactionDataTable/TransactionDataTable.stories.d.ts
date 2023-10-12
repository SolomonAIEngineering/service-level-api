import type { Meta, StoryObj } from '@storybook/react';
import { TransactionDataTable } from './TransactionDataTable';
declare const meta: Meta<typeof TransactionDataTable>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TransactionDataTableDefault: Story;
export declare const TransactionDataTableWithBankAccount: Story;
export declare const TransactionDataTableWithCreditAccount: Story;
