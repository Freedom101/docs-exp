"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58260],{8601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(85893),o=a(11151);const i={},s="App Storage Location",r={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/app-storage-location",title:"App Storage Location",description:"Rocket.Chat's version 4 introduced npm packages as dependencies of apps. Since npm dependencies could account for a hefty portion of an app package's final size, we have a more flexible storage solution for your apps' packages.&#x20;",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/app-storage-location.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/app-storage-location",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/app-storage-location",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/app-storage-location.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rocket.Chat Marketplace",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/"},next:{title:"Rocket.Chat Public Apps Guides",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/"}},c={},p=[{value:"GridFS ",id:"gridfs-",level:2},{value:"Filesystem",id:"filesystem",level:2},{value:"Changing configuration when there are apps installed",id:"changing-configuration-when-there-are-apps-installed",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"app-storage-location",children:"App Storage Location"}),"\n",(0,n.jsx)(t.p,{children:"Rocket.Chat's version 4 introduced npm packages as dependencies of apps. Since npm dependencies could account for a hefty portion of an app package's final size, we have a more flexible storage solution for your apps' packages. "}),"\n",(0,n.jsxs)(t.p,{children:["To access the configuration, navigate to ",(0,n.jsx)(t.strong,{children:"Administration > Workspace > Settings> Apps"})]}),"\n",(0,n.jsx)(t.p,{children:"Currently, we have two storage methods:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.mongodb.com/manual/core/gridfs/",children:"GridFS"})," at MongoDB (the default option)"]}),"\n",(0,n.jsx)(t.li,{children:"Filesystem at the host's box"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"gridfs-",children:"GridFS "}),"\n",(0,n.jsx)(t.p,{children:"When using GridFS (default), your app package is stored in the database as a file, and you don't have to manage configuration to make it work. "}),"\n",(0,n.jsx)(t.h2,{id:"filesystem",children:"Filesystem"}),"\n",(0,n.jsx)(t.p,{children:"When setting the storage to the filesystem, you have full control of the package's storage location and access control. There are a few requirements to make it work:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You have to provide the absolute path of the directory that will be used to store the packages in the configuration,"}),"\n",(0,n.jsx)(t.li,{children:"The Rocket.Chat server has to have read and write permissions to the path so it can manage the packages"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"changing-configuration-when-there-are-apps-installed",children:"Changing configuration when there are apps installed"}),"\n",(0,n.jsx)(t.p,{children:"It is not recommended to change storage configuration when there are apps installed. Currently, there is no migration mechanism to move packages between different storage methods. Doing so will result in apps not working properly."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>s});var n=a(67294);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);