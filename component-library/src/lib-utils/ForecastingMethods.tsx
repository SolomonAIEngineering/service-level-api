import { AccountBalanceHistory } from 'src/types';

class ForecastingMethods {
  static simpleMovingAverage(
    data: AccountBalanceHistory[],
    period: number,
  ): number[] {
    const values = data.map((item) => item.balance);
    const sma: number[] = [];
    for (let i = 0; i <= values.length - period; i++) {
      let sum = 0;
      for (let j = i; j < i + period; j++) {
        sum += values[j];
      }
      sma.push(sum / period);
    }
    return sma;
  }

  static exponentialMovingAverage(
    data: AccountBalanceHistory[],
    period: number,
  ): number[] {
    const values = data.map((item) => item.balance);
    const ema: number[] = [];
    const multiplier = 2 / (period + 1);
    ema[0] = values[0];
    for (let i = 1; i < values.length; i++) {
      ema[i] = (values[i] - ema[i - 1]) * multiplier + ema[i - 1];
    }
    return ema;
  }

  static linearRegressionForecast(data: AccountBalanceHistory[]): number {
    const values = data.map((item) => item.balance);
    const len = values.length;
    let [sumX, sumY, sumXY, sumXX] = [0, 0, 0, 0];
    for (let i = 0; i < len; i++) {
      sumX += i;
      sumY += values[i];
      sumXY += i * values[i];
      sumXX += i * i;
    }
    const slope = (len * sumXY - sumX * sumY) / (len * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / len;
    return slope * len + intercept; // Forecast for the next point
  }

  static simpleExponentialSmoothing(
    data: AccountBalanceHistory[],
    alpha: number,
  ): number[] {
    const values = data.map((item) => item.balance);
    const ses: number[] = [];
    ses[0] = values[0];
    for (let i = 1; i < values.length; i++) {
      ses[i] = alpha * values[i] + (1 - alpha) * ses[i - 1];
    }
    return ses;
  }

  static holtsLinearExponentialSmoothing(
    data: AccountBalanceHistory[],
    alpha: number,
    beta: number,
  ): { level: number[]; trend: number[]; forecast: number[] } {
    const values = data.map((item) => item.balance);
    const level: number[] = [];
    const trend: number[] = [];
    const forecast: number[] = [];

    level[0] = values[0];
    trend[0] = values[1] - values[0];
    for (let i = 1; i < values.length + 1; i++) {
      level[i] =
        alpha * values[i - 1] + (1 - alpha) * (level[i - 1] + trend[i - 1]);
      trend[i] = beta * (level[i] - level[i - 1]) + (1 - beta) * trend[i - 1];
      forecast[i] = level[i] + trend[i];
    }

    return { level, trend, forecast };
  }
}

export { ForecastingMethods };
