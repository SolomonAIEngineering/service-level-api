import{T as g}from"./TransactionDataTable-1a319a69.js";import{T as o,B as f}from"./card-b76ebb31.js";import{C as b}from"./CreditAccountCard-0271c8e1.js";import"./jsx-runtime-7ce7b810.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./collapsible-6aa72c64.js";import"./Tracker-dcaacf89.js";import"./mapValues-66b1195c.js";import"./_baseUniq-d52c2b16.js";import"./isPlainObject-b3332f2e.js";import"./throttle-bfb3be1c.js";import"./index-4dfda590.js";import"./hover-card-edef94d1.js";import"./tabs-1211d8ff.js";/* empty css                 */import"./rocket-5cdfe67b.js";import"./HistoricalAccountBalanceChart-2df4fd0a.js";import"./InvestmentAccountCard-02ee1d5d.js";import"./InvestmentHoldingCard-c46a8e62.js";import"./InvestmentSecurityCard-28dfbfc4.js";import"./MortgageAccountCard-05b9e8ce.js";import"./StudentLoanAccountCard-2bffb675.js";import"./TransactionAnalyticsByMonth-6d6e7a75.js";const L={title:"Component/TransactionDataTable",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},r={args:{transactions:Array.from({length:20},()=>o.randomInstance()).sort((a,t)=>a.time.getTime()-t.time.getTime())}},n={args:{transactions:Array.from({length:20},()=>o.randomInstance()).sort((a,t)=>a.time.getTime()-t.time.getTime()),account:f.randomInstance()}},e={args:{transactions:Array.from({length:20},()=>o.randomInstance()).sort((a,t)=>a.time.getTime()-t.time.getTime()),account:b.randomInstance()}};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'TransactionDataTable',
    transactions: Array.from({
      length: 20
    }, () => Transaction.randomInstance()).sort((a, b) => a.time!.getTime() - b.time!.getTime())
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,T;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'TransactionDataTable',
    transactions: Array.from({
      length: 20
    }, () => Transaction.randomInstance()).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
    account: BankAccount.randomInstance()
  }
}`,...(T=(p=n.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'TransactionDataTable',
    transactions: Array.from({
      length: 20
    }, () => Transaction.randomInstance()).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
    account: CreditAccount.randomInstance()
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const M=["TransactionDataTableDefault","TransactionDataTableWithBankAccount","TransactionDataTableWithCreditAccount"];export{r as TransactionDataTableDefault,n as TransactionDataTableWithBankAccount,e as TransactionDataTableWithCreditAccount,M as __namedExportsOrder,L as default};
//# sourceMappingURL=TransactionDataTable.stories-4854e15f.js.map
