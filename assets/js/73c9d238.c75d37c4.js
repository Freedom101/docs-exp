"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92878],{31379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(74848),r=n(28453);const o={},i="PagerDuty",a={id:"use-rocket.chat/workspace-administration/integrations/pagerduty",title:"PagerDuty",description:"PagerDuty is an alarm aggregation and dispatching service for system administrators and support teams. It collects the alerts from your monitoring tools, gives you an overall view of all of your monitoring alarms, and alerts an on-duty engineer if there's a problem.",source:"@site/docs/use-rocket.chat/workspace-administration/integrations/pagerduty.md",sourceDirName:"use-rocket.chat/workspace-administration/integrations",slug:"/use-rocket.chat/workspace-administration/integrations/pagerduty",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/pagerduty",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/integrations/pagerduty.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nixstats notification",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/nixstats-notification"},next:{title:"Prometheus",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/prometheus"}},c={},l=[{value:"<strong>Admin Settings</strong>",id:"admin-settings",level:3},{value:"PagerDuty",id:"pagerduty-1",level:3}];function d(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pagerduty",children:"PagerDuty"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://pagerduty.com",children:"PagerDuty"})," is an alarm aggregation and dispatching service for system administrators and support teams. It collects the alerts from your monitoring tools, gives you an overall view of all of your monitoring alarms, and alerts an on-duty engineer if there's a problem."]}),"\n",(0,s.jsx)(t.h3,{id:"admin-settings",children:(0,s.jsx)(t.strong,{children:"Admin Settings"})}),"\n",(0,s.jsxs)(t.p,{children:["Log in as an administrator and go to ",(0,s.jsx)(t.strong,{children:"Administration > Workspace > Integrations > New Integration > Incoming Webhook"})," and configure the following settings:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Enabled:"})," Enable this option to integrate the PagerDuty with Rocket.Chat."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Name (Optional):"})," Enter the preferred name for your PagerDuty connection."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Post to Channel:"})," Messages that are sent to the Incoming Webhook will be posted here. Start with ",(0,s.jsx)(t.code,{children:"@"})," for the user or ",(0,s.jsx)(t.code,{children:"#"})," for the channel. Eg: ",(0,s.jsx)(t.code,{children:"@john"})," or ",(0,s.jsx)(t.code,{children:"#general"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Post as:"})," Choose the username that this integration will post as. The user must already exist."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Alias (optional):"})," Choose the alias that will appear before the username in messages."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Avatar URL (optional):"})," An option to override the avatar used to post from this integration. Should be a URL of an image."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Emoji (optional):"})," Use an emoji as an avatar. Example: ",(0,s.jsx)(t.code,{children:":ghost:"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Script Enabled:"})," Enable this option to add the script."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Script:"})," Paste contents of ",(0,s.jsx)(t.a,{href:"https://github.com/kajisaap/rocketchat-pagerduty/blob/master/rocketchat_pagerduty_incoming.js",children:"rocketchat_pagerduty_incoming.js"})," into the ",(0,s.jsx)(t.em,{children:"Script"})," field."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Webhook URL:"})," Copy the ",(0,s.jsx)(t.strong,{children:"Webhook URL"})," as soon as you save the integration and proceed to the configuration of generic webhook integration in PagerDuty."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Token:"})," An auto-generated token."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Example Payload:"})," Customize the payload template."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Save."})]}),"\n",(0,s.jsx)(t.h3,{id:"pagerduty-1",children:"PagerDuty"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To configure your webhook:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In PagerDuty, navigate to the ",(0,s.jsx)(t.strong,{children:"Service Extensions > New Extension."})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"New Extension",src:n(93840).A+"",width:"1775",height:"485"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["For ",(0,s.jsx)(t.strong,{children:"Extension Type"})," select ",(0,s.jsx)(t.strong,{children:"Generic Webhooks(v3)"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Enter a unique Extension Name e.g. rocketchatpage and choose the service."}),"\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.strong,{children:"Service"})," you wish to add."]}),"\n",(0,s.jsx)(t.li,{children:"Add the Webhook URL."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["More details:",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://support.pagerduty.com/hc/en-us/articles/202830320-Webhooks",children:"PagerDuty WebHook Docs"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},93840:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pagerdutyConfiguration-a40fd46d97cf9327e07faec110277744.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);