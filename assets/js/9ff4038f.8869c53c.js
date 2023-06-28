"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2353],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),f=n,w=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return o?r.createElement(w,i(i({ref:t},u),{},{components:o})):r.createElement(w,i({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5007:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:1},i="Introduction",l={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"Introduction",description:"flows.network is a serverless platform for building and deploying workflows with AI workloads. It is designed for developers to have full control of the application logic through code, enabling them to create complex and sophisticated AI applications and SaaS workflows with ease.",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Flow Dashboard",permalink:"/docs/category/flow-dashboard"}},s={},c=[],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"flows.network is a serverless platform for building and deploying workflows with AI workloads. It is designed for developers to have full control of the application logic through code, enabling them to create complex and sophisticated AI applications and SaaS workflows with ease."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The flows.network is powered by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/"},"WasmEdge (project under CNCF)"),". Now you could deploy your function in Rust. JavaScript support is in development.")),(0,n.kt)("p",null,"The whole workflow on flows.network should be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Write your own business logic code and push it to your GitHub repository. It doesn't matter if your code is public or private; flows.network can work with both. Here are ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/flows-network/awesome-flow-fucntions"},"some awesome flow functions")," for your reference."),(0,n.kt)("li",{parentName:"ul"},"Deploy the code on flows.network. In this step, you need to authenticate flows.network to access your code. After that, flows.network will compile, build, and deploy it. And whenever you push new changes to the repository in the future, the flow function will be automatically rebuilt and redeployed."),(0,n.kt)("li",{parentName:"ul"},"Configure your SaaS integrations (Optional). If your flow function is to automate SaaS workflows, then you need to authenticate your SaaS accounts to allow flows.network to listen to and perform the events.")),(0,n.kt)("p",null,"For the beginners, we have some flow template for you to use."),(0,n.kt)("p",null,"There are two main use cases for flows.network."),(0,n.kt)("p",null,"One is to run general Rust serverless functions like AI inference."),(0,n.kt)("p",null,"The other one is to build bots, connections, and workflows for online services. For this use case, flows.network has wrapped popular SaaS APIs and it wll be easy to use. please refer to ",(0,n.kt)("a",{parentName:"p",href:"docs/category/getting-started"},"Getting Started with SaaS")," for more information."),(0,n.kt)("p",null,"I will walk you through a simple function without any integrations in the next article."))}p.isMDXComponent=!0}}]);