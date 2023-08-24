"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="ChatGPT",s={unversionedId:"integrations/openai",id:"integrations/openai",title:"ChatGPT",description:"ChatGPT has taken the world by storm. It has become the de facto brand name for the family of OpenAI's generative AI services. Our openai-flows library supports a wide range of OpenAI's natural language processing features on the Flows Network platform.",source:"@site/docs/integrations/openai.md",sourceDirName:"integrations",slug:"/integrations/openai",permalink:"/docs/integrations/openai",draft:!1,editUrl:"https://github.com/flows-network/docs/tree/main/docs/integrations/openai.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Discord",permalink:"/docs/integrations/discord"},next:{title:"SendGrid",permalink:"/docs/integrations/sendgrid"}},l={},p=[{value:"Trigger",id:"trigger",level:2},{value:"Action",id:"action",level:2},{value:"Recommended Flows and Templates",id:"recommended-flows-and-templates",level:2},{value:"API Reference",id:"api-reference",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chatgpt"},"ChatGPT"),(0,a.kt)("p",null,"ChatGPT has taken the world by storm. It has become the de facto brand name for the family of OpenAI's generative AI services. Our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/openai-flows/"},(0,a.kt)("inlineCode",{parentName:"a"},"openai-flows"))," library supports a wide range of OpenAI's natural language processing features on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.flows.network/docs/"},(0,a.kt)("inlineCode",{parentName:"a"},"Flows Network"))," platform."),(0,a.kt)("p",null,"OpenAI's generative AI capabilities can be accessed directly from applications deployed on ",(0,a.kt)("a",{parentName:"p",href:"https://flows.network/"},(0,a.kt)("inlineCode",{parentName:"a"},"Flows Network"))," platform, creating new possibilities for hosted applications and taking their perfomrance to the next level."),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows Function")," or bot built with the ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/openai-flows"},(0,a.kt)("inlineCode",{parentName:"a"},"openai_flows")," crate")," interacts with OpenAI's AI over its chat/completion API. Your conversation/completion request is encapsulated and sent to API endpoints, then the function or bot waits for a response from OpenAI, which contains the generated chat response."),(0,a.kt)("h2",{id:"action"},"Action"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://flows.network/"},(0,a.kt)("inlineCode",{parentName:"a"},"Flows Network"))," receives the response from OpenAI's endpoint and relays it back to the user. "),(0,a.kt)("h2",{id:"recommended-flows-and-templates"},"Recommended Flows and Templates"),(0,a.kt)("p",null,"Here's a basic example demonstrating the usage of this library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use openai_flows::{\n    chat::ChatOptions,\n    OpenAIFlows,\n};\nuse lambda_flows::{request_received, send_response};\nuse serde_json::Value;\nuse std::collections::HashMap;\n\n#[no_mangle]\n#[tokio::main(flavor = "current_thread")]\npub async fn run() {\n    request_received(handler).await;\n}\n\nasync fn handler(_qry: HashMap<String, Value>, body: Vec<u8>) {\n    let co = ChatOptions::default();\n    let of = OpenAIFlows::new();\n\n    let r = match of.chat_completion(\n        "any_conversation_id",\n        String::from_utf8_lossy(&body).into_owned().as_str(),\n        &co,\n    )\n    .await\n    {\n        Ok(c) => c.choice,\n        Err(e) => e,\n    };\n     \n    send_response(\n        200,\n        vec![(\n            String::from("content-type"),\n            String::from("text/plain; charset=UTF-8"),\n        )],\n        r.as_bytes().to_vec(),\n    );\n}\n')),(0,a.kt)("p",null,"This example illustrates a bot that listens for user requests, utilizes the OpenAI ",(0,a.kt)("inlineCode",{parentName:"p"},"chat_completion")," function to generate a conversationally relevant response, and transmits that response back to the user."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," : The ",(0,a.kt)("inlineCode",{parentName:"p"},"tokio")," used here is ",(0,a.kt)("inlineCode",{parentName:"p"},"tokio_wasi")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"macros")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rt")," features."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/openai-flows/"},"https://docs.rs/openai-flows/")))}d.isMDXComponent=!0}}]);