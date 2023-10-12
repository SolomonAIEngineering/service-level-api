import { AccountBalanceHistory } from 'src/data-contracts/financial-service/data-contracts';
declare class TrendAnalysis {
    /**
     * Compute the linear trend line for account balances over time.
     */
    static computeLinearTrendLine(history: AccountBalanceHistory[]): {
        slope: number;
        intercept: number;
    };
    /**
     * Compute the moving average for the account balances.
     */
    static computeMovingAverage(history: AccountBalanceHistory[], windowSize?: number): number[];
    /**
     * Determine the growth rate between two consecutive balance entries.
     */
    static computeGrowthRate(history: AccountBalanceHistory[]): number[];
    /**
     * Calculate the average balance for each month to detect seasonality.
     */
    static detectSeasonalPatterns(history: AccountBalanceHistory[]): {
        [month: number]: number;
    };
    /**
     * Compute the cumulative sum of account balances over time.
     */
    static computeCumulativeSum(history: AccountBalanceHistory[]): number[];
}
export { TrendAnalysis };
