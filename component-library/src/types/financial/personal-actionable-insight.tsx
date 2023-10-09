import {
  PersonalActionableInsight,
  PersonalActionableInsightName,
} from '../../data-contracts/financial-service/data-contracts';

class PersonalActionableInsightClass implements PersonalActionableInsight {
  constructor(data: Partial<PersonalActionableInsight> = {}) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): PersonalActionableInsight {
    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 10000000000),
    ).toISOString();

    const randomInsightName = (): PersonalActionableInsightName => {
      const insightNames = [
        'PERSONAL_ACTIONABLE_INSIGHT_NAME_UNSPECIFIED',
        'PERSONAL_ACTIONABLE_INSIGHT_NAME_EXPENSE',
        'PERSONAL_ACTIONABLE_INSIGHT_NAME_EMERGENCY_FUND',
        'PERSONAL_ACTIONABLE_INSIGHT_NAME_DEBT_PRIORITIZATION',
        'PERSONAL_ACTIONABLE_INSIGHT_NAME_NON_ESSENTIAL_EXPENSES',
        'PERSONAL_ACTIONABLE_INSIGHT_NAME_NON_SUBSCRIPTIONS',
        'PERSONAL_ACTIONABLE_INSIGHT_NAME_DISCRETIONARY_SPENDING',
      ];

      return insightNames[
        Math.floor(Math.random() * insightNames.length)
      ] as PersonalActionableInsightName;
    };

    return new PersonalActionableInsightClass({
      action: 'Random action advice',
      description: 'This is a randomly generated actionable insight.',
      expectedBenefit: 'Potential benefit from this random advice.',
      generatedTime: randomDate,
      id: Math.floor(Math.random() * 100000).toString(),
      insightName: randomInsightName(),
      metricsToOptimizeFor: ['metric1', 'metric2'], // You can randomize this as needed.
      tags: ['tag1', 'tag2'], // You can randomize this as needed.
      takeaway: 'Random key takeaway from the insight',
    });
  }
}

export { PersonalActionableInsightClass };
