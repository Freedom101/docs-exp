"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89317],{22237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(74848),a=t(28453);const i={description:"Omnichannel Integration between Rocket.Chat and Instagram Messenger API.",coverY:0},r="Instagram Direct",o={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/README",title:"Instagram Direct",description:"Omnichannel Integration between Rocket.Chat and Instagram Messenger API.",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/README.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/README.md",tags:[],version:"current",frontMatter:{description:"Omnichannel Integration between Rocket.Chat and Instagram Messenger API.",coverY:0},sidebar:"tutorialSidebar",previous:{title:"HubSpot CRM Agent's Guide",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/hubspot-crm/hubspot-crm-agents-guide"},next:{title:"Instagram Direct Agent's Guide",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/instagram-direct-agents-guide"}},c={},l=[{value:"Install Instagram Direct App",id:"install-instagram-direct-app",level:2},{value:"Configure Instagram Direct App",id:"configure-instagram-direct-app",level:2},{value:"Handover protocol",id:"handover-protocol",level:3},{value:"Instagram Direct Authentication",id:"instagram-direct-authentication",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Subscribe/Unsubscribe",id:"subscribeunsubscribe",level:3},{value:"Edit Page Configurations",id:"edit-page-configurations",level:3},{value:"Instagram Direct App Shortcuts",id:"instagram-direct-app-shortcuts",level:2},{value:"Uninstall Instagram Direct App",id:"uninstall-instagram-direct-app",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"instagram-direct",children:"Instagram Direct"}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:"..//Premium.svg",alt:""}),(0,s.jsx)("figcaption",{})]}),"\n",(0,s.jsxs)(n.p,{children:["With Instagram Direct, you can directly handle messages from your Instagram Business Inbox in ",(0,s.jsx)(n.a,{href:"http://rocket.chat",children:"Rocket.Chat"}),". Instagram users contact you via Instagram Direct messages, and you answer chats from your Rocket.Chat workspace. Some key features of this integration include sending messages with quick reply buttons, welcome messages(starting/closing chat), file sharing, and the correlation between your Instagram Direct pages and your Rocket.Chat departments."]}),"\n",(0,s.jsx)(n.p,{children:"The Instagram Direct integration is available to the following Instagram Direct Professional Accounts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All Business accounts"}),"\n",(0,s.jsx)(n.li,{children:"Creator accounts via a phased roll-out, beginning with accounts with less than 500k followers"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For more official info, see ",(0,s.jsx)(n.a,{href:"https://developers.facebook.com/docs/messenger-platform/instagram",children:"Instagram Messaging with the Messenger Platform"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"install-instagram-direct-app",children:"Install Instagram Direct App"}),"\n",(0,s.jsx)(n.p,{children:"To install the Instagram Direct App,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Administration > Apps > Marketplace."})]}),"\n",(0,s.jsxs)(n.li,{children:["Search for the ",(0,s.jsx)(n.strong,{children:"Instagram Direct"})," app."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Install"})," and accept the needed permissions. You receive a message from ",(0,s.jsx)(n.code,{children:"instagram.bot"})," in the ",(0,s.jsx)(n.code,{children:"#omnichannel-instagram-setup"})," channel with setup instructions."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"You must have the"})," ",(0,s.jsx)(n.a,{href:"https://docs.rocket.chat/use-rocket.chat/omnichannel#enable-omnichannel",children:(0,s.jsx)(n.strong,{children:"Omnichannel feature"})})," ",(0,s.jsx)(n.strong,{children:"enabled and have"})," ",(0,s.jsx)(n.a,{href:"https://docs.rocket.chat/use-rocket.chat/omnichannel/agents",children:(0,s.jsx)(n.strong,{children:"agents"})})," ",(0,s.jsx)(n.strong,{children:"and"})," ",(0,s.jsx)(n.a,{href:"https://docs.rocket.chat/use-rocket.chat/omnichannel/managers",children:(0,s.jsx)(n.strong,{children:"managers"})})," ",(0,s.jsx)(n.strong,{children:"assigned to receive and send Omnichannel messages."})]})}),"\n",(0,s.jsx)(n.h2,{id:"configure-instagram-direct-app",children:"Configure Instagram Direct App"}),"\n",(0,s.jsx)(n.h3,{id:"handover-protocol",children:"Handover protocol"}),"\n",(0,s.jsx)(n.p,{children:"If you have multiple Facebook apps connected to a single Facebook account, then Facebook allows those apps to participate in a conversation by passing control of the conversation between them. This feature is known as the Handover protocol. If you use the Handover protocol on your account, this Instagram app allows you to perform some handover operations.  "}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["To learn more, see the official documentation for ",(0,s.jsx)(n.a,{href:"https://developers.facebook.com/docs/messenger-platform/instagram/features/handover-protocol",children:"Handover Protocol"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"To configure the Instagram Direct App,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the Instagram Direct App I",(0,s.jsx)(n.strong,{children:"nfo"})," screen, navigate to ",(0,s.jsx)(n.strong,{children:"Settings."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update the required fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Agents Display Name:"})," Choose to display the agent's name or username."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"File Upload Enabled:"})," Enable/disable file sharing and set a limit for maximum upload size."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accepted Media Types:"})," Select the type of files that can be exchanged during a conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'Delete messages once it has been "Unsend" from Instagram:'})," Select what to do with Unsent messages."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Instagram Handover Protocol Action:"})," It defines the action which should be performed while sending an agent's message to a thread to get access to the thread."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Take Thread Control"})," action will only work if you've configured Rocket.Chat Omni-gateway app as a ",(0,s.jsx)(n.strong,{children:"Primary Receiver"})," from Facebook Apps page settings."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Instagram Handover Protocol Metadata:"})," It defines the metadata to be passed along with thread control action requests. You can use this to pass some custom payload to other apps."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"instagram-direct-authentication",children:"Instagram Direct Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["Before sending any messages, you must authorize the ",(0,s.jsx)(n.strong,{children:"Omni-Gateway"})," to send and receive Instagram Direct messages on behalf of your account."]}),"\n",(0,s.jsx)(n.p,{children:"Ensure that each of the following requirements is met before starting the authentication process:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An Instagram ",(0,s.jsx)(n.a,{href:"https://help.instagram.com/502981923235522?fbclid=IwAR0TNcoToWKAq8OTOH4VjUC75NSk8EyqFW2Xz5KWDX7SsYK-9rNYppMMnLs",children:"Business Account"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://www.facebook.com/",children:"Facebook Account"}),". "]}),"\n",(0,s.jsxs)(n.li,{children:["A",(0,s.jsx)(n.a,{href:"https://www.facebook.com/pages/creation/",children:" Facebook Page"})," connected to your Instagram account. "]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[" See the Meta guide on ",(0,s.jsx)(n.a,{href:"https://help.instagram.com/570895513091465/?helpref=related_articles",children:"connecting your Facebook Page to your Instagram account"}),"."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enable ",(0,s.jsx)(n.a,{href:"https://developers.facebook.com/docs/messenger-platform/instagram/get-started#connected-tools-toggle",children:"Message Control Connected Tools Settings"})," from your Instagram account on mobile."]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure your ",(0,s.jsx)(n.a,{href:"http://rocket.chat",children:"Rocket.Chat"})," instance is on a public Address and is accessible by anyone on the internet. Go to ",(0,s.jsx)(n.strong,{children:"Admin > General > Site Url"})," to confirm this."]}),"\n",(0,s.jsxs)(n.li,{children:[" Lastly, ensure your ",(0,s.jsx)(n.a,{href:"http://rocket.chat",children:"Rocket.Chat"})," instance is connected to ",(0,s.jsx)(n.a,{href:"http://rocket.chat",children:"Rocket.Chat"})," Cloud. Go to ",(0,s.jsx)(n.strong,{children:"Admin > Connectivity Services"})," to connect to Cloud."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(n.p,{children:"To start the authentication with Instagram Direct,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["From the ",(0,s.jsx)(n.code,{children:"instagram.bot message"}),", click on the Start Authentication button."]}),"\n",(0,s.jsx)(n.li,{children:"You are redirected to a page to log in and authorize Instagram Direct."}),"\n",(0,s.jsx)(n.li,{children:"Select the Instagram business account you want to use with Rocket.Chat Omni Gateway."}),"\n",(0,s.jsx)(n.li,{children:"If you have multiple pages associated with your Instagram account, it will prompt you to choose the preferred page to connect."}),"\n",(0,s.jsx)(n.li,{children:"Determine what Rocket.Chat Omni Gateway can do with the pages you have selected."}),"\n",(0,s.jsx)(n.li,{children:"After selecting your page, you will receive a success message with credentials for your  Instagram Business Account that has been authenticated that subscribed."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"subscribeunsubscribe",children:"Subscribe/Unsubscribe"}),"\n",(0,s.jsx)(n.p,{children:"You are automatically subscribed to the Instagram page following successful authentication. However, you can choose to unsubscribe."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["From the list of connected Instagram Business Accounts, click the ",(0,s.jsx)(n.strong,{children:"UNSUBSCRIBE"})," button against the account you want to unsubscribe."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"edit-page-configurations",children:"Edit Page Configurations"}),"\n",(0,s.jsx)(n.p,{children:"To update the page configurations,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Edit Page Config"})," button under the account and update the following settings:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Department"}),": You can route all the conversations from this page to a specific ",(0,s.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/omnichannel/departments",children:(0,s.jsx)(n.strong,{children:"department"})}),". Only the agents of this department can serve conversations coming from this page."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Welcome Message:"})," First message your customer will receive when they message you."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Conversation Finished Message:"})," A message sent to your customer when a conversation is closed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default message for offline service:"})," Message sent to your visitor when no agents are available online."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"When an Instagram user sends a message, and no agent is available on the server to chat, the conversation won't be created. This means that when agents return to work, they will not know someone was reaching out. Therefore, please ensure you always have at least one agent online."})}),"\n",(0,s.jsx)(n.h2,{id:"instagram-direct-app-shortcuts",children:"Instagram Direct App Shortcuts"}),"\n",(0,s.jsx)(n.p,{children:"The Instagram Direct app has a list of shortcuts to ease usage. "}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"/instagram authorize"}),"::"]})," Starts the Instagram authorization process to connect your Instagram accounts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"/instagram unauthorize"}),":"]})," Revoke Instagram authorization to remove all connected Instagram accounts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"/instagram edit pageId"}),":"]})," Edit Page configuration for the given pageId."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"/instagram edit username"}),":"]})," Edit PageInstagram configuration for the given Instagram username."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"/instagram help"}),":"]})," Shows help message."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"uninstall-instagram-direct-app",children:"Uninstall Instagram Direct App"}),"\n",(0,s.jsx)(n.p,{children:"To delete the Instagram Direct app from your workspace,"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Administration > Apps > Installed."})]}),"\n",(0,s.jsxs)(n.li,{children:["Click th",(0,s.jsx)(n.strong,{children:"e kebab menu"})," against the ",(0,s.jsx)(n.strong,{children:"Instagram Direct"})," ",(0,s.jsx)(n.strong,{children:"app."})]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Uninstall"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Yes"})," to confirm the uninstallation."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"You cannot receive messages on Rocket.Chat if you have a country restriction set on Instagram."})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);