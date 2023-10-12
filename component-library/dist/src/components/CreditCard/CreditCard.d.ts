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
declare const CreditCard: React.FC<CreditCardProps>;
export default CreditCard;
