import { AccountBalanceHistory } from 'src/data-contracts/financial-service/data-contracts';

class TrendAnalysis {
  /**
   * Compute the linear trend line for account balances over time.
   */
  static computeLinearTrendLine(history: AccountBalanceHistory[]): {
    slope: number;
    intercept: number;
  } {
    const n = history.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumXX = 0;

    history.forEach((entry, index) => {
      sumX += index;
      if (entry.balance !== undefined) {
        sumY += entry.balance;
        sumXY += index * entry.balance;
      }
      sumXX += index * index;
    });

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return { slope, intercept };
  }

  /**
   * Compute the moving average for the account balances.
   */
  static computeMovingAverage(
    history: AccountBalanceHistory[],
    windowSize = 3,
  ): number[] {
    return history.map((_, index, arr) => {
      const start = Math.max(0, index - windowSize + 1);
      const end = index + 1;
      const slice = arr.slice(start, end);
      const sum = slice.reduce((acc, entry) => {
        if (entry.balance !== undefined) {
          return acc + entry.balance;
        }
        return acc;
      }, 0);
      return sum / slice.length;
    });
  }

  /**
   * Determine the growth rate between two consecutive balance entries.
   */
  static computeGrowthRate(history: AccountBalanceHistory[]): number[] {
    return history.map((entry, index, arr) => {
      if (index === 0 || !arr[index - 1]?.balance) return 0;
      const prevBalance = arr[index - 1].balance as number;
      const balance = entry.balance as number;
      return ((balance - prevBalance) / Math.abs(prevBalance)) * 100;
    });
  }

  /**
   * Calculate the average balance for each month to detect seasonality.
   */
  static detectSeasonalPatterns(history: AccountBalanceHistory[]): {
    [month: number]: number;
  } {
    const monthlySums = new Map<number, number>();
    const monthlyCounts = new Map<number, number>();

    history.forEach((entry) => {
      if (entry.time && entry.balance !== undefined) {
        const month = new Date(entry.time).getMonth();
        monthlySums.set(month, (monthlySums.get(month) || 0) + entry.balance);
        monthlyCounts.set(month, (monthlyCounts.get(month) || 0) + 1);
      }
    });

    const monthlyAverages = new Map<number, number>();
    for (let month = 0; month < 12; month++) {
      const sum = monthlySums.get(month) || 0;
      const count = monthlyCounts.get(month) || 0;
      monthlyAverages.set(month, count ? sum / count : 0);
    }

    return Object.fromEntries(monthlyAverages);
  }

  /**
   * Compute the cumulative sum of account balances over time.
   */
  static computeCumulativeSum(history: AccountBalanceHistory[]): number[] {
    let sum = 0;
    return history.map((entry) => {
      if (entry.balance !== undefined) {
        sum += entry.balance;
      }
      return sum;
    });
  }
}

// Usage
// const trendLine = TrendAnalysis.computeLinearTrendLine(historyData);
export { TrendAnalysis };
