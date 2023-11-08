import {
  AIPoweredInsights,
  Frequency,
} from 'src/data-contracts/user-service/data-contracts';

export class AIPoweredInsightsClass implements AIPoweredInsights {
  /**
   * List of areas of interest for insights
   * List of areas for insights
   */
  areasOfInterest?: Array<string>;
  /** True if user agrees to share data for insights */
  dataSharing?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  insightFrequency?: Frequency;

  constructor(data: Partial<AIPoweredInsights>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): AIPoweredInsights {
    // Placeholder implementation for generating a random AIPoweredInsights
    // You will need to create an actual instance with random data here
    return new AIPoweredInsightsClass({
      areasOfInterest: ['area1', 'area2'],
      dataSharing: true,
      id: '1234567890',
      insightFrequency: 'FREQUENCY_DAILY',
    });
  }
}
