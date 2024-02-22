"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74441],{26063:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=o(85893),r=o(11151);const s={description:"Deploying Rocket.Chat on Aliyun"},d="Aliyun",i={id:"deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/aliyun",title:"Aliyun",description:"Deploying Rocket.Chat on Aliyun",source:"@site/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/aliyun.md",sourceDirName:"deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods",slug:"/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/aliyun",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/aliyun",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/aliyun.md",tags:[],version:"current",frontMatter:{description:"Deploying Rocket.Chat on Aliyun"},sidebar:"tutorialSidebar",previous:{title:"Unsupported Methods",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/"},next:{title:"Cloudron.io",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/cloudron-io"}},c={},l=[{value:"Update Ubuntu repo lists and Install curl",id:"update-ubuntu-repo-lists-and-install-curl",level:2},{value:"Install docker",id:"install-docker",level:2},{value:"Install docker-compose",id:"install-docker-compose",level:2},{value:"Create directories for Rocket.Chat",id:"create-directories-for-rocketchat",level:2},{value:"Create customized docker-compose.yml",id:"create-customized-docker-composeyml",level:2},{value:"Pull the required docker images",id:"pull-the-required-docker-images",level:2},{value:"Start the mongodb database",id:"start-the-mongodb-database",level:2},{value:"Start the mongodb replica",id:"start-the-mongodb-replica",level:2},{value:"Start your Rocket.Chat server",id:"start-your-rocketchat-server",level:2},{value:"Access your Rocket.Chat on Aliyun",id:"access-your-rocketchat-on-aliyun",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"aliyun",children:"Aliyun"}),"\n",(0,t.jsx)(n.p,{children:"You can install Rocket.Chat to Ubuntu VPS on Aliyun."}),"\n",(0,t.jsx)(n.p,{children:"The recommended VPS configuration is:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"2 GB RAM"}),"\n",(0,t.jsx)(n.li,{children:"10 GB disk"}),"\n",(0,t.jsx)(n.li,{children:"2 or 4 cores"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"However, lower performance configuration has been tested on a VPS with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"1 GB RAM"}),"\n",(0,t.jsx)(n.li,{children:"10 GB disk"}),"\n",(0,t.jsx)(n.li,{children:"1 core"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to install Rocket.Chat."}),"\n",(0,t.jsx)(n.h2,{id:"update-ubuntu-repo-lists-and-install-curl",children:"Update Ubuntu repo lists and Install curl"}),"\n",(0,t.jsx)(n.p,{children:"After you ssh to the VPS:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Sing-Li/bbug/master/images/aliyun1.png",alt:"aliyun shell"})}),"\n",(0,t.jsx)(n.p,{children:"Run the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apt-get update\n"})}),"\n",(0,t.jsx)(n.p,{children:"followed by:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apt-get install curl\n"})}),"\n",(0,t.jsx)(n.h2,{id:"install-docker",children:"Install docker"}),"\n",(0,t.jsx)(n.p,{children:"Run this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -sSL https://get.docker.com/ | sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Docker should be installed, verify it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker ps\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://raw.githubusercontent.com/Sing-Li/bbug/master/images/aliyun2.png",alt:"aliyun docker verify"})}),"\n",(0,t.jsx)(n.h2,{id:"install-docker-compose",children:"Install docker-compose"}),"\n",(0,t.jsxs)(n.p,{children:["Install docker-compose, follow the ",(0,t.jsx)(n.a,{href:"https://github.com/docker/compose/releases",children:"latest release instructions"})]}),"\n",(0,t.jsx)(n.p,{children:"For release 1.5.0, you can use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -L https://github.com/docker/compose/releases/download/1.5.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(if or when this is blocked, you'll have to obtain Linux-x86_64 docker-compose binary via other means)"})}),"\n",(0,t.jsx)(n.p,{children:"Next, allow execution of docker-compose:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"chmod +x /usr/local/bin/docker-compose\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-directories-for-rocketchat",children:"Create directories for Rocket.Chat"}),"\n",(0,t.jsx)(n.p,{children:"First,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mkdir /home/rocketchat\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /home/rocketchat\n"})}),"\n",(0,t.jsx)(n.p,{children:"Make two more directories for the mongodb database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mkdir data\nmkdir dump\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-customized-docker-composeyml",children:"Create customized docker-compose.yml"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file with the following content:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"version: '2'\n\nservices:\n  rocketchat:\n    image: rocket.chat:latest\n    restart: unless-stopped\n    volumes:\n      - ./uploads:/app/uploads\n    environment:\n      - PORT=3000\n      - ROOT_URL=http://chat.inumio.com\n      - MONGO_URL=mongodb://mongo:27017/rocketchat\n      - MONGO_OPLOG_URL=mongodb://mongo:27017/local\n      - Accounts_UseDNSDomainCheck=True\n    depends_on:\n      - mongo\n    ports:\n      - 8818:3000\n\n  mongo:\n    image: mongo\n    restart: unless-stopped\n    volumes:\n     - $PWD/data:/data/db\n     - $PWD/dump:/dump\n    command: mongod --smallfiles --oplogSize 128 --replSet rs0 --storageEngine=mmapv1\n\n  # this container's job is just run the command to initialize the replica set.\n  # it will run the command and remove himself (it will not stay running)\n  mongo-init-replica:\n    image: mongo\n    command: 'bash -c \"for i in `seq 1 30`; do mongo mongo/rocketchat --eval \\\"rs.initiate({ _id: ''rs0'', members: [ { _id: 0, host: ''localhost:27017'' } ]})\\\" && s=$$? && break || s=$$?; echo \\\"Tried $$i times. Waiting 5 secs...\\\"; sleep 5; done; (exit $$s)\"'\n    depends_on:\n      - mongo\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you customize the file with ",(0,t.jsx)(n.code,{children:"your-ip-address"})," in the ",(0,t.jsx)(n.code,{children:"MONGO_URL"})," env variable."]}),"\n",(0,t.jsx)(n.h2,{id:"pull-the-required-docker-images",children:"Pull the required docker images"}),"\n",(0,t.jsx)(n.p,{children:"This will download the required docker images, and may take some time."}),"\n",(0,t.jsx)(n.p,{children:"This is done only the first time, or when you want to update Rocket.Chat."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker pull mongo\ndocker pull registry.rocket.chat/rocketchat/rocket.chat\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-the-mongodb-database",children:"Start the mongodb database"}),"\n",(0,t.jsx)(n.p,{children:"Run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker compose up -d mongo\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Mongo supports 24 x 7 operations and live backup. You should not need to restart it too frequently. See ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.org/manual/",children:"mongodb documentations"})," for proper operation and management of a mongo server."]}),"\n",(0,t.jsx)(n.p,{children:"Wait a couple of minute for mongo to start properly."}),"\n",(0,t.jsx)(n.h2,{id:"start-the-mongodb-replica",children:"Start the mongodb replica"}),"\n",(0,t.jsx)(n.p,{children:"Run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker compose up -d mongo-init-replica\n"})}),"\n",(0,t.jsx)(n.p,{children:"This container's job is just to run the command to initialize the replica set. It will run the command and remove itself (it will not stay running)"}),"\n",(0,t.jsx)(n.h2,{id:"start-your-rocketchat-server",children:"Start your Rocket.Chat server"}),"\n",(0,t.jsx)(n.p,{children:"Now start the Rocket.Chat server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker compose up -d rocketchat\n"})}),"\n",(0,t.jsx)(n.p,{children:"Rocket.Chat should be ready in a minute or two."}),"\n",(0,t.jsx)(n.h2,{id:"access-your-rocketchat-on-aliyun",children:"Access your Rocket.Chat on Aliyun"}),"\n",(0,t.jsx)(n.p,{children:"Your Rocket.Chat server can now be accessed over the Internet via:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://your-ip-address:8818/\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>d});var t=o(67294);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);