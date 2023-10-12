import { AccountBalanceHistory } from 'src/data-contracts/financial-service/data-contracts';
declare class StatisticalTests {
    static mean(data: AccountBalanceHistory[]): number;
    static variance(data: AccountBalanceHistory[]): number;
    static standardDeviation(data: AccountBalanceHistory[]): number;
    static kurtosis(data: AccountBalanceHistory[]): number;
    static skewness(data: AccountBalanceHistory[]): number;
}
export { StatisticalTests };
