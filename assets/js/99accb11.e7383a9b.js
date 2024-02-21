"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82884],{15379:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(74848),a=t(28453);const i={description:"An extension for the existing production-ready WhatsApp App."},o="WhatsApp Sandbox",r={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-sandbox/README",title:"WhatsApp Sandbox",description:"An extension for the existing production-ready WhatsApp App.",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-sandbox/README.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-sandbox",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-sandbox/",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-sandbox/",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-sandbox/README.md",tags:[],version:"current",frontMatter:{description:"An extension for the existing production-ready WhatsApp App."},sidebar:"tutorialSidebar",previous:{title:"Using WhatsApp Cloud App",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/using-whatsapp-cloud-app"},next:{title:"WhatsApp Sandbox Agent's Guide",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-sandbox/whatsapp-sandbox-agents-guide"}},p={},c=[{value:"Install Whatsapp Sandbox Integration App",id:"install-whatsapp-sandbox-integration-app",level:2},{value:"Get the Test API key from 360 Dialog",id:"get-the-test-api-key-from-360-dialog",level:2},{value:"Configure Whatsapp Sandbox App",id:"configure-whatsapp-sandbox-app",level:2},{value:"Uninstall Whatsapp Sandbox App",id:"uninstall-whatsapp-sandbox-app",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"whatsapp-sandbox",children:"WhatsApp Sandbox"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"WhatsApp Sandbox"})," app allows you to test ",(0,n.jsx)(s.a,{href:"http://rocket.chat/",children:"Rocket.Chat"})," integration with WhatsApp in a sandbox environment. You can send messages and templates in this test environment and receive a webhook."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["This app is not intended for production use. It is only for testing purposes. For production use, please use the ",(0,n.jsx)(s.a,{href:"../whatsapp/",children:"official WhatsApp integration"}),"."]})}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"You must have the"})," ",(0,n.jsx)(s.a,{href:"https://docs.rocket.chat/use-rocket.chat/omnichannel#enable-omnichannel",children:(0,n.jsx)(s.strong,{children:"Omnichannel feature"})})," ",(0,n.jsx)(s.strong,{children:"enabled and have"})," ",(0,n.jsx)(s.a,{href:"https://docs.rocket.chat/use-rocket.chat/omnichannel/agents",children:(0,n.jsx)(s.strong,{children:"agents"})})," ",(0,n.jsx)(s.strong,{children:"and"})," ",(0,n.jsx)(s.a,{href:"https://docs.rocket.chat/use-rocket.chat/omnichannel/managers",children:(0,n.jsx)(s.strong,{children:"managers"})})," ",(0,n.jsx)(s.strong,{children:"assigned to receive and send Omnichannel messages."})]})}),"\n",(0,n.jsx)(s.h2,{id:"install-whatsapp-sandbox-integration-app",children:"Install Whatsapp Sandbox Integration App"}),"\n",(0,n.jsx)(s.p,{children:"To install the Whatsapp Sandbox App,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Administration > Apps > Marketplace."})]}),"\n",(0,n.jsxs)(s.li,{children:["Search for the ",(0,n.jsx)(s.strong,{children:"Whatsapp Sandbox"})," app."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Install"})," and accept the needed permissions.  You receive a message from ",(0,n.jsx)(s.code,{children:"whatsapp-sandbox.bot"})," with setup instructions."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["To get support, please run the ",(0,n.jsx)(s.code,{children:"/whatsapp-sandbox support"})," command."]})}),"\n",(0,n.jsx)(s.h2,{id:"get-the-test-api-key-from-360-dialog",children:"Get the Test API key from 360 Dialog"}),"\n",(0,n.jsxs)(s.p,{children:["You need a test ",(0,n.jsx)(s.strong,{children:"API-KEY"})," from 360 Dialog to use WhatsApp Sandbox App."]}),"\n",(0,n.jsxs)(s.p,{children:["To get the ",(0,n.jsx)(s.strong,{children:"API-KEY,"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Send a WhatsApp message to the phone number ",(0,n.jsx)(s.strong,{children:"4930609859535"})," with the content ",(0,n.jsx)(s.strong,{children:"START."})," You can use this link: ",(0,n.jsx)(s.a,{href:"https://wa.me/4930609859535?text=START",children:"https://wa.me/4930609859535?text=START"})]}),"\n",(0,n.jsxs)(s.li,{children:["Alternatively, you can use this QR Code: ",(0,n.jsx)(s.a,{href:"https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox#1.-get-a-test-api-key",children:"https://docs.360dialog.com/whatsapp-api/whatsapp-api/sandbox#1.-get-a-test-api-key"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["As a response, you will receive your Test API-KEY. This ",(0,n.jsx)(s.strong,{children:"API-KEY"})," is associated with the WhatsApp number you sent the message with. Now, you can use 360dialog WhatsApp."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["See the ",(0,n.jsx)(s.a,{href:"https://docs.360dialog.com/docs/whatsapp-api/sandbox",children:"official documentation"})," to learn more about 360dialog Sandbox and its",(0,n.jsx)(s.a,{href:"https://docs.360dialog.com/docs/whatsapp-api/sandbox#sandbox-limitations",children:" limitations"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"configure-whatsapp-sandbox-app",children:"Configure Whatsapp Sandbox App"}),"\n",(0,n.jsx)(s.p,{children:"To configure the Whatsapp Sandbox App,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["On the ",(0,n.jsx)(s.strong,{children:"Whatsapp Sandbox App Info"})," screen, navigate to ",(0,n.jsx)(s.strong,{children:"Settings."})]}),"\n",(0,n.jsxs)(s.li,{children:["Update the required fields:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"WhatsApp Sandbox API KEY:"})," The API KEY provided by 360Dialog for the Sandbox environment."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Default department:"})," (Optional) Thedepartment that will handle WhatsApp conversations."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Welcome Message:"})," (Optional) The message sent to customers when they send their first message."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Conversation Finished Message:"})," (Optional) The message  sent to your customer when an agent closes the conversation."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Service Unavailable Message:"})," The message sent to your customer when no agents are available online."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Notification of undeliverable message:"})," (Optional) Set this option to alert the agent that the message wasn't delivered to the WhatsApp platform."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Agents Display Info:"})," The agent information that would be appended before every message an agent sends to a customer."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Allow Quote Messages:"})," If enabled, agents can see the quoted message reference on Rocket.Chat when the Contact quotes/replies to a message on WhatsApp."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Message Status Endpoint URL:"})," The endpoint URL where you want to receive the status of each message exchanged."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Filter Message Status:"}),' Filter the statuses (All, Regular Messages, or Template Messages ) you wish to receive at the endpoint ("Message Status Endpoint URL") based on Message Type.']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Allow List options for Quick Replies:"})," If enabled, messages with more than three quick reply options would be rendered as List options.  Max limit for list options is 10."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Custom label for all List Option button:"})," Define a customized label message you want to display on all Quick reply options sent as List Message."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["You can now start sending messages from WhatsApp Sandbox to ",(0,n.jsx)(s.a,{href:"http://rocket.chat/",children:"Rocket.Chat"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"uninstall-whatsapp-sandbox-app",children:"Uninstall Whatsapp Sandbox App"}),"\n",(0,n.jsx)(s.p,{children:"To delete the Whatsapp Sandbox app from your workspace,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Administration > Apps > Installed."})]}),"\n",(0,n.jsxs)(s.li,{children:["Click th",(0,n.jsx)(s.strong,{children:"e kebab menu"})," against the ",(0,n.jsx)(s.strong,{children:"Whatsapp Sandbox"})," app**.**"]}),"\n",(0,n.jsxs)(s.li,{children:["Select ",(0,n.jsx)(s.strong,{children:"Uninstall"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Yes"})," to confirm the uninstallation."]}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>r});var n=t(96540);const a={},i=n.createContext(a);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);