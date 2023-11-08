import { Story, Meta } from '@storybook/react';
import PanelLayout, { PanelLayoutProps } from './panel-layout';

export default {
  title: 'Components/PanelLayout',
  component: PanelLayout,
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
        options: ['white', 'gray-50'],
      },
    },
    useRounded: {
      control: 'boolean',
    },
    useShadow: {
      control: 'boolean',
    },
    useDivider: {
      control: 'boolean',
    },
    headerPadding: {
      control: 'boolean',
    },
    footerPadding: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<PanelLayoutProps> = (args) => (
  <PanelLayout {...args}>Content goes here</PanelLayout>
);

export const Default = Template.bind({});
Default.args = {};

export const RoundedShadowCard = Template.bind({});
RoundedShadowCard.args = {
  useRounded: true,
  useShadow: true,
};

export const DividerCard = Template.bind({});
DividerCard.args = {
  useDivider: true,
};

export const GrayBgCard = Template.bind({});
GrayBgCard.args = {
  bgColor: 'gray-50',
};
