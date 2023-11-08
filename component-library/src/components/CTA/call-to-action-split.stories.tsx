import type { Meta, Story } from '@storybook/react';
import {
  CallToActionSplit,
  CallToActionSplitProps,
} from './call-to-action-split';

export default {
  title: 'CallToAction/CallToActionSplit',
  component: CallToActionSplit,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    backgroundColor: {
      control: { type: 'select', options: ['white', 'gray-900', 'indigo-700'] },
    },
    showGradient: { control: 'boolean' },
    centered: { control: 'boolean' },
    button1Title: { control: 'text' },
    button1Url: { control: 'text' },
    button2Title: { control: 'text' },
    button2Url: { control: 'text' },
  },
} as Meta;

const Template: Story<CallToActionSplitProps> = (args) => (
  <CallToActionSplit {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Boost your productivity.',
  backgroundColor: 'white',

  button1Title: 'Get Started',
  button2Title: 'Learn More',
};

export const WithGradient = Template.bind({});
WithGradient.args = {
  ...Default.args,
};

export const CenteredContent = Template.bind({});
CenteredContent.args = {
  ...Default.args,
};

export const IndigoBackground = Template.bind({});
IndigoBackground.args = {
  ...Default.args,
};
