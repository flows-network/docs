"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3400],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,m=s["".concat(p,".").concat(c)]||s[c]||b[c]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={slug:"airtable",title:"How to connect Airtable on flows.network",authors:"guide",tags:["airtable","guide"]},l="How to connect Airtable on flows.network",i={permalink:"/blog/airtable",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-07-29-airtable/airtable.md",source:"@site/blog/2023-07-29-airtable/airtable.md",title:"How to connect Airtable on flows.network",description:"When you use a pre-build template with Airtable, configure these 3 parameters: airtabletablename, airtablebaseid and airtabletokenname. And you also need to grant flows.network to access your Airtable via the API token provided by Airtable.",date:"2023-07-29T00:00:00.000Z",formattedDate:"July 29, 2023",tags:[{label:"airtable",permalink:"/blog/tags/airtable"},{label:"guide",permalink:"/blog/tags/guide"}],readingTime:2.435,hasTruncateMarker:!1,authors:[{name:"Authored by flows.network",key:"guide"}],frontMatter:{slug:"airtable",title:"How to connect Airtable on flows.network",authors:"guide",tags:["airtable","guide"]},prevItem:{title:"How to get a Telegram bot token",permalink:"/blog/how-to-get-a-telegram-bot-token"},nextItem:{title:"Build Your Own AI Chatbot: A Guide to Creating a Claude Assistant on Telegram",permalink:"/blog/claude-telegram-bot"}},p={authorsImageUrls:[void 0]},d=[{value:"Create a flow from a template",id:"create-a-flow-from-a-template",level:2},{value:"Configure <code>airtable_table_name</code>, <code>airtable_base_id</code> and <code>airtable_token_name</code>",id:"configure-airtable_table_name-airtable_base_id-and-airtable_token_name",level:3},{value:"Add your Airtable API token",id:"add-your-airtable-api-token",level:3}],u={toc:d};function b(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you use a pre-build template with Airtable, configure these 3 parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_table_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_base_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_token_name"),". And you also need to grant flows.network to access your Airtable via the API token provided by Airtable."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"airtable_table_name")),(0,r.kt)("td",{parentName:"tr",align:null},"A string of alphabets begins with ",(0,r.kt)("inlineCode",{parentName:"td"},"tb")),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the table you want to add data, which you can find on Airtable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"airtable_base_id")),(0,r.kt)("td",{parentName:"tr",align:null},"A string of alphabets begins with ",(0,r.kt)("inlineCode",{parentName:"td"},"app")),(0,r.kt)("td",{parentName:"tr",align:null},"the base id to which the table you wish to add or retrieve data belongs, which you can find on Airtable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"airtable_token_name")),(0,r.kt)("td",{parentName:"tr",align:null},"A string of word (s)"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the Airtable API token, which is defined by you.")))),(0,r.kt)("p",null,"In this article, I will show you how to configure these parameters to make your flow work."),(0,r.kt)("h2",{id:"create-a-flow-from-a-template"},"Create a flow from a template"),(0,r.kt)("p",null,"flows.network will give you the UI instruction when creating a flow ",(0,r.kt)("strong",{parentName:"p"},"from a template"),". "),(0,r.kt)("h3",{id:"configure-airtable_table_name-airtable_base_id-and-airtable_token_name"},"Configure ",(0,r.kt)("inlineCode",{parentName:"h3"},"airtable_table_name"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"airtable_base_id")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"airtable_token_name")),(0,r.kt)("p",null,"Generally, you can see the following image."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/45785633/257062761-b8cf5fd5-a529-45ed-97b6-fc8d83b0ec53.png",alt:null})),(0,r.kt)("p",null,"On the top of the section, you need to enter ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_table_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_base_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_token_name"),". As I mentioned before, ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_table_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_base_id")," tell flows.network where to add or read data."),(0,r.kt)("p",null,"So the first step is to go to your Airtable base and get the current URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://airtable.com/appNEswczILgUsxML/tblyMHEVEkFkHM7Z1/viwdHLVHdR603VNlL?blocks=hide\n\n                    |----base_id-----| |----table_name--|\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"base_id")," is begun with ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," is begun with ",(0,r.kt)("inlineCode",{parentName:"p"},"tb"),". Copy and paste the two parameters."),(0,r.kt)("p",null,"The last one is ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_token_name"),". Here you can name your API token."),(0,r.kt)("h3",{id:"add-your-airtable-api-token"},"Add your Airtable API token"),(0,r.kt)("p",null,"After typing these parameters, click the purple Connect button to add your Airtable API token. Then you will be redirected to a new page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1641).Z,width:"1422",height:"704"})),(0,r.kt)("p",null,"Give your Airtable API token a name, which should match the ",(0,r.kt)("inlineCode",{parentName:"p"},"airtable_token_name")," you set earlier. Then copy and paste your token here. After that, click on the Continue button and you will be redirected to the Airtable integration page, and the token you added will be popped into this page. Then close this tab and go back to the Creating a Flow page to finish the flow. Once you connect successfully, you won\u2019t do it again when you create another flow."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Or you can also add your Airtable token before creating a flow"),". Once you finish this, you don\u2019t need to connect it again when you're creating a flow."),(0,r.kt)("p",null,"After you sign in flows.network, go to ",(0,r.kt)("a",{parentName:"p",href:"https://flows.network/integration/Airtable"},"the Airtable integration")," page and click on Connect button. Then you will be redirected to a new page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1641).Z,width:"1422",height:"704"})),(0,r.kt)("p",null,"We need to name your Airtable API token and copy and paste your token here. After that, click the Continue button, and you will be redirected to the Airtable integration page, and the token you just added will be popped on this page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8961).Z,width:"760",height:"718"})),(0,r.kt)("p",null,"That\u2019s it. Remember your Airtable API token name because you will use the name when you create a flow."))}b.isMDXComponent=!0},1641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airtable-01-c499ebb2c42afa47205d4b4365c06666.png"},8961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airtable-02-52d3bdfb2751100fd02a671655f0f801.png"}}]);