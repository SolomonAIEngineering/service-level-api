var q=Object.defineProperty;var H=(t,n,r)=>n in t?q(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var F=(t,n,r)=>(H(t,typeof n!="symbol"?n+"":n,r),r);import{j as e}from"./jsx-runtime-7ce7b810.js";import{b as $,a as y,s as v,g as z,d as D,e as S,m as x,E as J,y as Y,i as A,f as k,h as E,l as R,p as W,C as G,j as K}from"./Tracker-dcaacf89.js";import{r as b}from"./index-37ba2b57.js";import{C as p,a as f,b as g,d as N,e as Q,f as U,g as L,h as X}from"./card-b76ebb31.js";import{T as B,$ as _,a as M,b as T}from"./tabs-1211d8ff.js";import{R as V}from"./rocket-5cdfe67b.js";const P=({transactions:t,children:n})=>{const r=t.filter(s=>s.amount>0).reduce((s,i)=>s+Math.abs(i.amount),0),o=t.filter(s=>s.amount<0).reduce((s,i)=>s+Math.abs(i.amount),0),a=o-r,m=t.length>0?t.reduce((s,i)=>s+i.amount,0)/t.length:0,l=Math.max(...t.map(s=>s.amount)),d=Math.min(...t.map(s=>s.amount)),u={};t.forEach(s=>{u[s.merchantName]=(u[s.merchantName]||0)+1});const C={};t.forEach(s=>{C[s.paymentMetaPaymentMethod]=(C[s.paymentMetaPaymentMethod]||0)+1});const j={};t.forEach(s=>{const i=s.currentDate;j[i]=(j[i]||0)+1});const c={};return t.forEach(s=>{const i=s.currentDate;c[i]=(c[i]||0)+s.amount}),e.jsxs("div",{className:"bg-white",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Transaction Metrics"}),n,e.jsxs("div",{className:"grid gap-4 grid-cols-2",children:[e.jsxs(p,{className:"contain",children:[e.jsx(f,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:e.jsx(g,{className:"text-sm font-medium",children:"Total Expenditure"})}),e.jsx(N,{className:"w-fit",children:e.jsxs("div",{className:"font-bold",children:[" $",r.toFixed(2)]})})]}),e.jsxs(p,{className:"contain",children:[e.jsx(f,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:e.jsx(g,{className:"text-sm font-medium",children:"Total Income"})}),e.jsx(N,{className:"w-fit",children:e.jsxs("div",{className:"font-bold",children:[" $",o.toFixed(2)]})})]}),e.jsxs(p,{className:"contain",children:[e.jsx(f,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:e.jsx(g,{className:"text-sm font-medium",children:"Net Savings/Net Expenditure"})}),e.jsx(N,{className:"w-fit",children:e.jsxs("div",{className:"font-bold",children:[" $",a.toFixed(2)]})})]}),e.jsxs(p,{className:"m-2",children:[e.jsx(f,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:e.jsx(g,{className:"text-sm font-medium",children:"Further Details"})}),e.jsxs(N,{children:[e.jsxs("p",{className:"text-xs font-bold pt-4",children:["largest transaction: $",l.toFixed(2)]})," ",e.jsxs("p",{className:"text-xs font-bold pt-4",children:["smallest transaction: $",d.toFixed(2)]}),e.jsxs("p",{className:"text-xs font-bold pt-4",children:["average transaction: $",m.toFixed(2)]})]})]})]}),e.jsxs("ul",{children:[e.jsxs("li",{className:"mt-4",children:[e.jsx("strong",{children:"Merchant Breakdown:"}),e.jsx("ul",{children:Object.entries(u).map(([s,i])=>e.jsxs("li",{children:[s,": ",i," transactions"]},s))})]}),e.jsxs("li",{className:"mt-4",children:[e.jsx("strong",{children:"Payment Method Breakdown:"}),e.jsx("ul",{children:Object.entries(C).map(([s,i])=>e.jsxs("li",{children:[s,": ",i," transactions"]},s))})]}),e.jsxs("li",{className:"mt-4",children:[e.jsx("strong",{children:"Frequency of Transactions:"}),e.jsx("ul",{children:Object.entries(j).map(([s,i])=>e.jsxs("li",{children:[s,": ",i," transactions"]},s))})]}),e.jsxs("li",{className:"mt-4",children:[e.jsx("strong",{children:"Cash Flow Analysis:"}),e.jsx("ul",{children:Object.entries(c).map(([s,i])=>e.jsxs("li",{children:[s,": $",i.toFixed(2)]},s))})]})]})]})};try{P.displayName="MonthlyExpenditureCard",P.__docgenInfo={description:"",displayName:"MonthlyExpenditureCard",props:{transactions:{defaultValue:null,description:"",name:"transactions",required:!0,type:{name:"Transaction[]"}}}}}catch{}const Z=b.createContext([]);class I extends b.Component{constructor(r){super(r);F(this,"myRef");this.state={transactions:r.transactions},this.myRef=b.createRef(),this.categorizeTransactions=this.categorizeTransactions.bind(this),this.groupByMonth=this.groupByMonth.bind(this),this.extractCategories=this.extractCategories.bind(this)}componentDidMount(){this.myRef.current&&this.myRef.current.focus()}categorizeTransactions(r){const o=new Map;for(const a of r){const m=a.personalFinanceCategoryPrimary,l=o.get(m)||{name:m,numTransactions:0,amount:0,transactions:[]};l.numTransactions++;const d=l.amount;l.amount=parseFloat((d+a.amount).toFixed(2)),l.transactions.push(a),o.set(m,l)}return Array.from(o.values())}groupByMonth(r){const o=new Map;for(const m of r){const l=`${m.currentDate.split("-")[1]}-${m.currentDate.split("-")[0]}`,d=o.get(l)||[];d.push(m),o.set(l,d)}const a=[];for(const[m,l]of o.entries())a.push({name:m,data:this.categorizeTransactions(l)});return a.sort((m,l)=>m.name.localeCompare(l.name))}extractCategories(){const r=new Set;this.state.transactions.forEach(a=>{r.add(a.personalFinanceCategoryPrimary)});const o=Array.from(r).map(a=>({key:a.toLowerCase().replace(/[^a-z0-9]/g,""),name:a}));return o.unshift({key:"all",name:"All Categories"}),o}render(){const{className:r}=this.props,{transactions:o}=this.state,a=this.groupByMonth(o);return e.jsx(Z.Provider,{value:o,children:e.jsx(p,{className:Q("w-full",r),children:e.jsx("div",{className:"p-4 flex flex-col gap-2",children:e.jsxs(B,{defaultValue:"txnbymonth",className:"min-w-[400px]",children:[e.jsxs(_,{className:"grid w-full grid-cols-2 font-bold rounded-2xl",children:[e.jsx(M,{value:"txnbycategories",children:"Categories"}),e.jsx(M,{value:"txnbymonth",children:"Monthly Breakdown"})]}),e.jsx(T,{value:"txnbycategories",className:"mt-2",children:e.jsx(ee,{categorySet:this.extractCategories(),transactions:this.state.transactions})}),e.jsx(T,{value:"txnbymonth",className:"mt-2",children:e.jsx(ae,{monthlyTransactions:a})})]})})})})}}F(I,"defaultProps",{className:""});const ee=({categorySet:t,transactions:n})=>{const r=c=>`$${Intl.NumberFormat("us").format(c).toString()}`,o=(c,s)=>c==="all"?s:s.filter(i=>i.personalFinanceCategoryPrimary===c),[a,m]=b.useState("all"),[l,d]=b.useState(n);b.useEffect(()=>{d(o(a,n))},[a,n]);const u=c=>{const s={};return c.forEach(h=>{s[h.personalFinanceCategoryPrimary]||(s[h.personalFinanceCategoryPrimary]=0),s[h.personalFinanceCategoryPrimary]+=h.amount}),Object.entries(s).map(([h,w])=>({categoryName:h,count:w}))};function C(c){const s={};c.forEach(h=>{const w=h.merchantName;s[w]||(s[w]=0),s[w]++});const i=[];for(const h in s)i.push({merchantName:h,count:s[h]});return i}const j=C(n);return e.jsxs($,{className:"mt-2 max-w-4xl mx-auto",children:[e.jsx("div",{className:"hidden sm:block",children:e.jsxs(y,{className:"space-x-4",justifyContent:"start",alignItems:"center",children:[e.jsx(v,{className:"truncate",children:"Transactions"}),e.jsx(z,{placeholder:"Category Selection",className:"max-w-sm mx-auto space-y-6",children:t.map(c=>e.jsx(D,{value:c.key,onClick:()=>m(c.name),icon:V,children:c.name},c.key))})]})}),e.jsxs("div",{className:"sm:hidden",children:[e.jsx(v,{className:"truncate",children:"Transactions"}),e.jsx(z,{onValueChange:m,placeholder:"Category Selection",className:"max-w-full mt-2",children:t.map(c=>e.jsx(D,{value:c.key,children:c.name},c.key))})]}),e.jsx(S,{numItemsLg:1,className:"mt-8 gap-y-10 gap-x-14",children:e.jsxs($,{children:[e.jsx(v,{children:"Spending Across Time"}),e.jsx(x,{children:"Comparison between Spending and Time"}),e.jsx(J,{className:"mt-4 h-80",data:l,index:"authorizedDate",categories:["amount"],colors:["blue","stone"],stack:!1,yAxisWidth:60,valueFormatter:c=>`$${Intl.NumberFormat("us").format(c).toString()}`})]})}),e.jsxs(S,{numItemsLg:3,className:"mt-8 gap-y-10 gap-x-14",children:[e.jsx(y,{children:e.jsx(Y,{data:u(l),category:"count",index:"categoryName",variant:"donut",valueFormatter:r,className:"h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-60 lg:w-60 xl:h-64 xl:w-64 "})}),e.jsxs(A,{numColSpan:1,numColSpanLg:2,children:[e.jsxs(y,{children:[e.jsx(x,{className:"truncate",children:e.jsx(k,{children:"Merchant"})}),e.jsx(x,{children:e.jsx(k,{children:"% spent at merchant "})})]}),e.jsx("div",{className:"hidden sm:block",children:e.jsx(E,{className:"mt-2",children:l.map(c=>e.jsx(O,{txn:c,merchantToTransactionMap:j,transactions:l}))})}),e.jsx("div",{className:"sm:hidden",children:e.jsx(E,{className:"mt-2",children:l.map(c=>e.jsx(O,{txn:c,merchantToTransactionMap:j,transactions:l}))})})]})]})]})},se=["January","February","March","April","May","June","July","August","September","October","November","December"],ae=({monthlyTransactions:t})=>{var o;const n=a=>{const[m,l]=a.split("-");return`${se[parseInt(m)-1]} 1, ${l}`},r=({item:a})=>{const m=()=>{const d=[];return a.data.forEach(u=>{d.push(...u.transactions)}),d},l=()=>e.jsx(E,{className:"mt-4 ",children:a.data.map(d=>e.jsxs(R,{children:[e.jsxs(y,{justifyContent:"start",className:"truncate space-x-4",children:[e.jsx(K,{variant:"light",icon:V,size:"md",className:"border bg-black text-white"}),e.jsxs("div",{className:"truncate",children:[e.jsx(x,{className:"truncate",children:e.jsx(k,{children:d.name})}),e.jsx(x,{className:"truncate",children:`${d.numTransactions} transactions`})]})]}),e.jsx(x,{children:d.amount})]},d.name))});return e.jsxs("div",{className:"mt-2 w-fit",children:[e.jsxs("p",{className:"text-md",children:["Transaction volume for the month of",e.jsxs("span",{className:"font-bold",children:[" ",n(a.name)]})]}),e.jsxs(B,{defaultValue:"categories",className:"w-[400px] p-2 flex flex-col gap-2",children:[e.jsxs(_,{className:"grid w-full grid-cols-2 font-bold rounded-2xl",children:[e.jsx(M,{value:"categories",children:"Spending Across Categories"}),e.jsx(M,{value:"metrics",children:"Metrics"})]}),e.jsx(T,{value:"categories",children:e.jsxs(p,{children:[e.jsxs(f,{children:[e.jsx(g,{children:"Monthly Metrics"}),e.jsxs(L,{children:["Your monthly breakdown of transactions for the month of"," ",n(a.name)]})]}),e.jsx(N,{className:"space-y-2",children:e.jsx(P,{transactions:m()})})]})}),e.jsx(T,{value:"metrics",children:e.jsxs(p,{children:[e.jsxs(f,{children:[e.jsx(g,{children:"Spending Across Categories"}),e.jsxs(L,{children:["Below is a summary of your spending for the month of"," ",n(a.name)," across various categories"]})]}),e.jsx(N,{className:"space-y-2",children:l()}),e.jsx(X,{children:e.jsxs($,{children:[e.jsx(v,{children:"Transactions Across Categories"}),e.jsxs(x,{children:["As of ",n(a.name),"."," ",e.jsxs("span",{className:"text-xs font-bold",children:["Source: your spening"," "]})]}),e.jsx(G,{className:"h-80 mt-6 -ml-2",data:a.data,category:"name",x:"numTransactions",y:"amount",size:"numTransactions",colors:["slate","stone"],showOpacity:!0,valueFormatter:{x:d=>`${d} txn`,y:d=>`$${d}`,size:d=>`${d}`},showLegend:!0})]})})]})})]})]})};return e.jsx(B,{className:"flex flex-row gap-5",defaultValue:(o=t.at(0))==null?void 0:o.name,children:e.jsxs(S,{numItemsSm:1,numItemsLg:3,className:"gap-6",children:[e.jsx(A,{numColSpan:1,numColSpanLg:1,children:e.jsx(_,{className:"flex flex-col gap-2 border rounded-2xl p-3",children:t.map(a=>e.jsx(M,{value:a.name,children:n(a.name)},a.name))})})," ",e.jsx(A,{numColSpan:1,numColSpanLg:2,children:t.map(a=>e.jsx(T,{value:a.name,children:e.jsx(r,{item:a})},a.name))})]})})},O=({txn:t,merchantToTransactionMap:n,transactions:r})=>{const{merchantName:o}=t,{count:a}=te(o,n),m=ne(r.length,a);return e.jsxs(R,{children:[e.jsx(x,{className:"truncate",children:o}),e.jsx("div",{children:e.jsxs(y,{justifyContent:"end",className:"space-x-4",children:[e.jsxs(x,{className:"truncate",children:[a," transactions"]}),e.jsx("div",{className:"w-44",children:e.jsxs(y,{className:"space-x-3 mt-3",children:[e.jsx(W,{value:m,tooltip:"",showAnimation:!0,color:"slate"}),e.jsxs(v,{children:[U(m,0),"%"]})]})})]})})]},t.name)},te=(t,n)=>n.find(o=>o.merchantName===t)||{merchantName:"",count:0},ne=(t,n)=>Math.abs(t-n)/t*100;try{I.displayName="TransactionAnalyticsByMonth",I.__docgenInfo={description:"",displayName:"TransactionAnalyticsByMonth",props:{transactions:{defaultValue:null,description:"",name:"transactions",required:!0,type:{name:"Transaction[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{I as T};
//# sourceMappingURL=TransactionAnalyticsByMonth-6d6e7a75.js.map