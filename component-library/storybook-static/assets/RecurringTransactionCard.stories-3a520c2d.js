import{R as b}from"./TransactionDataTable-1a319a69.js";import{R as n,T as s,B as O}from"./card-b76ebb31.js";import{C as W}from"./CreditAccountCard-0271c8e1.js";import"./jsx-runtime-7ce7b810.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./collapsible-6aa72c64.js";import"./Tracker-dcaacf89.js";import"./mapValues-66b1195c.js";import"./_baseUniq-d52c2b16.js";import"./isPlainObject-b3332f2e.js";import"./throttle-bfb3be1c.js";import"./index-4dfda590.js";import"./hover-card-edef94d1.js";import"./tabs-1211d8ff.js";/* empty css                 */import"./rocket-5cdfe67b.js";import"./HistoricalAccountBalanceChart-2df4fd0a.js";import"./InvestmentAccountCard-02ee1d5d.js";import"./InvestmentHoldingCard-c46a8e62.js";import"./InvestmentSecurityCard-28dfbfc4.js";import"./MortgageAccountCard-05b9e8ce.js";import"./StudentLoanAccountCard-2bffb675.js";import"./TransactionAnalyticsByMonth-6d6e7a75.js";const Y={title:"Component/RecurringTransactionCard",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},t={args:{recurringTransaction:n.randomInstance()}},e={args:{recurringTransaction:n.randomInstance(),enableDetailedDisplay:!0}},i={args:{recurringTransaction:n.randomInstance(),enableDetailedDisplay:!0,participantTransactions:Array.from({length:20},()=>s.randomInstance()).sort((r,a)=>r.time.getTime()-a.time.getTime())}},o={args:{recurringTransaction:n.randomInstance(),enableDetailedDisplay:!0,participantTransactions:Array.from({length:20},()=>s.randomInstance()).sort((r,a)=>r.time.getTime()-a.time.getTime()),account:O.randomInstance()}},c={args:{recurringTransaction:n.randomInstance(),enableDetailedDisplay:!0,participantTransactions:Array.from({length:20},()=>s.randomInstance()).sort((r,a)=>r.time.getTime()-a.time.getTime()),account:W.randomInstance()}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance()
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,g,T;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance(),
    enableDetailedDisplay: true
  }
}`,...(T=(g=e.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var l,y,f;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance(),
    enableDetailedDisplay: true,
    participantTransactions: Array.from({
      length: 20
    }, () => Transaction.randomInstance()).sort((a, b) => a.time!.getTime() - b.time!.getTime())
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,R,D;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance(),
    enableDetailedDisplay: true,
    participantTransactions: Array.from({
      length: 20
    }, () => Transaction.randomInstance()).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
    account: BankAccount.randomInstance()
  }
}`,...(D=(R=o.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var A,C,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'RecurringTransactionCard',
    recurringTransaction: ReOccuringTransaction.randomInstance(),
    enableDetailedDisplay: true,
    participantTransactions: Array.from({
      length: 20
    }, () => Transaction.randomInstance()).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
    account: CreditAccount.randomInstance()
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const Z=["RecurringTransactionCardWithDetailedDisplayOff","RecurringTransactionCardWithDetailedDisplayOn","RecurringTransactionCardWithTransactions","RecurringTransactionCardWithTransactionsAndBankAccount","RecurringTransactionCardWithTransactionsAndCreditAccount"];export{t as RecurringTransactionCardWithDetailedDisplayOff,e as RecurringTransactionCardWithDetailedDisplayOn,i as RecurringTransactionCardWithTransactions,o as RecurringTransactionCardWithTransactionsAndBankAccount,c as RecurringTransactionCardWithTransactionsAndCreditAccount,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=RecurringTransactionCard.stories-3a520c2d.js.map
