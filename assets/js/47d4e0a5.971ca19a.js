"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5145],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>w});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),k=c(a),w=r,p=k["".concat(l,".").concat(w)]||k[w]||u[w]||n;return a?o.createElement(p,s(s({ref:t},h),{},{components:a})):o.createElement(p,s({ref:t},h))}));function w(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={slug:"hacker-news-alert-slack",title:"Never Miss a Beat: Receive Alerts for Hacker News Posts that You're Interested In",authors:"guide",tags:["slack","guide","hackernews"]},s=void 0,i={permalink:"/blog/hacker-news-alert-slack",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-06-26-hacker-news/hacker-news-slack.md",source:"@site/blog/2023-06-26-hacker-news/hacker-news-slack.md",title:"Never Miss a Beat: Receive Alerts for Hacker News Posts that You're Interested In",description:"If you're a hacker who frequents the popular news aggregation site Hacker News, you know how quickly posts can get lost in the shuffle. With hundreds of new stories appearing each day, it can be tough to keep up with the topics that matter most to you. But what if there was a way to be notified anytime a post contained a specific keyword? That's where this article comes in.",date:"2023-06-26T00:00:00.000Z",formattedDate:"June 26, 2023",tags:[{label:"slack",permalink:"/blog/tags/slack"},{label:"guide",permalink:"/blog/tags/guide"},{label:"hackernews",permalink:"/blog/tags/hackernews"}],readingTime:4.255,hasTruncateMarker:!1,authors:[{name:"Authored by flows.network",key:"guide"}],frontMatter:{slug:"hacker-news-alert-slack",title:"Never Miss a Beat: Receive Alerts for Hacker News Posts that You're Interested In",authors:"guide",tags:["slack","guide","hackernews"]},prevItem:{title:"Build Your Own AI Chatbot: A Guide to Creating a Claude Assistant on Telegram",permalink:"/blog/claude-telegram-bot"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},c=[{value:"What is Hacker News",id:"what-is-hacker-news",level:2},{value:"Why we need a tool to  search and monitor the posts of Hacker News",id:"why-we-need-a-tool-to--search-and-monitor-the-posts-of-hacker-news",level:2},{value:"How to create  a  Hacker News Slack bot, taking ChatGPT as an example",id:"how-to-create--a--hacker-news-slack-bot-taking-chatgpt-as-an-example",level:2},{value:"What is the difference between Hacker News RSS and a Slack bot",id:"what-is-the-difference-between-hacker-news-rss-and-a-slack-bot",level:2}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you're a hacker who frequents the popular news aggregation site Hacker News, you know how quickly posts can get lost in the shuffle. With hundreds of new stories appearing each day, it can be tough to keep up with the topics that matter most to you. But what if there was a way to be notified anytime a post contained a specific keyword? That's where this article comes in. "),(0,r.kt)("p",null,"I will walk you through how to build a bot to automatically send Slack messages if a Hacker News post contains the keyword you are concerned with on ",(0,r.kt)("a",{parentName:"p",href:"https://flows.network/"},"the flows.network platform"),". You can also extend this Hacker News bot to another SaaS platform that flows.network has integrated, like Notion, Discord, Telegram, Airtable, and so on."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hacker News Alert",src:a(1081).Z,width:"818",height:"794"})),(0,r.kt)("h2",{id:"what-is-hacker-news"},"What is Hacker News"),(0,r.kt)("p",null,"Before we start, let\u2019s learn more about Hacker News. If you\u2019re familiar with Hacker News, you can skip the next two sections. Hacker News is a social news website focused on technology and startups. It was created by Paul Graham's investment fund and startup incubator, Y Combinator, originally as a way for Y Combinator founders to share information and news."),(0,r.kt)("p",null,"Today, Hacker News has evolved into a popular online community for entrepreneurs, tech enthusiasts, and investors to share and discuss news, articles, and information related to technology, startups, and the wider tech industry. The website features a minimalist design that prioritizes original content and discussions over flashy graphics and ads."),(0,r.kt)("p",null,"Hacker News can be used as a valuable resource for people interested in keeping up with the latest news and trends in the tech industry. By participating in discussions and sharing content on Hacker News, individuals can gain exposure for their own projects, ideas, and businesses, as well as connect with other like-minded individuals who can offer valuable insights and feedback. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hacker News Alert",src:a(5382).Z,width:"993",height:"739"})),(0,r.kt)("h2",{id:"why-we-need-a-tool-to--search-and-monitor-the-posts-of-hacker-news"},"Why we need a tool to  search and monitor the posts of Hacker News"),(0,r.kt)("p",null,"As an entrepreneur, tech enthusiast, or investor, staying on top of industry news and trends is crucial. However, manually scanning through every Hacker News post each day is time-consuming and impractical. However, with flows.network, it\u2019s possible to build a Hacker News Slack bot to search and monitor keywords that we value. The benefits of the bot are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic: It will automatically send you the Hacker News posts via Slack messages at the scheduled time. No need to keep an eye on the Hacker News website."),(0,r.kt)("li",{parentName:"ul"},"Scheduled and recorded: Schedule a time at your convenience to receive the Hacker News alerts. One of the reasons why we choose Slack is that Slack could help us save the past Hacker News posts."),(0,r.kt)("li",{parentName:"ul"},"Flexible: You can customize the time you receive the Hacker News post. You also change another SaaS tool like Airtable as a receiver.")),(0,r.kt)("h2",{id:"how-to-create--a--hacker-news-slack-bot-taking-chatgpt-as-an-example"},"How to create  a  Hacker News Slack bot, taking ChatGPT as an example"),(0,r.kt)("p",null,"Now that we've established the need and benefits for a Hacker News Slack bot. let's take a closer look at how to build your own on flows.network. It's quite easy.  "),(0,r.kt)("p",null,"For example, if a post on Hacker News contains ChatGPT, you will receive a message on a Slack channel. This message will include the post\u2019s Hacker News link and the source link of the post."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure you have signed up for an account for ",(0,r.kt)("a",{parentName:"p",href:"https://flows.network/"},"flows.network"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://flows.network/flow/createByTemplate/hackernews-alert"},(0,r.kt)("strong",{parentName:"a"},"Load the Hacker News alert bot template in flows.network"),".")," The template contains the source code for the bot itself. We will clone the source code to your own GitHub account so that you can modify and customize it later. "),(0,r.kt)("li",{parentName:"ol"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"li"},"KEYWORD"),". Input the area that matters to you, like ChatGPT. Only support one keyword right now. After that, click on Create and Deploy. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Authorize bot access to Slack.")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"slack_workspace")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"slack_channel")," point to the target Slack channel where the bot will send you the ChatGPT-related Hacker News Post. Input your Slack workspace and channel here. Next, click on Connect to give the repo the necessary permissions in Slack.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flows-network/hackernews-alert"},"Click here to see how to create a Hacker News Alert Slack bot in three steps.")),(0,r.kt)("p",null,"That\u2019s it. After that, you will receive a message if the Hacker News Post contains ChatGPT every hour at the 50th minute. Then, you won\u2019t miss any Hacker News Posts related to ChatGPT."),(0,r.kt)("h2",{id:"what-is-the-difference-between-hacker-news-rss-and-a-slack-bot"},"What is the difference between Hacker News RSS and a Slack bot"),(0,r.kt)("p",null,"Compared with Hacker News RSS, one of the advantages of a Hacker News Slack bot is that the bot can be integrated into the SaaS tools you often use. But with Hacker News RSS, you need to install an extra tool to read the RSS feed."),(0,r.kt)("p",null,"Furthermore, you can also integrate ChatGPT into this Slack bot and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flows-network/hacker-news-alert-chatgpt-slack/tree/main/"},"ask ChatGPT to summarize all the Hacker News Posts"),"."),(0,r.kt)("p",null,"If you own a community on Discord, check out the Discord version to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flows-network/hacker-news-alert-chatgpt-discord/tree/main/"},"monitor Hacker News posts containing the keyword you're interested in and ask ChatGPT to give a summary of each post"),"."),(0,r.kt)("p",null,"Give it a try now! Join flows.network ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/TrPfq677au"},"Discord")," server to get the latest updates or request some features."))}u.isMDXComponent=!0},1081:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hacker-news-alert-01-852655fd62719115d3142fdd6c86d8c8.jpg"},5382:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hacker-news-alert-02-14b063d608421941fc8753e008cb6007.jpg"}}]);