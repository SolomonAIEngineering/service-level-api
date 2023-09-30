import { AccountBalanceHistory } from 'src/types';

class StatisticalTests {
  // 1. Mean Test: Calculates the average balance.
  static mean(data: AccountBalanceHistory[]): number {
    const sum = data.reduce((acc, record) => acc + record.balance, 0);
    return sum / data.length;
  }

  // 2. Variance Test: Calculates the variance of balances.
  static variance(data: AccountBalanceHistory[]): number {
    const avg = this.mean(data);
    const sumOfSquares = data.reduce(
      (acc, record) => acc + Math.pow(record.balance - avg, 2),
      0,
    );
    return sumOfSquares / data.length;
  }

  // 3. Standard Deviation Test: Computes the standard deviation of balances.
  static standardDeviation(data: AccountBalanceHistory[]): number {
    return Math.sqrt(this.variance(data));
  }

  // 4. Kurtosis Test: Evaluates the "tailedness" of the balance distribution.
  static kurtosis(data: AccountBalanceHistory[]): number {
    const n = data.length;
    const avg = this.mean(data);
    const stdDev = this.standardDeviation(data);
    const sumOfFourthPowers = data.reduce(
      (acc, record) => acc + Math.pow((record.balance - avg) / stdDev, 4),
      0,
    );
    return (
      (n * (n + 1) * sumOfFourthPowers - 3 * (n - 1) * (n - 1)) /
      ((n - 1) * (n - 2) * (n - 3))
    );
  }

  // 5. Skewness Test: Measures the asymmetry of the balance distribution.
  static skewness(data: AccountBalanceHistory[]): number {
    const n = data.length;
    const avg = this.mean(data);
    const stdDev = this.standardDeviation(data);
    const sumOfCubedDeviations = data.reduce(
      (acc, record) => acc + Math.pow(record.balance - avg, 3),
      0,
    );
    return (
      (n * sumOfCubedDeviations) / ((n - 1) * (n - 2) * Math.pow(stdDev, 3))
    );
  }
}

export { StatisticalTests };
