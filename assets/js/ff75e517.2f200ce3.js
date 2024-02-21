"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47777],{57657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=n(74848),s=n(28453);const a={},o="Queue Types (Routing Algorithm)",r={id:"use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide/queue-types-routing-algorithm",title:"Queue Types (Routing Algorithm)",description:"Rocket.Chat offers diverse types of queues with unique routing algorithms to efficiently manage and distribute incoming Omnichannel conversations in your workspace. They define the routing methods and direct conversations to the appropriate agents.&#x20;",source:"@site/docs/use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide/queue-types-routing-algorithm.md",sourceDirName:"use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide",slug:"/use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide/queue-types-routing-algorithm",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide/queue-types-routing-algorithm",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide/queue-types-routing-algorithm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Omnichannel Admin's Guide",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/omnichannel-admins-guide/"},next:{title:"OTR",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/otr"}},c={},h=[{value:"Type of Omnichannel Queues",id:"type-of-omnichannel-queues",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"queue-types-routing-algorithm",children:"Queue Types (Routing Algorithm)"}),"\n",(0,i.jsxs)(t.p,{children:["Rocket.Chat offers diverse types of queues with unique routing algorithms to efficiently manage and distribute incoming Omnichannel conversations in your workspace. They define the routing methods and direct conversations to the appropriate ",(0,i.jsx)(t.a,{href:"/docs-exp/docs/use-rocket.chat/omnichannel/agents",children:"agents"}),". "]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["You can manage omnichannel queues in the ",(0,i.jsx)(t.a,{href:"./#routing",title:"mention",children:"#routing"})," settings of your workspace."]})}),"\n",(0,i.jsx)(t.h2,{id:"type-of-omnichannel-queues",children:"Type of Omnichannel Queues"}),"\n",(0,i.jsx)(t.p,{children:"Here are various types of queues you can set for routing in your Omnichannel workspace:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Auto Selection"})}),"\n",(0,i.jsx)(t.p,{children:"In auto-selection, new incoming chats are directed to available agents with the lowest count. If multiple agents share the same count, the chat is assigned to the agent who is first in the order. "}),"\n",(0,i.jsx)(t.p,{children:"For example, when a new chat arrives, it's assigned to the available agent with the lowest count. The next chat goes to the next available agent with lowest count in the queue. Once all available agents have the same count, subsequent incoming chats are sequentially assigned to the same agents, starting with the agent who was first assigned a chat. This ensures an equitable distribution of workload and reduces wait times for customers."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Manual Selection"})}),"\n",(0,i.jsxs)(t.p,{children:["When manual selection is active, all agents have a ",(0,i.jsx)(t.strong,{children:"Queued Chats"})," section where new incoming chats are displayed. When the agent clicks on a chat, they can preview the chat, see the messages sent, and decide whether to take up the chat or not. If the chat is taken, it is removed from ",(0,i.jsx)(t.strong,{children:"Queued Chats"})," for all agents."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Department-specific chats is displayed in ",(0,i.jsx)(t.strong,{children:"Queued Chats"})," only for agents in that department. "]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"External Service"})}),"\n",(0,i.jsxs)(t.p,{children:["To integrate your custom agent routing rule into Live Chat, use an ",(0,i.jsx)(t.strong,{children:"External Service"}),". Once it's configured as the Live Chat ",(0,i.jsx)(t.a,{href:"./#routing",children:"routing method"}),", update the ",(0,i.jsx)(t.strong,{children:"External Queue Service URL"})," and ",(0,i.jsx)(t.strong,{children:"Secret Token"})," in the ",(0,i.jsx)(t.a,{href:"./#routing",title:"mention",children:"#routing"})," settings."]}),"\n",(0,i.jsxs)(t.p,{children:["Rocket.Chat sends a ",(0,i.jsx)(t.code,{children:"GET"})," request to the ",(0,i.jsx)(t.code,{children:"External Queue Service URL"})," and the ",(0,i.jsx)(t.code,{children:"Secret Token"})," is sent as a header ",(0,i.jsx)(t.code,{children:"X-RocketChat-Secret-Token"})," for you to validate if the request came from the Rocket.Chat.  If Rocket.Chat receives a response status other than ",(0,i.jsx)(t.code,{children:"200"}),", it will retry up to 10 times until a valid response is received."]}),"\n",(0,i.jsx)(t.p,{children:"After submitting the GET request, Live Chat expects a JSON response in the following format:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "_id": "CbbQkRAifP6HtDLSr",\n    "username": "valid.username"\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Once the valid response is received in the above format, Live Chat verifies that the provided username represents a valid Live Chat ",(0,i.jsx)(t.a,{href:"/docs-exp/docs/use-rocket.chat/omnichannel/agents",children:"agent"}),", proceeding with the standard process flow."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Load Balancing"})}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/Premium.svg",alt:""}),(0,i.jsx)("figcaption",{})]}),"\n",(0,i.jsx)(t.p,{children:"Load balancing functions as an auto-assignment algorithm that takes into account both the agent's online status and the duration they have been actively engaged in chats. For example, if an agent briefly steps away and returns, the load-balancing algorithm will assign them more chats than a colleague who has been consistently active. This approach ensures a balanced distribution of chat workload among agents."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Load Rotation"})," "]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/Premium.svg",alt:""}),(0,i.jsx)("figcaption",{})]}),"\n",(0,i.jsxs)(t.p,{children:["Chats are assigned to available agents without considering their previous chat's history or the number of open rooms they have. Load rotation is a mix between the ",(0,i.jsx)(t.strong,{children:"Load Balancing"})," and ",(0,i.jsx)(t.strong,{children:"Auto Selection"})," queue type."]}),"\n",(0,i.jsx)(t.p,{children:"Workspace administrators can now leverage the various type of queues outlined to achieve dynamic load balancing, strategic auto-selection, and effective chat handling, tailoring the omnichannel experience to their specific organizational needs to enhance productivity."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);