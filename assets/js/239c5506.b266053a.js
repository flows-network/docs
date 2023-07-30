"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),p=r,h=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},l="Setting",i={unversionedId:"flow-dashboard/setting",id:"flow-dashboard/setting",title:"Setting",description:"Convert to the Setting tab, you can do some operations on your flow.",source:"@site/docs/flow-dashboard/setting.md",sourceDirName:"flow-dashboard",slug:"/flow-dashboard/setting",permalink:"/docs/flow-dashboard/setting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/flow-dashboard/setting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Flow Status and Details",permalink:"/docs/flow-dashboard/status-details"},next:{title:"Integrations",permalink:"/docs/category/integrations"}},c={},s=[{value:"Rename your flow",id:"rename-your-flow",level:2},{value:"Disconnect the flow to cut the flow from the template and change to a new template",id:"disconnect-the-flow-to-cut-the-flow-from-the-template-and-change-to-a-new-template",level:2},{value:"Change configurations",id:"change-configurations",level:2},{value:"Tags",id:"tags",level:2},{value:"Pause or delete the flow",id:"pause-or-delete-the-flow",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting"},"Setting"),(0,r.kt)("p",null,"Convert to the Setting tab, you can do some operations on your flow."),(0,r.kt)("h2",{id:"rename-your-flow"},"Rename your flow"),(0,r.kt)("p",null,"To rename your flow, click on 'Edit' under the Flow name section. After making the change, click 'Save' to save it."),(0,r.kt)("h2",{id:"disconnect-the-flow-to-cut-the-flow-from-the-template-and-change-to-a-new-template"},"Disconnect the flow to cut the flow from the template and change to a new template"),(0,r.kt)("p",null,"Under Setting -> Git Repo, click on Disconnect to cut your flow from the GitHub repo template. After successfully disconnecting the flow, flows.network stops listen to any new commits you pushed to your GitHub repo (your cloned template) or re-build the function for you. At this point,  this flow is still running."),(0,r.kt)("p",null,'Now you can import a new GitHub repo (another template) to this flow by clicking the organization dropdown menu to choose another repo (template), and then click on "Deploy". So newly chosen template/ function replaces the current flow.'),(0,r.kt)("h2",{id:"change-configurations"},"Change configurations"),(0,r.kt)("p",null,"Under the Configuration section, you can delete or add configurations for your flow."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click the "-" to delete a configuration.'),(0,r.kt)("li",{parentName:"ul"},'To add a new one, firstly your need to enter the key and value and then click "+".')),(0,r.kt)("h2",{id:"tags"},"Tags"),(0,r.kt)("p",null,"Tags help you manage your flow. You can add different tags and reuse the existing tags here."),(0,r.kt)("p",null,"After that, you can search for your flow using ",(0,r.kt)("inlineCode",{parentName:"p"},"#tag_name")," on My Flows page."),(0,r.kt)("h2",{id:"pause-or-delete-the-flow"},"Pause or delete the flow"),(0,r.kt)("p",null,"Under the Danger Zone section, you can pause or delete your flow."),(0,r.kt)("p",null,"Pausing a flow is revocable. This action is only applicable when the flow is running. Once paused, a flow can't be triggered and hence there is no actions."),(0,r.kt)("p",null,"Deleting a flow is irrevocable. Make sure to double-check before deleting a flow."))}d.isMDXComponent=!0}}]);