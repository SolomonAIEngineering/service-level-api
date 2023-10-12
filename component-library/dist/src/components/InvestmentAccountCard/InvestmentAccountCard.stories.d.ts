import type { Meta, StoryObj } from '@storybook/react';
import { InvestmentAccountCard } from './InvestmentAccountCard';
declare const meta: Meta<typeof InvestmentAccountCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WithoutBalance: Story;
export declare const WithAccountBalance: Story;
