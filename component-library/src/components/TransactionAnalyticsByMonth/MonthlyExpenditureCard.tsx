import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';

type Props = {
  transactions: Transaction[];
  children?: React.ReactNode;
};

const MonthlyExpenditureCard: React.FC<Props> = ({
  transactions,
  children,
}) => {
  const totalExpenditure = transactions
    .filter((txn) => txn.amount && txn.amount > 0)
    .reduce((acc, txn) => acc + Math.abs(txn.amount || 0), 0);

  // plaid treats negative amounts as income and positive amounts as expenditure
  const totalIncome = transactions
    .filter((txn) => txn.amount && txn.amount < 0)
    .reduce((acc, txn) => acc + Math.abs(txn.amount || 0), 0);

  const netSavings = totalIncome - totalExpenditure;
  const averageTransactionSize =
    transactions.length > 0
      ? transactions.reduce((acc, txn) => acc + (txn.amount || 0), 0) /
        transactions.length
      : 0;

  const largestTransaction = Math.max(
    ...transactions.map((txn) => txn.amount || 0),
  );
  const smallestTransaction = Math.min(
    ...transactions.map((txn) => txn.amount || 0),
  );

  // Merchant Breakdown
  const merchantBreakdown: { [key: string]: number } = {};
  transactions.forEach((txn) => {
    if (txn.merchantName) {
      merchantBreakdown[txn.merchantName] =
        (merchantBreakdown[txn.merchantName] || 0) + 1;
    }
  });

  // Payment Method Breakdown
  const paymentMethodBreakdown: { [key: string]: number } = {};
  transactions.forEach((txn) => {
    if (txn.paymentMetaPaymentMethod) {
      paymentMethodBreakdown[txn.paymentMetaPaymentMethod] =
        (paymentMethodBreakdown[txn.paymentMetaPaymentMethod] || 0) + 1;
    }
  });

  // Frequency of Transactions
  const transactionFrequency: { [key: string]: number } = {};
  transactions.forEach((txn) => {
    const date = txn.currentDate; // Assuming currentDate represents the date of the transaction
    if (date) {
      transactionFrequency[date] = (transactionFrequency[date] || 0) + 1;
    }
  });

  // Cash Flow Analysis
  const cashFlowAnalysis: { [key: string]: number } = {};
  transactions.forEach((txn) => {
    const date = txn.currentDate;
    if (date) {
      cashFlowAnalysis[date] =
        (cashFlowAnalysis[date] || 0) + (txn.amount || 0);
    }
  });

  return (
    <div className="bg-white">
      <h2 className="text-xl font-bold mb-4">Transaction Metrics</h2>
      {children}
      <div className="grid gap-4 grid-cols-2">
        <Card className="contain">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Expenditure
            </CardTitle>
          </CardHeader>
          <CardContent className="w-fit">
            <div className="font-bold"> ${totalExpenditure.toFixed(2)}</div>
            {/* <p className="text-xs font-bold">
              +20.1% from last month
            </p> */}
          </CardContent>
        </Card>
        <Card className="contain">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
          </CardHeader>
          <CardContent className="w-fit">
            <div className="font-bold"> ${totalIncome.toFixed(2)}</div>
            {/* <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p> */}
          </CardContent>
        </Card>
        <Card className="contain">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Net Savings/Net Expenditure
            </CardTitle>
          </CardHeader>
          <CardContent className="w-fit">
            <div className="font-bold"> ${netSavings.toFixed(2)}</div>
            {/* <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p> */}
          </CardContent>
        </Card>
        <Card className="m-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Further Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs font-bold pt-4">
              largest transaction: ${largestTransaction.toFixed(2)}
            </p>{' '}
            <p className="text-xs font-bold pt-4">
              smallest transaction: ${smallestTransaction.toFixed(2)}
            </p>
            <p className="text-xs font-bold pt-4">
              average transaction: ${averageTransactionSize.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>

      <ul>
        <li className="mt-4">
          <strong>Merchant Breakdown:</strong>
          <ul>
            {Object.entries(merchantBreakdown).map(([merchant, count]) => (
              <li key={merchant}>
                {merchant}: {count} transactions
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-4">
          <strong>Payment Method Breakdown:</strong>
          <ul>
            {Object.entries(paymentMethodBreakdown).map(([method, count]) => (
              <li key={method}>
                {method}: {count} transactions
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-4">
          <strong>Frequency of Transactions:</strong>
          <ul>
            {Object.entries(transactionFrequency).map(([date, count]) => (
              <li key={date}>
                {date}: {count} transactions
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-4">
          <strong>Cash Flow Analysis:</strong>
          <ul>
            {Object.entries(cashFlowAnalysis).map(([date, amount]) => (
              <li key={date}>
                {date}: ${amount.toFixed(2)}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export { MonthlyExpenditureCard };
