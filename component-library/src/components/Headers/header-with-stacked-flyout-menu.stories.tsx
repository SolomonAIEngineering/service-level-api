import { Story, Meta } from '@storybook/react';

import { ChartPieIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline'; // Ensure the path is correct
import HeaderWithStackedFlyoutMenu, {
  HeaderWithStackedFlyoutMenuProps,
} from './header-with-stacked-flyout-menu';

export default {
  title: 'Header/HeaderWithStackedFlyoutMenu',
  component: HeaderWithStackedFlyoutMenu,
} as Meta;

const Template: Story<HeaderWithStackedFlyoutMenuProps> = (args) => (
  <HeaderWithStackedFlyoutMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logoSrc: 'https://via.placeholder.com/150',
  headerTitle: 'Your Company',
  dropdownTitle: 'Products',
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
};

export const NoHeaderOptions = Template.bind({});
NoHeaderOptions.args = {
  ...Default.args,
  headerOptions: [],
};

export const NoCallsToAction = Template.bind({});
NoCallsToAction.args = {
  ...Default.args,
  callsToAction: [],
};

export const NoProducts = Template.bind({});
NoProducts.args = {
  ...Default.args,
  products: [],
};
