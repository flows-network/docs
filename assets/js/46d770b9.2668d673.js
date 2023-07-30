"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[134],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(o),h=a,b=m["".concat(i,".").concat(h)]||m[h]||p[h]||n;return o?r.createElement(b,l(l({ref:t},c),{},{components:o})):r.createElement(b,l({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<n;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3506:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=o(7462),a=(o(7294),o(3905));const n={slug:"how-to-get-a-telegram-bot-token",title:"How to get a Telegram bot token",authors:"helper",tags:["telegram"]},l=void 0,s={permalink:"/blog/how-to-get-a-telegram-bot-token",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/telegram-token.md",source:"@site/blog/telegram-token.md",title:"How to get a Telegram bot token",description:"To build Telegram bots or automate Telegram-related workflows on the flows.network platform, a Telegram bot token is necessary. flows.network supports Telegram integration, which enables you to create Telegram bots with ease.",date:"2023-07-30T14:52:49.000Z",formattedDate:"July 30, 2023",tags:[{label:"telegram",permalink:"/blog/tags/telegram"}],readingTime:1.425,hasTruncateMarker:!1,authors:[{name:"Authored by flows.network",key:"helper"}],frontMatter:{slug:"how-to-get-a-telegram-bot-token",title:"How to get a Telegram bot token",authors:"helper",tags:["telegram"]},prevItem:{title:"How to create a Discord chat bot",permalink:"/blog/discord-chat-bot-guide"},nextItem:{title:"How to connect Airtable on flows.network",permalink:"/blog/airtable"}},i={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To build Telegram bots or automate Telegram-related workflows on the flows.network platform, a Telegram bot token is necessary. flows.network supports ",(0,a.kt)("a",{parentName:"p",href:"https://flows.network/integration/Telegram"},"Telegram integration"),", which enables you to create Telegram bots with ease."),(0,a.kt)("p",null,"Here's a step-by-step guide on how to get a bot token for Telegram. Then you can use this token to create your own telegram bot."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Open Telegram on your device or web browser and search for the "BotFather" account ',(0,a.kt)("a",{parentName:"li",href:"https://t.me/BotFather"},"@BotFather"),"."),(0,a.kt)("li",{parentName:"ol"},'Start a chat with the BotFather and type "/newbot" to create a new bot. BotFather will ask for a name and username for your bot.'),(0,a.kt)("li",{parentName:"ol"},'Choose a name and username for your bot. The name can be anything you like but the username must end with "bot". For example, the name can be "FlowsNetworkBot" and the username can be "@flowsnetworkbot".'),(0,a.kt)("li",{parentName:"ol"},"If your chosen username is available, BotFather will provide you with a unique API token for your bot. You should copy and store this token carefully."),(0,a.kt)("li",{parentName:"ol"},"Once you have the API token, you can start building your Telegram bot on flows.network. Here is a template project to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/flows-network/telegram-gpt"},"build a ChatGPT-powered Telegram bot")," on flows.network.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that the API token is a unique identifier for your bot, which allows you to send requests to the Telegram Bot API. Make sure to keep this token safe and secure, as anyone with access to this token can potentially control your bot.")),(0,a.kt)("p",null,"In conclusion, getting a bot token for Telegram is a simple process that can be completed with BotFather's help. Once you have the token, you can start building your bot on flows.network."),(0,a.kt)("p",null,"Next step is to fork the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flows-network/telegram-gpt"},"telegram-gpt")," repo and folow the instrcutions to build your own chatgpt bot."))}p.isMDXComponent=!0}}]);