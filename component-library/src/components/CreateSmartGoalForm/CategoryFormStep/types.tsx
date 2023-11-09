export type PrimaryCategory =
  | 'INCOME'
  | 'TRANSFER_IN'
  | 'TRANSFER_OUT'
  | 'LOAN_PAYMENTS'
  | 'BANK_FEES'
  | 'ENTERTAINMENT'
  | 'FOOD_AND_DRINK'
  | 'GENERAL_MERCHANDISE'
  | 'HOME_IMPROVEMENT'
  | 'MEDICAL'
  | 'PERSONAL_CARE'
  | 'GENERAL_SERVICES'
  | 'GOVERNMENT_AND_NON_PROFIT'
  | 'TRANSPORTATION'
  | 'TRAVEL'
  | 'RENT_AND_UTILITIES';

const primaryCategories = [
  'INCOME',
  'TRANSFER_IN',
  'TRANSFER_OUT',
  'LOAN_PAYMENTS',
  'BANK_FEES',
  'ENTERTAINMENT',
  'FOOD_AND_DRINK',
  'GENERAL_MERCHANDISE',
  'HOME_IMPROVEMENT',
  'MEDICAL',
  'PERSONAL_CARE',
  'GENERAL_SERVICES',
  'GOVERNMENT_AND_NON_PROFIT',
  'TRANSPORTATION',
  'TRAVEL',
  'RENT_AND_UTILITIES',
] as const;

export type SecondaryCategory =
  | 'INCOME_DIVIDENDS'
  | 'INCOME_INTEREST_EARNED'
  | 'INCOME_RETIREMENT_PENSION'
  | 'INCOME_TAX_REFUND'
  | 'INCOME_UNEMPLOYMENT'
  | 'INCOME_WAGES'
  | 'INCOME_OTHER_INCOME'
  | 'TRANSFER_IN_CASH_ADVANCES_AND_LOANS'
  | 'TRANSFER_IN_DEPOSIT'
  | 'TRANSFER_IN_INVESTMENT_AND_RETIREMENT_FUNDS'
  | 'TRANSFER_IN_SAVINGS'
  | 'TRANSFER_IN_ACCOUNT_TRANSFER'
  | 'TRANSFER_IN_OTHER_TRANSFER_IN'
  | 'TRANSFER_OUT_INVESTMENT_AND_RETIREMENT_FUNDS'
  | 'TRANSFER_OUT_SAVINGS'
  | 'TRANSFER_OUT_WITHDRAWAL'
  | 'TRANSFER_OUT_ACCOUNT_TRANSFER'
  | 'TRANSFER_OUT_OTHER_TRANSFER_OUT'
  | 'LOAN_PAYMENTS_CAR_PAYMENT'
  | 'LOAN_PAYMENTS_CREDIT_CARD_PAYMENT'
  | 'LOAN_PAYMENTS_PERSONAL_LOAN_PAYMENT'
  | 'LOAN_PAYMENTS_MORTGAGE_PAYMENT'
  | 'LOAN_PAYMENTS_STUDENT_LOAN_PAYMENT'
  | 'LOAN_PAYMENTS_OTHER_PAYMENT'
  | 'BANK_FEES_ATM_FEES'
  | 'BANK_FEES_FOREIGN_TRANSACTION_FEES'
  | 'BANK_FEES_INSUFFICIENT_FUNDS'
  | 'BANK_FEES_INTEREST_CHARGE'
  | 'BANK_FEES_OVERDRAFT_FEES'
  | 'BANK_FEES_OTHER_BANK_FEES'
  | 'ENTERTAINMENT_CASINOS_AND_GAMBLING'
  | 'ENTERTAINMENT_MUSIC_AND_AUDIO'
  | 'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS'
  | 'ENTERTAINMENT_TV_AND_MOVIES'
  | 'ENTERTAINMENT_VIDEO_GAMES'
  | 'ENTERTAINMENT_OTHER_ENTERTAINMENT'
  | 'FOOD_AND_DRINK_BEER_WINE_AND_LIQUOR'
  | 'FOOD_AND_DRINK_COFFEE'
  | 'FOOD_AND_DRINK_FAST_FOOD'
  | 'FOOD_AND_DRINK_GROCERIES'
  | 'FOOD_AND_DRINK_RESTAURANT'
  | 'FOOD_AND_DRINK_VENDING_MACHINES'
  | 'FOOD_AND_DRINK_OTHER_FOOD_AND_DRINK'
  | 'GENERAL_MERCHANDISE_BOOKSTORES_AND_NEWSSTANDS'
  | 'GENERAL_MERCHANDISE_CLOTHING_AND_ACCESSORIES'
  | 'GENERAL_MERCHANDISE_CONVENIENCE_STORES'
  | 'GENERAL_MERCHANDISE_DEPARTMENT_STORES'
  | 'GENERAL_MERCHANDISE_DISCOUNT_STORES'
  | 'GENERAL_MERCHANDISE_ELECTRONICS'
  | 'GENERAL_MERCHANDISE_GIFTS_AND_NOVELTIES'
  | 'GENERAL_MERCHANDISE_OFFICE_SUPPLIES'
  | 'GENERAL_MERCHANDISE_ONLINE_MARKETPLACES'
  | 'GENERAL_MERCHANDISE_PET_SUPPLIES'
  | 'GENERAL_MERCHANDISE_SPORTING_GOODS'
  | 'GENERAL_MERCHANDISE_SUPERSTORES'
  | 'GENERAL_MERCHANDISE_TOBACCO_AND_VAPE'
  | 'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE'
  | 'HOME_IMPROVEMENT_FURNITURE'
  | 'HOME_IMPROVEMENT_HARDWARE'
  | 'HOME_IMPROVEMENT_REPAIR_AND_MAINTENANCE'
  | 'HOME_IMPROVEMENT_SECURITY'
  | 'HOME_IMPROVEMENT_OTHER_HOME_IMPROVEMENT'
  | 'MEDICAL_DENTAL_CARE'
  | 'MEDICAL_EYE_CARE'
  | 'MEDICAL_NURSING_CARE'
  | 'MEDICAL_PHARMACIES_AND_SUPPLEMENTS'
  | 'MEDICAL_PRIMARY_CARE'
  | 'MEDICAL_VETERINARY_SERVICES'
  | 'MEDICAL_OTHER_MEDICAL'
  | 'PERSONAL_CARE_GYMS_AND_FITNESS_CENTERS'
  | 'PERSONAL_CARE_HAIR_AND_BEAUTY'
  | 'PERSONAL_CARE_LAUNDRY_AND_DRY_CLEANING'
  | 'PERSONAL_CARE_OTHER_PERSONAL_CARE'
  | 'GENERAL_SERVICES_ACCOUNTING_AND_FINANCIAL_PLANNING'
  | 'GENERAL_SERVICES_AUTOMOTIVE'
  | 'GENERAL_SERVICES_CHILDCARE'
  | 'GENERAL_SERVICES_CONSULTING_AND_LEGAL'
  | 'GENERAL_SERVICES_EDUCATION'
  | 'GENERAL_SERVICES_INSURANCE'
  | 'GENERAL_SERVICES_POSTAGE_AND_SHIPPING'
  | 'GENERAL_SERVICES_STORAGE'
  | 'GENERAL_SERVICES_OTHER_GENERAL_SERVICES'
  | 'GOVERNMENT_AND_NON_PROFIT_DONATIONS'
  | 'GOVERNMENT_AND_NON_PROFIT_GOVERNMENT_DEPARTMENTS_AND_AGENCIES'
  | 'GOVERNMENT_AND_NON_PROFIT_TAX_PAYMENT'
  | 'GOVERNMENT_AND_NON_PROFIT_OTHER_GOVERNMENT_AND_NON_PROFIT'
  | 'TRANSPORTATION_BIKES_AND_SCOOTERS'
  | 'TRANSPORTATION_GAS'
  | 'TRANSPORTATION_PARKING'
  | 'TRANSPORTATION_PUBLIC_TRANSIT'
  | 'TRANSPORTATION_TAXIS_AND_RIDE_SHARES'
  | 'TRANSPORTATION_TOLLS'
  | 'TRANSPORTATION_OTHER_TRANSPORTATION'
  | 'TRAVEL_FLIGHTS'
  | 'TRAVEL_LODGING'
  | 'TRAVEL_RENTAL_CARS'
  | 'TRAVEL_OTHER_TRAVEL'
  | 'RENT_AND_UTILITIES_GAS_AND_ELECTRICITY'
  | 'RENT_AND_UTILITIES_INTERNET_AND_CABLE'
  | 'RENT_AND_UTILITIES_RENT'
  | 'RENT_AND_UTILITIES_SEWAGE_AND_WASTE_MANAGEMENT'
  | 'RENT_AND_UTILITIES_TELEPHONE'
  | 'RENT_AND_UTILITIES_WATER'
  | 'RENT_AND_UTILITIES_OTHER_UTILITIES';

const secondaryCategories = [
  'INCOME_DIVIDENDS',
  'INCOME_INTEREST_EARNED',
  'INCOME_RETIREMENT_PENSION',
  'INCOME_TAX_REFUND',
  'INCOME_UNEMPLOYMENT',
  'INCOME_WAGES',
  'INCOME_OTHER_INCOME',
  'TRANSFER_IN_CASH_ADVANCES_AND_LOANS',
  'TRANSFER_IN_DEPOSIT',
  'TRANSFER_IN_INVESTMENT_AND_RETIREMENT_FUNDS',
  'TRANSFER_IN_SAVINGS',
  'TRANSFER_IN_ACCOUNT_TRANSFER',
  'TRANSFER_IN_OTHER_TRANSFER_IN',
  'TRANSFER_OUT_INVESTMENT_AND_RETIREMENT_FUNDS',
  'TRANSFER_OUT_SAVINGS',
  'TRANSFER_OUT_WITHDRAWAL',
  'TRANSFER_OUT_ACCOUNT_TRANSFER',
  'TRANSFER_OUT_OTHER_TRANSFER_OUT',
  'LOAN_PAYMENTS_CAR_PAYMENT',
  'LOAN_PAYMENTS_CREDIT_CARD_PAYMENT',
  'LOAN_PAYMENTS_PERSONAL_LOAN_PAYMENT',
  'LOAN_PAYMENTS_MORTGAGE_PAYMENT',
  'LOAN_PAYMENTS_STUDENT_LOAN_PAYMENT',
  'LOAN_PAYMENTS_OTHER_PAYMENT',
  'BANK_FEES_ATM_FEES',
  'BANK_FEES_FOREIGN_TRANSACTION_FEES',
  'BANK_FEES_INSUFFICIENT_FUNDS',
  'BANK_FEES_INTEREST_CHARGE',
  'BANK_FEES_OVERDRAFT_FEES',
  'BANK_FEES_OTHER_BANK_FEES',
  'ENTERTAINMENT_CASINOS_AND_GAMBLING',
  'ENTERTAINMENT_MUSIC_AND_AUDIO',
  'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
  'ENTERTAINMENT_TV_AND_MOVIES',
  'ENTERTAINMENT_VIDEO_GAMES',
  'ENTERTAINMENT_OTHER_ENTERTAINMENT',
  'FOOD_AND_DRINK_BEER_WINE_AND_LIQUOR',
  'FOOD_AND_DRINK_COFFEE',
  'FOOD_AND_DRINK_FAST_FOOD',
  'FOOD_AND_DRINK_GROCERIES',
  'FOOD_AND_DRINK_RESTAURANT',
  'FOOD_AND_DRINK_VENDING_MACHINES',
  'FOOD_AND_DRINK_OTHER_FOOD_AND_DRINK',
  'GENERAL_MERCHANDISE_BOOKSTORES_AND_NEWSSTANDS',
  'GENERAL_MERCHANDISE_CLOTHING_AND_ACCESSORIES',
  'GENERAL_MERCHANDISE_CONVENIENCE_STORES',
  'GENERAL_MERCHANDISE_DEPARTMENT_STORES',
  'GENERAL_MERCHANDISE_DISCOUNT_STORES',
  'GENERAL_MERCHANDISE_ELECTRONICS',
  'GENERAL_MERCHANDISE_GIFTS_AND_NOVELTIES',
  'GENERAL_MERCHANDISE_OFFICE_SUPPLIES',
  'GENERAL_MERCHANDISE_ONLINE_MARKETPLACES',
  'GENERAL_MERCHANDISE_PET_SUPPLIES',
  'GENERAL_MERCHANDISE_SPORTING_GOODS',
  'GENERAL_MERCHANDISE_SUPERSTORES',
  'GENERAL_MERCHANDISE_TOBACCO_AND_VAPE',
  'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
  'HOME_IMPROVEMENT_FURNITURE',
  'HOME_IMPROVEMENT_HARDWARE',
  'HOME_IMPROVEMENT_REPAIR_AND_MAINTENANCE',
  'HOME_IMPROVEMENT_SECURITY',
  'HOME_IMPROVEMENT_OTHER_HOME_IMPROVEMENT',
  'MEDICAL_DENTAL_CARE',
  'MEDICAL_EYE_CARE',
  'MEDICAL_NURSING_CARE',
  'MEDICAL_PHARMACIES_AND_SUPPLEMENTS',
  'MEDICAL_PRIMARY_CARE',
  'MEDICAL_VETERINARY_SERVICES',
  'MEDICAL_OTHER_MEDICAL',
  'PERSONAL_CARE_GYMS_AND_FITNESS_CENTERS',
  'PERSONAL_CARE_HAIR_AND_BEAUTY',
  'PERSONAL_CARE_LAUNDRY_AND_DRY_CLEANING',
  'PERSONAL_CARE_OTHER_PERSONAL_CARE',
  'GENERAL_SERVICES_ACCOUNTING_AND_FINANCIAL_PLANNING',
  'GENERAL_SERVICES_AUTOMOTIVE',
  'GENERAL_SERVICES_CHILDCARE',
  'GENERAL_SERVICES_CONSULTING_AND_LEGAL',
  'GENERAL_SERVICES_EDUCATION',
  'GENERAL_SERVICES_INSURANCE',
  'GENERAL_SERVICES_POSTAGE_AND_SHIPPING',
  'GENERAL_SERVICES_STORAGE',
  'GENERAL_SERVICES_OTHER_GENERAL_SERVICES',
  'GOVERNMENT_AND_NON_PROFIT_DONATIONS',
  'GOVERNMENT_AND_NON_PROFIT_GOVERNMENT_DEPARTMENTS_AND_AGENCIES',
  'GOVERNMENT_AND_NON_PROFIT_TAX_PAYMENT',
  'GOVERNMENT_AND_NON_PROFIT_OTHER_GOVERNMENT_AND_NON_PROFIT',
  'TRANSPORTATION_BIKES_AND_SCOOTERS',
  'TRANSPORTATION_GAS',
  'TRANSPORTATION_PARKING',
  'TRANSPORTATION_PUBLIC_TRANSIT',
  'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
  'TRANSPORTATION_TOLLS',
  'TRANSPORTATION_OTHER_TRANSPORTATION',
  'TRAVEL_FLIGHTS',
  'TRAVEL_LODGING',
  'TRAVEL_RENTAL_CARS',
  'TRAVEL_OTHER_TRAVEL',
  'RENT_AND_UTILITIES_GAS_AND_ELECTRICITY',
  'RENT_AND_UTILITIES_INTERNET_AND_CABLE',
  'RENT_AND_UTILITIES_RENT',
  'RENT_AND_UTILITIES_SEWAGE_AND_WASTE_MANAGEMENT',
  'RENT_AND_UTILITIES_TELEPHONE',
  'RENT_AND_UTILITIES_WATER',
  'RENT_AND_UTILITIES_OTHER_UTILITIES',
] as const;

const secondaryCategoryObjects = secondaryCategories.map((category) => ({
  label: category.replace(/_/g, ' '),
  value: category,
}));

const primaryCategoryObjects = primaryCategories.map((category) => ({
  label: category.replace(/_/g, ' '),
  value: category,
}));

const categoryMap = new Map<PrimaryCategory, Array<SecondaryCategory>>();

categoryMap.set('INCOME', [
  'INCOME_DIVIDENDS',
  'INCOME_INTEREST_EARNED',
  'INCOME_RETIREMENT_PENSION',
  'INCOME_TAX_REFUND',
  'INCOME_UNEMPLOYMENT',
  'INCOME_WAGES',
  'INCOME_OTHER_INCOME',
]);

categoryMap.set('TRANSFER_IN', [
  'TRANSFER_IN_CASH_ADVANCES_AND_LOANS',
  'TRANSFER_IN_DEPOSIT',
  'TRANSFER_IN_INVESTMENT_AND_RETIREMENT_FUNDS',
  'TRANSFER_IN_SAVINGS',
  'TRANSFER_IN_ACCOUNT_TRANSFER',
  'TRANSFER_IN_OTHER_TRANSFER_IN',
]);

categoryMap.set('TRANSFER_OUT', [
  'TRANSFER_OUT_INVESTMENT_AND_RETIREMENT_FUNDS',
  'TRANSFER_OUT_SAVINGS',
  'TRANSFER_OUT_WITHDRAWAL',
  'TRANSFER_OUT_ACCOUNT_TRANSFER',
  'TRANSFER_OUT_OTHER_TRANSFER_OUT',
]);

categoryMap.set('LOAN_PAYMENTS', [
  'LOAN_PAYMENTS_CAR_PAYMENT',
  'LOAN_PAYMENTS_CREDIT_CARD_PAYMENT',
  'LOAN_PAYMENTS_PERSONAL_LOAN_PAYMENT',
  'LOAN_PAYMENTS_MORTGAGE_PAYMENT',
  'LOAN_PAYMENTS_STUDENT_LOAN_PAYMENT',
  'LOAN_PAYMENTS_OTHER_PAYMENT',
]);

categoryMap.set('BANK_FEES', [
  'BANK_FEES_ATM_FEES',
  'BANK_FEES_FOREIGN_TRANSACTION_FEES',
  'BANK_FEES_INSUFFICIENT_FUNDS',
  'BANK_FEES_INTEREST_CHARGE',
  'BANK_FEES_OVERDRAFT_FEES',
  'BANK_FEES_OTHER_BANK_FEES',
]);

categoryMap.set('ENTERTAINMENT', [
  'ENTERTAINMENT_CASINOS_AND_GAMBLING',
  'ENTERTAINMENT_MUSIC_AND_AUDIO',
  'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
  'ENTERTAINMENT_TV_AND_MOVIES',
  'ENTERTAINMENT_VIDEO_GAMES',
  'ENTERTAINMENT_OTHER_ENTERTAINMENT',
]);

categoryMap.set('FOOD_AND_DRINK', [
  'FOOD_AND_DRINK_BEER_WINE_AND_LIQUOR',
  'FOOD_AND_DRINK_COFFEE',
  'FOOD_AND_DRINK_FAST_FOOD',
  'FOOD_AND_DRINK_GROCERIES',
  'FOOD_AND_DRINK_RESTAURANT',
  'FOOD_AND_DRINK_VENDING_MACHINES',
  'FOOD_AND_DRINK_OTHER_FOOD_AND_DRINK',
]);

categoryMap.set('GENERAL_MERCHANDISE', [
  'GENERAL_MERCHANDISE_BOOKSTORES_AND_NEWSSTANDS',
  'GENERAL_MERCHANDISE_CLOTHING_AND_ACCESSORIES',
  'GENERAL_MERCHANDISE_CONVENIENCE_STORES',
  'GENERAL_MERCHANDISE_DEPARTMENT_STORES',
  'GENERAL_MERCHANDISE_DISCOUNT_STORES',
  'GENERAL_MERCHANDISE_ELECTRONICS',
  'GENERAL_MERCHANDISE_GIFTS_AND_NOVELTIES',
  'GENERAL_MERCHANDISE_OFFICE_SUPPLIES',
  'GENERAL_MERCHANDISE_ONLINE_MARKETPLACES',
  'GENERAL_MERCHANDISE_PET_SUPPLIES',
  'GENERAL_MERCHANDISE_SPORTING_GOODS',
  'GENERAL_MERCHANDISE_SUPERSTORES',
  'GENERAL_MERCHANDISE_TOBACCO_AND_VAPE',
  'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
]);

categoryMap.set('HOME_IMPROVEMENT', [
  'HOME_IMPROVEMENT_FURNITURE',
  'HOME_IMPROVEMENT_HARDWARE',
  'HOME_IMPROVEMENT_REPAIR_AND_MAINTENANCE',
  'HOME_IMPROVEMENT_SECURITY',
  'HOME_IMPROVEMENT_OTHER_HOME_IMPROVEMENT',
]);

categoryMap.set('MEDICAL', [
  'MEDICAL_DENTAL_CARE',
  'MEDICAL_EYE_CARE',
  'MEDICAL_NURSING_CARE',
  'MEDICAL_PHARMACIES_AND_SUPPLEMENTS',
  'MEDICAL_PRIMARY_CARE',
  'MEDICAL_VETERINARY_SERVICES',
  'MEDICAL_OTHER_MEDICAL',
]);

categoryMap.set('PERSONAL_CARE', [
  'PERSONAL_CARE_GYMS_AND_FITNESS_CENTERS',
  'PERSONAL_CARE_HAIR_AND_BEAUTY',
  'PERSONAL_CARE_LAUNDRY_AND_DRY_CLEANING',
  'PERSONAL_CARE_OTHER_PERSONAL_CARE',
]);

categoryMap.set('GENERAL_SERVICES', [
  'GENERAL_SERVICES_ACCOUNTING_AND_FINANCIAL_PLANNING',
  'GENERAL_SERVICES_AUTOMOTIVE',
  'GENERAL_SERVICES_CHILDCARE',
  'GENERAL_SERVICES_CONSULTING_AND_LEGAL',
  'GENERAL_SERVICES_EDUCATION',
  'GENERAL_SERVICES_INSURANCE',
  'GENERAL_SERVICES_POSTAGE_AND_SHIPPING',
  'GENERAL_SERVICES_STORAGE',
  'GENERAL_SERVICES_OTHER_GENERAL_SERVICES',
]);

categoryMap.set('GOVERNMENT_AND_NON_PROFIT', [
  'GOVERNMENT_AND_NON_PROFIT_DONATIONS',
  'GOVERNMENT_AND_NON_PROFIT_GOVERNMENT_DEPARTMENTS_AND_AGENCIES',
  'GOVERNMENT_AND_NON_PROFIT_TAX_PAYMENT',
  'GOVERNMENT_AND_NON_PROFIT_OTHER_GOVERNMENT_AND_NON_PROFIT',
]);

categoryMap.set('TRANSPORTATION', [
  'TRANSPORTATION_BIKES_AND_SCOOTERS',
  'TRANSPORTATION_GAS',
  'TRANSPORTATION_PARKING',
  'TRANSPORTATION_PUBLIC_TRANSIT',
  'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
  'TRANSPORTATION_TOLLS',
  'TRANSPORTATION_OTHER_TRANSPORTATION',
]);

categoryMap.set('TRAVEL', [
  'TRAVEL_FLIGHTS',
  'TRAVEL_LODGING',
  'TRAVEL_RENTAL_CARS',
  'TRAVEL_OTHER_TRAVEL',
]);

categoryMap.set('RENT_AND_UTILITIES', [
  'RENT_AND_UTILITIES_GAS_AND_ELECTRICITY',
  'RENT_AND_UTILITIES_INTERNET_AND_CABLE',
  'RENT_AND_UTILITIES_RENT',
  'RENT_AND_UTILITIES_SEWAGE_AND_WASTE_MANAGEMENT',
  'RENT_AND_UTILITIES_TELEPHONE',
  'RENT_AND_UTILITIES_WATER',
  'RENT_AND_UTILITIES_OTHER_UTILITIES',
]);

const detailedDescriptionMap = new Map<SecondaryCategory, string>();

detailedDescriptionMap.set(
  'INCOME_DIVIDENDS',
  'Dividends from investment accounts',
);
detailedDescriptionMap.set(
  'INCOME_INTEREST_EARNED',
  'Income from interest on savings accounts',
);
detailedDescriptionMap.set(
  'INCOME_RETIREMENT_PENSION',
  'Income from pension payments',
);
detailedDescriptionMap.set('INCOME_TAX_REFUND', 'Income from tax refunds');
detailedDescriptionMap.set(
  'INCOME_UNEMPLOYMENT',
  'Income from unemployment benefits, including unemployment insurance and healthcare',
);
detailedDescriptionMap.set(
  'INCOME_WAGES',
  'Income from salaries, gig-economy work, and tips earned',
);
detailedDescriptionMap.set(
  'INCOME_OTHER_INCOME',
  'Other miscellaneous income, including alimony, social security, child support, and rental',
);
detailedDescriptionMap.set(
  'TRANSFER_IN_CASH_ADVANCES_AND_LOANS',
  'Loans and cash advances deposited into a bank account',
);
detailedDescriptionMap.set(
  'TRANSFER_IN_DEPOSIT',
  'Cash, checks, and ATM deposits into a bank account',
);
detailedDescriptionMap.set(
  'TRANSFER_IN_INVESTMENT_AND_RETIREMENT_FUNDS',
  'Inbound transfers to an investment or retirement account',
);
detailedDescriptionMap.set(
  'TRANSFER_IN_SAVINGS',
  'Inbound transfers to a savings account',
);
detailedDescriptionMap.set(
  'TRANSFER_IN_ACCOUNT_TRANSFER',
  'General inbound transfers from another account',
);
detailedDescriptionMap.set(
  'TRANSFER_IN_OTHER_TRANSFER_IN',
  'Other miscellaneous inbound transactions',
);
detailedDescriptionMap.set(
  'TRANSFER_OUT_INVESTMENT_AND_RETIREMENT_FUNDS',
  'Transfers to an investment or retirement account, including investment apps such as Acorns, Betterment',
);
detailedDescriptionMap.set(
  'TRANSFER_OUT_SAVINGS',
  'Outbound transfers to savings accounts',
);
detailedDescriptionMap.set(
  'TRANSFER_OUT_WITHDRAWAL',
  'Withdrawals from a bank account',
);
detailedDescriptionMap.set(
  'TRANSFER_OUT_ACCOUNT_TRANSFER',
  'General outbound transfers to another account',
);
detailedDescriptionMap.set(
  'TRANSFER_OUT_OTHER_TRANSFER_OUT',
  'Other miscellaneous outbound transactions',
);
detailedDescriptionMap.set('LOAN_PAYMENTS_CAR_PAYMENT', 'Car loans and leases');
detailedDescriptionMap.set(
  'LOAN_PAYMENTS_CREDIT_CARD_PAYMENT',
  'Payments to a credit card. These are positive amounts for credit card subtypes and negative for depository subtypes',
);
detailedDescriptionMap.set(
  'LOAN_PAYMENTS_PERSONAL_LOAN_PAYMENT',
  'Personal loans, including cash advances and buy now pay later repayments',
);
detailedDescriptionMap.set(
  'LOAN_PAYMENTS_MORTGAGE_PAYMENT',
  'Payments on mortgages',
);
detailedDescriptionMap.set(
  'LOAN_PAYMENTS_STUDENT_LOAN_PAYMENT',
  "Payments on student loans. For college tuition, refer to 'General Services - Education'",
);
detailedDescriptionMap.set(
  'LOAN_PAYMENTS_OTHER_PAYMENT',
  'Other miscellaneous debt payments',
);
detailedDescriptionMap.set(
  'BANK_FEES_ATM_FEES',
  'Fees incurred for out-of-network ATMs',
);
detailedDescriptionMap.set(
  'BANK_FEES_FOREIGN_TRANSACTION_FEES',
  'Fees incurred on non-domestic transactions',
);
detailedDescriptionMap.set(
  'BANK_FEES_INSUFFICIENT_FUNDS',
  'Fees relating to insufficient funds',
);
detailedDescriptionMap.set(
  'BANK_FEES_INTEREST_CHARGE',
  'Fees incurred for interest on purchases, including not-paid-in-full or interest on cash advances',
);
detailedDescriptionMap.set(
  'BANK_FEES_OVERDRAFT_FEES',
  'Fees incurred when an account is in overdraft',
);
detailedDescriptionMap.set(
  'BANK_FEES_OTHER_BANK_FEES',
  'Other miscellaneous bank fees',
);
detailedDescriptionMap.set(
  'ENTERTAINMENT_CASINOS_AND_GAMBLING',
  'Gambling, casinos, and sports betting',
);
detailedDescriptionMap.set(
  'ENTERTAINMENT_MUSIC_AND_AUDIO',
  'Digital and in-person music purchases, including music streaming services',
);
detailedDescriptionMap.set(
  'ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS',
  'Purchases made at sporting events, music venues, concerts, museums, and amusement parks',
);
detailedDescriptionMap.set(
  'ENTERTAINMENT_TV_AND_MOVIES',
  'In-home movie streaming services and movie theaters',
);
detailedDescriptionMap.set(
  'ENTERTAINMENT_VIDEO_GAMES',
  'Digital and in-person video game purchases',
);
detailedDescriptionMap.set(
  'ENTERTAINMENT_OTHER_ENTERTAINMENT',
  'Other miscellaneous entertainment purchases, including nightlife and adult entertainment',
);
detailedDescriptionMap.set(
  'FOOD_AND_DRINK_BEER_WINE_AND_LIQUOR',
  'Beer, Wine & Liquor Stores',
);
detailedDescriptionMap.set(
  'FOOD_AND_DRINK_COFFEE',
  'Purchases at coffee shops or cafes',
);
detailedDescriptionMap.set(
  'FOOD_AND_DRINK_FAST_FOOD',
  'Dining expenses for fast food chains',
);
detailedDescriptionMap.set(
  'FOOD_AND_DRINK_GROCERIES',
  "Purchases for fresh produce and groceries, including farmers' markets",
);
detailedDescriptionMap.set(
  'FOOD_AND_DRINK_RESTAURANT',
  'Dining expenses for restaurants, bars, gastropubs, and diners',
);
detailedDescriptionMap.set(
  'FOOD_AND_DRINK_VENDING_MACHINES',
  'Purchases made at vending machine operators',
);
detailedDescriptionMap.set(
  'FOOD_AND_DRINK_OTHER_FOOD_AND_DRINK',
  'Other miscellaneous food and drink, including desserts, juice bars, and delis',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_BOOKSTORES_AND_NEWSSTANDS',
  'Books, magazines, and news',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_CLOTHING_AND_ACCESSORIES',
  'Apparel, shoes, and jewelry',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_CONVENIENCE_STORES',
  'Purchases at convenience stores',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_DEPARTMENT_STORES',
  'Retail stores with wide ranges of consumer goods, typically specializing in clothing and home goods',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_DISCOUNT_STORES',
  'Stores selling goods at a discounted price',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_ELECTRONICS',
  'Electronics stores and websites',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_GIFTS_AND_NOVELTIES',
  'Photo, gifts, cards, and floral stores',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_OFFICE_SUPPLIES',
  'Stores that specialize in office goods',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_ONLINE_MARKETPLACES',
  'Multi-purpose e-commerce platforms such as Etsy, eBay, and Amazon',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_PET_SUPPLIES',
  'Pet supplies and pet food',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_SPORTING_GOODS',
  'Sporting goods, camping gear, and outdoor equipment',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_SUPERSTORES',
  'Superstores such as Target and Walmart, selling both groceries and general merchandise',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_TOBACCO_AND_VAPE',
  'Purchases for tobacco and vaping products',
);
detailedDescriptionMap.set(
  'GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE',
  'Other miscellaneous merchandise, including toys, hobbies, and arts and crafts',
);
detailedDescriptionMap.set(
  'HOME_IMPROVEMENT_FURNITURE',
  'Furniture, bedding, and home accessories',
);
detailedDescriptionMap.set(
  'HOME_IMPROVEMENT_HARDWARE',
  'Building materials, hardware stores, paint, and wallpaper',
);
detailedDescriptionMap.set(
  'HOME_IMPROVEMENT_REPAIR_AND_MAINTENANCE',
  'Plumbing, lighting, gardening, and roofing',
);
detailedDescriptionMap.set(
  'HOME_IMPROVEMENT_SECURITY',
  'Home security system purchases',
);
detailedDescriptionMap.set(
  'HOME_IMPROVEMENT_OTHER_HOME_IMPROVEMENT',
  'Other miscellaneous home purchases, including pool installation and pest control',
);
detailedDescriptionMap.set(
  'MEDICAL_DENTAL_CARE',
  'Dentists and general dental care',
);
detailedDescriptionMap.set(
  'MEDICAL_EYE_CARE',
  'Optometrists, contacts, and glasses stores',
);
detailedDescriptionMap.set(
  'MEDICAL_NURSING_CARE',
  'Nursing care and facilities',
);
detailedDescriptionMap.set(
  'MEDICAL_PHARMACIES_AND_SUPPLEMENTS',
  'Pharmacies and nutrition shops',
);
detailedDescriptionMap.set('MEDICAL_PRIMARY_CARE', 'Doctors and physicians');
detailedDescriptionMap.set(
  'MEDICAL_VETERINARY_SERVICES',
  'Prevention and care procedures for animals',
);
detailedDescriptionMap.set(
  'MEDICAL_OTHER_MEDICAL',
  'Other miscellaneous medical, including blood work, hospitals, and ambulances',
);
detailedDescriptionMap.set(
  'PERSONAL_CARE_GYMS_AND_FITNESS_CENTERS',
  'Gyms, fitness centers, and workout classes',
);
detailedDescriptionMap.set(
  'PERSONAL_CARE_HAIR_AND_BEAUTY',
  'Manicures, haircuts, waxing, spa/massages, and bath and beauty products',
);
detailedDescriptionMap.set(
  'PERSONAL_CARE_LAUNDRY_AND_DRY_CLEANING',
  'Wash and fold, and dry cleaning expenses',
);
detailedDescriptionMap.set(
  'PERSONAL_CARE_OTHER_PERSONAL_CARE',
  'Other miscellaneous personal care, including mental health apps and services',
);
detailedDescriptionMap.set(
  'GENERAL_SERVICES_ACCOUNTING_AND_FINANCIAL_PLANNING',
  'Financial planning, and tax and accounting services',
);
detailedDescriptionMap.set(
  'GENERAL_SERVICES_AUTOMOTIVE',
  'Oil changes, car washes, repairs, and towing',
);
detailedDescriptionMap.set(
  'GENERAL_SERVICES_CHILDCARE',
  'Babysitters and daycare',
);
detailedDescriptionMap.set(
  'GENERAL_SERVICES_CONSULTING_AND_LEGAL',
  'Consulting and legal services',
);
detailedDescriptionMap.set(
  'GENERAL_SERVICES_EDUCATION',
  'Elementary, high school, professional schools, and college tuition',
);
detailedDescriptionMap.set(
  'GENERAL_SERVICES_INSURANCE',
  'Insurance for auto, home, and healthcare',
);
detailedDescriptionMap.set(
  'GENERAL_SERVICES_POSTAGE_AND_SHIPPING',
  'Mail, packaging, and shipping services',
);
detailedDescriptionMap.set(
  'GENERAL_SERVICES_STORAGE',
  'Storage services and facilities',
);
detailedDescriptionMap.set(
  'GENERAL_SERVICES_OTHER_GENERAL_SERVICES',
  'Other miscellaneous services, including advertising and cloud storage',
);
detailedDescriptionMap.set(
  'GOVERNMENT_AND_NON_PROFIT_DONATIONS',
  'Charitable, political, and religious donations',
);
detailedDescriptionMap.set(
  'GOVERNMENT_AND_NON_PROFIT_GOVERNMENT_DEPARTMENTS_AND_AGENCIES',
  'Government departments and agencies, such as driving licenses, and passport renewal',
);
detailedDescriptionMap.set(
  'GOVERNMENT_AND_NON_PROFIT_TAX_PAYMENT',
  'Tax payments, including income and property taxes',
);
detailedDescriptionMap.set(
  'GOVERNMENT_AND_NON_PROFIT_OTHER_GOVERNMENT_AND_NON_PROFIT',
  'Other miscellaneous government and non-profit agencies',
);
detailedDescriptionMap.set(
  'TRANSPORTATION_BIKES_AND_SCOOTERS',
  'Bike and scooter rentals',
);
detailedDescriptionMap.set('TRANSPORTATION_GAS', 'Purchases at a gas station');
detailedDescriptionMap.set(
  'TRANSPORTATION_PARKING',
  'Parking fees and expenses',
);
detailedDescriptionMap.set(
  'TRANSPORTATION_PUBLIC_TRANSIT',
  'Public transportation, including rail and train, buses, and metro',
);
detailedDescriptionMap.set(
  'TRANSPORTATION_TAXIS_AND_RIDE_SHARES',
  'Taxi and ride share services',
);
detailedDescriptionMap.set('TRANSPORTATION_TOLLS', 'Toll expenses');
detailedDescriptionMap.set(
  'TRANSPORTATION_OTHER_TRANSPORTATION',
  'Other miscellaneous transportation expenses',
);
detailedDescriptionMap.set('TRAVEL_FLIGHTS', 'Airline expenses');
detailedDescriptionMap.set(
  'TRAVEL_LODGING',
  'Hotels, motels, and hosted accommodation such as Airbnb',
);
detailedDescriptionMap.set(
  'TRAVEL_RENTAL_CARS',
  'Rental cars, charter buses, and trucks',
);
detailedDescriptionMap.set(
  'TRAVEL_OTHER_TRAVEL',
  'Other miscellaneous travel expenses',
);
detailedDescriptionMap.set(
  'RENT_AND_UTILITIES_GAS_AND_ELECTRICITY',
  'Gas and electricity bills',
);
detailedDescriptionMap.set(
  'RENT_AND_UTILITIES_INTERNET_AND_CABLE',
  'Internet and cable bills',
);
detailedDescriptionMap.set('RENT_AND_UTILITIES_RENT', 'Rent payment');
detailedDescriptionMap.set(
  'RENT_AND_UTILITIES_SEWAGE_AND_WASTE_MANAGEMENT',
  'Sewage and garbage disposal bills',
);
detailedDescriptionMap.set('RENT_AND_UTILITIES_TELEPHONE', 'Cell phone bills');
detailedDescriptionMap.set('RENT_AND_UTILITIES_WATER', 'Water bills');
detailedDescriptionMap.set(
  'RENT_AND_UTILITIES_OTHER_UTILITIES',
  'Other miscellaneous utility bills',
);

export {
  categoryMap,
  detailedDescriptionMap,
  secondaryCategoryObjects,
  primaryCategoryObjects,
};
