"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},a="GitHub",s={unversionedId:"integrations/github",id:"integrations/github",title:"GitHub",description:"The githubflows crate enables you to create GitHub automation bots hosted on the Flows Network platform. This allows you to listen to events in your GitHub repositories, interact with rich GitHub services, and build more complex and tailored solutions on top of these features.",source:"@site/docs/integrations/github.md",sourceDirName:"integrations",slug:"/integrations/github",permalink:"/docs/integrations/github",draft:!1,editUrl:"https://github.com/flows-network/docs/tree/main/docs/integrations/github.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Slack",permalink:"/docs/integrations/slack"},next:{title:"Discord",permalink:"/docs/integrations/discord"}},l={},c=[{value:"Trigger",id:"trigger",level:2},{value:"Action",id:"action",level:2},{value:"Recommended flows and templates",id:"recommended-flows-and-templates",level:2},{value:"API Reference",id:"api-reference",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github"},"GitHub"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/github_flows"},(0,r.kt)("inlineCode",{parentName:"a"},"github_flows")," crate")," enables you to create GitHub automation bots hosted on the ",(0,r.kt)("a",{parentName:"p",href:"https://flows.network/"},"Flows Network")," platform. This allows you to listen to events in your GitHub repositories, interact with rich GitHub services, and build more complex and tailored solutions on top of these features."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/octocrab"},(0,r.kt)("inlineCode",{parentName:"a"},"Octocrab")," crate")," is a popular third party GitHub API client in Rust, we brought it to the serverless world with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/octocrab_wasi"},(0,r.kt)("inlineCode",{parentName:"a"},"octocrab_wasi")," crate"),", and further built ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/github_flows"},"github_flows")," on top of it."),(0,r.kt)("p",null,"This library supports extensive GitHub API features. Please visit the documentation page for more information on what can be done with it."),(0,r.kt)("h2",{id:"trigger"},"Trigger"),(0,r.kt)("p",null,"Built with this library, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows Function")," or bot, can listen to events happening on your GitHub or choose to use other triggers like ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/schedule_flows"},(0,r.kt)("inlineCode",{parentName:"a"},"schedule_flows"))," events, a scheduling feature for running tasks at specified times. Upon receiving a trigger event, such as a new comment on an issue, it executes a pre-defined action or series of actions. In many cases, these events are GitHub WebHook events. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/github_flows"},"github_flows")," handles these WebHook payloads, parsing them and passing them on for further actions."),(0,r.kt)("p",null,"In the case of our example on this page, the function uses the method ",(0,r.kt)("inlineCode",{parentName:"p"},"listen_to_event()")," to register a listener for incoming issue comments."),(0,r.kt)("h2",{id:"action"},"Action"),(0,r.kt)("p",null,"Once the function receives a trigger, it performs an action. In this case, the function reacts to the issue comment with a rocket emoji. The ",(0,r.kt)("inlineCode",{parentName:"p"},"handler()")," function defines the action to take upon receiving a comment on an issue."),(0,r.kt)("h2",{id:"recommended-flows-and-templates"},"Recommended flows and templates"),(0,r.kt)("p",null,"Here is a minimal example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use github_flows::{\n    get_octo, listen_to_event,\n    octocrab::models::{events::payload::EventPayload, reactions::ReactionContent},\n    GithubLogin,\n};\n\n#[no_mangle]\n#[tokio::main(flavor = "current_thread")]\npub async fn run() {\n    // `some_login` must be authed in flows.network\n    listen_to_event(&GithubLogin::Provided(String::from("some_login")), "some_owner", "some_repo", vec!["issue_comment"], handler).await;\n}\n\nasync fn handler(payload: EventPayload) {\n    if let EventPayload::IssueCommentEvent(e) = payload {\n        let comment_id = e.comment.id.0;\n\n        // installed app login\n        let octo = get_octo(&GithubLogin::Provided(String::from("some_login")));\n\n        let _reaction = octo\n            .issues("some_owner", "some_repo")\n            .create_comment_reaction(comment_id, ReactionContent::Rocket)\n            .await\n            .unwrap();\n    };\n}\n')),(0,r.kt)("p",null,"This code shows a basic bot that listens for incoming issue comments and reacts with a rocket emoji."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"tokio")," used here is ",(0,r.kt)("inlineCode",{parentName:"p"},"tokio_wasi")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"macros")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rt")," features."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/slack-flows/"},"https://docs.rs/slack-flows/")))}u.isMDXComponent=!0}}]);