import{a as u,C as s}from"./CreditAccountCard-0271c8e1.js";import{A as p}from"./card-b76ebb31.js";import"./jsx-runtime-7ce7b810.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./hover-card-edef94d1.js";import"./index-4dfda590.js";import"./_baseUniq-d52c2b16.js";import"./mapValues-66b1195c.js";import"./Tracker-dcaacf89.js";import"./isPlainObject-b3332f2e.js";import"./throttle-bfb3be1c.js";import"./collapsible-6aa72c64.js";import"./HistoricalAccountBalanceChart-2df4fd0a.js";import"./tabs-1211d8ff.js";import"./rocket-5cdfe67b.js";const v={title:"Component/CreditAccountCard",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},t={args:{creditAccount:s.randomInstance(),enableDemoMode:!1,institutionName:"Chase"}},e={args:{creditAccount:s.randomInstance(),enableDemoMode:!1,institutionName:"Chase",historicalAccountBalance:Array.from({length:20},()=>p.randomInstance()).sort((m,d)=>m.time.getTime()-d.time.getTime())}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'CreditAccountCard',
    creditAccount: CreditAccount.randomInstance(),
    enableDemoMode: false,
    institutionName: 'Chase'
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    // Adjust the default properties for each variant of your component
    // primary: true,
    // label: 'CreditAccountCard',
    creditAccount: CreditAccount.randomInstance(),
    enableDemoMode: false,
    institutionName: 'Chase',
    historicalAccountBalance: Array.from({
      length: 20
    }, () => AccountBalanceHistory.randomInstance()).sort((a, b) => a.time!.getTime() - b.time!.getTime())
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const x=["CreditAccountCardDefault","CreditAccountCardAccountBalanceHistory"];export{e as CreditAccountCardAccountBalanceHistory,t as CreditAccountCardDefault,x as __namedExportsOrder,v as default};
//# sourceMappingURL=CreditAccountCard.stories-4540ea2d.js.map
