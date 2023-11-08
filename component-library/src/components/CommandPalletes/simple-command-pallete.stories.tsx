import { Story, Meta } from '@storybook/react';
import { SimpleTransactionCommandPallete } from './simple-command-pallete';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { TransactionClass } from 'src/types/financial/transaction';

export default {
  title: 'CommandPalletes/SimpleTransactionCommandPallete',
  component: SimpleTransactionCommandPallete,
} as Meta;

const transactions: Transaction[] = Array.from(
  { length: 50 },
  () => TransactionClass.randomInstance() as Transaction,
).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime());

const Template: Story = (args) => (
  <SimpleTransactionCommandPallete transactions={transactions} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  transactions,
};
