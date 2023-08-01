"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},i="A Discord bot powered by ChatGPT",s={unversionedId:"getting-started-developer/discord-chatgpt",id:"getting-started-developer/discord-chatgpt",title:"A Discord bot powered by ChatGPT",description:"In this article, I will show you how to create a flow function that incorporates ChatGPT services. This flow function is a Discord bot.",source:"@site/docs/getting-started-developer/discord-chatgpt.md",sourceDirName:"getting-started-developer",slug:"/getting-started-developer/discord-chatgpt",permalink:"/docs/getting-started-developer/discord-chatgpt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started-developer/discord-chatgpt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"A Hello World Discord bot",permalink:"/docs/getting-started-developer/hello-world-discord"},next:{title:"Object Detection (web)",permalink:"/docs/getting-started-developer/object-detection"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare the source code",id:"prepare-the-source-code",level:2},{value:"Import and build",id:"import-and-build",level:2},{value:"Configure the OpenAI API key",id:"configure-the-openai-api-key",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Test it!",id:"test-it",level:2},{value:"Code walkthrough",id:"code-walkthrough",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a-discord-bot-powered-by-chatgpt"},"A Discord bot powered by ChatGPT"),(0,r.kt)("p",null,"In this article, I will show you how to create a flow function that incorporates ChatGPT services. This flow function is a Discord bot.\nYou can chat with it in a conversation. All the bot answers come from ChatGPT. You can change the ChatGPT prompt in the bot's source code\nfor the bot to take on different personalities. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also create the Discord bot through a flow function template. The template is suitable for ")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A GitHub account to log into the ",(0,r.kt)("a",{parentName:"li",href:"https://flows.network/"},"flows.network")," platform. It's free."),(0,r.kt)("li",{parentName:"ol"},"A Discord server that you have permission to add a bot.")),(0,r.kt)("h2",{id:"prepare-the-source-code"},"Prepare the source code"),(0,r.kt)("p",null,"For this tutorial, we already created ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flows-network/discord-chatgpt/"},"a repo named ",(0,r.kt)("inlineCode",{parentName:"a"},"discord-gpt"))," for you to fork."),(0,r.kt)("h2",{id:"import-and-build"},"Import and build"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://flows.network/flow/new"},"Click here")," to import your forked source code repo for the flow function into flows.network."),(0,r.kt)("p",null,"For this flow function, we need to add a Discord token in settings so that it can listen for messages from a specific Discord bot.\nPlease refer to ",(0,r.kt)("a",{parentName:"p",href:"https://flows.network/blog/discord-chat-bot-guide"},"How to create a Discord chat bot")," on how to get your Discord token.\nClick on the ",(0,r.kt)("strong",{parentName:"p"},"Advanced")," link to configure the settings."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"discord_token"),(0,r.kt)("td",{parentName:"tr",align:null},"Copied from Discord Developer Portal")))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Build")," button to create the flow funtion."),(0,r.kt)("h2",{id:"configure-the-openai-api-key"},"Configure the OpenAI API key"),(0,r.kt)("p",null,"Configure OpenAI integration so that the flow function can access the ChatGPT API service.\nEnter your OpenAI API key here. You can have multiple keys and give each of them a name. You can\nthen access the keys by their names through the OpenAI SDK in the flow function."),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Finally, you will be redirected to the flow details page, where you can check for\nservice status and logs.\nDiscord and OpenAI should appear as connected external services on this page."),(0,r.kt)("h2",{id:"test-it"},"Test it!"),(0,r.kt)("p",null,"When the status of the flow is ready and running, you can invite the Discord bot to your sever."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to this guide to ",(0,r.kt)("a",{parentName:"p",href:"https://flows.network/blog/discord-chat-bot-guide"},"invite the bot to your server"),".")),(0,r.kt)("p",null,"After the bot joined your server, you can find the bot on the right contact list and DM the bot. The bot will chat with you now!"),(0,r.kt)("h2",{id:"code-walkthrough"},"Code walkthrough"),(0,r.kt)("p",null,"The source code for the flow function is written in the Rust programming language. The ",(0,r.kt)("inlineCode",{parentName:"p"},"run()")," function\nis called by flows.network when it receives a trigger event. In this case, the trigger is a message received by the Discord bot\ndesignated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"discord_token")," setting in the ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholder_text")," value specifies what the bot should say to the user while\nit is waiting for ChatGPT to respond. The ",(0,r.kt)("inlineCode",{parentName:"p"},"system_prompt")," value is the context of the conversation given to ChatGPT. You can change\nit to make the bot behavior as different characters (e.g., a programmer, a doctor, an accountant, a consultant, or a tour guide)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub async fn run() {\n    let discord_token = env::var("discord_token").unwrap();\n    let placeholder_text = env::var("placeholder").unwrap_or("Typing ...".to_string());\n    let system_prompt = std::env::var("system_prompt").unwrap_or("You are a helpful assistant answering questions on Discord.".to_string());\n\n    let bot = ProvidedBot::new(discord_token);\n    bot.listen(|msg| handler(&bot, &placeholder_text, &system_prompt, msg)).await;\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.listen()")," function is provided by the flows.network SDK to receive the Discord message.\nIt passes the message to the ",(0,r.kt)("inlineCode",{parentName:"p"},"handler()")," function, which\ndetermines whether it should reply, and if so, sends the response.\nIt ignore messages from bots, including its own, and then extracts the conversation (",(0,r.kt)("inlineCode",{parentName:"p"},"channel_id"),") and message text (",(0,r.kt)("inlineCode",{parentName:"p"},"content"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"async fn handler(bot: &ProvidedBot, placeholder_text: &str, system_prompt: &str, msg: Message) {\n    let discord = bot.get_client();\n    if msg.author.bot {\n        return;\n    }\n    let channel_id = msg.channel_id;\n    let content = msg.content;\n")),(0,r.kt)("p",null,"Next, it detects if the message is the ",(0,r.kt)("inlineCode",{parentName:"p"},"/restart")," command. For this command, it will set a flag in a KV store provided by the\nflows.network platform. The flow function can access the KV store using the ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," API in the SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    if content.eq_ignore_ascii_case("/restart") {\n        _ = discord.send_message(\n            channel_id.into(),\n            &serde_json::json!({\n                "content": "Ok, I am starting a new conversation."\n            }),\n        ).await;\n        store::set(&channel_id.to_string(), json!(true), None);\n        return;\n    }\n')),(0,r.kt)("p",null,'When the flag is set, the flow function knows to "restart" the conversation when it is triggered the next time.\nThat is, it will start a new conversation when the user sends in a new message after ',(0,r.kt)("inlineCode",{parentName:"p"},"/restart"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    let restart = store::get(&channel_id.to_string())\n        .and_then(|v| v.as_bool())\n        .unwrap_or(false);\n    if restart {\n        log::info!("Detected restart = true");\n        store::set(&channel_id.to_string(), json!(false), None);\n    }\n')),(0,r.kt)("p",null,"Since ChatGPT often takes a long time to respond with the complete answer, we will display a placeholder\nmessage asking the user to wait."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    let placeholder  = discord.send_message(\n        channel_id.into(),\n        &serde_json::json!({\n            "content": placeholder_text\n        }),\n    ).await.unwrap();\n')),(0,r.kt)("p",null,"Finally, we can make an OpenAI API call to ChatGPT now. The flows.network platform will add your OpenAI API key\nautomatically when it makes a request to ChatGPT.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"restart")," value will be passed to the SDK so that it can determine whether\nto send the conversation history as context to ChatGPT.\nIf ChatGPT returns with an answer, the flow function would update the placeholder message with the answer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut openai = OpenAIFlows::new();\n    openai.set_retry_times(3);\n    let co = ChatOptions {\n        // model: ChatModel::GPT4,\n        model: ChatModel::GPT35Turbo,\n        restart: restart,\n        system_prompt: Some(system_prompt),\n        ..Default::default()\n    };\n\n    match openai.chat_completion(&channel_id.to_string(), &content, &co).await {\n        Ok(r) => {\n            _ = discord.edit_message(\n                channel_id.into(), placeholder.id.into(),\n                &serde_json::json!({\n                    "content": r.choice\n                }),\n            ).await;\n        }\n        Err(e) => {\n            _ = discord.edit_message(\n                channel_id.into(), placeholder.id.into(),\n                &serde_json::json!({\n                    "content": "Sorry, an error has occured. Please try again later!"\n                }),\n            ).await;\n            log::error!("OpenAI returns error: {}", e);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"As you can see, the flow function gives you fine-grained control over the interactions between Discord and ChatGPT\nso that you can deliver a fully customized experience for your bot users."))}p.isMDXComponent=!0}}]);