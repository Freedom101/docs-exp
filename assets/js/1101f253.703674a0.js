"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91280],{80342:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=r(74848),t=r(28453);const i={description:"Manage Rocket.Chat Apps"},d="Rocket.Chat Marketplace",c={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/README",title:"Rocket.Chat Marketplace",description:"Manage Rocket.Chat Apps",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/README.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/README.md",tags:[],version:"current",frontMatter:{description:"Manage Rocket.Chat Apps"},sidebar:"tutorialSidebar",previous:{title:"Workspace",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/workspace"},next:{title:"App Storage Location",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/app-storage-location"}},l={},a=[{value:"Types of Apps",id:"types-of-apps",level:2},{value:"Public Apps: Diverse Range from Free to Premium, Developed In-House and by Third Parties",id:"public-apps-diverse-range-from-free-to-premium-developed-in-house-and-by-third-parties",level:3},{value:"Availability of Public Apps Across Rocket.Chat Subscription Plans",id:"availability-of-public-apps-across-rocketchat-subscription-plans",level:3},{value:"Private Apps: Custom Solutions Developed by You",id:"private-apps-custom-solutions-developed-by-you",level:3},{value:"Installing a Private App",id:"installing-a-private-app",level:4},{value:"App Installation and Usage Limits Across Different Rocket.Chat Plans",id:"app-installation-and-usage-limits-across-different-rocketchat-plans",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"rocketchat-marketplace",children:"Rocket.Chat Marketplace"}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["As of December 15, 2023, Rocket.Chat has ceased support for connections from cloud services and official mobile/desktop apps to workspaces running legacy versions outside our support window. Users on unsupported legacy servers are advised to upgrade to the latest Rocket.Chat version to ensure continued access to cloud, mobile, and desktop applications. ",(0,n.jsx)(s.strong,{children:"Each Rocket.Chat version is supported for six months post-release."})]})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"https://www.rocket.chat/marketplace",children:"Rocket.Chat Marketplace"})," is a central hub where users can discover, install, and manage Rocket.Chat Apps to enhance their workspace's functionality. These apps range from integrations with third-party services to custom features designed to improve user experience. You can also develop your own apps using the ",(0,n.jsx)(s.a,{href:"https://developer.rocket.chat/apps-engine",children:"Rocket.Chat Apps engine"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Some key capabilities of these apps include:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Display interactive and dynamic content on their own interface - like a modal or the room\u2019s contextual bar."}),"\n",(0,n.jsx)(s.li,{children:"Create buttons in the UI for users to interact with native content."}),"\n",(0,n.jsx)(s.li,{children:"Create slash commands for users to trigger more generic interactions."}),"\n",(0,n.jsx)(s.li,{children:"Register endpoints to receive data from other applications and services."}),"\n",(0,n.jsx)(s.li,{children:"Work on both desktop and mobile clients."}),"\n",(0,n.jsx)(s.li,{children:"Send messages to users; create and manage public channels, groups, discussions, and threads."}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["Before installing apps from the Marketplace, ensure your workspace is registered (even if it is on the ",(0,n.jsx)(s.a,{href:"/docs-exp/docs/readme/our-plans#community",children:"community plan"}),") on ",(0,n.jsx)(s.a,{href:"https://cloud.rocket.chat",children:"Rocket.Chat Cloud"}),", and is within the ",(0,n.jsx)(s.a,{href:"/docs-exp/docs/customer-center/support-center/premium-support-plans/support-prerequisites-and-version-durability#support-window-duration",children:"support window"}),"."]})}),"\n",(0,n.jsxs)(s.p,{children:["You can browse Rocket.Chat apps from the ",(0,n.jsx)(s.a,{href:"https://rocket.chat/marketplace",children:"marketplace"})," or access them via ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Administration > Apps > Marketplace"})}),". Here, you can:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Explore:"})," View, search, and filter apps based on categories, status, and price. ",(0,n.jsx)("img",{src:"/img/image (917).png",alt:"","data-size":"line"})," tag next to an app on the marketplace means you need to upgrade your workspace to a higher version to use the app."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Install:"})," Follow simple steps to add apps to your workspace. "]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Manage Installed Apps:"})," Enable, disable, or uninstall apps; view details and logs; configure user settings."]}),"\n",(0,n.jsxs)(s.li,{children:["On the ",(0,n.jsx)(s.strong,{children:"Requested"})," section of the ",(0,n.jsx)(s.strong,{children:"Marketplace"})," screen, you can find all the requested apps from users in the workspace."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["Users with the ",(0,n.jsx)(s.code,{children:"Access Marketplace"})," ",(0,n.jsx)(s.a,{href:"../../use-rocket.chat/workspace-administration/permissions/",children:"permission"})," can access the Rocket.Chat marketplace and request for any app they need in the workspace."]})}),"\n",(0,n.jsx)(s.h2,{id:"types-of-apps",children:"Types of Apps"}),"\n",(0,n.jsx)(s.h3,{id:"public-apps-diverse-range-from-free-to-premium-developed-in-house-and-by-third-parties",children:"Public Apps: Diverse Range from Free to Premium, Developed In-House and by Third Parties"}),"\n",(0,n.jsxs)(s.p,{children:["We or third-party developers can create public apps, which may be free, paid, or premium. Most of our public apps are premium and require a license to use. Public Apps are all the apps available on the Rocket.Chat ",(0,n.jsx)(s.a,{href:"https://www.rocket.chat/marketplace",children:"marketplace"}),". If you are a third-party publisher/developer, you can also ",(0,n.jsx)(s.a,{href:"https://developer.rocket.chat/apps-engine/app-submission-to-the-marketplace",children:"submit an app to the marketplace"}),". To submit an app to the marketplace, the publisher must have a Rocket.Chat ",(0,n.jsx)(s.a,{href:"https://cloud.rocket.chat/login",children:"Cloud Account"})," and register their publisher account. Please refer to the ",(0,n.jsx)(s.a,{href:"https://developer.rocket.chat/apps-engine/app-submission-to-the-marketplace",children:"app submission guide"})," for more details."]}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsxs)(s.p,{children:["You must purchase the Rocket.Chat paid apps to use them in your workspace, regardless of your subscription ",(0,n.jsx)(s.a,{href:"/docs-exp/docs/readme/our-plans",children:"plan"}),"."]})}),"\n",(0,n.jsx)(s.h3,{id:"availability-of-public-apps-across-rocketchat-subscription-plans",children:"Availability of Public Apps Across Rocket.Chat Subscription Plans"}),"\n",(0,n.jsx)(s.p,{children:"Rocket.Chat's public apps availability across plans is provided below."}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{width:"180",children:"Name"}),(0,n.jsx)("th",{width:"122",children:"Community"}),(0,n.jsx)("th",{width:"88",children:"Starter"}),(0,n.jsx)("th",{width:"79",children:"Pro"}),(0,n.jsx)("th",{width:"113",children:"Enterprise"}),(0,n.jsx)("th",{children:"Air-Gapped"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/atlassian/bamboo-app.md",children:"Bamboo Integration"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"Yes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Bitbucket Cloud Integration"}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/atlassian/bitbucket-server-integration.md",children:"Bitbucket Server Integration"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"Yes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Confluence Cloud Integration"}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/atlassian/confluence-server-integration.md",children:"Confluence Server Integration"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"Yes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/data-loss-prevention-dlp-app.md",children:"Data Loss Prevention"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"Yes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/omnichannel-apps/facebook-app/",children:"Facebook Messenger"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/github-app/",children:"GitHub"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/google-calendar/",children:"Google Calendar"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/google-drive/",children:"Google Drive"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/google-meet-app.md",children:"Google Meet"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/omnichannel-apps/instagram-direct/",children:"Instagram Direct"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"JIRA Cloud Integration"}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/atlassian/jira-server-v2.0.md",children:"JIRA Server Integration"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"Yes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/microsoft-teams-bridge/",children:"MS Teams Bridge"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"../../use-rocket.chat/rocket.chat-conference-call/conference-call-admin-guide/pexip-app.md",children:"Pexip"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"Yes"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/omnichannel-apps/telegram-app/",children:"Telegram"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/trello.md",children:"Trello"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/omnichannel-apps/twitter-app/",children:"Twitter"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/omnichannel-apps/whatsapp/",children:"WhatsApp (Paid)"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/",children:"Whatsapp Cloud"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/zapier-app/",children:"Zapier"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/clamav-app.md",children:"ClamAV"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-sandbox/",children:"Whatsapp Sandbox"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/omnichannel-apps/rasa-app.md",children:"Rasa"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/zoom.md",children:"Zoom"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/chatgpt-app/",children:"ChatGPT"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"rocket.chat-public-apps-guides/mod-assist-app/",children:"ModAssist"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"\u2713"})}),(0,n.jsx)("td",{children:"No"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"private-apps-custom-solutions-developed-by-you",children:"Private Apps: Custom Solutions Developed by You"}),"\n",(0,n.jsxs)(s.p,{children:["You can develop private apps for your workspace. Private apps are only functional on the workspaces where they have been manually installed. You can share this app package with other workspace owners privately to use on their workspaces too. To develop your Rocket.Chat app, see the ",(0,n.jsx)(s.a,{href:"https://developer.rocket.chat/apps-engine/creating-an-app",children:"official Apps guide"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"installing-a-private-app",children:"Installing a Private App"}),"\n",(0,n.jsxs)(s.p,{children:["To install a Private app, ",(0,n.jsx)(s.a,{href:"https://developer.rocket.chat/apps-engine/app-submission-to-the-marketplace#package-the-app",children:"package"})," your app in a ",(0,n.jsx)(s.code,{children:".zip"})," format and follow these guidelines to install it on your workspace:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"Administration  > Marketplace > Private apps"})]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Upload Private App."})]}),"\n",(0,n.jsxs)(s.li,{children:["Choose the installation method ( URL or a compiled ",(0,n.jsx)(s.code,{children:".zip)"})," and ",(0,n.jsx)(s.strong,{children:"Install."})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Agree"})," to the permissions required to complete the installation. Your app should be installed on the workspace and ready to use. "]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["For Rocket.Chat workspaces on versions less than 6.0, Go to ",(0,n.jsx)(s.strong,{children:"Administration"})," > ",(0,n.jsx)(s.strong,{children:"Settings"})," > ",(0,n.jsx)(s.strong,{children:"General"})," > ",(0,n.jsx)(s.strong,{children:"Apps"})," and ",(0,n.jsx)(s.strong,{children:"Enable development mode"}),", then proceed to ",(0,n.jsx)(s.strong,{children:"Administration"})," > ",(0,n.jsx)(s.strong,{children:"Apps"})," to ",(0,n.jsx)(s.strong,{children:"Upload App."})]})}),"\n",(0,n.jsx)(s.h2,{id:"app-installation-and-usage-limits-across-different-rocketchat-plans",children:"App Installation and Usage Limits Across Different Rocket.Chat Plans"}),"\n",(0,n.jsxs)(s.p,{children:["Workspace on the ",(0,n.jsx)(s.a,{href:"/docs-exp/docs/readme/our-plans",children:"community plan"})," can install multiple public apps from the marketplace, provided the app is not exclusive to premium workspaces. However, they can only enable up to five at a time. They can also enable a maximum of three private apps."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{width:"272.33333333333326",children:"Community Plan "}),(0,n.jsx)("th",{width:"194",children:"Public apps"}),(0,n.jsx)("th",{children:"Private apps"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Install"}),(0,n.jsx)("td",{children:"Unlimited"}),(0,n.jsx)("td",{children:"Unlimited"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Enable/Use"}),(0,n.jsx)("td",{children:"5"}),(0,n.jsx)("td",{children:"3"})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["For workspaces on versions less than 6.0, you can use all the enabled public and private apps you already have. However, you can not purchase or enable more apps once the limit is reached.  Subscribe to any of Rocket.Chat ",(0,n.jsx)(s.a,{href:"/docs-exp/docs/readme/our-plans",children:"premium plans"})," to enable all public apps in the workspace."]})}),"\n",(0,n.jsxs)(s.p,{children:["Workspaces subscribed to any of Rocket.Chat's premium plans can install all Public and Private apps. However, if the workspace ",(0,n.jsx)(s.a,{href:"/docs-exp/docs/setup-and-configure/license-application",children:"license"})," expires and the workspace has exceeded the community plan limit, the marketplace disables all downloaded apps, and the app count returns to zero."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>c});var n=r(96540);const t={},i=n.createContext(t);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);