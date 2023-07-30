"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4795],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(o),h=n,w=d["".concat(u,".").concat(h)]||d[h]||p[h]||l;return o?r.createElement(w,a(a({ref:t},c),{},{components:o})):r.createElement(w,a({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1554:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const l={sidebar_position:1},a="Hello world example without any integrations",i={unversionedId:"getting-started-developer/hello-world",id:"getting-started-developer/hello-world",title:"Hello world example without any integrations",description:"In this article, I will walk you through how to run a hello world example on flows.network. This flow function exposes an HTTP endpoint. You can submit any data to the endpoint via HTTP POST and the flow function will echo it back to you in the HTTP response.",source:"@site/docs/getting-started-developer/hello-world.md",sourceDirName:"getting-started-developer",slug:"/getting-started-developer/hello-world",permalink:"/docs/getting-started-developer/hello-world",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started-developer/hello-world.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started with bringing your own code",permalink:"/docs/category/getting-started-with-bringing-your-own-code"},next:{title:"A Hello World Discord bot",permalink:"/docs/getting-started-developer/hello-world-discord"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare the code",id:"prepare-the-code",level:2},{value:"Import the source code",id:"import-the-source-code",level:2},{value:"Get the endpoint",id:"get-the-endpoint",level:2}],c={toc:s};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hello-world-example-without-any-integrations"},"Hello world example without any integrations"),(0,n.kt)("p",null,"In this article, I will walk you through how to run a hello world example on flows.network. This flow function exposes an HTTP endpoint. You can submit any data to the endpoint via HTTP POST and the flow function will echo it back to you in the HTTP response."),(0,n.kt)("p",null,"This example is quite simple and you don't need to authenticate any SaaS integrations."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"You will need a GitHub account to sign up for the ",(0,n.kt)("a",{parentName:"p",href:"https://flows.network/"},"flows.network")," platform. It's free."),(0,n.kt)("h2",{id:"prepare-the-code"},"Prepare the code"),(0,n.kt)("p",null,"Since flows.network requires users to import their flow function code from GitHub, you will need to put your source code under a GitHub repo you have admin access. Usually, your personal GitHub account is a good place to host your code. After you import the function source code, flows.network will build and deploy the source code automatically. Once you have any commits to the repo in the future, flows.network will automatically rebuild the function for you. That's why we call flows.network a serverless platform: developers don't need to care about DevOps."),(0,n.kt)("p",null,"For this tutorial, we already set up ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flows-network/hello-world"},"a hello world GitHub repo")," for you to fork. Once you forked successfully, let's go to the next part."),(0,n.kt)("h2",{id:"import-the-source-code"},"Import the source code"),(0,n.kt)("p",null,"Open this ",(0,n.kt)("a",{parentName:"p",href:"https://flows.network/flow/new"},"page")," to create a flow in your browser."),(0,n.kt)("p",null,"You need to authenticate your GitHub account first. Click the Add new authentication to grant flows.network to access your GitHub repo."),(0,n.kt)("p",null,"Then, choose your own GitHub account under the Organization part and the repo you just forked under the Repository part."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you have numerous GitHub repositories, you can search for your repository by entering keywords in the repository search box.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(9854).Z,width:"1164",height:"643"})),(0,n.kt)("p",null,"After that, click Build to build and deploy the function."),(0,n.kt)("h2",{id:"get-the-endpoint"},"Get the endpoint"),(0,n.kt)("p",null,"Next, click on Deploy to proceed with the flow and you will be redirected to the flow details page. You can check the status of your function and get the endpoint URL to make an HTTP response."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(3039).Z,width:"1612",height:"748"})),(0,n.kt)("p",null,"Once you see the endpoint URL, you can open your terminal and use the following command line to give it a try."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST  https://code.flows.network/lambda/j4DPFGufPr -d "I am a Rustacean"\n')),(0,n.kt)("p",null,"The output will be"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Welcome to flows.network.\nYou just said: 'I am a Rustacean'.\nLearn more at: https://github.com/flows-network/hello-world\n")))}p.isMDXComponent=!0},9854:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/hello-world-01-49d47216821f5e333fd7150ad040994c.png"},3039:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/hello-world-02-65800468759a09bdbe4d557e13c25c6a.png"}}]);