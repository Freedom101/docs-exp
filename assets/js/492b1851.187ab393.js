"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53631],{23381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=t(85893),s=t(11151);const r={description:"Omnichannel Integration between Rocket.Chat and Telegram."},i="Telegram App",l={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/README",title:"Telegram App",description:"Omnichannel Integration between Rocket.Chat and Telegram.",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/README.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/telegram-app",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/README.md",tags:[],version:"current",frontMatter:{description:"Omnichannel Integration between Rocket.Chat and Telegram."},sidebar:"tutorialSidebar",previous:{title:"SMS",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/sms"},next:{title:"Telegram Agent's Guide",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/telegram-agents-guide"}},c={},o=[{value:"Install Telegram App",id:"install-telegram-app",level:2},{value:"Generate your Telegram Bot Token",id:"generate-your-telegram-bot-token",level:2},{value:"Configure the Telegram App",id:"configure-the-telegram-app",level:2},{value:"Uninstall Telegram App",id:"uninstall-telegram-app",level:2}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"telegram-app",children:"Telegram App"}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:"..//Premium.svg",alt:""}),(0,a.jsx)("figcaption",{})]}),"\n",(0,a.jsx)(n.p,{children:"With the Telegram app on Rocket.Chat, your customers can send and receive Omnichannel messages from your workspace through a Telegram bot."}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["To use your Telegram bot in a ",(0,a.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/workspace-administration/rooms",children:"room"}),", see ",(0,a.jsx)(n.a,{href:"/use-rocket.chat/workspace-administration/integrations/telegram.md",title:"mention",children:"telegram.md"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"install-telegram-app",children:"Install Telegram App"}),"\n",(0,a.jsx)(n.p,{children:"To install the Telegram App,"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.strong,{children:"Administration > Apps > Marketplace."})]}),"\n",(0,a.jsxs)(n.li,{children:["Search for the ",(0,a.jsx)(n.strong,{children:"Telegram"})," app."]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Install"})," and accept the needed permissions."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"You must enable the"})," ",(0,a.jsx)(n.a,{href:"/use-rocket.chat/omnichannel/",children:(0,a.jsx)(n.strong,{children:"Omnichannel"})})," ",(0,a.jsx)(n.strong,{children:"feature with"})," ",(0,a.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/omnichannel/agents",children:(0,a.jsx)(n.strong,{children:"agents"})})," ",(0,a.jsx)(n.strong,{children:"and"})," ",(0,a.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/omnichannel/managers",children:(0,a.jsx)(n.strong,{children:"managers"})})," ",(0,a.jsx)(n.strong,{children:"assigned to receive and send Omnichannel messages."})]})}),"\n",(0,a.jsx)(n.h2,{id:"generate-your-telegram-bot-token",children:"Generate your Telegram Bot Token"}),"\n",(0,a.jsx)(n.p,{children:"To generate a Telegram bot token,"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Launch your Telegram app. Open a new chat, search and select ",(0,a.jsx)(n.strong,{children:'"BotFather".'})]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Start"}),". Type \u201c",(0,a.jsx)(n.strong,{children:"/newbot"}),"\u201d in the chat and ",(0,a.jsx)(n.strong,{children:"Send"}),". "]}),"\n",(0,a.jsx)(n.li,{children:"Select a name and username for your bot."}),"\n",(0,a.jsx)(n.li,{children:"Once the username is accepted, a congratulatory message displays all the bot's details, including the API token. "}),"\n",(0,a.jsx)(n.li,{children:"Copy the bot API token."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configure-the-telegram-app",children:"Configure the Telegram App"}),"\n",(0,a.jsx)(n.p,{children:"To configure the Telegram App,"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["On the ",(0,a.jsx)(n.strong,{children:"Telegram App Info"})," screen, navigate to ",(0,a.jsx)(n.strong,{children:"Settings."})]}),"\n",(0,a.jsxs)(n.li,{children:["Update the required fields:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Bot Token:"})," The bot token you copied when ",(0,a.jsx)(n.a,{href:"./#generate-your-telegram-bot-token",children:"generating the telegram bot"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Default Department"}),". Only the agents of this department can serve Telegram conversations."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Service Unavailable Message:"})," The message sent to your customer when no agents are available online."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Welcome Message:"}),"  The message sent to customers when they send their first message."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Conversation Finished Message:"})," The message sent to your customer when an agent closes the conversation."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Agents Display Name:"})," You can display the agent's name or username."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"File Upload Enabled:"})," You can enable/disable file sharing."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Accepted Media Types:"}),"  Select the type of files that can be shared between the Agents and your Twitter Contacts."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Save Changes."})]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"You will only receive messages if you have a department set up. Only the agents of that particular department can receive the chats."})}),"\n",(0,a.jsx)(n.h2,{id:"uninstall-telegram-app",children:"Uninstall Telegram App"}),"\n",(0,a.jsx)(n.p,{children:"To delete the Telegram app from your workspace,"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.strong,{children:"Administration > Apps > Installed."})]}),"\n",(0,a.jsxs)(n.li,{children:["Click th",(0,a.jsx)(n.strong,{children:"e kebab menu"})," against the ",(0,a.jsx)(n.strong,{children:"Telegram app."})]}),"\n",(0,a.jsxs)(n.li,{children:["Select ",(0,a.jsx)(n.strong,{children:"Uninstall"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Yes"})," to confirm the uninstallation."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["To learn more about Telegram bots, see the official ",(0,a.jsx)(n.a,{href:"https://core.telegram.org/bots#6-botfather",children:"Telegram Bots Guide."})]})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(67294);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);