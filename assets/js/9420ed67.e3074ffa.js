"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9424],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},s="Timer",i={unversionedId:"platform-sdk-features/timers",id:"platform-sdk-features/timers",title:"Timer",description:"The schedule-flows crate offers the ability to schedule a task.",source:"@site/docs/platform-sdk-features/timers.md",sourceDirName:"platform-sdk-features",slug:"/platform-sdk-features/timers",permalink:"/docs/platform-sdk-features/timers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform-sdk-features/timers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Platform SDK Features",permalink:"/docs/category/platform-sdk-features"},next:{title:"State Store",permalink:"/docs/platform-sdk-features/store"}},l={},c=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"timer"},"Timer"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/schedule-flows"},(0,a.kt)("inlineCode",{parentName:"a"},"schedule-flows")," crate")," offers the ability to schedule a task."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cron Scheduling")," : The library offers the ",(0,a.kt)("inlineCode",{parentName:"li"},"schedule_cron_job")," function that accepts cron expressions for scheduling tasks\u200b. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Integration Ready")," : It integrates with Flows Network's API and it can be used in combination with other services supported on the platform\u200b\u200b. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ease of Use")," : With simple syntax, you can create tasks like sending a message to a Slack channel at a specific time daily\u200b.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/flows-network/hackernews-alert"},"Send Hacker News post to a Slack channel every hour"),". the function will be trigger per hour by the ",(0,a.kt)("inlineCode",{parentName:"li"},"schedule-flows")," crate.")),(0,a.kt)("p",null,"The minimum limit of the ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule-flows")," crate is one hour.\nTo use Schedule Flows, import the necessary functions and define the task:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'\nuse schedule_flows::schedule_cron_job;\nuse slack_flows::send_message_to_channel;\n\n#[no_mangle]\n#[tokio::main(flavor = "current_thread")]\npub async fn run() {\n    schedule_cron_job(String::from("50 8 * * *"), String::from("cron_job_evoked"), |body| {\n        send_message_to_channel(\n            "myworkspace",\n            "mychannel",\n            String::from_utf8_lossy(&body).into_owned(),\n        ).await\n    }).await;\n}\n')),(0,a.kt)("p",null,"This example sets up a cron job that sends a message to a Slack channel at 8:50 UTC daily."))}p.isMDXComponent=!0}}]);