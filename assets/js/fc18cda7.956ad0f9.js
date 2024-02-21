"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84084],{94944:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(74848),n=r(28453);const o={},a="Snaps FAQ",c={id:"resources/frequently-asked-questions/deployment-faq/snaps-faq",title:"Snaps FAQ",description:"If you have questions about snaps, ask them in the #ubuntu-snap channel.",source:"@site/docs/resources/frequently-asked-questions/deployment-faq/snaps-faq.md",sourceDirName:"resources/frequently-asked-questions/deployment-faq",slug:"/resources/frequently-asked-questions/deployment-faq/snaps-faq",permalink:"/docs-exp/docs/resources/frequently-asked-questions/deployment-faq/snaps-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/frequently-asked-questions/deployment-faq/snaps-faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment FAQ",permalink:"/docs-exp/docs/resources/frequently-asked-questions/deployment-faq/"},next:{title:"Updating Rocket.Chat FAQ",permalink:"/docs-exp/docs/resources/frequently-asked-questions/deployment-faq/updating-rocket.chat-faq"}},i={},d=[];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"snaps-faq",children:"Snaps FAQ"}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["If you have questions about snaps, ask them in the ",(0,t.jsx)(s.a,{href:"https://open.rocket.chat/channel/ubuntu-snap",children:"#ubuntu-snap"})," channel."]})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"When will my snap installation get the latest release?"}),(0,t.jsx)(s.p,{children:"Snaps are one of our biggest install base. They are also auto-updating. As a result, we like to spend more time testing before releasing. Updated Snaps are usually released around the 15th of the month - around two weeks after a new release. This gives us time to look for issues, so you don't have to. If you have special requirements and need to use the latest release immediately, please consider another installation method, e.g., docker."})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I access my site at a different port? How do I enable TLS/SSL with my snap?"}),(0,t.jsx)(s.p,{children:"You can change the default port (3000) to something else by changing the port configuration option. For example, if you wanted to change the HTTP port to 8080 instead of 3000:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo snap set rocketchat-server port=8080\n"})}),(0,t.jsxs)(s.p,{children:["Ensure you restart the ",(0,t.jsx)(s.code,{children:"rocketchat-service"})," service afterward for the change to take effect. ",(0,t.jsx)(s.strong,{children:"You only need to restart the Rocket.Chat application itself, not the database or Caddy"}),"."]}),(0,t.jsxs)(s.p,{children:["For enabling TLS/SSL, check out our guide for enabling caddy ",(0,t.jsx)(s.a,{href:"/docs-exp/docs/setup-and-configure/environment-configuration/configuring-ssl-reverse-proxy",children:"here"}),"."]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:'Ubuntu 18.04 LTS gives the message "snap not found", what\'s wrong?'}),(0,t.jsx)(s.p,{children:"Make sure you're using x64 or amd64 (or armhf) images, especially on VPS or VMs. x86 (32-bit) is not supported."})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I manually update to a new release?"}),(0,t.jsx)(s.p,{children:"While updates happen automatically, usually within 6 hours from the time of release, you can update manually by issuing this command:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo snap refresh rocketchat-server\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I revert to the previous version of Rocket.Chat?"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo snap revert rocketchat-server\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I list the services shipped with Rocket.Chat snap?"}),(0,t.jsxs)(s.p,{children:["The Rocket.Chat snap provides three services. Outside of the snap context, globally, each service is named like ",(0,t.jsx)(s.code,{children:"snap.<SnapName>.<SnapServiceName>"}),". Look at the table to have a better understanding."]}),(0,t.jsx)(s.p,{children:"You can check the list of services yourself with:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"snap info rocketchat-server\n"})}),(0,t.jsxs)(s.p,{children:["Look for the ",(0,t.jsx)(s.code,{children:"services"})," section."]})]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Service"}),(0,t.jsx)(s.th,{children:"Snap Service Name"}),(0,t.jsx)(s.th,{children:"Systemd Service Name"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MongoDB"}),(0,t.jsx)(s.td,{children:"rocketchat-mongo"}),(0,t.jsx)(s.td,{children:"snap.rocketchat-server.rocketchat-mongo"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Caddy"}),(0,t.jsx)(s.td,{children:"rocketchat-caddy"}),(0,t.jsx)(s.td,{children:"snap.rocketchat-server.rocketchat-caddy"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Rocket.Chat"}),(0,t.jsx)(s.td,{children:"rocketchat-server"}),(0,t.jsx)(s.td,{children:"snap.rocketchat-server.rocketchat-server"})]})]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I tell if Rocket.Chat is actually running?"}),(0,t.jsx)(s.p,{children:"You can check whether either or all of them are running or not with the following command:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"snap services rocketchat-server\n"})}),(0,t.jsxs)(s.p,{children:["Look into the third column (",(0,t.jsx)(s.code,{children:"Current"}),") that logs the current state of the services."]}),(0,t.jsxs)(s.p,{children:["Another option is to use the ",(0,t.jsx)(s.code,{children:"systemctl"})," command. To quickly check if a service is active or not, use the ",(0,t.jsx)(s.code,{children:"is-active"})," subcommand or the more well-known ",(0,t.jsx)(s.code,{children:"status"})," subcommand. See the table above to know the name of the service you want to inspect."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"systemctl is-active snap.rocketchat-server.rocketchat-mongo\nsystemctl is-active snap.rocketchat-server.rocketchat-caddy\nsystemctl is-active snap.rocketchat-server.rocketchat-server\n"})}),(0,t.jsxs)(s.p,{children:["Or use the ",(0,t.jsx)(s.code,{children:"status"})," subcommand:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"systemctl status snap.rocketchat-server.rocketchat-mongo\nsystemctl status snap.rocketchat-server.rocketchat-caddy\nsystemctl status snap.rocketchat-server.rocketchat-server\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How can I view the logs?"}),(0,t.jsxs)(s.p,{children:["You can either use the ",(0,t.jsx)(s.code,{children:"snap logs"})," command, or the systemd alternative, ",(0,t.jsx)(s.code,{children:"journalctl"}),". Always refer to ",(0,t.jsx)(s.a,{href:"/docs-exp/docs/resources/frequently-asked-questions/deployment-faq/snaps-faq#how-do-i-list-the-services-shipped-with-rocket.chat-snap",children:"this table"})," to know which service name to use where."]}),(0,t.jsxs)(s.p,{children:["Using ",(0,t.jsx)(s.code,{children:"snap logs"}),":"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo snap logs -f rocketchat-server.rocketchat-server\nsudo snap logs -f rocketchat-server.rocketchat-mongo\nsudo snap logs -f rocketchat-server.rocketchat-caddy\n"})}),(0,t.jsxs)(s.p,{children:["To see the logs from Rocket.Chat using ",(0,t.jsx)(s.code,{children:"journalctl"}),":"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo journalctl -fu snap.rocketchat-server.rocketchat-server\n"})}),(0,t.jsx)(s.p,{children:"To see the logs from Mongo or Caddy:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo journalctl -fu snap.rocketchat-server.rocketchat-mongo\nsudo journalctl -fu snap.rocketchat-server.rocketchat-caddy\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I schedule updates?"}),(0,t.jsx)(s.p,{children:"If you don't want snaps just updating when available, you can set when your snaps will update."}),(0,t.jsx)(s.p,{children:"The following example asks the system only to update snaps between 4.00am and 7.00am, and 7.00pm and 10:10pm:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo snap set system refresh.timer=4:00-7:00,19:00-22:10\n"})}),(0,t.jsxs)(s.p,{children:["You can find more about your options in the ",(0,t.jsx)(s.a,{href:"https://snapcraft.io/docs/managing-updates",children:"snapcraft documentation"}),"."]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"I need to restart Rocket.Chat, how do I do this?"}),(0,t.jsxs)(s.p,{children:["This follows the similar structure as many of the previous questions. You can use both the ",(0,t.jsx)(s.code,{children:"snap"})," command or ",(0,t.jsx)(s.code,{children:"systemctl"})," to restart RocketChat."]}),(0,t.jsxs)(s.p,{children:["With ",(0,t.jsx)(s.code,{children:"snap"})," you get the added benefit of restarting all of the services with a single command:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo snap restart rocketchat-server\n"})}),(0,t.jsx)(s.p,{children:"You can also restart each service individually:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo snap restart rocketchat-server.rocketchat-server\nsudo snap restart rocketchat-server.rocketchat-mongo\nsudo snap restart rocketchat-server.rocketchat-caddy\n"})}),(0,t.jsxs)(s.p,{children:["To restart Rocket.Chat using ",(0,t.jsx)(s.code,{children:"systemctl"}),":"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo systemctl restart snap.rocketchat-server.rocketchat-server\n"})}),(0,t.jsx)(s.p,{children:"Mongo and Caddy can similarly be restarted:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo systemctl restart snap.rocketchat-server.rocketchat-mongo \nsudo systemctl restart snap.rocketchat-server.rocketchat-caddThis follows the similar structure as many of the previous questions. You can use both the snap command or systemctl to restart RocketChat.\nWith snap you get the added benefit of restarting all of the services with a single command:\nsudo snap restart rocketchat-server\nYou can also restart each service individually:\nsudo snap restart rocketchat-server.rocketchat-server\nsudo snap restart rocketchat-server.rocketchat-mongo\nsudo snap restart rocketchat-server.rocketchat-caddy\nTo restart Rocket.Chat using systemctl:\nsudo systemctl restart snap.rocketchat-server.rocketchat-server\nMongo and Caddy can similarly be restarted:\nsudo systemctl restart snap.rocketchat-server.rocketchat-mongo \nsudo systemctl restart snap.rocketchat-server.rocketchat-cadd\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"What is the Restart Policy?"}),(0,t.jsx)(s.p,{children:"The snap's policy is to restart on failure."})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I restore backup data to my Snap?"}),(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"broken-reference/",title:"mention",children:"broken-reference"}),"."]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I back up my Snap data?"}),(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"broken-reference/",title:"mention",children:"broken-reference"})]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I access the MongoDB Shell?"}),(0,t.jsx)(s.p,{children:"You might want to access the mongo shell shipped with our Rocket.Chat snap. To do so, run:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"rocketchat-server.mongo\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I edit MongoDB configuration?"}),(0,t.jsxs)(s.p,{children:["You can find the mongod configuration file in ",(0,t.jsx)(s.code,{children:"/var/snap/rocketchat-server/current/mongod.conf"}),"."]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I add an option to mount media?"}),(0,t.jsxs)(s.p,{children:["The interface providing the ability to access removable media is not automatically connected upon installation, so if you'd like to use external storage (or otherwise use a device in ",(0,t.jsx)(s.code,{children:"/media"})," for data), you need to give the snap permission to access removable media by connecting that interface:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo snap connect rocketchat-server:removable-media\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"What folders do snaps use?"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Your actual snap files for each version of Rocket.Chat are copied to: ",(0,t.jsx)(s.code,{children:"/var/lib/snapd/snaps"})," and they are mounted in read-only mode."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Your snap common directory is: ",(0,t.jsx)(s.code,{children:"/var/snap/rocketchat-server/common/"}),"; file uploads to disk and the database are stored here."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Your snap data directory is ",(0,t.jsx)(s.code,{children:"/var/snap/rocketchat-server/<version>"}),"; this is a versioned folder."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["You can access the current snap data directory at ",(0,t.jsx)(s.code,{children:"/var/snap/rocketchat-server/current"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I remove a specific previous version of Rocket.Chat?"}),(0,t.jsxs)(s.p,{children:["You can do this by issuing the following command, where ",(0,t.jsx)(s.code,{children:"N"})," is the desired version:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"snap remove --revision=N rocketchat-server\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I add a tool like strace to debug what's happening in my snap?"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"snapcraft prime\nsnap try prime --devmode\ncp /usr/bin/strace prime\nsnap run <snap.app> --shell\nsudo ./strace\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I change Rocket.Chat PORT, MONGO_URL, and MONGO_OPLOG_URL in my snap?"}),(0,t.jsx)(s.p,{children:"Starting from release 0.73, it is possible to configure these environmental variables through snap hooks like this:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo snap set rocketchat-server port=<another-port>\nsudo snap set rocketchat-server mongo-url=mongodb://<your-url>:<your-port>/<your-db-name>\nsudo snap set rocketchat-server mongo-oplog-url=mongodb://<your-url>:<your-port>/local\n"})}),(0,t.jsx)(s.p,{children:"Remember to restart rocket.chat service after setting new values:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo systemctl restart snap.rocketchat-server.rocketchat-server.service\n"})}),(0,t.jsx)(s.p,{children:"This is an example to run rocket.chat on port 4000 instead of 3000 and set database name to rocketchat instead of parties:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo snap set rocketchat-server port=4000\nsudo snap set rocketchat-server mongo-url=mongodb://localhost:27017/rocketchat\nsudo systemctl restart snap.rocketchat-server.rocketchat-server.service\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I change other environmental variables in my snap?"}),(0,t.jsxs)(s.p,{children:["Starting from release 0.73, it is possible to overwrite any Rocket.Chat environmental variables dropping files ending in ",(0,t.jsx)(s.code,{children:".env"})," in $SNAP_COMMON directory (",(0,t.jsx)(s.code,{children:"/var/snap/rocketchat-server/common/"}),"), for example, you can create a file to change SMTP settings:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cat /var/snap/rocketchat-server/common/overwrite-smtp.env\nOVERWRITE_SETTING_SMTP_Host=my.smtp.server.com\n"})}),(0,t.jsx)(s.p,{children:"Remember to restart rocket.chat service after creating .env files:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo systemctl restart snap.rocketchat-server.rocketchat-server.service\n"})}),(0,t.jsx)(s.p,{children:"More than one .env file is allowed, and more than one environmental variable defined per file is allowed."})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"How do I set Rocket.Chat Registration Token on Snap"}),(0,t.jsxs)(s.p,{children:["To set a registration token for your server, create any file ending in ",(0,t.jsx)(s.code,{children:".env"})," under ",(0,t.jsx)(s.code,{children:"/var/snap/rocketchat-server/current/"})," with content:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"REG_TOKEN=<your token>\n"})}),(0,t.jsx)(s.p,{children:"Then restart your server"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sudo systemctl restart snap.rocketchat-server.rocketchat-server\n"})})]})]})}function l(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>c});var t=r(96540);const n={},o=t.createContext(n);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);