"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3263],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(l,".").concat(m)]||c[m]||h[m]||n;return a?o.createElement(g,s(s({ref:t},p),{},{components:a})):o.createElement(g,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<n;u++)s[u]=a[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=a(7462),r=(a(7294),a(3905));const n={slug:"build-a-chatgpt-telegram-bot-with-flows-network",title:"Step-by-Step Guide: Building a Telegram bot for ChatGPT",authors:{name:"guide",title:"Build something awesome together"},tags:["telegram","guide"]},s=void 0,i={permalink:"/blog/build-a-chatgpt-telegram-bot-with-flows-network",editUrl:"https://github.com/flows-network/docs/tree/main/blog/chatgpt-telegram-bot.md",source:"@site/blog/chatgpt-telegram-bot.md",title:"Step-by-Step Guide: Building a Telegram bot for ChatGPT",description:"ChatGPT has taken the world by storm. However, it's desktop web browser UI is cumbersome and delivers a subpar conversation experience for users. Users already have messaging apps they love and use. We should bring ChatGPT to messaging apps and enable users to converse with ChatGPT anytime anywhere.",date:"2023-08-24T10:27:29.000Z",formattedDate:"August 24, 2023",tags:[{label:"telegram",permalink:"/blog/tags/telegram"},{label:"guide",permalink:"/blog/tags/guide"}],readingTime:6.55,hasTruncateMarker:!1,authors:[{name:"guide",title:"Build something awesome together"}],frontMatter:{slug:"build-a-chatgpt-telegram-bot-with-flows-network",title:"Step-by-Step Guide: Building a Telegram bot for ChatGPT",authors:{name:"guide",title:"Build something awesome together"},tags:["telegram","guide"]},prevItem:{title:"Changelog flows.network (0525)",permalink:"/blog/flows-network-update-0525"},nextItem:{title:"How to create a Discord channel bot",permalink:"/blog/discord-channel-bot-guide"}},l={authorsImageUrls:[void 0]},u=[{value:"What is a telegram bot",id:"what-is-a-telegram-bot",level:2},{value:"Create a general ChatGPT Telegram bot from a flow template in 3 minutes",id:"create-a-general-chatgpt-telegram-bot-from-a-flow-template-in-3-minutes",level:2},{value:"Advanced: Import awesome ChatGPT prompts to your telegram bot",id:"advanced-import-awesome-chatgpt-prompts-to-your-telegram-bot",level:2},{value:"Access external web services",id:"access-external-web-services",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ChatGPT has taken the world by storm. However, it's desktop web browser UI is cumbersome and delivers a subpar conversation experience for users. Users already have messaging apps they love and use. We should bring ChatGPT to messaging apps and enable users to converse with ChatGPT anytime anywhere. "),(0,r.kt)("p",null,"Telegram is a popular messaging app that allows users to securely send messages, files, and media to individuals or groups. In this article, I will walk through how to build a ChatGPT bot on Telegram. I will further discuss how to customize your bot with your own prompts and how to access external services from the bot (ie similar to ChatGPT plugins in the desktop web UI). "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The bot is deployed on flows.network, ",(0,r.kt)("a",{parentName:"p",href:"https://flows.network/"},"a serverless platform for automating SaaS workflows with AI workloads"),".")),(0,r.kt)("h2",{id:"what-is-a-telegram-bot"},"What is a telegram bot"),(0,r.kt)("p",null,"Before we started, let\u2019s first understand how a telegram bot works. If you are familiar with Telegram bots, you can skip this part and go to the next part to ",(0,r.kt)("a",{parentName:"p",href:"#create-a-general-chatgpt-telegram-bot-from-a-flow-template-in-3-minutes"},"create a ChatGPT telegram bot"),"."),(0,r.kt)("p",null,"Essentially, a Telegram bot is a software application that runs inside the Telegram app. It allows us to interact with it using text messages or commands. Telegram bots are built using APIs, which enable developers to create custom code to handle different types of messages and perform various actions."),(0,r.kt)("p",null,"You can use telegram bot to automate repetitive receptive tasks, such as send a welcome message to the new member. You can also integrate telegram with other SaaS. This is what exactly we are doing right now \u2014 integrate Telegram with ChatGPT. "),(0,r.kt)("h2",{id:"create-a-general-chatgpt-telegram-bot-from-a-flow-template-in-3-minutes"},"Create a general ChatGPT Telegram bot from a flow template in 3 minutes"),(0,r.kt)("p",null,"With ChatGPT's integration on Telegram, you can easily communicate with ChatGPT without the need to open an additional browser. This feature provides a convenient way to seek assistance from ChatGPT using Telegram's interface."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure you have signed up for an account for ",(0,r.kt)("a",{parentName:"p",href:"https://flows.network/"},"flows.network"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Load ",(0,r.kt)("a",{parentName:"li",href:"https://flows.network/flow/createByTemplate/telegram-chatgpt-bot"},"the ChatGPT based Telegram bot template")," and click on the Create and Build button. The template contains the source code for the bot itself. flows.networl will clone the source code to your own GitHub account so that you can modify and customize it later. We will use the code to combine awesome prompts with this telegram bot.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"get the source code for the ChatGPT Telegram bot",src:a(9624).Z,width:"2338",height:"1296"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Give the bot your OpenAI API key.")," Click the Connect button to add your OpenAI API key. If you have saved API keys in the past, you can skip this step and reuse these keys.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"get the source code for the ChatGPT Telegram bot",src:a(1273).Z,width:"1888",height:"1252"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Configure the Telegram API token"),". This is to connect the function with your bot. You can ",(0,r.kt)("a",{parentName:"li",href:"https://flows.network/blog/how-to-get-a-telegram-bot-token"},"get a telegram API token")," from @botfather and paste the box here. Once you're done, the grey Deploy button will turn purple.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"get the source code for the ChatGPT Telegram bot",src:a(3685).Z,width:"1806",height:"1232"})),(0,r.kt)("p",null,"That\u2019t it. After the function is ready and the status of flow is running, you can give your own ChatGPT Telegram bot a try. You can ask this ChatGPT Telegram bot to polish your english writing, being a writing tutor, and explain the code with different prompts."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"get the source code for the ChatGPT Telegram bot",src:a(5641).Z,width:"2314",height:"668"})),(0,r.kt)("h2",{id:"advanced-import-awesome-chatgpt-prompts-to-your-telegram-bot"},"Advanced: Import awesome ChatGPT prompts to your telegram bot"),(0,r.kt)("p",null,"The ChatGPT prompts marketplace is another hot topic with the fire of ChatGPT. Prompting is critical for getting more accurate and efficient output from the language model. This is particularly important in fields such as question-answering, language translation, and chatbot development, where the output quality is directly related to the accuracy of the prompts used. A well-written prompt is an essential tool for improving the accuracy, efficiency, and usability of artificial intelligence systems in a wide range of applications. We have seen lots of ChatGPT prompts marketplace on the market, like the open-sourced ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/f/awesome-chatgpt-prompts"},"awesome-chatgpt-prompts")," GitHub repo, ",(0,r.kt)("a",{parentName:"p",href:"https://www.awesomegptprompts.com/"},"AwesomeChatGPT,")," ",(0,r.kt)("a",{parentName:"p",href:"https://flowgpt.com/"},"FlowGPT")," and so on."),(0,r.kt)("p",null,"In this section, I will show you how to add your favourite prompts to the ChatGPT Telegram bot you just built. The customized ChatGPT Telegram bot can be fine-tuned for a specific task. Here I use a prompt from AwesomeChatGPT."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I want you to act as an AI writing tutor. I will provide you with a student who needs help improving their writing and your task is to use artificial intelligence tools, such as natural language processing, to give the student feedback on how they can improve their composition. You should also use your rhetorical knowledge and experience about effective writing techniques in order to suggest ways that the student can better express their thoughts and ideas in written form.")),(0,r.kt)("p",null,"To achieve this goal, we need to change the source code of the repo we created for you in the above step. You can find the GitHub repo address from the flow details page. "),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"get the source code for the ChatGPT Telegram bot",src:a(4119).Z,width:"1134",height:"392"})),(0,r.kt)("p",null,"Then go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," file of your source code repo and replace the existing ChatGPT prompt \u201cYou are a helpful assistant answering questions on Telegram\u201d with any of the ChatGPT prompt you need in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flows-network/telegram-gpt/blob/main/src/lib.rs#L22"},"line 22"),". "),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'let system = "You are a helpful assistant answering questions on Telegram.\\n\\nIf someone greets you without asking a question, you can simply respond \\"Hello, I am your assistant on Telegram, built by the Second State team. I am ready for your question now!\\"";\n')),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'let system = "I want you to act as an AI writing tutor. I will provide you with non-native english speakers who needs help improving their writing and your task is to use artificial intelligence tools, such as natural language processing, to give the student feedback on how they can improve their composition. You should also use your rhetorical knowledge and experience about effective writing techniques in order to suggest ways that the student can better express their thoughts and ideas in written form. \\n\\nIf someone greets you without asking a question, you can simply respond \\"Hello, I am your assistant on Telegram, built by the Second State team. I am ready for improving your English writing now!\\"";\n')),(0,r.kt)("p",null,"After making the necessary changes, push them to the GitHub repository and flows.network will automatically build your function. Once the build is complete, you will receive a customized ChatGPT Telegram bot for your specific use, eliminating the need to prompt ChatGPT when you strat a new conversation."),(0,r.kt)("h2",{id:"access-external-web-services"},"Access external web services"),(0,r.kt)("p",null,"The flow function behind the bot has access to the web. That allows the Telegram to use the latest information and web services injunction with ChatGPT. In another word, you can build ChatGPT plugin-like functionalities into your own bot. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flows-network/weather-lookup/blob/main/src/lib.rs"},"This example")," shows how to make HTTPS requests to an external web service to look up the current weather and parse the result from the response JSON data. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'fn get_weather(city: &str) -> Result<ApiResult, String> {\n    let mut writer = Vec::new();\n    let api_key = std::env::var("API_KEY").unwrap();\n    let query_str = format!(\n        "https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}"\n    );\n\n    request::get(query_str, &mut writer)\n        .map_err(|e| e.to_string())\n        .and_then(|_| {\n            serde_json::from_slice::<ApiResult>(&writer).map_err(|_| {\n                "Please check if you\'ve typed the name of your city correctly".to_string()\n            })\n        })\n}\n')),(0,r.kt)("p",null,"Combining ChatGPT with the web, your Telegram bot could be the conversational UI for complex applications. You can also call external web services to perform real world actions \u2014 for example, you could call the Twilio API to make a phone call based on ChatGPT outputs. "),(0,r.kt)("h2",{id:"whats-next"},"What\u2019s next?"),(0,r.kt)("p",null,"With flows.network, you can create a ChatGPT-powered Telegram bot in just three minutes. You can personalize your bot by making changes directly to the bot\u2019s source code. For example, you can  customize it with your favorite prompts or use external web services to provide additional context or to perform real world actions."),(0,r.kt)("p",null,"What are you waiting for? ",(0,r.kt)("a",{parentName:"p",href:"https://flows.network/flow/createByTemplate/telegram-chatgpt-bot"},"Give it a try")," today! Feel free to join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/ccZn9ZMfFf"},"Discord server")," to stay updated or to provide feedback."))}h.isMDXComponent=!0},9624:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chatgpt-telegram-bot-01-992906f01628bc51982b9c1dbc70d402.png"},1273:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chatgpt-telegram-bot-02-db373c3b6ad82a64b8c452b630c8b1b7.png"},3685:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chatgpt-telegram-bot-03-e96259bfc01099533a1f50d50f525272.png"},5641:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chatgpt-telegram-bot-04-1054c37b7a5e31e8e08cd1bdc7d08a8e.png"},4119:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/chatgpt-telegram-bot-05-4d45b2bfece61465a3319918ed3391c8.jpg"}}]);