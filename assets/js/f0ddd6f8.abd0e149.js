"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21845],{55675:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(74848),n=t(28453);const a={},o="Mod Assist App",r={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/mod-assist-app/README",title:"Mod Assist App",description:"Content moderation is vital for maintaining a safe, inclusive digital workspace. It serves to uphold user safety by filtering harmful content like spam and hate speech, preserving brand reputation as a secure platform, and complying with legal regulations on content removal. Manual moderation is increasingly impractical due to the volume of conversations and the psychological risks to human moderators.&#x20;",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/mod-assist-app/README.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/mod-assist-app",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/mod-assist-app/",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/mod-assist-app/",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/mod-assist-app/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Microsoft Teams Bridge",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/microsoft-teams-bridge/using-microsoft-teams-bridge"},next:{title:"Using the Mod Assist App",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/mod-assist-app/using-the-mod-assist-app"}},c={},l=[{value:"Install Mod Assist App",id:"install-mod-assist-app",level:2},{value:"Get an OpenAI API Key",id:"get-an-openai-api-key",level:3},{value:"Configuring the Mod Assist App ",id:"configuring-the-mod-assist-app-",level:3}];function d(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"mod-assist-app",children:"Mod Assist App"}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/Premium.svg",alt:""}),(0,i.jsx)("figcaption",{})]}),"\n",(0,i.jsx)(s.p,{children:"Content moderation is vital for maintaining a safe, inclusive digital workspace. It serves to uphold user safety by filtering harmful content like spam and hate speech, preserving brand reputation as a secure platform, and complying with legal regulations on content removal. Manual moderation is increasingly impractical due to the volume of conversations and the psychological risks to human moderators. "}),"\n",(0,i.jsx)(s.p,{children:"The Mod Assist app automates this process, offering an efficient, scalable solution for content moderation. It enhances digital workspace security by automating key moderation tasks. It detects harmful content based on predefined rules, flags and reports these messages for moderator review, and enriches reports with contextual details like sender information, room location, and timestamps. This streamlines the moderation process and provides comprehensive data for informed decision-making."}),"\n",(0,i.jsx)(s.h2,{id:"install-mod-assist-app",children:"Install Mod Assist App"}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["The app will only be available to workspaces ",(0,i.jsx)(s.strong,{children:"running version 6.3.0 and higher."})," "]})}),"\n",(0,i.jsx)(s.p,{children:"To install the Mod Assist app,"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Go to ",(0,i.jsx)(s.strong,{children:"Administration > Apps > Marketplace"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Search for the ",(0,i.jsx)(s.strong,{children:"Mod Assist"})," app and click on it."]}),"\n",(0,i.jsxs)(s.li,{children:["Click ",(0,i.jsx)(s.strong,{children:"Install"})," and accept the needed permissions to install. "]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"get-an-openai-api-key",children:"Get an OpenAI API Key"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"Mod Assist app"})," requires ",(0,i.jsx)(s.a,{href:"https://platform.openai.com/account/api-keys",children:"API keys"})," to authenticate your OpenAI account on Rocket.Chat and make requests."]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["Your OpenAI account must have active billing with credits. For a more detailed guide on billing, please refer to ",(0,i.jsx)(s.a,{href:"https://help.openai.com/en/articles/8264644-what-is-prepaid-billing",children:"OpenAI's prepaid billing"}),"."]})}),"\n",(0,i.jsxs)(s.p,{children:["To ",(0,i.jsx)(s.a,{href:"https://platform.openai.com/account/api-keys",children:"get your OpenAI API key"}),", "]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Log into"})," your",(0,i.jsx)(s.a,{href:"https://platform.openai.com/",children:" OpenAI account"})," and click on your ",(0,i.jsx)(s.strong,{children:"profile icon"})," at the top-right corner of the screen."]}),"\n",(0,i.jsxs)(s.li,{children:["From the profile dropdown, select ",(0,i.jsx)(s.strong,{children:"View API Keys"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["If you don't have any API keys, click ",(0,i.jsx)(s.strong,{children:"+ Create new secret key"})," button to create a new API key."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Copy the API key"})," to your clipboard. You'll need it for configuring the app in your workspace."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"configuring-the-mod-assist-app-",children:"Configuring the Mod Assist App "}),"\n",(0,i.jsxs)(s.p,{children:["To configure the ",(0,i.jsx)(s.strong,{children:"Mod Assist App"})," after installing it,"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["On the ",(0,i.jsx)(s.strong,{children:"Mod Assist"})," ",(0,i.jsx)(s.strong,{children:"App Info"})," screen, navigate to ",(0,i.jsx)(s.strong,{children:"Settings."})]}),"\n",(0,i.jsxs)(s.li,{children:["Update the required fields:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"AI Moderated Rooms:"})," Select the ",(0,i.jsx)(s.a,{href:"../../../../use-rocket.chat/user-guides/rooms/",children:"rooms"})," where the moderation app should automatically screen for inappropriate content."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Exclude Roles:"})," Select and whitelist trusted ",(0,i.jsx)(s.a,{href:"/docs-exp/docs/setup-and-configure/roles-in-rocket.chat",children:"roles"})," whose messages can bypass moderation. It does not support custom roles."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Moderate accounts created in the past (number in days):"})," This setting enables the app to moderate messages from accounts created within a specific number of days.  For example, if you set a 30-day period, the app will moderate the message if the sender's account was created within the last 30 days. Messages from accounts created prior to this timeframe will bypass moderation."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"OpenAI API Key:"}),"  Paste the ",(0,i.jsx)(s.a,{href:"./#how-to-get-an-api-key",children:"Open AI API key"})," you copied earlier."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Moderation Categories:"})," Select the types of inappropriate content you want the app to moderate. Natural language processing techniques are used to detect all types of inappropriate content such as profanity, toxicity, etc. ","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Toxicity:"})," Any message that is harsh, disrespectful, negative, malicious, harmful, or hateful is toxic in nature. "]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Profanity:"})," Any message where the language is bad, abusive, foul, vulgar, or obscene is deemed as profanity type. "]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Financial Risk:"})," Scam messages sent by fraudsters and imposters tricking users into divulging sensitive personal information or financial details that can lead to identity theft, financial loss, or unauthorized access. "]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Flirtation:"})," Messages that are indecent, intimate, unwanted, and inappropriate can be deemed as a flirtatious content type. "]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Click ",(0,i.jsx)(s.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["The API key used when ",(0,i.jsx)(s.a,{href:"./#configuring-mod-assist-app",children:"configuring the app"})," is applied to the entire workspace. Users in your workspace don't need to get their own API keys. "]})}),"\n",(0,i.jsxs)(s.p,{children:["Now that you've successfully installed and configured your Mod Assist app, proceed to explore ",(0,i.jsx)(s.a,{href:"./using-mod-assist-app.md",title:"mention",children:"using-mod-assist-app.md"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>r});var i=t(96540);const n={},a=i.createContext(n);function o(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);