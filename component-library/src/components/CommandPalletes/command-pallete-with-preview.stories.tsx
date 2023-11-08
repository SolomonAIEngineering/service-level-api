import { Story, Meta } from '@storybook/react';
import { CommandPalletterWithPreview } from './command-pallete-with-preview';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { TransactionClass } from 'src/types/financial/transaction';

export default {
  title: 'CommandPalletes/CommandPalletterWithPreview',
  component: CommandPalletterWithPreview,
} as Meta;

const transactions: Transaction[] = Array.from(
  { length: 50 },
  () => TransactionClass.randomInstance() as Transaction,
).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime());

const Template: Story = (args) => (
  <CommandPalletterWithPreview transactions={transactions} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  transactions,
};
