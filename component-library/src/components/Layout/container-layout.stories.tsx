import { Story, Meta } from '@storybook/react';
import ContainerLayout, { ContainerLayoutProps } from './container-layout';

export default {
  title: 'Components/ContainerLayout',
  component: ContainerLayout,
  argTypes: {
    useMaxWidth7xl: {
      control: 'boolean',
      description: 'Use max width of 7xl or container',
    },
    useContainer: {
      control: 'boolean',
      description: 'Use a container class',
    },
    useInnerMaxWidth3xl: {
      control: 'boolean',
      description: 'Use an inner div with max width of 3xl',
    },
    paddingX: {
      control: 'text',
      description: 'Padding along the x-axis',
    },
  },
} as Meta;

const Template: Story<ContainerLayoutProps> = (args) => (
  <ContainerLayout {...args}>Content goes here</ContainerLayout>
);

export const Default = Template.bind({});
Default.args = {};

export const MaxWidth7xl = Template.bind({});
MaxWidth7xl.args = {
  useMaxWidth7xl: true,
};

export const Container = Template.bind({});
Container.args = {
  useContainer: true,
};

export const InnerMaxWidth3xl = Template.bind({});
InnerMaxWidth3xl.args = {
  useInnerMaxWidth3xl: true,
};

export const CustomPadding = Template.bind({});
CustomPadding.args = {
  paddingX: 'sm:px-6 lg:px-8',
};
