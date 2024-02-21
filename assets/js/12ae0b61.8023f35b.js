"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15989],{73372:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=e(74848),r=e(28453);const i={},s="MongoDB URI Authentication",c={id:"setup-and-configure/environment-configuration/mongodb-configuration/mongodb-uri-authentication",title:"MongoDB URI Authentication",description:"The connection between Rocket.Chat and MongoDB instance is achieved using a MongoDB Connection String URI. MongoDB authentication is done with the username and password.",source:"@site/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-uri-authentication.md",sourceDirName:"setup-and-configure/environment-configuration/mongodb-configuration",slug:"/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-uri-authentication",permalink:"/docs-exp/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-uri-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-uri-authentication.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MongoDB Backup and Restore",permalink:"/docs-exp/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-backup-and-restore"},next:{title:"Supported MongoDB Versions",permalink:"/docs-exp/docs/setup-and-configure/environment-configuration/mongodb-configuration/supported-mongodb-versions"}},a={},d=[];function u(n){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"mongodb-uri-authentication",children:"MongoDB URI Authentication"}),"\n",(0,t.jsxs)(o.p,{children:["The connection between Rocket.Chat and MongoDB instance is achieved using a ",(0,t.jsx)(o.a,{href:"https://www.mongodb.com/docs/manual/reference/connection-string/",children:"MongoDB Connection String URI"}),". MongoDB authentication is done with the username and password."]}),"\n",(0,t.jsxs)(o.p,{children:["Adding the following snippet to your ",(0,t.jsx)(o.code,{children:".env"})," file does the trick:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"MONGO_URL=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\n"})}),"\n",(0,t.jsxs)(o.p,{children:["In your container, pass ",(0,t.jsx)(o.code,{children:"MONGO_URL"})," and ",(0,t.jsx)(o.code,{children:"MONGO_OPLOG_URL"})," with the right values for connection."]}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["Depending on the password you're using, you might need to escape some characters. Refer to the MongoDB documentation for more information  ",(0,t.jsx)(o.a,{href:"https://docs.mongodb.com/manual/reference/connection-string/",children:"https://docs.mongodb.com/manual/reference/connection-string/"})]})}),"\n",(0,t.jsxs)(o.p,{children:["Your ",(0,t.jsx)(o.code,{children:"docker-compose.yml"})," file should look like this:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'environment:\n      - "MONGO_URL=mongodb://rctestuser:mymongopassword@mongo:27017/rocketchat?authSource=admin"\n      - "MONGO_OPLOG_URL=mongodb://rctestuser:mymongopassword@mongo:27017/local?authSource=admin"\n'})}),"\n",(0,t.jsxs)(o.p,{children:["If you are using ",(0,t.jsx)(o.code,{children:"docker run"}),", it should look like this:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'docker run \\                                                                                                                                                                                                                   -e "MONGO_URL=mongodb://rctestuser:mymongopassword@mongo:27017/rocketchat?authSource=admin" \\\n-e "MONGO_OPLOG_URL=mongodb://rctestuser:mymongopassword@mongo:27017/local?authSource=admin" \\\nrocketchat/rocket.chat:X.X.X\n'})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"MongoDB authentication role"})}),"\n",(0,t.jsxs)(o.p,{children:["If you are using MongoDB authentication, you might also need to add the ",(0,t.jsx)(o.a,{href:"https://www.mongodb.com/docs/manual/reference/built-in-roles/#mongodb-authrole-clusterMonitor",children:(0,t.jsx)(o.code,{children:"clusterMonitor"})})," role to your user. The ",(0,t.jsx)(o.code,{children:"clusterMonitor"})," role gives users read-only access to MongoDB monitoring tools. This is a requirement for your instance to be able to use ",(0,t.jsx)(o.a,{href:"https://www.mongodb.com/docs/manual/changeStreams/",children:"change streams"}),". Change streams allow your workspace to react to real-time changes in data"]}),"\n",(0,t.jsx)(o.p,{children:"Execute the following command, replacing the users with that selected for your users:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'admin = db.getSiblingDB("admin");\nadmin.grantRolesToUser(\'OPLOGUSER\',[{ role: "clusterMonitor", db: "admin" }])\nadmin.grantRolesToUser(\'ROCKETUSER\',[{ role: "clusterMonitor", db: "admin" }])\n'})})]})}function g(n={}){const{wrapper:o}={...(0,r.R)(),...n.components};return o?(0,t.jsx)(o,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},28453:(n,o,e)=>{e.d(o,{R:()=>s,x:()=>c});var t=e(96540);const r={},i=t.createContext(r);function s(n){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function c(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(i.Provider,{value:o},n.children)}}}]);