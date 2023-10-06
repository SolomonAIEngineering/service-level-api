import{I as d,a as i}from"./InvestmentHoldingCard-c46a8e62.js";import{A as p}from"./card-b76ebb31.js";import"./jsx-runtime-7ce7b810.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./HistoricalAccountBalanceChart-2df4fd0a.js";import"./tabs-1211d8ff.js";import"./_baseUniq-d52c2b16.js";import"./mapValues-66b1195c.js";import"./Tracker-dcaacf89.js";import"./isPlainObject-b3332f2e.js";import"./throttle-bfb3be1c.js";const b={title:"Component/InvestmentHoldingCard",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},n={args:{holdings:Array.from({length:20},()=>i.randomInstance())}},e={args:{holdings:Array.from({length:20},()=>i.randomInstance()),historicalAccountBalance:Array.from({length:20},()=>p.randomInstance()).sort((c,l)=>c.time.getTime()-l.time.getTime())}};var t,r,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentHoldingCard',
    holdings: Array.from({
      length: 20
    }, () => InvesmentHolding.randomInstance())
  }
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var a,s,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'InvestmentHoldingCard',
    holdings: Array.from({
      length: 20
    }, () => InvesmentHolding.randomInstance()),
    historicalAccountBalance: Array.from({
      length: 20
    }, () => AccountBalanceHistory.randomInstance()).sort((a, b) => a.time!.getTime() - b.time!.getTime())
  }
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const j=["InvesmentHoldingDefault","InvesmentHoldingWithAccountBalance"];export{n as InvesmentHoldingDefault,e as InvesmentHoldingWithAccountBalance,j as __namedExportsOrder,b as default};
//# sourceMappingURL=InvestmentHoldingCard.stories-a42bec8f.js.map
