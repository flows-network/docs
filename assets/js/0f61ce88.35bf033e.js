"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||g[c]||a;return n?o.createElement(f,l(l({ref:t},d),{},{components:n})):o.createElement(f,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4},l="logging",i={unversionedId:"integrations/platform-sdk-features/logging",id:"integrations/platform-sdk-features/logging",title:"logging",description:"The flowsnet-platform-sdk crate offers the ability to print log for flows.",source:"@site/docs/integrations/platform-sdk-features/logging.md",sourceDirName:"integrations/platform-sdk-features",slug:"/integrations/platform-sdk-features/logging",permalink:"/docs/integrations/platform-sdk-features/logging",draft:!1,editUrl:"https://github.com/flows-network/docs/tree/main/docs/integrations/platform-sdk-features/logging.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"State Store",permalink:"/docs/integrations/platform-sdk-features/store"},next:{title:"Configurations",permalink:"/docs/integrations/platform-sdk-features/configuration"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"How to add logging to your code",id:"how-to-add-logging-to-your-code",level:3},{value:"Setting up the flow",id:"setting-up-the-flow",level:3},{value:"Flows that using the <code>flowsnet-platform-sdk</code> crate",id:"flows-that-using-the-flowsnet-platform-sdk-crate",level:2}],d={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logging"},"logging"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/flowsnet-platform-sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"flowsnet-platform-sdk")," crate")," offers the ability to print log for flows."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"how-to-add-logging-to-your-code"},"How to add logging to your code"),(0,r.kt)("p",null,"To add logging to your code, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file and add the following lines:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'[dependencies]\nflowsnet-platform-sdk = "0.1"\nlog = "0.4"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the beginning of your Rust code, ensure that you import the ",(0,r.kt)("inlineCode",{parentName:"p"},"flowsnet_platform_sdk")," crate:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use flowsnet_platform_sdk::logger;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside your ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," function, initialize the logger:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub async fn run() -> anyhow::Result<()> {\n    dotenv().ok();\n    logger::init();\n    // Rest of your code\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Whenever you want to print log information, use the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," crate and provide the desired message:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'log::debug!("Received payload: PR Synced");\n')))),(0,r.kt)("p",null,"That's it! Logging functionality has now been added to your code."),(0,r.kt)("h3",{id:"setting-up-the-flow"},"Setting up the flow"),(0,r.kt)("p",null,'To enable the log of the corresponding level to be printed, go to the "Settings" tab and scroll down to find the "Configuration" button. Add a new configuration with the name ',(0,r.kt)("inlineCode",{parentName:"p"},"RUST_LOG")," and the value indicating the level you want to print.\nFor example, setting the value to ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"log::debug!()")," to work in your code."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9464).Z,width:"1844",height:"513"})),(0,r.kt)("p",null,"Now, whenever the flow is triggered, you can see the detailed logs. Please note that the logs are only saved for the latest three days."),(0,r.kt)("p",null,'All the logs will be displayed in the "Running Log" tab, as shown in the accompanying image.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6727).Z,width:"1068",height:"675"})),(0,r.kt)("h2",{id:"flows-that-using-the-flowsnet-platform-sdk-crate"},"Flows that using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"flowsnet-platform-sdk")," crate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/flows-network/github-pr-summary"},"Use ChatGPT to summarize & review GitHub Pull Requests"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"flowsnet-platform-sdk")," crate provides detailed and long time log.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/flows-network/telegram-gpt"},"Integrate ChatGPT into telegram"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"flowsnet-platform-sdk")," crate provides detailed and long time log."))))}g.isMDXComponent=!0},6727:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flows-log-01-e909f392a7259048dde87cca7819b746.png"},9464:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flows-log-02-65cc7531969183543f963cb116b4142d.png"}}]);