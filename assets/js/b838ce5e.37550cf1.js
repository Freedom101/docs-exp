"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1026],{95544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(74848),i=n(28453);const o={description:"Atlassian Bamboo Integration"},s="Bamboo Integration",r={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian-apps/bamboo-app",title:"Bamboo Integration",description:"Atlassian Bamboo Integration",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian-apps/bamboo-app.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian-apps",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian-apps/bamboo-app",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian-apps/bamboo-app",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian-apps/bamboo-app.md",tags:[],version:"current",frontMatter:{description:"Atlassian Bamboo Integration"},sidebar:"tutorialSidebar",previous:{title:"Atlassian Apps",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian-apps/"},next:{title:"Bitbucket Server",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/atlassian-apps/bitbucket-server"}},c={},l=[{value:"Install Bamboo Integration App",id:"install-bamboo-integration-app",level:2},{value:"Configure Bamboo Integration App",id:"configure-bamboo-integration-app",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"bamboo-integration",children:"Bamboo Integration"}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:"/Premium.svg",alt:""}),(0,a.jsx)("figcaption",{})]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["This app can also work in a fully air-gapped environment. Follow the ",(0,a.jsx)(t.a,{href:"/docs-exp/docs/setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-app-installation",title:"mention",children:"air-gapped-app-installation.md"})," guide and continue with the configuration instructions below."]})}),"\n",(0,a.jsx)(t.h2,{id:"install-bamboo-integration-app",children:"Install Bamboo Integration App"}),"\n",(0,a.jsx)(t.p,{children:"To install the Bamboo Integration App,"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Navigate to ",(0,a.jsx)(t.strong,{children:"Administration > Apps > Marketplace."})]}),"\n",(0,a.jsxs)(t.li,{children:["Search for the ",(0,a.jsx)(t.strong,{children:"Bamboo Integration"})," app."]}),"\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.strong,{children:"Install."})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Agree"})," to the permissions to confirm the installation."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configure-bamboo-integration-app",children:"Configure Bamboo Integration App"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Confirm that you have the  ",(0,a.jsx)(t.a,{href:"https://marketplace.atlassian.com/apps/1220022/rocket-chat-notifications-for-bamboo?tab=overview&hosting=server",children:"Rocket.Chat Notifications for Bamboo"})," add-on installed on your Bamboo server."]})}),"\n",(0,a.jsx)(t.p,{children:"To configure the Bamboo Integration app,"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Navigate to a ",(0,a.jsx)(t.a,{href:"../../../../use-rocket.chat/user-guides/rooms/channels/",children:"channel"})," or private ",(0,a.jsx)(t.a,{href:"/docs-exp/docs/use-rocket.chat/workspace-administration/rooms",children:"room "}),"and run the slash command ",(0,a.jsx)(t.code,{children:"/bamboo install"}),". "]}),"\n",(0,a.jsxs)(t.li,{children:["You will receive an ephemeral message with instructions on how to configure your Bamboo, as follows:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["On your Bamboo, install the ",(0,a.jsx)(t.a,{href:"https://marketplace.atlassian.com/apps/1220022/rocket-chat-notifications-for-bamboo",children:"Rocket.Chat Notifications for Bamboo"})," add-on."]}),"\n",(0,a.jsx)(t.li,{children:"Add notification on a Build Plan or Deployment Environment."}),"\n",(0,a.jsx)(t.li,{children:'Select the "Rocket.Chat" recipient type.'}),"\n",(0,a.jsxs)(t.li,{children:['On the "Rocket.Chat URL" field, insert the URL given in the ephemeral message (e.g., ',(0,a.jsx)(t.code,{children:"https://example.com:3000/api/apps/private/6a7b5a37-b9bb-4d49-ae38-c6ebcb3fe479/ejDjQ9Kyh2wBgrSwt/webhook"}),")"]}),"\n",(0,a.jsx)(t.li,{children:'On the "Rocket.Chat channel" field, type the name of the channel or private room you want to be notified of the events.'}),"\n",(0,a.jsx)(t.li,{children:"Now, your Rocket.Chat workspace starts receiving the configured notifications."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The Bamboo Integration doesn't support every Build/Deployment event. Rocket.Chat won't send any notifications in response to unsupported events. The supported events include the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Plans:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"All Builds Completed"}),"\n",(0,a.jsx)(t.li,{children:"Failed Builds and First Successful"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Jobs:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"All Jobs Completed"}),"\n",(0,a.jsx)(t.li,{children:"Failed Jobs and First Successful"}),"\n",(0,a.jsx)(t.li,{children:"Job Error"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Deployments:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Deployment Started and Finished"}),"\n",(0,a.jsx)(t.li,{children:"Deployment Failed"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);