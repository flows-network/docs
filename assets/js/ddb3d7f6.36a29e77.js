"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:11},o="Airtable",l={unversionedId:"integrations/airtable",id:"integrations/airtable",title:"Airtable",description:"The airtableflows library enables you to integrate Airtable's spreadsheet-like database capabilities within your applications on the Flows Network platform. This crate provides key functions like creating, updating, and searching records in Airtable bases.",source:"@site/docs/integrations/airtable.md",sourceDirName:"integrations",slug:"/integrations/airtable",permalink:"/docs/integrations/airtable",draft:!1,editUrl:"https://github.com/flows-network/docs/tree/main/docs/integrations/airtable.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Twitter",permalink:"/docs/integrations/twitter"},next:{title:"Get Connected",permalink:"/docs/get-connected"}},s={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Trigger",id:"trigger",level:2},{value:"Action",id:"action",level:2},{value:"Recommended flows and templates",id:"recommended-flows-and-templates",level:2},{value:"API Reference",id:"api-reference",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"airtable"},"Airtable"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/airtable_flows"},(0,a.kt)("inlineCode",{parentName:"a"},"airtable_flows"))," library enables you to integrate Airtable's spreadsheet-like database capabilities within your applications on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows Network")," platform. This crate provides key functions like creating, updating, and searching records in Airtable bases."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows Function")," is typically triggered by a specific event. In the context of ",(0,a.kt)("inlineCode",{parentName:"p"},"airtable_flows"),", this could be an event to create or update a record in an Airtable base. The trigger listens for such requests using the ",(0,a.kt)("inlineCode",{parentName:"p"},"request_received()")," function."),(0,a.kt)("h2",{id:"action"},"Action"),(0,a.kt)("p",null,"On being triggered by an event, the function carries out a corresponding action. Here, actions might include creating, updating, or searching for a record in an Airtable base."),(0,a.kt)("h2",{id:"recommended-flows-and-templates"},"Recommended flows and templates"),(0,a.kt)("p",null,"Here's a simple example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use airtable_flows::create_record;\nuse slack_flows::{listen_to_channel};\n\n#[no_mangle]\npub fn run() {\n    listen_to_channel("myworkspace", "mychannel", |sm| {\n        let record = serde_json::json!({\n            "Name": sm.text,\n        });\n        create_record("accountName", "mybaseId", "mytable", record);\n    });\n}\n')),(0,a.kt)("p",null,"This function listens for new messages in a Slack channel. When a message is received, it creates a new record in an Airtable base with the text from the Slack message."),(0,a.kt)("p",null,"Please note that your Airtable account must be connected to the Flows Network platform for the ",(0,a.kt)("inlineCode",{parentName:"p"},"airtable_flows")," crate to function properly. If it isn't, you'll see an error in the flow's build or run log."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/airtable_flows"},"https://docs.rs/airtable_flows")))}u.isMDXComponent=!0}}]);