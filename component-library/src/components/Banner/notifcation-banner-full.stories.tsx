import { Meta, Story } from '@storybook/react';
import NotificationBannerSimple from './notification-banner-fulls';

export default {
  title: 'Banner/NotificationBannerSimple',
  component: NotificationBannerSimple,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['bottom', 'top'],
      },
      defaultValue: 'bottom', // Default value
    },
    centered: {
      control: 'boolean',
      defaultValue: false, // Default value
    },
    fullScreen: {
      control: 'boolean',
      defaultValue: false, // Default value
    },
    marginLeft: {
      control: 'boolean',
      defaultValue: false, // Default value
    },
    message: {
      control: 'text',
      defaultValue: '', // Default value
    },
  },
} as Meta;

const Template: Story<{
  position?: 'bottom' | 'top';
  centered?: boolean;
  fullScreen?: boolean;
  marginLeft?: boolean;
  message?: string;
}> = (args) => <NotificationBannerSimple {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CenteredBottomBanner = Template.bind({});
CenteredBottomBanner.args = {
  centered: true,
};

export const TopPositionBanner = Template.bind({});
TopPositionBanner.args = {
  position: 'top',
};

export const FullScreenBottomBanner = Template.bind({});
FullScreenBottomBanner.args = {
  fullScreen: true,
  position: 'bottom',
  message: 'This is a full screen banner',
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  message: 'This is a custom message for the banner.',
};
