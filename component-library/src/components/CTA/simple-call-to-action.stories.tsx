import type { Meta, Story } from '@storybook/react';
import {
  SimpleCallToAction,
  SimpleCallToActionProps,
} from './simple-call-to-action';

export default {
  title: 'CallToAction/SimpleCallToAction',
  component: SimpleCallToAction,
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

const Template: Story<SimpleCallToActionProps> = (args) => (
  <SimpleCallToAction {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Boost your productivity.',
  description: 'Start using our app today.',
  backgroundColor: 'white',

  button1Title: 'Get Started',
  button2Title: 'Learn More',
};

export const WithGradient = Template.bind({});
WithGradient.args = {
  ...Default.args,
  showGradient: true,
};

export const CenteredContent = Template.bind({});
CenteredContent.args = {
  ...Default.args,
  centered: true,
};

export const IndigoBackground = Template.bind({});
IndigoBackground.args = {
  ...Default.args,
  backgroundColor: 'indigo-700',
};
