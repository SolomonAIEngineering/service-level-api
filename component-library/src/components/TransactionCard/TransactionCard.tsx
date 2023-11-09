// TransactionCard.tsx
import React from 'react';

interface Transaction {
  transactionID: string;
  amount: string;
  date: string;
  description: string;
}

interface TransactionCardProps {
  transactions: Transaction[];
}

/**
 * The `TransactionCard` component displays a list of transactions in a table format.
 */
const TransactionCard: React.FC<TransactionCardProps> = ({ transactions }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white p-6 max-w-full overflow-x-auto">
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-200">
              Transaction ID
            </th>
            <th className="px-4 py-2 border-b border-gray-200">Amount</th>
            <th className="px-4 py-2 border-b border-gray-200">Date</th>
            <th className="px-4 py-2 border-b border-gray-200">Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="px-4 py-2 border-b border-gray-200">
                {transaction.transactionID}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                {transaction.amount}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                {transaction.date}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                {transaction.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionCard;
