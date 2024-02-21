"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13707],{96119:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=s(74848),r=s(28453);const o={},i="End to End Encryption User Guide",c={id:"use-rocket.chat/user-guides/security-bundle/end-to-end-encryption-user-guide",title:"End to End Encryption User Guide",description:"When E2E is enabled on your workspace, users can create encrypted rooms and send encrypted messages.",source:"@site/docs/use-rocket.chat/user-guides/security-bundle/end-to-end-encryption-user-guide.md",sourceDirName:"use-rocket.chat/user-guides/security-bundle",slug:"/use-rocket.chat/user-guides/security-bundle/end-to-end-encryption-user-guide",permalink:"/docs-exp/docs/use-rocket.chat/user-guides/security-bundle/end-to-end-encryption-user-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-rocket.chat/user-guides/security-bundle/end-to-end-encryption-user-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Loss Prevention User Guide",permalink:"/docs-exp/docs/use-rocket.chat/user-guides/security-bundle/data-loss-prevention-user-guide"},next:{title:"Two Factor Authentication User Guide",permalink:"/docs-exp/docs/use-rocket.chat/user-guides/security-bundle/two-factor-authentication-user-guide"}},d={},a=[{value:"Getting started",id:"getting-started",level:2},{value:"Set E2E Encryption Password",id:"set-e2e-encryption-password",level:3},{value:"Changing Encryption Password",id:"changing-encryption-password",level:3},{value:"Starting an End to End Conversation",id:"starting-an-end-to-end-conversation",level:2},{value:"Convert an existing room to use End to End encryption",id:"convert-an-existing-room-to-use-end-to-end-encryption",level:2},{value:"FAQ",id:"faq",level:2}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"end-to-end-encryption-user-guide",children:"End to End Encryption User Guide"}),"\n",(0,t.jsx)(n.p,{children:"When E2E is enabled on your workspace, users can create encrypted rooms and send encrypted messages."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT:"})," ",(0,t.jsx)(n.strong,{children:"E2E encryption functionality is currently in beta"})," and includes notable restrictions that workspace owners should carefully consider before activating this feature for production use as follow:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"E2E encrypted messages will not appear in search operations."}),"\n",(0,t.jsx)(n.li,{children:"Bots or other ancillary systems interacting via webhooks or REST API cannot read E2EE encrypted messages."}),"\n",(0,t.jsx)(n.li,{children:"File uploads are not encrypted."}),"\n",(0,t.jsx)(n.li,{children:"Rocket.Chat enables users to reset their private E2E key to avoid permanent data loss during the beta period."}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,t.jsxs)(n.p,{children:["To use E2E Encryption, your Rocket.Chat workspace administrator must ",(0,t.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/e2e-encryption",children:"turn on the End to End Encryption"})," feature."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/e2e-encryption",children:"e2e-encryption.md"})}),"\n",(0,t.jsx)(n.h3,{id:"set-e2e-encryption-password",children:"Set E2E Encryption Password"}),"\n",(0,t.jsxs)(n.p,{children:["If E2E Encryption is enabled on your workspace, you see a banner notifying you to ",(0,t.jsx)(n.strong,{children:"Enter your E2E Password."})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Click on the banner"}),"\n",(0,t.jsxs)(n.li,{children:["A modal is displayed with ",(0,t.jsx)(n.strong,{children:"your password."})]}),"\n",(0,t.jsx)(n.li,{children:"Copy and store the password securely. You'll need it when using Rocket.Chat on another device."}),"\n",(0,t.jsxs)(n.li,{children:["Confirm by clicking on ",(0,t.jsx)(n.strong,{children:"I Saved My Password."})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"changing-encryption-password",children:"Changing Encryption Password"}),"\n",(0,t.jsx)(n.p,{children:"To change your Encryption password,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click your avatar and select ",(0,t.jsx)(n.strong,{children:"My Account"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Security > E2E Encryption"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.strong,{children:"new encryption password"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save changes."})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"starting-an-end-to-end-conversation",children:"Starting an End to End Conversation"}),"\n",(0,t.jsx)(n.p,{children:"To create an End to End Encrypted room, "}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Follow this guide ",(0,t.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/user-guides/rooms/channels/create-a-new-channel",title:"mention",children:"create-a-new-channel.md"})," to create a room."]}),"\n",(0,t.jsxs)(n.li,{children:["Enable ",(0,t.jsx)(n.strong,{children:"Encrypted."})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"convert-an-existing-room-to-use-end-to-end-encryption",children:"Convert an existing room to use End to End encryption"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[" It must be a ",(0,t.jsx)(n.a,{href:"../rooms/channels/#private-channels",children:"private room"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"To convert an existing room to an encrypted room,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure you have entered your E2E Encryption password."}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"three dots icon"})," at the menu bar of the channel."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Enable E2E"})," or ",(0,t.jsx)(n.strong,{children:"Disable E2E"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"How can I tell if the room is encrypted?"}),(0,t.jsx)(n.p,{children:"If the room is using End to End Encryption you should see a key icon by the channel name."}),(0,t.jsx)("img",{src:"/img/e2e-keybychannel.png",alt:"","data-size":"original"})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"How can I tell if a message is encrypted?"}),(0,t.jsx)(n.p,{children:"You will see a key icon by the username."})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);