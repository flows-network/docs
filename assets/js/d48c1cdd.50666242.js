"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4993],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(o),h=a,m=f["".concat(s,".").concat(h)]||f[h]||c[h]||r;return o?n.createElement(m,l(l({ref:t},p),{},{components:o})):n.createElement(m,l({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6872:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const r={slug:"flows-network-update-0525",title:"Changelog flows.network (0525)",authors:{name:"release",title:"New things about flows.network"},tags:["changelog","product"]},l=void 0,i={permalink:"/blog/flows-network-update-0525",editUrl:"https://github.com/flows-network/docs/tree/main/blog/changelog-0525.md",source:"@site/blog/changelog-0525.md",title:"Changelog flows.network (0525)",description:"flows.nework just released a new version last week. This version comes with Flow Template features that allows users onboard in 3 minutes. We also released new versions of OpenAI integrations GitHub integrations, and flowsnet-platform-sdk.",date:"2023-08-24T10:27:29.000Z",formattedDate:"August 24, 2023",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"product",permalink:"/blog/tags/product"}],readingTime:3.34,hasTruncateMarker:!1,authors:[{name:"release",title:"New things about flows.network"}],frontMatter:{slug:"flows-network-update-0525",title:"Changelog flows.network (0525)",authors:{name:"release",title:"New things about flows.network"},tags:["changelog","product"]},prevItem:{title:"This week in flows.network (0403-0407)",permalink:"/blog/flows-network-update-0407"},nextItem:{title:"Step-by-Step Guide: Building a Telegram bot for ChatGPT",permalink:"/blog/build-a-chatgpt-telegram-bot-with-flows-network"}},s={authorsImageUrls:[void 0]},u=[{value:"Integration updates for developers",id:"integration-updates-for-developers",level:2},{value:"Introducing template  for users",id:"introducing-template--for-users",level:2},{value:"How to deploy a telegram bot from a flow template",id:"how-to-deploy-a-telegram-bot-from-a-flow-template",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"flows.nework just released a new version last week. This version comes with Flow Template features that allows users onboard in 3 minutes. We also released new versions of OpenAI integrations GitHub integrations, and flowsnet-platform-sdk."),(0,a.kt)("h2",{id:"integration-updates-for-developers"},"Integration updates for developers"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Upgrade the ",(0,a.kt)("inlineCode",{parentName:"li"},"github-flows")," Integration to the 0.5.1 version. The latest version includes a new feature called ",(0,a.kt)("inlineCode",{parentName:"li"},"GithubLogin::Default"),", which automatically identifies the user's unique login account as their GitHub ",(0,a.kt)("inlineCode",{parentName:"li"},"login")," account. This eliminates the need for users to manually input their personal GitHub account in the code. For an example, please click on the following link: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/flows-network/github-star-slack-messenger/pull/2/files"},"https://github.com/flows-network/github-star-slack-messenger/pull/2/files"),"."),(0,a.kt)("li",{parentName:"ol"},"Upgrade the openai-flows integration to the 0.7.1 version. Added  ",(0,a.kt)("inlineCode",{parentName:"li"},"let of = OpenAIFlows::new();"),", which will find the OpenAI key named default.  If there is no key named default, the platform will search for other keys. This method eliminates the need for users to specify the key name in the code.  ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/flows-network/github-pr-summary/blob/main/src/github-pr-summary.rs#L165"},"Click the link to check out an example"),"."),(0,a.kt)("li",{parentName:"ol"},"Add log feature for the ",(0,a.kt)("inlineCode",{parentName:"li"},"flowsnet-platform-sdk")," integration in the 0.1.4 version. With this feature, users can get more detailed and long-time logs for their flows. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/DarumaDocker/github-func-test/blob/text-detection-lambda/src/lib.rs#L7"},"Click the link to check out an example"),".")),(0,a.kt)("p",null,"[Image: Image.jpg]"),(0,a.kt)("h2",{id:"introducing-template--for-users"},"Introducing template  for users"),(0,a.kt)("p",null,"In order to make the process of using flows.network easier for users, we have introduced pre-built flow templates that are popular. You can view these templates on the ",(0,a.kt)("a",{parentName:"p",href:"https://flows.network/templates"},"templates")," page. We are also working on adding more templates.\nBy using a flow template, you only need to adjust certain settings for your bot and the SaaS integration required for the flow. Additionally, we will create a GitHub repository under your personal account to ensure that you have full control of the source code. Any updates you make to the repo will be automatically built by flows.network. "),(0,a.kt)("p",null,"After deploying a bot from the template, you will have a functioning bot and access to its source code. Let's take a look at how a Flow Template works."),(0,a.kt)("h3",{id:"how-to-deploy-a-telegram-bot-from-a-flow-template"},"How to deploy a telegram bot from a flow template"),(0,a.kt)("p",null,"Click the template ",(0,a.kt)("a",{parentName:"p",href:"https://flows.network/flow/createByTemplate/telegram-chatgpt-bot"},"ChatGPT Based Telegram Bot")," to start. Make sure you have signed in ",(0,a.kt)("a",{parentName:"p",href:"https://flows.network/"},"flows.network"),"."),(0,a.kt)("p",null,"On this page, you can see which template you\u2019re using and you will create a new GitHub repo for yourself.  As I mentioned before, to make sure you have the full control of the flow\u2019s code, flows.network will create a GitHub repo containing the template source code under your own GitHub org. Here you can change the repo name. The name by default is the name of the template you used. You can also choose your own repo public or not."),(0,a.kt)("p",null,"[Image: Image.jpg]","If you\u2019re ok with the default setting on this page, just click on Create and Build to create the GitHub repo and build the flow function."),(0,a.kt)("p",null,"Building the function takes some time, meanwhile let\u2019s configure the SaaS integration required by the flow template meanwhile. Next you will go through the SaaS integrations that you need to configure."),(0,a.kt)("p",null,"We also need to grant flows.netowork to access OpenAI. Click on Connect if it\u2019s your first time to connect OpenAI.  You will be directed to a new page. Here you need to copy and paste your OpenAI key on the API key zone. If you have connected OpenAI, just click on continue button to check out the flow details."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you already connected to OpenAI  and want to add a new one, click on +Add new authentication.")),(0,a.kt)("p",null,"[Image: Image.jpg]"),(0,a.kt)("p",null," For this ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatGPT Telegram Bot"),", we need to ",(0,a.kt)("a",{parentName:"p",href:"https://flows.network/blog/how-to-get-a-telegram-bot-token"},"add a telegram API token from the botfather"),". After you copy and paster the telegram API token in the configuration section, click on Deploy to deploy you flow."),(0,a.kt)("p",null,"That\u2019s it. You can see your flow is building. Once the status of your flow becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"running"),", you can go to the telegram to give the bot a try."),(0,a.kt)("p",null,"This is how a template works. With a template, deploying a bot is easy and  simple. Welcome to give it a try! Feel free to join our Discord server to stay updated or to request a template."))}c.isMDXComponent=!0}}]);