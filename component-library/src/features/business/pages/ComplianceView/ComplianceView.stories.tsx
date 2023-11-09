// Chat.stories.tsx
import { Story, Meta } from '@storybook/react';
import { JSX } from 'react/jsx-runtime';
import { BusinessAccountClass, MelodyFinancialContextClass } from 'src/types';
import { ComplianceView, ComplianceViewProps } from './ComplianceView';

export default {
  title: 'Pages/ComplianceView',
  component: ComplianceView,
} as Meta;

const Template: Story<ComplianceViewProps> = (
  args: JSX.IntrinsicAttributes & ComplianceViewProps,
) => <ComplianceView {...args} />;

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export const Default = Template.bind({});
Default.args = {
  globalContext: new MelodyFinancialContextClass({}),
  account: BusinessAccountClass.randomInstance(),
  model: 'gpt-3.5-turbo',
  temperature: 0.7,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  max_tokens: 500,
  apiToken: '',
  navigation: navigation,
  subNavigation: userNavigation,
  enableHeader: true,

  // ...other props
};

// Add more stories here for different states of the component
// For example, if you want to show how the component behaves with secondary contexts
export const WithSecondaryContext = Template.bind({});
WithSecondaryContext.args = {
  ...Default.args,
};
