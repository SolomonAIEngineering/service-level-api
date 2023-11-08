import { Story, Meta } from '@storybook/react';

import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  PlayCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'; // Ensure the path is correct
import {
  HeaderWithFullWidthFlyoutMenu,
  HeaderWithFullWidthFlyoutMenuProps,
} from './header-with-full-width-flyout-menu';

export default {
  title: 'Header/HeaderWithFullWidthFlyoutMenu',
  component: HeaderWithFullWidthFlyoutMenu,
} as Meta;

const Template: Story<HeaderWithFullWidthFlyoutMenuProps> = (args) => (
  <HeaderWithFullWidthFlyoutMenu {...args} />
);

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {
  products: [
    {
      name: 'Analytics',
      description:
        'Get a better understanding where your traffic is coming from',
      href: '#',
      icon: ChartPieIcon,
      current: true,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers with our engagement tool',
      href: '#',
      icon: CursorArrowRaysIcon,
      current: true,
    },
    {
      name: 'Security',
      description: 'Your customers’ data will be safe and secure',
      href: '#',
      icon: FingerPrintIcon,
      current: true,
    },
    {
      name: 'Integrations',
      description: 'Your customers’ data will be safe and secure',
      href: '#',
      icon: SquaresPlusIcon,
      current: true,
    },
  ],
  callsToAction: [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon, current: true },
    { name: 'Contact sales', href: '#', icon: PhoneIcon, current: true },
    {
      name: 'View all products',
      href: '#',
      icon: SquaresPlusIcon,
      current: true,
    },
  ],
  headerOptions: [
    {
      name: 'Option 1',
      href: '#',
      icon: ChartPieIcon,
      current: true,
    },
    {
      name: 'Option 2',
      href: '#',
      icon: CursorArrowRaysIcon,
      current: true,
    },
  ],
  headerActionButtonTitle: 'Get Started',
  headerActionButtonHandler: () => alert('Button Clicked!'),
  logoSrc: 'https://via.placeholder.com/150',
  headerTitle: 'Your Company',
  dropdownTitle: 'Products',
};
