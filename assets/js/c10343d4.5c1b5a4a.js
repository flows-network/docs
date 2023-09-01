"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},i="Claude",s={unversionedId:"integrations/claude",id:"integrations/claude",title:"Claude",description:"The claudeflows library provides integration with Claude, a conversational AI, which leads the world's generative AI sector with its 100k context window of claude-100k models.",source:"@site/docs/integrations/claude.md",sourceDirName:"integrations",slug:"/integrations/claude",permalink:"/docs/integrations/claude",draft:!1,editUrl:"https://github.com/flows-network/docs/tree/main/docs/integrations/claude.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"SendGrid",permalink:"/docs/integrations/sendgrid"},next:{title:"Telegram",permalink:"/docs/integrations/telegram"}},l={},c=[{value:"Trigger",id:"trigger",level:2},{value:"Action",id:"action",level:2},{value:"Recommended flows and templates",id:"recommended-flows-and-templates",level:2},{value:"API Reference",id:"api-reference",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"claude"},"Claude"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/claude_flows"},(0,a.kt)("inlineCode",{parentName:"a"},"claude_flows"))," library provides integration with Claude, a conversational AI, which leads the world's generative AI sector with its 100k context window of claude-100k models."),(0,a.kt)("p",null,"Claude generative AI service is not generally available yet. Our library provides coverage of its key features, such as chat completion, and claude-100k models. The claude_flows library is currently under active development. Please join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/ccZn9ZMfFf"},"Discord community")," for updates."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows Function")," or bot built with the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/claude-flows"},(0,a.kt)("inlineCode",{parentName:"a"},"claude_flows")," crate")," interacts with Claude's AI over its chat/completion API. Your conversation/completion request is encapsulated and sent to API endpoints, then the function or bot waits for a response from Claude, which contains the generated chat response."),(0,a.kt)("h2",{id:"action"},"Action"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://flows.network/"},(0,a.kt)("inlineCode",{parentName:"a"},"Flows Network"))," receives the response from Claude's endpoint and relays it back to the user. "),(0,a.kt)("h2",{id:"recommended-flows-and-templates"},"Recommended flows and templates"),(0,a.kt)("p",null,"Here is a minimal example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'\nuse claude_flows::{\n    chat,\n    ClaudeFlows,\n};\nuse lambda_flows::{request_received, send_response};\nuse serde_json::Value;\nuse std::collections::HashMap;\n\n#[no_mangle]\n#[tokio::main(flavor = "current_thread")]\npub async fn run() {\n    request_received(handler).await;\n}\n\nasync fn handler(_qry: HashMap<String, Value>, body: Vec<u8>) {\n    let cf = ClaudeFlows::new();\n    let co = chat::ChatOptions::default();\n\n    let r = match cf.chat_completion(\n        "any_conversation_id",\n        String::from_utf8_lossy(&body).into_owned().as_str(),\n        &co,\n    )\n    .await\n    {\n        Ok(c) => c,\n        Err(e) => e,\n    };\n    \n    send_response(\n        200,\n        vec![(\n            String::from("content-type"),\n            String::from("text/plain; charset=UTF-8"),\n        )],\n        r.as_bytes().to_vec(),\n    );\n}\n')),(0,a.kt)("p",null,"In this program, the Flows Function or bot sends a user request to Claude's endpoint for chat completion. It waits for Claude's response, which contains the generated chat response. The response is then sent back to the user."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/claude_flows"},"https://docs.rs/claude_flows")))}u.isMDXComponent=!0}}]);