import {
  getRandomNumber,
  getRandomDate,
  getRandomAmount,
} from 'src/lib-utils/utils';

export interface IForecast {
  /** id */
  id: number;
  /** the forecasted amount of the goal */
  forecastedAmount: string;
  /** the forecasted completion date of the goal */
  forecastedCompletionDate: string;
  /** the forecasted variance of the goal between the forecasted and target amounts */
  varianceAmount: string;
}

/*
 * The Forecast table stores information about each forecast generated for a particular goal,
 * including the forecast date, the forecasted amount of money saved or invested for the
 * goal by the target date, and the variance between the forecasted and target amounts.
 * This allows the user to track how well they are progressing towards their goal and make adjustments as needed.
 *
 * @export
 * @class Forecast
 * @implements {IForecast}
 * */
export class Forecast implements IForecast {
  /** id */
  id = 0;
  /** the forecasted amount of the goal */
  forecastedAmount = '';
  /** the forecasted completion date of the goal */
  forecastedCompletionDate = '';
  /** the forecasted variance of the goal between the forecasted and target amounts */
  varianceAmount = '';

  constructor(data: Partial<Forecast>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Creates a random instance of the Forecast class with all fields populated.
   * @returns {Forecast} A random Forecast.
   */
  static randomInstance(): Forecast {
    return new Forecast({
      id: getRandomNumber(1, 10000),
      forecastedAmount: getRandomAmount(),
      forecastedCompletionDate: getRandomDate(
        new Date(2020, 0, 1),
        new Date(2025, 0, 1),
      ),
      varianceAmount: getRandomAmount(),
    });
  }
}
