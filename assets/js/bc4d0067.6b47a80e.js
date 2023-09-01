"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Slack",s={unversionedId:"integrations/slack",id:"integrations/slack",title:"Slack",description:"The slack-flows library brings the support of most frequently used Slack APIs to the Flows Network platform.",source:"@site/docs/integrations/slack.md",sourceDirName:"integrations",slug:"/integrations/slack",permalink:"/docs/integrations/slack",draft:!1,editUrl:"https://github.com/flows-network/docs/tree/main/docs/integrations/slack.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Web service interface",permalink:"/docs/integrations/platform-sdk-features/web-service"},next:{title:"GitHub",permalink:"/docs/integrations/github"}},l={},c=[{value:"Trigger",id:"trigger",level:2},{value:"Action",id:"action",level:2},{value:"Recommended flows and templates",id:"recommended-flows-and-templates",level:2},{value:"API Reference",id:"api-reference",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slack"},"Slack"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/slack-flows/"},(0,a.kt)("inlineCode",{parentName:"a"},"slack-flows"))," library brings the support of most frequently used Slack APIs to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.flows.network/docs/"},(0,a.kt)("inlineCode",{parentName:"a"},"Flows Network"))," platform."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows Function")," or bot, built with this library, waits for an event to occur on Slack, such as a new message in a channel, then kicks into action. The ",(0,a.kt)("inlineCode",{parentName:"p"},"listen_to_channel()")," function is used to register a listener for incoming messages in a specific channel."),(0,a.kt)("h2",{id:"action"},"Action"),(0,a.kt)("p",null,"Once the function receives a trigger, it performs an action. In our basic example, the function sends a response message to the channel upon receiving a new message. The action is defined within the callback function provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"listen_to_channel()"),"."),(0,a.kt)("h2",{id:"recommended-flows-and-templates"},"Recommended flows and templates"),(0,a.kt)("p",null,"Here is a minimal example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use slack_flows::{listen_to_channel, send_message_to_channel};\n\n#[no_mangle]\npub fn run() {\n    listen_to_channel("myworkspace", "mychannel", |sm| {\n        send_message_to_channel("myworkspace", "mychannel", format!("Hello, {}",\n        sm.text))\n    }).await;\n}\n')),(0,a.kt)("p",null,"This code shows a basic bot that listens for incoming messages in a specific channel ",(0,a.kt)("inlineCode",{parentName:"p"},"mychannel")," of a given workspace ",(0,a.kt)("inlineCode",{parentName:"p"},"myworkspace")," and responds with a greeting message."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/slack-flows/"},"https://docs.rs/slack-flows/")))}m.isMDXComponent=!0}}]);