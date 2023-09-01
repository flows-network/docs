"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7618],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>h});var a=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(o),h=n,k=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return o?a.createElement(k,i(i({ref:e},u),{},{components:o})):a.createElement(k,i({ref:e},u))}));function h(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2537:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const r={slug:"discord-chatgpt-bot",title:"How to Build a Discord ChatGPT Bot",authors:"guide",tags:["discord","chatgpt","guide"]},i=void 0,l={permalink:"/blog/discord-chatgpt-bot",editUrl:"https://github.com/flows-network/docs/tree/main/blog/2023-08-04-discord-chatgpt/how-to-build-discord-chatgpt-bot.md",source:"@site/blog/2023-08-04-discord-chatgpt/how-to-build-discord-chatgpt-bot.md",title:"How to Build a Discord ChatGPT Bot",description:"Flows.network is a serverless platform that allows you to build and deploy LLM applications without worrying about infrastructure management. In this guide, we will walk you through the process of building a ChatGPT Discord bot using flows.network, step-by-step. More importantly, you don\u2019t need to master any coding skills.",date:"2023-08-04T00:00:00.000Z",formattedDate:"August 4, 2023",tags:[{label:"discord",permalink:"/blog/tags/discord"},{label:"chatgpt",permalink:"/blog/tags/chatgpt"},{label:"guide",permalink:"/blog/tags/guide"}],readingTime:4.37,hasTruncateMarker:!1,authors:[{name:"Authored by flows.network",key:"guide"}],frontMatter:{slug:"discord-chatgpt-bot",title:"How to Build a Discord ChatGPT Bot",authors:"guide",tags:["discord","chatgpt","guide"]},prevItem:{title:"How to get a Telegram bot token",permalink:"/blog/how-to-get-a-telegram-bot-token"},nextItem:{title:"How to connect Airtable on flows.network",permalink:"/blog/airtable"}},s={authorsImageUrls:[void 0]},c=[{value:"1. Get a Discord Bot Token",id:"1-get-a-discord-bot-token",level:2},{value:"1.1 Create a New Application",id:"11-create-a-new-application",level:3},{value:"1.2 Obtain Bot Token",id:"12-obtain-bot-token",level:3},{value:"1.3 Add a Bot to Your Application",id:"13-add-a-bot-to-your-application",level:3},{value:"2. Set up a flows.network Account",id:"2-set-up-a-flowsnetwork-account",level:2},{value:"3. Create the Discord ChatGPT Bot on flows.network",id:"3-create-the-discord-chatgpt-bot-on-flowsnetwork",level:2},{value:"3.1  Load the ChatGPT Discord Bot template",id:"31--load-the-chatgpt-discord-bot-template",level:3},{value:"3.2 Configure the Bot",id:"32-configure-the-bot",level:3},{value:"4. Test and Interact with the Bot",id:"4-test-and-interact-with-the-bot",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Other templates using Discord",id:"other-templates-using-discord",level:2},{value:"FAQs",id:"faqs",level:2}],u={toc:c};function p(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://flows.network/"},"Flows.network")," is a serverless platform that allows you to build and deploy LLM applications without worrying about infrastructure management. In this guide, we will walk you through the process of building a ChatGPT Discord bot using flows.network, step-by-step. ",(0,n.kt)("strong",{parentName:"p"},"More importantly, you don\u2019t need to master any coding skills.")),(0,n.kt)("p",null,"This bot can"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Customizable prompts - You can copy and paste any prompt for the bot to respond to. Feel free to get creative!"),(0,n.kt)("li",{parentName:"ul"},"Direct message responses - Have a private conversation with the bot by direct messaging it."),(0,n.kt)("li",{parentName:"ul"},"Channel message responses - The bot can respond to messages posted in channels, allowing all channel members to interact with it."),(0,n.kt)("li",{parentName:"ul"},"External service integration - Services like OCR can be integrated to expand the bot's functionality. For example, ",(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/cloud-vision-flows/0.1.1/cloud_vision_flows/"},"the bot can process images with OCR"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(169).Z,width:"2282",height:"1184"})),(0,n.kt)("h2",{id:"1-get-a-discord-bot-token"},"1. Get a Discord Bot Token"),(0,n.kt)("p",null,"To get started, you need to have a Discord account. And then follow these steps:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can also refer to ",(0,n.kt)("a",{parentName:"p",href:"https://flows.network/blog/discord-chat-bot-guide"},"How to create a Discord chat bo"),"t for more information.")),(0,n.kt)("h3",{id:"11-create-a-new-application"},"1.1 Create a New Application"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit the Discord Developer Portal and log in with your Discord account."),(0,n.kt)("li",{parentName:"ul"},'Click on "New Application" and provide a name for your bot.'),(0,n.kt)("li",{parentName:"ul"},'Navigate to the "Bot" tab and click on "Add Bot."')),(0,n.kt)("h3",{id:"12-obtain-bot-token"},"1.2 Obtain Bot Token"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Go back to the "Bot" tab and click on "Copy" under the "TOKEN" section. Keep this token secure as it will be used to authenticate your bot.'),(0,n.kt)("li",{parentName:"ul"},'Turn on the "PRESENCE INTENT", "SERVER MEMBERS INTENT", and "MESSAGE CONTENT INTENT" settings.')),(0,n.kt)("h3",{id:"13-add-a-bot-to-your-application"},"1.3 Add a Bot to Your Application"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Under the "OAuth2" tab, select the "bot" scope.'),(0,n.kt)("li",{parentName:"ul"},"Scroll down and select the required bot permissions based on your bot's functionality."),(0,n.kt)("li",{parentName:"ul"},"Copy the generated bot invite URL and invite the bot to your server. You can see your bot is offline.")),(0,n.kt)("h2",{id:"2-set-up-a-flowsnetwork-account"},"2. Set up a flows.network Account"),(0,n.kt)("p",null,"Now that you have set up your Discord bot account, let's set up a ",(0,n.kt)("a",{parentName:"p",href:"https://flows.network/"},"flows.network")," account."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit the flows.network website and sign up for a new account with your GitHub account.")),(0,n.kt)("h2",{id:"3-create-the-discord-chatgpt-bot-on-flowsnetwork"},"3. Create the Discord ChatGPT Bot on flows.network"),(0,n.kt)("p",null,"All the preparations are ready. Let\u2019s create a Discord ChatGPT bot from a template."),(0,n.kt)("h3",{id:"31--load-the-chatgpt-discord-bot-template"},"3.1  Load the ChatGPT Discord Bot template"),(0,n.kt)("p",null,"Click ",(0,n.kt)("a",{parentName:"p",href:"https://flows.network/flow/createByTemplate/discord-chatgpt"},"here")," to load the ChatGPT Discord bot template."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(1154).Z,width:"1095",height:"785"}),"\nClick the purple Install and Authorize our GitHub app to grant flows.network to access your GitHub repo. After that, review the system_prompt. You can copy and paste prompts from here. The text you input here decides what the role of the chatbot."),(0,n.kt)("p",null,"Then, Click Create and Build to process."),(0,n.kt)("h3",{id:"32-configure-the-bot"},"3.2 Configure the Bot"),(0,n.kt)("p",null,"Next, configure the integrations required by this flow template. It\u2019s Discord and ChatGPT API keys."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(6101).Z,width:"1766",height:"1098"})),(0,n.kt)("p",null,"Copy and paste your Discord token into the red rectangle. Then click the Continue button."),(0,n.kt)("p",null,"Next, let\u2019s configure the ChatGPT API key. "),(0,n.kt)("p",null,"Click on Connect, and you will be redirected to a new page where you can copy and paste your OpenAI key here."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(8510).Z,width:"774",height:"308"})),(0,n.kt)("p",null,"Close the tab and go back to the flow.network page once you are done. Click on the Deploy button."),(0,n.kt)("h3",{id:"4-test-and-interact-with-the-bot"},"4. Test and Interact with the Bot"),(0,n.kt)("p",null,"Once the status of the flow turns ready and running, go back to your Discord server and you can find the bot is online now. DM the bot and the bot will now answer your questions."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(3660).Z,width:"668",height:"492"})),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"By following this step-by-step guide, you have learned how to build a ChatGPT Discord bot on flows.network, without any coding! flows.network provides a serverless platform to simplify the deployment process and allows you to focus on building engaging chat experiences for your Discord community. Have fun experimenting and building conversational experiences with your new bot!"),(0,n.kt)("h2",{id:"other-templates-using-discord"},"Other templates using Discord"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://flows.network/flow/createByTemplate/github-issue-notification-tracker"},"Send GitHub issues with specific labels to Discord")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://flows.network/flow/createByTemplate/hacker-news-alert-chatgpt-discord"},"Monitor the Hacker News posts that you're interested in and let ChatGPT give a summary of the Post."))),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Is flows.network a free platform?")," "),(0,n.kt)("p",null,"flows.network is currently free to use."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Can I integrate other APIs with my flows.network bot?")),(0,n.kt)("p",null,"Yes, flows.network allows you to integrate various SaaS APIs to enhance the functionality of your bot. You can connect to external services, databases, and other APIs as needed. Check out the Hacker-News-ChatGPT-Discord function, which access API for Hacker News."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What kind of customization options are available for the ChatGPT on flows.network?")," "),(0,n.kt)("p",null,"flows.network provides configuration options: ",(0,n.kt)("inlineCode",{parentName:"p"},"systerm_prompt")," to customize the behavior of the ChatGPT bot. And the bot's source code is available in the GitHub repo you cloned from the template. You can set the response length, retry times to guide the bot's behavior if you can change the source code."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Can I deploy multiple bots on flows.network?")," "),(0,n.kt)("p",null,"Of course, you can deploy multiple bots on flows.network."),(0,n.kt)("p",null,"You can ",(0,n.kt)("a",{parentName:"p",href:"https://flows.network/flow/new"},"manually create a new flow")," and import the source code repo for the bot (i.e., the repo you cloned from the template). Then configure the OPENAI and Discord integrations accordingly. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can have a single flow function repo deployed as the source code for multiple bots. When you update the source code in the repo, and push it to GitHub, it will change the behavior of all the bots.")))}p.isMDXComponent=!0},1154:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/discord-chatgpt-bot-01-14de4e1d536f2529549f9a23cd6a701d.jpg"},6101:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/discord-chatgpt-bot-02-812a4d87cfe911e46d20436acf863c6f.jpg"},8510:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/discord-chatgpt-bot-03-f366313d360c595cd0375213964a0149.jpg"},169:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/discord-chatgpt-bot-05-65bca9ace60fb5740ba40c728b79ae05.png"},3660:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/discord-chatgpt-bot-07-1184aa4a65c538802a0b3de5b024b731.png"}}]);