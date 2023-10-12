import type { Meta, StoryObj } from '@storybook/react';
import CreditCard from './CreditCard';
declare const meta: Meta<typeof CreditCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultCard: Story;
export declare const VisaCard: Story;
export declare const MasterCardExample: Story;
export declare const AmexCard: Story;
export declare const DiscoverCard: Story;
