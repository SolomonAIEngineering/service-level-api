// CreditCard.tsx
import React from 'react';

interface CreditCardProps {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardType?: 'Visa' | 'MasterCard' | 'Amex' | 'Discover';
}

/**
 * The `CreditCard` component displays a representation of a credit card with essential details.
 */
const CreditCard: React.FC<CreditCardProps> = ({
  cardholderName,
  cardNumber,
  expiryDate,
  cvv,
  cardType = 'Visa',
}) => {
  return (
    <div className="m-2 border rounded-lg p-6 bg-gradient-to-tr from-gray-600 to-slate-900 text-white md:min-w-[300px]">
      <div className="flex justify-between">
        <div>{cardType}</div>
        <div className="font-semibold">BANK</div>
      </div>
      <div className="my-4 text-lg font-base">
        <div>{cardNumber.match(/.{1,4}/g)?.join(' ')}</div>
        <div>{cardholderName}</div>
        <div>{expiryDate}</div>
      </div>
      <div className="text-sm">CVV: {cvv}</div>
    </div>
  );
};

export default CreditCard;
