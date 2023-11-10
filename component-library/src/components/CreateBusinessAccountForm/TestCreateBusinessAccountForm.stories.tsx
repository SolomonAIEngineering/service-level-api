import { Story, Meta } from '@storybook/react';

import { CreateAccountV2RequestClass } from 'src/types/request-response/create-account-v2';
import { TestMultiStepCreateBusinessAccountForm } from './TestCreateBusinessAccountForm';

export default {
  title: 'Forms/Onboarding/TestCreateBusinessAccount',
  component: TestMultiStepCreateBusinessAccountForm,
} as Meta;

const Template: Story = (args) => (
  <TestMultiStepCreateBusinessAccountForm
    callback={function (data: CreateAccountV2RequestClass): void {
      console.log(data);
    }}
    {...args}
  />
);

export const DefaultYo = Template.bind({});
DefaultYo.args = {};
