/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { StudentLoanAccountHoverLabel } from './StudentLoanAccountHoverLabel';
import { StudentLoanAccount } from 'src/types';

const meta: Meta<typeof StudentLoanAccountHoverLabel> = {
  title: 'Component/StudentLoanAccountHoverLabel',
  component: StudentLoanAccountHoverLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof StudentLoanAccountHoverLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StudentLoanAccountDefault: Story = {
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'StudentLoanAccountHoverLabel',
    studentLoanAccount: StudentLoanAccount.randomInstance(),
    enableDemoMode: false,
  },
};

// ... Repeat for other variants like Secondary, Large, Small, etc.
