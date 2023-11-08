// CommandPalleteWithIcons.stories.tsx
import { Meta, Story } from '@storybook/react';

import { FolderIcon, UsersIcon } from '@heroicons/react/24/outline';
import {
  CommandPalleteQuickAction,
  CommandPalleteWithIcons,
} from './command-pallete-with-icons';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { TransactionClass } from 'src/types/financial/transaction';

export default {
  title: 'CommandPalletes/CommandPalleteWithIcons',
  component: CommandPalleteWithIcons,
} as Meta;

const Template: Story<{
  transactions: Transaction[];
  quickActions: CommandPalleteQuickAction[];
}> = (args) => <CommandPalleteWithIcons {...args} />;

const transactions: Transaction[] = Array.from(
  { length: 50 },
  () => TransactionClass.randomInstance() as Transaction,
).sort((a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime());

export const Default = Template.bind({});
Default.args = {
  transactions: transactions,
  quickActions: [
    {
      name: 'Quick Action 1',
      shortcut: 'A',
      icon: FolderIcon,
      callback: () => console.log('Quick Action 1 clicked'),
    },
    {
      name: 'Quick Action 2',
      shortcut: 'B',
      icon: UsersIcon,
      callback: () => console.log('Quick Action 2 clicked'),
    },
    // ... add more quick actions for demonstration purposes
  ],
};
