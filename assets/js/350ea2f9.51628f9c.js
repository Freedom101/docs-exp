"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67528],{66082:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=s(74848),t=s(28453);const n={},i="Assign roles for users in federated rooms",a={id:"use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms",title:"Assign roles for users in federated rooms",description:"Room members can assign room roles for federated users within a federated room context. Roles in federated rooms are slightly different from the regular Rocket.Chat Roles for the Room Scope.",source:"@site/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms.md",sourceDirName:"use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-users-guide",slug:"/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/assign-roles-for-users-in-federated-rooms.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix User's Guide",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/"},next:{title:"Communicate with a federated user",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-users-guide/communicate-with-a-federated-user"}},d={},l=[{value:"IMPORTANT",id:"important",level:3}];function c(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"assign-roles-for-users-in-federated-rooms",children:"Assign roles for users in federated rooms"}),"\n",(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"../..//Premium.svg",alt:""}),(0,o.jsx)("figcaption",{})]}),"\n",(0,o.jsxs)(r.p,{children:["Room members can assign room roles for federated users within a federated room context. Roles in federated rooms are slightly different from the regular ",(0,o.jsx)(r.a,{href:"../../../../permissions/#default-roles",children:"Rocket.Chat Roles"})," for the ",(0,o.jsx)(r.a,{href:"../../../../permissions/#scope-of-roles",children:(0,o.jsx)(r.em,{children:"Room Scope"})}),"."]}),"\n",(0,o.jsx)(r.p,{children:"Federated rooms support three roles:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Owner"}),": Owns a room and fully controls it and its activities.",(0,o.jsx)(r.br,{}),"\n","They can invite users, assign new owners, promote/demote moderators, remove users from the room, and edit the room name and topics."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Moderator"}),": Moderators can manage user actions and details of the room.",(0,o.jsx)(r.br,{}),"\n","They can invite users, assign new moderators, remove users from the room, and edit the room name and topics."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"User"})," (default): Room users can send and perform message actions in the room. Users cannot perform any room management related task"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Matrix uses the concept of power levels to define room roles with the ",(0,o.jsx)(r.code,{children:"Owner"})," being the most powerful, followed by the ",(0,o.jsx)(r.code,{children:"Moderator"}),"and the ",(0,o.jsx)(r.code,{children:"User"}),"the least powerful."]}),"\n",(0,o.jsx)(r.h3,{id:"important",children:"IMPORTANT"}),"\n",(0,o.jsx)(r.admonition,{type:"danger",children:(0,o.jsxs)(r.p,{children:["Rocket.Chat global roles are not supported in federated rooms. It doesn't matter if they are ",(0,o.jsx)(r.a,{href:"../../../../permissions/#scope-of-roles",children:(0,o.jsx)(r.em,{children:"Room Scoped"})}),"."]})}),"\n",(0,o.jsxs)(r.admonition,{type:"danger",children:[(0,o.jsxs)(r.p,{children:["For rooms created using ",(0,o.jsx)(r.a,{href:"https://app.element.io/#/welcome",children:"Element"})," as a Matrix client, only Owners (admins) can assign room roles/permissions, and you need to change the ",(0,o.jsx)(r.strong,{children:"Change permissions"})," room setting to",(0,o.jsx)(r.code,{children:"Moderator"}),". Otherwise, Moderators using Rocket.Chat as their Matrix Client, cannot assign roles to other users."]}),(0,o.jsxs)(r.p,{children:["This can be done by navigating to ",(0,o.jsx)(r.strong,{children:"Room info"})," > ",(0,o.jsx)(r.strong,{children:"Room settings"})," > ",(0,o.jsx)(r.strong,{children:"Roles & Permission"})," on your Element client."]})]}),"\n",(0,o.jsxs)(r.admonition,{type:"warning",children:[(0,o.jsx)(r.p,{children:"Rooms that are created with Element as the client has a set of room permission possibilities."}),(0,o.jsx)(r.p,{children:"Changing the permissions for event-specific features can lead to unexpected behavior for users on Rocket.Chat as their Matrix client."})]}),"\n",(0,o.jsx)(r.p,{children:"The main rules for assigning roles in federated rooms are:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Only room owners (admin) can assign roles at the moment of the room creation."}),"\n",(0,o.jsx)(r.li,{children:"All the users added to federated rooms have a User role by default."}),"\n",(0,o.jsx)(r.li,{children:"Users with the same role cannot assign roles (promote/demote) between them."}),"\n",(0,o.jsx)(r.li,{children:"Users with a specific role cannot demote other users from the room with the same role."}),"\n",(0,o.jsx)(r.li,{children:"Users can only demote and promote users in the layer again right below thier roles."}),"\n",(0,o.jsx)(r.li,{children:"Whenever a user wants to promote a user to a role as powerful as their own, undoing that change will not be possible (a confirmation modal will double-check the operation)."}),"\n",(0,o.jsx)(r.li,{children:"When a user chooses to demote themselves, they won't be able to regain their previous privileges. The only possibility is for a user with the necessary permission to give back the same role for that user(a confirmation modal will double-check the operation)."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"For any other applicable rule, they are the same as regular Rocket.Chat rooms (e.g., Room owners cannot demote themselves if they are the last room owner)."})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var o=s(96540);const t={},n=o.createContext(t);function i(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);