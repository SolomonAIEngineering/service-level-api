import { Story, Meta } from '@storybook/react';

import { MultiStepSmartGoalForm } from './CreateSmartGoalForm';
import { MelodyFinancialContextClass } from 'src/types/financial/melody-financial-context';
import { BankAccountClass } from 'src/types/financial/bank-account';
import { InvestmentAccountClass } from 'src/types/financial/investment-account';
import { CreditAccountClass } from 'src/types/financial/credit-account';
import { UserAccountClass } from 'src/types/user/user-account';
import { SmartGoal } from 'src/data-contracts/financial-service/data-contracts';

export default {
  title: 'Forms/SmartGoal/MultiStepSmartGoalForm',
  component: MultiStepSmartGoalForm,
} as Meta;

const Template: Story = (args) => (
  <MultiStepSmartGoalForm
    userId={'10'}
    apiToken={''}
    model={'gpt-3.5-turbo'}
    temperature={0.7}
    top_p={1}
    frequency_penalty={0}
    presence_penalty={0}
    max_tokens={500}
    globalFinancialContext={
      new MelodyFinancialContextClass({
        bankAccounts: Array.from({ length: 2 }, (_) =>
          BankAccountClass.randomInstance(),
        ),
        investmentAccounts: Array.from({ length: 2 }, (_) =>
          InvestmentAccountClass.randomInstance(),
        ),
        creditAccounts: Array.from({ length: 2 }, (_) =>
          CreditAccountClass.randomInstance(),
        ),
        paymentChannels: [],
        locations: [],
      })
    }
    userAccount={new UserAccountClass()}
    userName={'yoan yomba'}
    userProfileImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    callback={function (smartGoal: SmartGoal): void {
      console.log(smartGoal);
    }}
    bankAccounts={Array.from({ length: 5 }, (_) =>
      BankAccountClass.randomInstance(),
    )}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {};
