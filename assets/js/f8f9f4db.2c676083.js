"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82790],{25140:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=n(74848),a=n(28453);const s={},r="MongoDB Backup and Restore",i={id:"setup-and-configure/environment-configuration/mongodb-configuration/mongodb-backup-and-restore",title:"MongoDB Backup and Restore",description:"Maintaining backups of your workspace data is a very important practice. These data backups can act as a safety measure where data can be recovered or restored in case of an emergency.",source:"@site/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-backup-and-restore.md",sourceDirName:"setup-and-configure/environment-configuration/mongodb-configuration",slug:"/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-backup-and-restore",permalink:"/docs-exp/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-backup-and-restore",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-backup-and-restore.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrate from mmap to WiredTiger Storage Engine",permalink:"/docs-exp/docs/setup-and-configure/environment-configuration/mongodb-configuration/migrate-from-mmap-to-wiredtiger-storage-engine"},next:{title:"MongoDB URI Authentication",permalink:"/docs-exp/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-uri-authentication"}},c={},d=[{value:"MongoDB backup with <code>mongodump</code>",id:"mongodb-backup-with-mongodump",level:2},{value:"Backup a MongoDB standalone instance",id:"backup-a-mongodb-standalone-instance",level:3},{value:"Backup a remote MongoDB instance",id:"backup-a-remote-mongodb-instance",level:3},{value:"MongoDB Restore with <code>mongorestore</code>",id:"mongodb-restore-with-mongorestore",level:2}];function m(o){const e={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...o.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"mongodb-backup-and-restore",children:"MongoDB Backup and Restore"}),"\n",(0,t.jsx)(e.p,{children:"Maintaining backups of your workspace data is a very important practice. These data backups can act as a safety measure where data can be recovered or restored in case of an emergency."}),"\n",(0,t.jsx)(e.p,{children:"Rocket.Chat uses MongoDB as its database. With MongoDB, you have multiple built-in backup options depending on the deployment method."}),"\n",(0,t.jsx)(e.p,{children:"In this guide, we are going to focus on how to:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs-exp/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-backup-and-restore#mongodb-backup-with-mongodump",children:"Perform a backup of your Rocket.Chat workspace data"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs-exp/docs/setup-and-configure/environment-configuration/mongodb-configuration/mongodb-backup-and-restore#mongodb-restore-with-mongorestore",children:"Restore your Rocket.Chat workspace data"})}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"mongodb-backup-with-mongodump",children:["MongoDB backup with ",(0,t.jsx)(e.code,{children:"mongodump"})]}),"\n",(0,t.jsxs)(e.p,{children:["We are going to see how to backup our MongoDB database, using ",(0,t.jsx)(e.a,{href:"https://www.mongodb.com/docs/database-tools/mongodump/",children:(0,t.jsx)(e.code,{children:"mongodump"})}),". ",(0,t.jsx)(e.code,{children:"mongodump"})," allows you to create backups from standalone, replica sets or sharded cluster deployments."]}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["From MongoDB server 4.4, you need to install the ",(0,t.jsx)(e.code,{children:"mongodump"})," utility separately.",(0,t.jsx)(e.br,{}),"\n","Read more at the MongoDB Database tools docs ",(0,t.jsx)(e.a,{href:"https://www.mongodb.com/docs/database-tools/mongodump/",children:"https://www.mongodb.com/docs/database-tools/mongodump"})]})}),"\n",(0,t.jsx)(e.h3,{id:"backup-a-mongodb-standalone-instance",children:"Backup a MongoDB standalone instance"}),"\n",(0,t.jsx)(e.p,{children:"The command to backup a simple MongoDB standalone instance is of the format:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"mongodump <options> <connection-string>\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Running ",(0,t.jsx)(e.code,{children:"mongodump"})," alone from the command line without any options will assume the database is located on ",(0,t.jsx)(e.code,{children:"localhost"})," at port ",(0,t.jsx)(e.code,{children:"27017"})," with no authentication."]}),"\n",(0,t.jsxs)(e.li,{children:["When the backup is completed, a ",(0,t.jsx)(e.code,{children:"/dump"})," directory is created."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"backup-a-remote-mongodb-instance",children:"Backup a remote MongoDB instance"}),"\n",(0,t.jsx)(e.p,{children:"Backing up a remote MongoDB instance can be done with the following command:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'mongodump --uri="mongodb://<host URL/IP>:<Port>" [additional options]\n'})}),"\n",(0,t.jsxs)(e.p,{children:["See more options and how to use ",(0,t.jsx)(e.code,{children:"mongodump"})," on ",(0,t.jsx)(e.a,{href:"https://www.mongodb.com/docs/database-tools/mongodump/",children:"MongoDB Database tools docs"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"You should see something like the image below when the command is running:"}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)("img",{src:"/img/image (1068).png",alt:""}),(0,t.jsx)("figcaption",{children:(0,t.jsx)("p",{children:"mongodump command executing"})})]}),"\n",(0,t.jsxs)(e.h2,{id:"mongodb-restore-with-mongorestore",children:["MongoDB Restore with ",(0,t.jsx)(e.code,{children:"mongorestore"})]}),"\n",(0,t.jsxs)(e.p,{children:["After backing up your instance, you may need to restore the data at some time. That can be done using ",(0,t.jsx)(e.a,{href:"https://www.mongodb.com/docs/database-tools/mongorestore/",children:(0,t.jsx)(e.code,{children:"mongorestore"})}),". ",(0,t.jsx)(e.code,{children:"mongorestore"})," allows you to load data from either a binary database dump created by ",(0,t.jsx)(e.a,{href:"https://www.mongodb.com/docs/database-tools/mongodump/#mongodb-binary-bin.mongodump",children:(0,t.jsx)(e.code,{children:"mongodump"})})," or the standard input into the MongoDB instance."]}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)(e.p,{children:"Make sure you first drop any existing Rocket.Chat schema in your database with the same name as the one you are restoring."})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["The syntax for the ",(0,t.jsx)(e.code,{children:"mongorestore"})," command is as follows:"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"mongorestore <options> <connection-string> <directory or file to restore>\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["The simple command below restores from a ",(0,t.jsx)(e.code,{children:"dump"})," directory to a local ",(0,t.jsx)(e.a,{href:"https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod",children:(0,t.jsx)(e.code,{children:"mongod"})})," instance running on port ",(0,t.jsx)(e.code,{children:"27017"}),":"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"mongorestore  dump/\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"You can restore to a remote instance by running the following command:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'mongorestore --uri="mongodb://<host URL/IP>:<Port>" /dump\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["You have the ability to also restore a specific collection or collections from the ",(0,t.jsx)(e.code,{children:"dump/"})," directory. ",(0,t.jsx)(e.a,{href:"https://www.mongodb.com/docs/database-tools/mongorestore/",children:"See MongoDB docs "})]})}),"\n",(0,t.jsx)(e.p,{children:"In a successful command execution, you should see a screen like the one below:"}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)("img",{src:"/img/image (50).png",alt:""}),(0,t.jsx)("figcaption",{children:(0,t.jsx)("p",{children:"mongorestore command executed"})})]})]})}function l(o={}){const{wrapper:e}={...(0,a.R)(),...o.components};return e?(0,t.jsx)(e,{...o,children:(0,t.jsx)(m,{...o})}):m(o)}},28453:(o,e,n)=>{n.d(e,{R:()=>r,x:()=>i});var t=n(96540);const a={},s=t.createContext(a);function r(o){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function i(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(a):o.components||a:r(o.components),t.createElement(s.Provider,{value:e},o.children)}}}]);