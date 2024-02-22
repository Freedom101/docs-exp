"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62502],{812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=r(85893),i=r(11151);const a={},n="Matrix Bridge FAQs",o={id:"use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrixbridge-faqs",title:"Matrix Bridge FAQs",description:"What is the Matrix Protocol?",source:"@site/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrixbridge-faqs.md",sourceDirName:"use-rocket.chat/workspace-administration/settings/federation/matrix-bridge",slug:"/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrixbridge-faqs",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrixbridge-faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrixbridge-faqs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Search and join public channels on the Matrix network",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/search-and-join-public-channels-on-the-matrix-network"},next:{title:"Rocket.Chat Basic Federation",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/rocket.chat-federation/"}},c={},d=[];function l(e){const t={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"matrix-bridge-faqs",children:"Matrix Bridge FAQs"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"What is the Matrix Protocol?"}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://matrix.org/",children:"Matrix"})," is an open standard for interoperable, decentralized, real-time communication over IP."]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"How does Matrix work in Rocket.Chat?"}),(0,s.jsx)(t.p,{children:"Rocket.Chat aims to enable seamless communication and collaboration across platforms, empowering individuals and organizations to connect on their terms and fluently share information with other platforms."})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"What is a Homeserver?"}),(0,s.jsxs)(t.p,{children:["It's an implementation of the Matrix spec, there are some existing homeservers. The most famous are ",(0,s.jsx)(t.a,{href:"https://github.com/matrix-org/synapse",children:"Synapse "}),"and ",(0,s.jsx)(t.a,{href:"https://github.com/matrix-org/dendrite",children:"Dendrite"}),"."]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"How do I install Synapse?"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Installing ",(0,s.jsx)(t.a,{href:"https://matrix-org.github.io/synapse/latest/",children:"Synapse"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Configuring ",(0,s.jsx)(t.a,{href:"https://matrix-org.github.io/synapse/latest/federate.html",children:"federation"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"What are the prerequisites for using Matrix on Rocket.Chat?"}),(0,s.jsxs)(t.p,{children:["See how to ",(0,s.jsx)(t.a,{href:"matrix-admin-guide/matrix-homeserver-setup/",children:"install and configure"})," Rocket.Chat Matrix Bridge integration."]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"How do I test my Rocket.Chat Matrix Bridge setup?"}),(0,s.jsxs)(t.p,{children:["See how to ",(0,s.jsx)(t.a,{href:"matrix-admin-guide/matrix-homeserver-setup/#testing-your-setup",children:"test "}),"your setup."]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"How can I block undesired homeservers to contact me?"}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list",children:"how to create allow/block lists"})," in your Matrix homeserver configuration."]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"What happens when I invite someone from an external server?"}),(0,s.jsx)(t.p,{children:"Whenever you invite someone to chat with you either through public, private, or DM rooms, a copy for that external user will be created in your local workspace. And a copy for your user will be created in the external (inviter) server as well. From there, every message is stored on both sides."})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Will the copies for external users created in my local workspace be counted as a valid seats (Enterprise license)?"}),(0,s.jsx)(t.p,{children:"No, all the copies being created to support the Matrix Bridge feature will NOT be counted as valid seats. Only users you create in your local workspace are counted as valid seats."})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Can I change the role of an federated user in my local workspace?"}),(0,s.jsx)(t.p,{children:"No, all the external users created in your local workspace will be created as a User (user role) and without an email and password, which means they cannot log in directly to your workspace. The only way for them to communicate with your local workspace is through the open channel you have with them."})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Will I be able to see the presence status for a federated user?"}),(0,s.jsx)(t.p,{children:"Unfortunately, not at this point. When it comes to presence status, the support from Bridges is very unstable, and due to that, we don't support it yet."})]}),"\n",(0,s.jsxs)(t.p,{children:["For more information about the Matrix Protocol, visit ",(0,s.jsx)(t.a,{href:"https://matrix.org/faq/",children:"FAQs"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>n});var s=r(67294);const i={},a=s.createContext(i);function n(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);