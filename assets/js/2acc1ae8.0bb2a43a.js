"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41327],{28584:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>r});var n=t(74848),a=t(28453);const i={},c="Deploy with Digital Ocean",s={id:"deploy/deploy-rocket.chat/additional-deployment-methods/deploy-with-digital-ocean",title:"Deploy with Digital Ocean",description:"Rocket.Chat offers a seamless and user-friendly solution for setting up your own chat platform on Digital Ocean with just a single click. With the 1-Click install from the Digital Ocean marketplace, you can effortlessly launch and configure Rocket.Chat, empowering your team to communicate and collaborate efficiently.",source:"@site/docs/deploy/deploy-rocket.chat/additional-deployment-methods/deploy-with-digital-ocean.md",sourceDirName:"deploy/deploy-rocket.chat/additional-deployment-methods",slug:"/deploy/deploy-rocket.chat/additional-deployment-methods/deploy-with-digital-ocean",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/deploy-with-digital-ocean",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/deploy/deploy-rocket.chat/additional-deployment-methods/deploy-with-digital-ocean.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy with CentOS",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/deploy-with-centos"},next:{title:"Deploy with Kubernetes",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/deploy-with-kubernetes"}},d={},r=[{value:"Preparation Steps",id:"preparation-steps",level:2},{value:"Deploy Rocket.Chat on Digital Ocean",id:"deploy-rocketchat-on-digital-ocean",level:2},{value:"Enabling HTTPS",id:"enabling-https",level:4}];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"deploy-with-digital-ocean",children:"Deploy with Digital Ocean"}),"\n",(0,n.jsxs)(o.p,{children:["Rocket.Chat offers a seamless and user-friendly solution for setting up your own chat platform on Digital Ocean with just a single click. With the ",(0,n.jsx)(o.a,{href:"https://marketplace.digitalocean.com/apps/rocket-chat?action=deploy&refcode=1940fe28bd31",children:"1-Click install"})," from the Digital Ocean marketplace, you can effortlessly launch and configure Rocket.Chat, empowering your team to communicate and collaborate efficiently."]}),"\n",(0,n.jsx)(o.h2,{id:"preparation-steps",children:"Preparation Steps"}),"\n",(0,n.jsx)(o.p,{children:"Before you begin, make sure you have the following:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["An active ",(0,n.jsx)(o.a,{href:"https://www.digitalocean.com/",children:"Digital Ocean"})," account"]}),"\n",(0,n.jsx)(o.li,{children:"A domain name (optional).  You can use Digital Ocean's provided IP address, but having a domain name is recommended for a more professional setup to enable HTTPs."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"In this guide, you'll learn how to:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/deploy-with-digital-ocean#deploy-rocket.chat-on-digital-ocean",children:"Deploy Rocket.Chat on Digital Ocea"}),"n"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/deploy-with-digital-ocean#enabling-https",children:"Enable HTTPs for your workspace"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"deploy-rocketchat-on-digital-ocean",children:"Deploy Rocket.Chat on Digital Ocean"}),"\n",(0,n.jsx)(o.p,{children:"To set up Rocket.Chat on Digital Ocean,"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Go to the ",(0,n.jsx)(o.a,{href:"https://marketplace.digitalocean.com/apps/rocket-chat?action=deploy&refcode=1940fe28bd31",children:"Rocket.Chat app "}),"on the Digital Ocean marketplace and follow the prompts to create the Rocket.Chat droplet."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["You can get immediate access to your Rocket.Chat server by visiting ",(0,n.jsx)(o.code,{children:"http://droplet-ip:3000"}),"."]})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Create a registered domain name to access Rocket.Chat. Set up an A record from your domain ",(0,n.jsx)(o.em,{children:"(e.g. chat.mycompany.com)"})," to the droplet's IP address."]}),"\n",(0,n.jsx)(o.li,{children:"To access your workspace, visit the configured domain on your web browser."}),"\n",(0,n.jsx)(o.li,{children:"After successfully setting up the Rocket.Chat droplet and your domain, log in to your droplet using the command below:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"ssh root@your_droplet_ip\n"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Enter your password when prompted. Once you've successfully connected, a message similar to this will appear.:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"##################################################################################################################################################################\nRocket.Chat is the leading open source team chat software solution. Free, unlimited and completely customizable with on-premises and SaaS cloud hosting.\nReplace email, HipChat & Slack with the ultimate team chat software solution.\n\nThis Rocket.Chat image uses docker under the hood. To learn more, please read our docker documentation - https://docs.rocket.chat/deploy/prepare-for-your-deployment/rapid-deployment-methods/docker-and-docker-compose\n\nYou can find the compose project in $HOME/rocketchat directory.\n\nLooking for how to use Rocket.Chat? Be sure to check our docs: https://docs.rocket.chat\nNeed some help? Join our community forums https://forums.rocket.chat and https://open.rocket.chat\n##################################################################################################################################################################\n\n"})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["Behind the scenes, the image uses Docker to handle the deployment. See ",(0,n.jsx)(o.a,{href:"/docs-exp/docs/deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose",title:"mention",children:"deploy-with-docker-and-docker-compose.md"})," to learn how to manage docker deployments."]})}),"\n",(0,n.jsx)(o.h4,{id:"enabling-https",children:"Enabling HTTPS"}),"\n",(0,n.jsx)(o.p,{children:"It's important to note that Rocket.Chat doesn't have HTTPS enabled by default, as SSL certificates are unique to each installation. However, activating HTTPS with Let's Encrypt certificates can easily be done following the next steps."}),"\n",(0,n.jsx)(o.p,{children:"To enable HTTPS, "}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Ensure the correct A record (optionally CNAME) is set for your domain going to your droplet IP."}),"\n",(0,n.jsx)(o.li,{children:"Create a user account without root access using this command:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"username= #put your username here\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"# you can omit docker group, if you do, run the docker commands with sudo\nsudo useradd -mG sudo,docker $username\nsudo passwd $username # give it a strong password\n# copy over the authorized_keys file so that you can ssh into that account directly\nsudo cp -r /root/.ssh /home/$username\nsudo chown -R $(id $username -u):$(id -g $username) /home/$username/.ssh\nsudo su - $username\n"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Once you can confirm the records update[s] have propagated, copy the ",(0,n.jsx)(o.code,{children:"rocketchat"})," project directory from the root, and change ownership."]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"cd ~\nsudo cp -r /root/rocketchat .\nsudo chown -R $UID:$GID rocketchat\ncd rocketchat\n"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Follow the steps highlighted in the ",(0,n.jsx)(o.a,{href:"/docs-exp/docs/deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose#enable-https",title:"mention",children:"#enable-https"})," section of our docker deployment guide.\u200b"]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>c,x:()=>s});var n=t(96540);const a={},i=n.createContext(a);function c(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);