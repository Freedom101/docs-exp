"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8382],{42926:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(85893),i=a(11151);const o={},r="Database Migration",s={id:"setup-and-configure/advanced-workspace-management/database-migration",title:"Database Migration",description:"Database Migration",source:"@site/docs/setup-and-configure/advanced-workspace-management/database-migration.md",sourceDirName:"setup-and-configure/advanced-workspace-management",slug:"/setup-and-configure/advanced-workspace-management/database-migration",permalink:"/docs-exp/docs/setup-and-configure/advanced-workspace-management/database-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/setup-and-configure/advanced-workspace-management/database-migration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client Compatibility Matrix",permalink:"/docs-exp/docs/setup-and-configure/advanced-workspace-management/client-compatibility-matrix"},next:{title:"Google Translate Integration&#x20;",permalink:"/docs-exp/docs/setup-and-configure/advanced-workspace-management/google-translate-integration"}},c={},d=[{value:"Database Migration",id:"database-migration-1",level:2},{value:"For more information on updating Rocket.Chat, see Updating Rocket.Chat.",id:"for-more-information-on-updating-rocketchat-see-updating-rocketchat",level:2},{value:"Migration Collection",id:"migration-collection",level:4}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"database-migration",children:"Database Migration"}),"\n",(0,n.jsx)(t.h2,{id:"database-migration-1",children:"Database Migration"}),"\n",(0,n.jsx)(t.p,{children:"As software evolves and new features are added, the underlying database schema often needs to change to accommodate these updates. This process, known as database migration, is a critical aspect of maintaining and updating software systems. Rocket.Chat, a leading communication platform, handles database migrations seamlessly, ensuring that the transition between different versions of the platform is smooth and efficient. This document will provide a comprehensive overview of how Rocket.Chat manages database migrations."}),"\n",(0,n.jsxs)(t.h2,{id:"for-more-information-on-updating-rocketchat-see-updating-rocketchat",children:["For more information on updating Rocket.Chat, see ",(0,n.jsx)(t.a,{href:"/docs-exp/docs/deploy/deploy-rocket.chat/updating-rocket.chat",children:"Updating Rocket.Chat"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Database migration means updating an older schema to a newer one (or vice versa). When you incrementally update your Rocket.Chat version, the database migration is automatic, and you do not have to take any explicit action. Rocket.Chat migrations and their versions can be found on ",(0,n.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/server/startup/migrations",children:"GitHub"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["When you incrementally update your Rocket.Chat version, the database migration is automatic, and you do not have to take any explicit action. Rocket.Chat migrations and their versions can be found on ",(0,n.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/server/startup/migrations",children:"GitHub"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"However, it's important to note that Rocket.Chat uses migrations to enforce an updatable version range. This means that direct upgrades from non-consecutive versions (e.g., from version three to five) are not possible since the intermediate migrations have been removed."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"While Rocket.Chat does not officially support downgrades due to the changes made during database migrations, it is possible to manually roll back migrations separately if necessary."})}),"\n",(0,n.jsx)(t.p,{children:"The versioning in Rocket.Chat looks like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Major.Minor.Patch\n6.2.10\n"})}),"\n",(0,n.jsx)(t.h4,{id:"migration-collection",children:"Migration Collection"}),"\n",(0,n.jsx)(t.p,{children:"Rocket.Chat's migration collection contains a single document with a specific structure that controls migration actions. This document includes fields for the migration version, a lock to indicate whether a migration is currently in progress, and an ID field. If a particular migration needs to be skipped, the version field in the migration collection can be set to the next version."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'{"_id": "control","locked":false, "version":19}\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"_id"})," : The value is always ",(0,n.jsx)(t.code,{children:"control"}),". It means the collection has only one document to control migration actions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"locked"})," : The value is boolean and can either be ",(0,n.jsx)(t.code,{children:"true"})," or ",(0,n.jsx)(t.code,{children:"false"}),". It identifies whether migration is currently happening or not. If a migration fails, it will be stuck at true."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"version"})," - The migration version your server is currently at."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Rocket.Chat's approach to database migration ensures a smooth and efficient transition between different versions of the platform. By automating the migration process and providing mechanisms for controlling migration actions, Rocket.Chat ensures that its database schema is always up-to-date and compatible with the current version of the platform."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>r});var n=a(67294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);