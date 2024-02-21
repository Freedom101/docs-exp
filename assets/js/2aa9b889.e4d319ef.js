"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60281],{27635:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=i(74848),r=i(28453);const s={description:"Control the rate of requests sent or received by your workspace to prevent cyber attacks and scraping."},o="Rate Limiter",l={id:"use-rocket.chat/workspace-administration/settings/rate-limiter",title:"Rate Limiter",description:"Control the rate of requests sent or received by your workspace to prevent cyber attacks and scraping.",source:"@site/docs/use-rocket.chat/workspace-administration/settings/rate-limiter.md",sourceDirName:"use-rocket.chat/workspace-administration/settings",slug:"/use-rocket.chat/workspace-administration/settings/rate-limiter",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/rate-limiter",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-rocket.chat/workspace-administration/settings/rate-limiter.md",tags:[],version:"current",frontMatter:{description:"Control the rate of requests sent or received by your workspace to prevent cyber attacks and scraping."},sidebar:"tutorialSidebar",previous:{title:"Push",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/push"},next:{title:"Retention Policy",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/retention-policy"}},a={},c=[{value:"API Rate Limiter <a></a>",id:"api-rate-limiter-",level:2},{value:"DDP Rate Limiter <a></a>",id:"ddp-rate-limiter-",level:2},{value:"Feature Limiting",id:"feature-limiting",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"rate-limiter",children:"Rate Limiter"}),"\n",(0,n.jsx)(t.p,{children:"Rocket.Chat Rate Limiter is used to control the rate of requests sent or received by your Rocket.Chat workspace. It can be used to prevent cyber attacks like DoS (Denial of Service) attacks and limit web scraping."}),"\n",(0,n.jsxs)(t.p,{children:["To access this setting, go to ",(0,n.jsx)(t.strong,{children:"Administration"})," > ",(0,n.jsx)(t.strong,{children:"Workspace"})," > ",(0,n.jsx)(t.strong,{children:"Settings"})," > ",(0,n.jsx)(t.strong,{children:"Rate Limiter"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"api-rate-limiter-",children:["API Rate Limiter ",(0,n.jsx)("a",{href:"#9f0duy7a3no",id:"9f0duy7a3no"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Enable Rate Limiter"}),": This lets you enable API rate limiter."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Enable Rate Limiter in development"}),": When Rate Limiter is set to",(0,n.jsx)(t.code,{children:"True"}),", the rate limiter is enabled for development. It limits the number of calls to the endpoints in the development environment."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Default number calls to the rate limiter"}),": Number of default calls for each endpoint of the REST API, allowed within the time range defined below."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Default time limit for the rate limiter (in ms)"}),": Takes time in seconds to limit the number of calls at each endpoint of the REST API (in ms)."]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"ddp-rate-limiter-",children:["DDP Rate Limiter ",(0,n.jsx)("a",{href:"#ikikwb84ti",id:"ikikwb84ti"})]}),"\n",(0,n.jsx)(t.p,{children:"Customize rate-limiting for methods and subscriptions to avoid a high load of WebSocket(A communication protocol that allows for simultaneous data transmission in one channel) messages on your workspace."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by IP: enabled"}),": Enables limit by IP.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by IP: requests allowed"}),": This lets you set the number of requests allowed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by IP: interval time"}),": Takes in the interval for limiting IP."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by User:"})," This lets you enable DDP rate-limiting by user","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by User: requests allowed"}),": The number of requests allowed"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by User: interval time"}),": The time interval in seconds for limiting the user"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by User per Method"}),": When set to true, it enables limiting user's rate per method","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by User per Method: requests allowed"}),": The number of requests allowed"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by User per Method: interval time"}),": The interval for limiting user per method"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by Connection per Method"}),": Lets you set connection limit by method","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by Connection per Method: requests allowed"}),": The number of request requests allowed"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Limit by Connection per Method: interval time"}),": Interval for limiting connection per method"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"feature-limiting",children:"Feature Limiting"}),"\n",(0,n.jsx)(t.p,{children:"Setting this up gets your sever full protection from email and username enumeration by brute force attack."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Default number calls to the rate limiter for registering a user"}),": Number of default calls for user registering endpoints (REST and real-time API's), allowed within the time range defined in the API Rate Limiter section."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);