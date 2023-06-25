"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5365],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(o),p=r,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7751:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={slug:"discord-bot-guide",title:"How to create a Discord bot",authors:"helper",tags:["discord"]},i="How  to create a Discord  server bot",l={permalink:"/blog/discord-bot-guide",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/how-to-create-a-discord-bot.md",source:"@site/blog/how-to-create-a-discord-bot.md",title:"How to create a Discord bot",description:"Discord is a great communication tool for the community. Lots of organisations, companies, and open-source projects use Discord as the home of their community. One of the most famous use cases is Midjounry. Lots of people use midjourny to generate unbelievable images with the help of a Discord server bot. In this article, I will show you how to create a Discord server bot and connect the bot with flows.work. This will be helpful when you want to create Discord-related flows.",date:"2023-06-25T10:40:19.000Z",formattedDate:"June 25, 2023",tags:[{label:"discord",permalink:"/blog/tags/discord"}],readingTime:2.15,hasTruncateMarker:!1,authors:[{name:"customer service",key:"helper"}],frontMatter:{slug:"discord-bot-guide",title:"How to create a Discord bot",authors:"helper",tags:["discord"]},prevItem:{title:"Step-by-Step Guide: Building a Telegram bot for ChatGPT",permalink:"/blog/build-a-chatgpt-telegram-bot-with-flows-network"},nextItem:{title:"How to get a Telegram bot token",permalink:"/blog/how-to-get-a-telegram-bot-token"}},c={authorsImageUrls:[void 0]},s=[{value:"How to get the Discord channel id",id:"how-to-get-the-discord-channel-id",level:2},{value:"How to get the Discord bot token",id:"how-to-get-the-discord-bot-token",level:2},{value:"Connect the channel id and Discord token with your bot",id:"connect-the-channel-id-and-discord-token-with-your-bot",level:2}],d={toc:s};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Discord is a great communication tool for the community. Lots of organisations, companies, and open-source projects use Discord as the home of their community. One of the most famous use cases is Midjounry. Lots of people use midjourny to generate unbelievable images with the help of a Discord server bot. In this article, I will show you how to create a Discord server bot and connect the bot with flows.work. This will be helpful when you want to create Discord-related flows."),(0,r.kt)("p",null,"To connect Discord on flows.network, generally we will need two parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"discord_channel_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"discord-token"),". "),(0,r.kt)("h2",{id:"how-to-get-the-discord-channel-id"},"How to get the Discord channel id"),(0,r.kt)("p",null,"Let\u2019s get started with channel id, which is much easier. Discord channel id is an 18-digit number. "),(0,r.kt)("p",null,"Each channel has its own unique URL. A standard URL of a discord channel is made up of ",(0,r.kt)("inlineCode",{parentName:"p"},"discord.com/channels/numbers/discord_id"),". All you need to do is to enter the channel where you want to deploy the bot and copy the last numbers of the URL. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://discord.com/channels/846973236280950824/846973236280950827\n                                               |---channel id-----|\n")),(0,r.kt)("p",null,"That\u2019s how we get the Discord channel id.You can use a Discord channel ID to indicate the channel from which the bot should exit."),(0,r.kt)("h2",{id:"how-to-get-the-discord-bot-token"},"How to get the Discord bot token"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"Discord Developer Portal")," You need to log in your Discord account first."),(0,r.kt)("li",{parentName:"ol"},'Click on the "New Application" button and give your bot a name.'),(0,r.kt)("li",{parentName:"ol"},"Then, you will be redirected to the application details page. On the general information page, you can update your app icon, description, tags and other stuff."),(0,r.kt)("li",{parentName:"ol"},'Click on the "Bot" tab on the left-hand side of the page. In this page, we need to ',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Click the Reset Token button to get the Discord bot token. Then save the token carefully, which we will use to build a flow on flows.network."),(0,r.kt)("li",{parentName:"ol"},"Open the PRESENCE INTENT, SERVER MEMBERS INTENT, and MESSAGE CONTENT INTENT."))),(0,r.kt)("li",{parentName:"ol"},'Click on the \u201cOauth" tab on the left-hand side of the page and click on URL Generator.',(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"On the URL Generator page, select bot in the scope."),(0,r.kt)("li",{parentName:"ol"},"Copy the bot url from the GENERATED RRL in the bottom of this page. This URL is used to invite your bot to your Discord server after your flow is running successfully.")))),(0,r.kt)("p",null,"After you get the Discord Chanel id and Discord bot token , go to flows.network to create a Discord bot, like the ChatGPT Discord server."),(0,r.kt)("h2",{id:"connect-the-channel-id-and-discord-token-with-your-bot"},"Connect the channel id and Discord token with your bot"),(0,r.kt)("p",null,"The most easiest way to create a discord bot is to get started with a pre-build template."))}h.isMDXComponent=!0}}]);