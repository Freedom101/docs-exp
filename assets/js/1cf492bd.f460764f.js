"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1691],{13990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(85893),o=n(11151);const s={},a="Updating Rocket.Chat FAQ",r={id:"resources/frequently-asked-questions/deployment-faq/updating-rocket.chat-faq",title:"Updating Rocket.Chat FAQ",description:"Why do I see a MongoDB Deprecated warning immediately after update",source:"@site/docs/resources/frequently-asked-questions/deployment-faq/updating-rocket.chat-faq.md",sourceDirName:"resources/frequently-asked-questions/deployment-faq",slug:"/resources/frequently-asked-questions/deployment-faq/updating-rocket.chat-faq",permalink:"/docs-exp/docs/resources/frequently-asked-questions/deployment-faq/updating-rocket.chat-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/resources/frequently-asked-questions/deployment-faq/updating-rocket.chat-faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Snaps FAQ",permalink:"/docs-exp/docs/resources/frequently-asked-questions/deployment-faq/snaps-faq"},next:{title:"Federation FAQs",permalink:"/docs-exp/docs/resources/frequently-asked-questions/federation-faqs"}},c={},d=[{value:"Configuration update",id:"configuration-update",level:3},{value:"New workspace",id:"new-workspace",level:3}];function l(e){const t={a:"a",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"updating-rocketchat-faq",children:"Updating Rocket.Chat FAQ"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Why do I see a MongoDB Deprecated warning immediately after update"}),(0,i.jsx)(t.p,{children:"This is a result of your MongoDB version not being compatible with the Rocket.Chat version the installed."}),(0,i.jsxs)(t.p,{children:["It is advisable to incrementally upgrade the version of MongoDB deployed to the supported version. See release engine compatibility ",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat/releases",children:"https://github.com/RocketChat/Rocket.Chat/releases"})]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Why do I receive a question about the Unique ID change detected"}),(0,i.jsx)(t.p,{children:"\"Unique ID\" is the unique identifier of a server, it's a hash created when the Rocket.Chat's deployment starts for the first time. "}),(0,i.jsx)(t.p,{children:"In order to prevent Unique ID duplicity caused by deployment clones, deployment splits, etc, when the database is copied to start a new deployment, the Unique ID record is copied becoming the same for the old and new deployments, Rocket.Chat implements a fingerprint solution to help admins identify when those cases happen by mistake."}),(0,i.jsx)(t.p,{children:"The fingerprint is composed of the Site URL setting and database connection string, when some of those 2 information changes the fingerprint changes to a pending state. The admins are requested to validate the fingerprint again by deciding if the change is, in fact, an expected update of the current workspace or a new workspace being deployed."}),(0,i.jsx)(t.h3,{id:"configuration-update",children:"Configuration update"}),(0,i.jsx)(t.p,{children:"If the change detected was expected to be a normal workspace configuration change, like a site url change or a database string change, it's safe to confirm it. By confirming the update, nothing will change and the new fingerprint will become validated."}),(0,i.jsx)("mark",{style:{color:"red"},children:(0,i.jsx)(t.strong,{children:"If the change is, in fact, a new workspace, by confirming as an update it can generate issues with statistics reporting, license validation, push notifications, marketplace access, etc. Since more than one workspace is accessing the cloud services using the same Unique ID."})}),(0,i.jsx)(t.h3,{id:"new-workspace",children:"New workspace"}),(0,i.jsx)(t.p,{children:"If the change detected, in fact, means a new deployment has been done, by confirming a new workspace, all the identification information will be reset:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Unique ID: A new unique hash will be generated"}),"\n",(0,i.jsx)(t.li,{children:"Cloud Connection: All cloud connections will be reset"}),"\n",(0,i.jsx)(t.li,{children:"Cloud Workspace: The cloud workspace data linking a cloud instance to the deployment will be reset"}),"\n",(0,i.jsx)(t.li,{children:"Cloud License: Any license provided by the cloud portal will be reset"}),"\n"]}),(0,i.jsx)("mark",{style:{color:"red"},children:"If the change is not, in fact, a new workspace, by confirming a new workspace it can generate issues to connect back the deployment with the cloud workspace."})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(67294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);