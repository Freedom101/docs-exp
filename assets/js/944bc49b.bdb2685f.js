"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29262],{1320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(74848),s=t(28453);const r={description:"Your conversational search engine within Rocket.Chat"},a="ChatGPT App",c={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/chatgpt-app/README",title:"ChatGPT App",description:"Your conversational search engine within Rocket.Chat",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/chatgpt-app/README.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/chatgpt-app",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/chatgpt-app/",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/chatgpt-app/",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/chatgpt-app/README.md",tags:[],version:"current",frontMatter:{description:"Your conversational search engine within Rocket.Chat"},sidebar:"tutorialSidebar",previous:{title:"Jira Server",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian-apps/jira-server"},next:{title:"Using the ChatGPT App",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/chatgpt-app/using-the-chatgpt-app"}},o={},l=[{value:"Install the ChatGPT App",id:"install-the-chatgpt-app",level:2},{value:"Get an OpenAI API Key",id:"get-an-openai-api-key",level:3},{value:"Configuring the ChatGPT App ",id:"configuring-the-chatgpt-app-",level:3}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"chatgpt-app",children:"ChatGPT App"}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/Premium.svg",alt:""}),(0,i.jsx)("figcaption",{})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The ChatGPT app is currently in Beta, and some features may not function as expected."}),"\n",(0,i.jsxs)(n.li,{children:["ChatGPT app will only be available to workspaces running ",(0,i.jsx)(n.strong,{children:"version 6.3.0 and higher"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"The Rocket.Chat ChatGPT integration is an AI chatbot that enhances text-based communication within organizations. It supports content creation, coding assistance, and summarizes complex reports. The app also offers real-time multilingual translation, adding to its business utility."}),"\n",(0,i.jsx)(n.p,{children:"Key capabilities include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Threaded Interactions:"})," Manages and responds to inquiries within conversation threads."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Proofreading:"})," Corrects spelling, punctuation, and grammar in user messages."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Summarization:"})," Creates brief overviews of extensive documents."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tone Customization:"})," Adjusts communication tone to suit formal or informal contexts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Conversation Indexing:"})," Keeps track of threaded discussions for contextually relevant responses."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The current ChatGPT app version does not support summarizing large threads or conversations, but future updates will include this feature. However, ChatGPT can currently summarize extensive content such as articles, news, and novels."})}),"\n",(0,i.jsx)(n.h2,{id:"install-the-chatgpt-app",children:"Install the ChatGPT App"}),"\n",(0,i.jsxs)(n.p,{children:["To install the ",(0,i.jsx)(n.strong,{children:"ChatGPT"})," app,"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Administration > Apps > Marketplace"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Search for the ",(0,i.jsx)(n.strong,{children:"ChatGPT"})," app and click on it."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Install"})," and accept the needed permissions to install. "]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To update the app, "}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Administration"})," > ",(0,i.jsx)(n.strong,{children:"Marketplace"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Search for the ",(0,i.jsx)(n.strong,{children:"ChatGPT"})," app and click on the item."]}),"\n",(0,i.jsxs)(n.li,{children:["You will find the ",(0,i.jsx)(n.strong,{children:"Update"})," button right below the app name and description."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.strong,{children:"Update"})," button and click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),". "]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"get-an-openai-api-key",children:"Get an OpenAI API Key"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"ChatGPT app"})," requires ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/account/api-keys",children:"API keys"})," to authenticate your OpenAI account on Rocket.Chat and make requests."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Your OpenAI account must have active billing with credits. For a more detailed guide on billing, please refer to ",(0,i.jsx)(n.a,{href:"https://help.openai.com/en/articles/8264644-what-is-prepaid-billing",children:"OpenAI's prepaid billing"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["To ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/account/api-keys",children:"get your OpenAI API key"}),", "]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Log into"})," your",(0,i.jsx)(n.a,{href:"https://platform.openai.com/",children:" OpenAI account"})," and click on your ",(0,i.jsx)(n.strong,{children:"profile icon"})," at the top-right corner of the screen."]}),"\n",(0,i.jsxs)(n.li,{children:["From the profile dropdown, select ",(0,i.jsx)(n.strong,{children:"View API Keys"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If you don't have any API keys, click ",(0,i.jsx)(n.strong,{children:"+ Create new secret key"})," button to create a new API key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Copy the API key"})," to your clipboard. You'll need it for configuring the app in your workspace."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configuring-the-chatgpt-app-",children:"Configuring the ChatGPT App "}),"\n",(0,i.jsxs)(n.p,{children:["To configure the ",(0,i.jsx)(n.strong,{children:"ChatGPT App"})," after installing it,"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On the ",(0,i.jsx)(n.strong,{children:"ChatGPT App Info"})," screen, navigate to ",(0,i.jsx)(n.strong,{children:"Settings."})]}),"\n",(0,i.jsxs)(n.li,{children:["Update the required fields:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OpenAI API Key:"}),"  Paste the ",(0,i.jsx)(n.a,{href:"./#how-to-get-an-api-key",children:"Open AI API key"})," you copied earlier."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Model"}),": Select the ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/models/overview",children:"OpenAI model "}),"to be used. ",(0,i.jsx)(n.strong,{children:"GPT-4"})," offers advanced reasoning capabilities, creative collaboration, and improved safety and alignment, but comes with higher usage costs. ",(0,i.jsx)(n.strong,{children:"GPT-3.5 Turbo"})," is the best choice for most use cases."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"We now support the GPT-4 model, giving you flexibility to choose between two AI models based on your business needs."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["The API key used when ",(0,i.jsx)(n.a,{href:"./#configuring-the-chatgpt-app",children:"configuring the app"})," is applied to the entire workspace. Users in your workspace don't need to get their own API keys. "]})}),"\n",(0,i.jsxs)(n.p,{children:["Now that you've successfully installed and configured your ",(0,i.jsx)(n.strong,{children:"ChatGPT"}),"  ",(0,i.jsx)(n.strong,{children:"app"}),", proceed to explore ",(0,i.jsx)(n.a,{href:"./using-chatgpt-app.md",title:"mention",children:"using-chatgpt-app.md"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);