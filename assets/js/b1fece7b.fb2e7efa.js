"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4},a="Discord",s={unversionedId:"integrations/discord",id:"integrations/discord",title:"Discord",description:"The discord_flows library allows you to create Discord bots hosted on Flows Network platform. This allows you to listen to events in your Discord guilds/channels, interact with rich Discord services, and build more on top of it.",source:"@site/docs/integrations/discord.md",sourceDirName:"integrations",slug:"/integrations/discord",permalink:"/docs/integrations/discord",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/integrations/discord.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/docs/integrations/github"},next:{title:"ChatGPT",permalink:"/docs/integrations/openai"}},c={},l=[{value:"Trigger",id:"trigger",level:2},{value:"Action",id:"action",level:2},{value:"Recommended flows and templates",id:"recommended-flows-and-templates",level:2},{value:"API Reference",id:"api-reference",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discord"},"Discord"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/discord-flows/"},(0,o.kt)("inlineCode",{parentName:"a"},"discord_flows"))," library allows you to create Discord bots hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://flows.network"},(0,o.kt)("inlineCode",{parentName:"a"},"Flows Network"))," platform. This allows you to listen to events in your Discord guilds/channels, interact with rich Discord services, and build more on top of it."),(0,o.kt)("p",null,"Thanks to the solid foundation of ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/serenity"},(0,o.kt)("inlineCode",{parentName:"a"},"serenity")," crate"),", based on which much of this library is built, ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/discord_flows"},(0,o.kt)("inlineCode",{parentName:"a"},"discord_flows"))," supports a broad array of Discord API features, please visit the documentation page for more information on what can be done with this library. "),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("p",null,"Built with this library, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Flows Function")," or bot waits for an event to happen on Discord, such as receiving a message, then springs into action. In the case of our example on this page, the function uses the method ",(0,o.kt)("inlineCode",{parentName:"p"},"listen_to_event()")," to register a listener for incoming messages."),(0,o.kt)("h2",{id:"action"},"Action"),(0,o.kt)("p",null,"Once the function receives a trigger, it performs an action. In this case, the function echoes back the message it receives in the server or channel where the message was posted. The ",(0,o.kt)("inlineCode",{parentName:"p"},"handle()")," function defines the action to take upon receiving a message."),(0,o.kt)("h2",{id:"recommended-flows-and-templates"},"Recommended flows and templates"),(0,o.kt)("p",null,"Here is a minimal example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use discord_flows::{get_client, listen_to_event, model::Message};\n\n#[no_mangle]\n#[tokio::main(flavor = "current_thread")]\npub async fn run() {\n    let token = std::env::var("DISCORD_TOKEN").unwrap();\n\n    listen_to_event(token.clone(), move |msg| handle(msg, token)).await;\n}\n\nasync fn handle(msg: Message, token: String) {\n    let client = get_client(token);\n    let channel_id = msg.channel_id;\n    let content = msg.content;\n\n    if msg.author.bot {\n        return;\n    }\n\n    _ = client\n        .send_message(\n            channel_id.into(),\n            &serde_json::json!({\n                "content": content,\n            }),\n        )\n        .await;\n}\n')),(0,o.kt)("p",null,"This code shows a basic bot that listens for incoming messages and responds by sending a message with the same content."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/discord-flows/"},"https://docs.rs/discord-flows/")))}p.isMDXComponent=!0}}]);