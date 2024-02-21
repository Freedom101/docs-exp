"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65980],{98627:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(74848),t=s(28453);const o={description:"Automatically prune old messages and files across your workspace"},r="Retention Policy",l={id:"use-rocket.chat/workspace-administration/settings/retention-policy",title:"Retention Policy",description:"Automatically prune old messages and files across your workspace",source:"@site/docs/use-rocket.chat/workspace-administration/settings/retention-policy.md",sourceDirName:"use-rocket.chat/workspace-administration/settings",slug:"/use-rocket.chat/workspace-administration/settings/retention-policy",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/retention-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/settings/retention-policy.md",tags:[],version:"current",frontMatter:{description:"Automatically prune old messages and files across your workspace"},sidebar:"tutorialSidebar",previous:{title:"Rate Limiter",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/rate-limiter"},next:{title:"Search",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/search"}},a={},c=[{value:"Permissions",id:"permissions",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Global policies",id:"global-policies",level:3},{value:"Per-channel Policies",id:"per-channel-policies",level:3},{value:"Info Available to Users",id:"info-available-to-users",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"retention-policy",children:"Retention Policy"}),"\n",(0,i.jsx)(n.p,{children:"The Retention Policy allows you to automatically remove old messages and files with custom rules on channels and globally."}),"\n",(0,i.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsx)(n.p,{children:"Retention policies depend on two types of permissions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edit-privileged-setting"})," : It is required to set a ",(0,i.jsx)(n.strong,{children:"global"})," policy."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edit-room-retention-policy"}),": It is required to set a ",(0,i.jsx)(n.strong,{children:"per-channel"})," policy."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To enable channel owners to set their policies, assign ",(0,i.jsx)(n.code,{children:"edit-room-retention-policy"})," permission to channel owners. By default, it is assigned to administrators only."]})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Retention policies have two levels, global policies (enforced everywhere) and per-channel policies (implemented in specific channels)."}),"\n",(0,i.jsxs)(n.p,{children:["To enable retention policies, navigate to ",(0,i.jsx)(n.strong,{children:"Administration > Workspace > Settings > Retention Policy"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Toggle on ",(0,i.jsx)(n.strong,{children:"Enabled."})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Timer Precision"}),": It establishes how often the deletion script should run. When your policies have a long lifetime or do not care about the policy's precision, you can lower this to save processing power."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use Advanced Retention Policy configuration"}),": If enabled, it uses an advanced retention policy configuration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use Advanced Retention Policy Cron"}),": How often the prune timer should run defined by cron job expression. Setting this to a more precise value makes channels with fast retention timers work better, but might cost extra processing power on large communities"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"global-policies",children:"Global policies"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Tweaking these settings without extreme caution can ",(0,i.jsx)(n.strong,{children:"destroy"})," ",(0,i.jsx)(n.strong,{children:"all message history across your server"}),". Please read this entire section ",(0,i.jsx)(n.strong,{children:"before"})," you enable this feature."]})}),"\n",(0,i.jsxs)(n.p,{children:["To update the ",(0,i.jsx)(n.strong,{children:"Global Policies"})," settings, navigate to ",(0,i.jsx)(n.strong,{children:"Administration > Workspace > Settings > Retention Policy > Global Policies."})]}),"\n",(0,i.jsx)(n.p,{children:"The policy is split into three parts: one for all channels, one for all private groups, and one for all direct messages. Each type has two options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Applies to channels/private groups/direct messages"}),": Enabling this option applies the global retention policy to this type of message. For example, if you only wish to prune messages in private groups, enable the option for private groups and disable the others."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Maximum message age in channels/private groups/direct messages"}),": This option establishes how old messages may be in days. For example, to make the policy automatically delete all messages older than 30 days, enter ",(0,i.jsx)(n.code,{children:"30"}),"; to make the policy automatically delete all messages older than a year, enter ",(0,i.jsx)(n.code,{children:"365"}),", etc."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Furthermore, other options allow you to specify how the policy works:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Do not prune pinned messages"}),": If enabled, pinned messages are not deleted. For example, when you pin a few messages with essential links, these messages stay intact."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Only delete files"}),": If enabled, messages are not deleted, but files are. They are replaced by a simple ",(0,i.jsx)(n.em,{children:"File removed by automatic prune"})," message. When used together with ",(0,i.jsx)(n.strong,{children:"Exclude pinned messages"}),", only unpinned files are deleted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Do not prune discussion messages:"})," If enabled, discussion messages are not deleted. All the discussions in your workspace remain intact."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["If you don't enable ",(0,i.jsx)(n.strong,{children:"Do not prune discussion messages,"})," all your discussion messages will be deleted irrespective of the dates."]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Do not prune Threads:"})," When enabled, threads are not deleted. All the threads in your workspace remain intact."]}),"\n",(0,i.jsx)(n.h3,{id:"per-channel-policies",children:"Per-channel Policies"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Tweaking these settings without extreme caution can ",(0,i.jsx)(n.strong,{children:"destroy"})," ",(0,i.jsx)(n.strong,{children:"all message history across your server"}),". Please read this entire section ",(0,i.jsx)(n.strong,{children:"before"})," you turn the feature on."]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Ensure you have the ",(0,i.jsx)(n.code,{children:"edit-room-retention-policy"})," permission."]})}),"\n",(0,i.jsx)(n.p,{children:"To enable retention policy in a room, "}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Navigate to the Kebab menu of the channel on the top right corner of the channel screen"}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Prune Messages."})," Update the options.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Newer than"}),": Set a date and time to prune messages newer than the select moment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Older than"}),": Set a date and time to prune messages older than the select moment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Only prune content from these users"}),": Select users to delete their messages. Leave empty to prune everyone's content."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inclusive"}),": If you check the inclusive checkbox, messages sent on and between ",(0,i.jsx)(n.strong,{children:"Newer than"})," and ",(0,i.jsx)(n.strong,{children:"Older than"})," dates are deleted (messages are deleted between and including those dates). If you don't check the inclusive checkbox, messages between ",(0,i.jsx)(n.strong,{children:"Newer than"})," and ",(0,i.jsx)(n.strong,{children:"Older than"})," dates are deleted, and the messages sent on those dates are not deleted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Do not prune pinned messages"}),": Pinned messages are not deleted if enabled. For example, if you pinned a few messages with important links, they stay intact."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Do not prune discussion messages"}),": If enabled, messages in the discussions are not deleted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Do not prune threads:"})," If enabled, messages in the threads are not deleted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Only remove the attached files, keep messages:"})," If enabled, messages are not deleted, but files are. They are replaced by a simple ",(0,i.jsx)(n.em,{children:"File removed by automatic prune"})," message. When used together with ",(0,i.jsx)(n.strong,{children:"Exclude pinned messages"}),", only unpinned files are deleted."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Prune"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"info-available-to-users",children:"Info Available to Users"}),"\n",(0,i.jsxs)(n.p,{children:["Users can see if a channel's messages will be pruned by either scrolling to the top of the message history or opening the channel info. A message is displayed if a policy (global or per-channel) is present. For example, ",(0,i.jsx)(n.em,{children:"Messages older than 30 days are automatically pruned here,"})," or ",(0,i.jsx)(n.em,{children:"Unpinned files older than a year are automatically pruned here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);