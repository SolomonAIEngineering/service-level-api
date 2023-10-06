import{I as u,a as s}from"./InvestmentAccountCard-02ee1d5d.js";import{A as d}from"./card-b76ebb31.js";import"./jsx-runtime-7ce7b810.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./HistoricalAccountBalanceChart-2df4fd0a.js";import"./tabs-1211d8ff.js";import"./_baseUniq-d52c2b16.js";import"./mapValues-66b1195c.js";import"./Tracker-dcaacf89.js";import"./isPlainObject-b3332f2e.js";import"./throttle-bfb3be1c.js";import"./hover-card-edef94d1.js";import"./index-4dfda590.js";import"./InvestmentHoldingCard-c46a8e62.js";import"./InvestmentSecurityCard-28dfbfc4.js";const S={title:"Component/InvestmentAccountCard",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},t={args:{investmentAccount:s.randomInstance()}},e={args:{investmentAccount:s.randomInstance(),historicalAccountBalance:Array.from({length:20},()=>d.randomInstance()).sort((i,p)=>i.time.getTime()-p.time.getTime())}};var n,r,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentAccountCard',
    investmentAccount: InvestmentAccount.randomInstance()
  }
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var a,c,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentAccountCard',
    investmentAccount: InvestmentAccount.randomInstance(),
    historicalAccountBalance: Array.from({
      length: 20
    }, () => AccountBalanceHistory.randomInstance()).sort((a, b) => a.time!.getTime() - b.time!.getTime())
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const _=["WithoutBalance","WithAccountBalance"];export{e as WithAccountBalance,t as WithoutBalance,_ as __namedExportsOrder,S as default};
//# sourceMappingURL=InvestmentAccountCard.stories-4909899e.js.map
