"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||c[m]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"flows-network-update-0407",title:"This week in flows.network (0403-0407)",authors:{name:"release",title:"New things about flows.network"},tags:["changelog","product"]},l=void 0,i={permalink:"/blog/flows-network-update-0407",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/changelog-0407.md",source:"@site/blog/changelog-0407.md",title:"This week in flows.network (0403-0407)",description:"From April 3rd to April 7th, flows.network made the following updates:",date:"2023-06-25T10:40:19.000Z",formattedDate:"June 25, 2023",tags:[{label:"changelog",permalink:"/blog/tags/changelog"},{label:"product",permalink:"/blog/tags/product"}],readingTime:.615,hasTruncateMarker:!1,authors:[{name:"release",title:"New things about flows.network"}],frontMatter:{slug:"flows-network-update-0407",title:"This week in flows.network (0403-0407)",authors:{name:"release",title:"New things about flows.network"},tags:["changelog","product"]},nextItem:{title:"Changelog flows.network (0525-0407)",permalink:"/blog/flows-network-update-0525"}},u={authorsImageUrls:[void 0]},s=[],p={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"From April 3rd to April 7th, flows.network made the following updates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Added support for manually rebuilding flow functions: You can now find a "Rebuild" button next to the Deployment Log. While you generally won\'t need to rebuild your function, if you commit new changes to your code or re-authenticate your SaaS integrations, the flows.network platform will still automatically build the function again. This button has been added specifically to address unexpected problems. However, we hope no one need to clicks this button.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upgrade OpenAI-flows integration to 0.4 and support ",(0,o.kt)("inlineCode",{parentName:"p"},"retry_time")," function. This function can ask ChatGPT to retry to answer your question if ChatGPT can't reply to you previouly due to some network issues. For example, please check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flows-network/github-pr-summary/blob/main/src/github-pr-summary.rs#L150"},"github-pr-summary")," repo."))))}c.isMDXComponent=!0}}]);