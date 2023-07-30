"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2540],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6625:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={slug:"discord-chat-bot-guide",title:"How to create a Discord chat bot",authors:"helper",tags:["discord"]},i=void 0,l={permalink:"/blog/discord-chat-bot-guide",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/how-to-create-a-discord-chat-bot.md",source:"@site/blog/how-to-create-a-discord-chat-bot.md",title:"How to create a Discord chat bot",description:"A Discord chat bot is a bot user that can receive and respond to private messages, as well as channel messages that specifically mention or reply to the bot user. In order to connect a flow function with a Discord chat bot, you will need a discord_token.",date:"2023-07-27T03:42:09.000Z",formattedDate:"July 27, 2023",tags:[{label:"discord",permalink:"/blog/tags/discord"}],readingTime:1.08,hasTruncateMarker:!1,authors:[{name:"Authored by flows.network",key:"helper"}],frontMatter:{slug:"discord-chat-bot-guide",title:"How to create a Discord chat bot",authors:"helper",tags:["discord"]},prevItem:{title:"How to create a Discord channel bot",permalink:"/blog/discord-channel-bot-guide"},nextItem:{title:"How to get a Telegram bot token",permalink:"/blog/how-to-get-a-telegram-bot-token"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A Discord chat bot is a bot user that can receive and respond to private messages, as well as channel messages that specifically mention or reply to the bot user. In order to connect a flow function with a Discord chat bot, you will need a ",(0,n.kt)("inlineCode",{parentName:"p"},"discord_token"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"Discord Developer Portal")," and log in."),(0,n.kt)("li",{parentName:"ol"},'Click on the "New Application" button and give your bot a name.'),(0,n.kt)("li",{parentName:"ol"},"Next, on the application details page, you can update the app icon, description, tags etc."),(0,n.kt)("li",{parentName:"ol"},'Click on the "Bot" tab on the left panel.',(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},'Click the "Reset Token" button to get the ',(0,n.kt)("inlineCode",{parentName:"li"},"discord_token"),". ",(0,n.kt)("strong",{parentName:"li"},"Write down the token and keep it safe!")),(0,n.kt)("li",{parentName:"ol"},'Turn on the "PRESENCE INTENT", "SERVER MEMBERS INTENT", and "MESSAGE CONTENT INTENT" settings.'))),(0,n.kt)("li",{parentName:"ol"},'Click on the \u201cOauth2" tab on the left panel',(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},'Click on "URL Generator".'),(0,n.kt)("li",{parentName:"ol"},'Select the "bot" scope.'),(0,n.kt)("li",{parentName:"ol"},"Get the bot URL from the GENERATED URL in the bottom of this page."))),(0,n.kt)("li",{parentName:"ol"},"Finally, use the bot URL from the last step to invite the bot into any of your Discord servers. ")),(0,n.kt)("p",null,"Once you connect a flow function to the bot (via the ",(0,n.kt)("inlineCode",{parentName:"p"},"discord_token"),"), all users in the Discord server will be able to message the bot and mention / reply to it in channels."))}d.isMDXComponent=!0}}]);