import { Forecast as Forecast } from 'src/data-contracts/financial-service/data-contracts';
export declare class ForecastClass implements Forecast {
    /** id */
    id: string;
    /** the forecasted amount of the goal */
    forecastedAmount: string;
    /** the forecasted completion date of the goal */
    forecastedCompletionDate: string;
    /** the forecasted variance of the goal between the forecasted and target amounts */
    varianceAmount: string;
    constructor(data: Partial<Forecast>);
    /**
     * Creates a random instance of the Forecast class with all fields populated.
     * @returns {Forecast} A random Forecast.
     */
    static randomInstance(): Forecast;
}
