"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79232],{61150:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(74848),r=t(28453);const i={},c="User Status",o={id:"use-rocket.chat/workspace-administration/user-status",title:"User Status",description:"The Rocket.Chat User Status setting lets you manage users' presence and status in your workspace.",source:"@site/docs/use-rocket.chat/workspace-administration/user-status.md",sourceDirName:"use-rocket.chat/workspace-administration",slug:"/use-rocket.chat/workspace-administration/user-status",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/user-status",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/user-status.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Third-party Login",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/third-party-login"},next:{title:"Users",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/users/"}},a={},l=[{value:"Presence Service",id:"presence-service",level:2},{value:"Custom Status",id:"custom-status",level:2},{value:"Use Custom Status",id:"use-custom-status",level:3},{value:"Delete/Edit Custom Status",id:"deleteedit-custom-status",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"user-status",children:"User Status"}),"\n",(0,n.jsx)(s.p,{children:"The Rocket.Chat User Status setting lets you manage users' presence and status in your workspace."}),"\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"Presence"})," is used to determine the ",(0,n.jsx)(s.strong,{children:"Status"})," of a user in the workspace."]}),"\n",(0,n.jsx)(s.p,{children:"By default, Rocket.Chat has the following Presence presets."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Online"}),": Used to indicate a user is online and available."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Away"}),": Indicates a user is idle and away from the workspace. See how to configure the Idle time limit here ",(0,n.jsx)(s.a,{href:"settings/accounts/#default-user-preferences",children:"Default User Preferences"})," or as a user in ",(0,n.jsx)(s.a,{href:"/docs-exp/docs/use-rocket.chat/user-guides/user-panel/account#user-presence",children:"User Presence"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Busy"}),": This shows a user is busy and unavailable on the workspace."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Offline"}),": Used to indicate a user is offline and not connected."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To access this menu,"}),"\n",(0,n.jsxs)(s.p,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"Administration"})," > ",(0,n.jsx)(s.strong,{children:"Workspace"})," > ",(0,n.jsx)(s.strong,{children:"User Status."})]}),"\n",(0,n.jsx)(s.h2,{id:"presence-service",children:"Presence Service"}),"\n",(0,n.jsx)(s.p,{children:"With the Presence service enabled, users can see the status of other users in the workspace."}),"\n",(0,n.jsx)(s.p,{children:"To enable the Presence service,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"Administration"})," > ",(0,n.jsx)(s.strong,{children:"Workspace"})," > ",(0,n.jsx)(s.strong,{children:"User Status"})," > ",(0,n.jsx)(s.strong,{children:"Presence service."})," "]}),"\n",(0,n.jsxs)(s.li,{children:["Click the ",(0,n.jsx)(s.strong,{children:"Presence Service"})," button."]}),"\n",(0,n.jsxs)(s.li,{children:["Toggle the ",(0,n.jsx)(s.strong,{children:"Service status"})," to on."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"Workspaces on the community plan have a maximum limit of 200 concurrent connections. While you can have more connections active, users' statuses will no longer be visible, and the presence service gets disabled once you reach this cap. However, this limitation does not impact their capacity to send and receive messages."})}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.p,{children:"When the Presence service gets disabled automatically due to the cap on concurrent connections,"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Users see the status indicator for all users, including themselves as ",(0,n.jsx)(s.code,{children:"disabled"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"The workspace administrator has to manually reactivate the Presence service when the number of connections drops below the connection limit of 200. "}),"\n",(0,n.jsx)(s.li,{children:"Workspace users and administrator(s) are notified that Presence is inactive because the workspace has exceeded the connection limit."}),"\n"]})]}),"\n",(0,n.jsx)(s.h2,{id:"custom-status",children:"Custom Status"}),"\n",(0,n.jsx)(s.p,{children:"To create a custom status,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"Administration"})," > ",(0,n.jsx)(s.strong,{children:"Workspace"})," > ",(0,n.jsx)(s.strong,{children:"User Status."})]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"New custom status."})," "]}),"\n",(0,n.jsxs)(s.li,{children:["Enter a ",(0,n.jsx)(s.strong,{children:"name"})," for your custom status."]}),"\n",(0,n.jsxs)(s.li,{children:["Select a ",(0,n.jsx)(s.strong,{children:"presence"})," to tie with your custom status."]}),"\n",(0,n.jsxs)(s.li,{children:["Hit ",(0,n.jsx)(s.strong,{children:"Save."})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"use-custom-status",children:"Use Custom Status"}),"\n",(0,n.jsx)(s.p,{children:"The custom status and default status presets will be visible to all users in your workspace."}),"\n",(0,n.jsx)(s.p,{children:"To set a custom status, "}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Click on your avatar by the top left of your workspace."}),"\n",(0,n.jsx)(s.li,{children:"From the dropdown, select the custom status from the list of statuses."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"deleteedit-custom-status",children:"Delete/Edit Custom Status"}),"\n",(0,n.jsx)(s.p,{children:"To delete or edit a custom status,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"Administration"})," > ",(0,n.jsx)(s.strong,{children:"Workspace"})," > ",(0,n.jsx)(s.strong,{children:"User Status"})]}),"\n",(0,n.jsx)(s.li,{children:"Search and click the custom status you want to edit or delete."}),"\n",(0,n.jsxs)(s.li,{children:["Update the details and click ",(0,n.jsx)(s.strong,{children:"Save"})," to edit the status."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Delete"})," to delete the status."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var n=t(96540);const r={},i=n.createContext(r);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);