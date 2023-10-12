import type { Meta, StoryObj } from '@storybook/react';
import { ExpenseIncomeView } from './ExpenseView';
declare const meta: Meta<typeof ExpenseIncomeView>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Expense: Story;
export declare const Income: Story;
