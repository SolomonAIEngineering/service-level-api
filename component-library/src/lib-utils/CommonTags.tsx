import { Tags } from 'src/data-contracts/user-service/data-contracts';
import { TagClass } from 'src/types';

export const ConsumerTagSet: Tags[] = [
  new TagClass({
    tagName: 'Savings: tips and tricks',
    tagDescription:
      'For those interested in tips to help them save a little extra each month',
    metadata: ['savings', 'tips', 'tricks'],
  }),
  new TagClass({
    tagName: 'Spending: fun till those bills are due ',
    tagDescription: 'For those interested in reducing their spending',
    metadata: ['spending', 'bills'],
  }),
  new TagClass({
    tagName: 'Budgeting: easier said than done !',
    tagDescription: 'For those interested in better budgeting',
    metadata: ['budgeting'],
  }),
  new TagClass({
    tagName: 'Loans',
    tagDescription: 'For those interested in managing their loan balance',
    metadata: ['loans', 'debt'],
  }),
  new TagClass({
    tagName: 'Student Loans :(',
    tagDescription: 'For those interested in reducing student loans',
    metadata: ['student loans', 'debt'],
  }),
  new TagClass({
    tagName: 'Mortgages and other boring stuff',
    tagDescription: 'For those interested in mortgages',
    metadata: ['mortgage loans', 'debt'],
  }),
  new TagClass({
    tagName: 'Taxes and other fun stuff ',
    tagDescription: 'For those interested in managing taxes',
    metadata: ['taxes', 'money'],
  }),
  new TagClass({
    tagName: 'Careers',
    tagDescription: 'For those interested in growing their career',
    metadata: ['career'],
  }),
  new TagClass({
    tagName: 'Consumer Loans',
    tagDescription: 'For those interested in diminishing their consumer loans',
    metadata: ['consumer loans', 'loans'],
  }),
  new TagClass({
    tagName: 'Investing',
    tagDescription: 'For those interested in investing',
    metadata: ['consumer loans', 'investing'],
  }),
  new TagClass({
    tagName: 'Young Savers',
    tagDescription: 'For those interested in saving',
    metadata: ['saving'],
  }),
  new TagClass({
    tagName: 'Women in finance',
    tagDescription: 'For women in finance',
    metadata: ['women', 'finance'],
  }),
];

export const BusinessTagSet: Tags[] = [
  new TagClass({
    tagName: 'Business Growth',
    tagDescription:
      'For businesses interested in strategies for growth and expansion',
    metadata: ['growth', 'expansion', 'strategy'],
  }),
  new TagClass({
    tagName: 'Cost Reduction',
    tagDescription: 'For businesses looking to reduce operational costs',
    metadata: ['cost cutting', 'efficiency'],
  }),
  new TagClass({
    tagName: 'Budget Management',
    tagDescription:
      'For businesses seeking better budget management techniques',
    metadata: ['budgeting', 'finance management'],
  }),
  new TagClass({
    tagName: 'Loan Management',
    tagDescription: 'For businesses managing loans and debts',
    metadata: ['business loans', 'debt management'],
  }),
  new TagClass({
    tagName: 'Corporate Taxes',
    tagDescription: 'For businesses seeking advice on tax management',
    metadata: ['taxes', 'corporate finance'],
  }),
  new TagClass({
    tagName: 'Human Resources',
    tagDescription:
      'For businesses interested in HR management and development',
    metadata: ['HR', 'employee management'],
  }),
  new TagClass({
    tagName: 'Market Analysis',
    tagDescription: 'For businesses looking for insights on market trends',
    metadata: ['market research', 'trends'],
  }),
  new TagClass({
    tagName: 'Digital Transformation',
    tagDescription: 'For businesses undergoing digital transformation',
    metadata: ['digital', 'technology'],
  }),
  new TagClass({
    tagName: 'Sustainability',
    tagDescription: 'For businesses focusing on sustainable practices',
    metadata: ['sustainability', 'eco-friendly'],
  }),
  new TagClass({
    tagName: 'Startups',
    tagDescription: 'For startups looking for growth and funding advice',
    metadata: ['startups', 'funding'],
  }),
  new TagClass({
    tagName: 'Corporate Investment',
    tagDescription: 'For businesses interested in investment strategies',
    metadata: ['investment', 'corporate finance'],
  }),
  new TagClass({
    tagName: 'Leadership and Management',
    tagDescription: 'For enhancing leadership and management skills',
    metadata: ['leadership', 'management'],
  }),
];
