import { Story, Meta } from '@storybook/react';
import NotificationComponent, {
  NotificationComponentProps,
} from './notifcation';

export default {
  title: 'Notifications/NotificationComponent',
  component: NotificationComponent,
  argTypes: {
    iconType: {
      control: {
        type: 'select',
        options: ['inbox', 'check', 'none'],
      },
    },
  },
} as Meta;

const Template: Story<NotificationComponentProps> = (args) => (
  <NotificationComponent {...args} />
);

export const InboxNotification = Template.bind({});
InboxNotification.args = {
  imageURL: 'https://example.com/avatar.jpg',
  title: 'John Doe',
  message: 'You have a new message!',
  actions: <button>Action</button>,
  iconType: 'inbox',
};

export const CheckNotification = Template.bind({});
CheckNotification.args = {
  ...InboxNotification.args,
  iconType: 'check',
};

export const NoIconNotification = Template.bind({});
NoIconNotification.args = {
  ...InboxNotification.args,
  iconType: 'none',
};
