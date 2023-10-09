/* eslint-disable import/order */
/* eslint-disable import/no-default-export */

import type { Meta, StoryObj } from '@storybook/react';

import { ActionableInsightsView } from './ActionableInsightsView';
import { PersonalActionableInsightClass } from 'src/types/financial/personal-actionable-insight';
import { FinancialProfileMetricsClass } from 'src/types';
import { PersonalActionableInsight } from 'src/data-contracts/financial-service/data-contracts';

const meta: Meta<typeof ActionableInsightsView> = {
  title: 'Features/ActionableInsightsView',
  component: ActionableInsightsView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // className: { control: 'text' },
  },
} satisfies Meta<typeof ActionableInsightsView>;

export default meta;

type Story = StoryObj<typeof meta>;

const generateUniqueInsights = (length: number) => {
  const insights: PersonalActionableInsight[] = [];
  const existingNames: Set<string> = new Set();

  while (insights.length < length) {
    const insight = PersonalActionableInsightClass.randomInstance();
    if (insight.insightName && !existingNames.has(insight.insightName)) {
      existingNames.add(insight.insightName);
      insights.push(insight);
    }
  }

  return insights;
};

export const DefaultInsightsView: Story = {
  args: {
    insights: generateUniqueInsights(5),

    historicalFinancialProfile: Array.from({ length: 20 }, () =>
      FinancialProfileMetricsClass.randomInstance(),
    ),
  },
};

// Add more stories as needed
