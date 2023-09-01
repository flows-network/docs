"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="A Discord bot powered by ChatGPT",l={unversionedId:"tutorials/discord-chatgpt",id:"tutorials/discord-chatgpt",title:"A Discord bot powered by ChatGPT",description:"In this article, I will show you how to create a flow function that incorporates ChatGPT services. This flow function is a Discord bot.",source:"@site/docs/tutorials/discord-chatgpt.md",sourceDirName:"tutorials",slug:"/tutorials/discord-chatgpt",permalink:"/docs/tutorials/discord-chatgpt",draft:!1,editUrl:"https://github.com/flows-network/docs/tree/main/docs/tutorials/discord-chatgpt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"A GitHub bot powered by ChatGPT",permalink:"/docs/tutorials/github-chatgpt"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare the source code",id:"prepare-the-source-code",level:2},{value:"Import and build",id:"import-and-build",level:2},{value:"Configure the OpenAI API key",id:"configure-the-openai-api-key",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Test it!",id:"test-it",level:2},{value:"Code walkthrough",id:"code-walkthrough",level:2},{value:"Read more",id:"read-more",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"a-discord-bot-powered-by-chatgpt"},"A Discord bot powered by ChatGPT"),(0,a.kt)("p",null,"In this article, I will show you how to create a flow function that incorporates ChatGPT services. This flow function is a Discord bot.\nYou can chat with it in a conversation. All the bot answers come from ChatGPT. You can change the ChatGPT prompt in the bot's source code\nfor the bot to take on different personalities. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can also ",(0,a.kt)("a",{parentName:"p",href:"../getting-started-template/discord-chatgpt"},"create the Discord bot through a flow template"),". The template is an easy-to-use no-code solution, but it is also less flexible.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A GitHub account to log into the ",(0,a.kt)("a",{parentName:"li",href:"https://flows.network/"},"flows.network")," platform. It's free."),(0,a.kt)("li",{parentName:"ol"},"A Discord server that you have permission to add a bot."),(0,a.kt)("li",{parentName:"ol"},"An OpenAI API key.")),(0,a.kt)("h2",{id:"prepare-the-source-code"},"Prepare the source code"),(0,a.kt)("p",null,"For this tutorial, we already created ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flows-network/discord-chatgpt/"},"a repo named ",(0,a.kt)("inlineCode",{parentName:"a"},"discord-gpt"))," for you to fork."),(0,a.kt)("h2",{id:"import-and-build"},"Import and build"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://flows.network/flow/new"},"Click here")," to import your forked source code repo for the flow function into flows.network."),(0,a.kt)("p",null,"For this flow function, we need to add a Discord token in settings so that it can listen for messages from a specific Discord bot.\nPlease refer to ",(0,a.kt)("a",{parentName:"p",href:"https://flows.network/blog/discord-chat-bot-guide"},"How to create a Discord chat bot")," on how to get your Discord token.\nClick on the ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," link to configure the settings."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"discord_token"),(0,a.kt)("td",{parentName:"tr",align:null},"Copied from Discord Developer Portal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"placeholder_text"),(0,a.kt)("td",{parentName:"tr",align:null},'Optional: The "wait" message displayed to the user while the bot waits for ChatGPT replies')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"system_prompt"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional: The system level prompt that sets the context for the entire conversation")))),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Build")," button to create the flow funtion."),(0,a.kt)("p",null,"In the next screen, you will be asked to connect to Discord. Since we are providing a Discord API token to access the bot here, you can\nsimply click on ",(0,a.kt)("strong",{parentName:"p"},"Continue"),"."),(0,a.kt)("h2",{id:"configure-the-openai-api-key"},"Configure the OpenAI API key"),(0,a.kt)("p",null,"Enter your OpenAI API key on the next screen. You can have multiple keys and give each of them a name. You can\nthen access the keys by their names through the OpenAI SDK in the flow function."),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"Finally, you will be redirected to the flow details page, where you can check for\nservice status and logs.\nDiscord and OpenAI should appear as connected external services on this page."),(0,a.kt)("h2",{id:"test-it"},"Test it!"),(0,a.kt)("p",null,"When the status of the flow is ready and running, you can invite the Discord bot to your sever."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Refer to this guide to ",(0,a.kt)("a",{parentName:"p",href:"https://flows.network/blog/discord-chat-bot-guide"},"invite the bot to your server"),".")),(0,a.kt)("p",null,"After the bot joined your server, you can find the bot on the right contact list and DM the bot. The bot will chat with you now!"),(0,a.kt)("h2",{id:"code-walkthrough"},"Code walkthrough"),(0,a.kt)("p",null,"The source code for the flow function is written in the Rust programming language.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"on_deploy()")," function is called by the flows.network platform when the flow is deployed. We start a listener for\nthe designated bot in ",(0,a.kt)("inlineCode",{parentName:"p"},"on_deploy()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'pub async fn on_deploy() {\n    let token = std::env::var("discord_token").unwrap();\n    let bot = ProvidedBot::new(token);\n    bot.listen_to_messages().await;\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handler()")," function is annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"#[message_handler]"),". It is called when the bot receives a message. We first sends\nthe placeholder message back to the user asking him to wait.\nNote that ",(0,a.kt)("inlineCode",{parentName:"p"},"channel_id")," uniquely identifies the Discord conversation for this bot message\nas the bot can be in multiple conversations at the same time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[message_handler]\nasync fn handler(msg: Message) {\n    let token = env::var("discord_token").unwrap();\n    let placeholder_text = env::var("placeholder").unwrap_or("Typing ...".to_string());\n    let system_prompt = env::var("system_prompt").unwrap_or("You are a helpful assistant answering questions on Discord.".to_string());\n\n    let bot = ProvidedBot::new(token);\n    let discord = bot.get_client();\n\n    let channel_id = msg.channel_id;\n    let content = msg.content;\n\n    let placeholder  = discord.send_message(\n        channel_id.into(),\n        &serde_json::json!({\n            "content": &placeholder_text\n        }),\n    ).await.unwrap();\n')),(0,a.kt)("p",null,"Next, it detects if the message is ",(0,a.kt)("inlineCode",{parentName:"p"},"/restart")," command. For this command, it will set a flag in a KV store provided by the\nflows.network platform. The flow function can access the KV store using the ",(0,a.kt)("inlineCode",{parentName:"p"},"store"),' API in the SDK.\nWhen the flag is set, the flow function knows to "restart" the conversation when it is triggered the next time.\nThat is, it will start a new conversation when the user sends in a new message after ',(0,a.kt)("inlineCode",{parentName:"p"},"/restart"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'    if content.eq_ignore_ascii_case("/restart") {\n        _ = discord.send_message(\n            channel_id.into(),\n            &serde_json::json!({\n                "content": "Ok, I am starting a new conversation."\n            }),\n        ).await;\n        store::set(&channel_id.to_string(), json!(true), None);\n        return;\n    }\n')),(0,a.kt)("p",null,"Then, we send the bot message ChatGPT via the OpenAI SDK. Once we receive a reply, we will replace the placeholder message\nwith the actual reply. Note that the OpenAI SDK automatically caches the conversation history,\nincluding the ",(0,a.kt)("inlineCode",{parentName:"p"},"system_prompt")," at the beginning, so that you do not need to replay the entire conversation at every request.\nThe conversation history is cached under the key ",(0,a.kt)("inlineCode",{parentName:"p"},"channel_id"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'    let mut openai = OpenAIFlows::new();\n    openai.set_retry_times(3);\n    let co = ChatOptions {\n        model: ChatModel::GPT35Turbo,\n        restart: restart,\n        system_prompt: Some(&system_prompt),\n        ..Default::default()\n    };\n\n    match openai.chat_completion(&channel_id.to_string(), &content, &co).await {\n        Ok(r) => {\n            _ = discord.edit_message(\n                channel_id.into(), placeholder.id.into(),\n                &serde_json::json!({\n                    "content": r.choice\n                }),\n            ).await;\n        }\n    }\n}\n')),(0,a.kt)("p",null,"As you can see, the flow function gives you fine-grained control over the interactions between Discord and ChatGPT\nso that you can deliver a fully customized experience for your bot users."),(0,a.kt)("h2",{id:"read-more"},"Read more"),(0,a.kt)("p",null,"Tutorials and sample code for related flow functions. Click on the ",(0,a.kt)("strong",{parentName:"p"},"Deploy")," link to ",(0,a.kt)("a",{parentName:"p",href:"../category/getting-started-with-templates"},"configure and deploy your own flow without writing any code from a template"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Discord bot with ChatGPT ",(0,a.kt)("a",{parentName:"li",href:"discord-chatgpt"},"Tutorial")," | ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/flows-network/discord-chatgpt/"},"Code")," | ",(0,a.kt)("a",{parentName:"li",href:"https://flows.network/flow/createByTemplate/discord-chatgpt"},"Deploy")),(0,a.kt)("li",{parentName:"ul"},"Telegram bot with ChatGPT ",(0,a.kt)("a",{parentName:"li",href:"telegram-chatgpt"},"Tutorial")," | ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/flows-network/telegram-gpt"},"Code")," | ",(0,a.kt)("a",{parentName:"li",href:"https://flows.network/flow/createByTemplate/Telegram-ChatGPT"},"Deploy")),(0,a.kt)("li",{parentName:"ul"},"Slack bot with ChatGPT ",(0,a.kt)("a",{parentName:"li",href:"slack-chatgpt"},"Tutorial")," | ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/flows-network/slack-chatgpt"},"Code")," | ",(0,a.kt)("a",{parentName:"li",href:"https://flows.network/flow/createByTemplate/Slack-Chatgpt"},"Deploy")),(0,a.kt)("li",{parentName:"ul"},"GitHub comment bot with ChatGPT ",(0,a.kt)("a",{parentName:"li",href:"github-chatgpt"},"Tutorial")," | ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/flows-network/chatgpt-github-app"},"Code"))))}d.isMDXComponent=!0}}]);