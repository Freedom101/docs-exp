"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98715],{21399:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(74848),r=t(28453);const i={description:"Deploy Rocket.Chat in an air-gapped environment using docker & docker compose"},c="Rocket.Chat Air-gapped Deployment",a={id:"setup-and-configure/rocket.chat-air-gapped-deployment/README",title:"Rocket.Chat Air-gapped Deployment",description:"Deploy Rocket.Chat in an air-gapped environment using docker & docker compose",source:"@site/docs/setup-and-configure/rocket.chat-air-gapped-deployment/README.md",sourceDirName:"setup-and-configure/rocket.chat-air-gapped-deployment",slug:"/setup-and-configure/rocket.chat-air-gapped-deployment/",permalink:"/docs-exp/docs/setup-and-configure/rocket.chat-air-gapped-deployment/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setup-and-configure/rocket.chat-air-gapped-deployment/README.md",tags:[],version:"current",frontMatter:{description:"Deploy Rocket.Chat in an air-gapped environment using docker & docker compose"},sidebar:"tutorialSidebar",previous:{title:"License Application",permalink:"/docs-exp/docs/setup-and-configure/license-application"},next:{title:"Air-gapped App Installation",permalink:"/docs-exp/docs/setup-and-configure/rocket.chat-air-gapped-deployment/air-gapped-app-installation"}},s={},d=[{value:"Deploying  a local Docker Registry with Images",id:"deploying--a-local-docker-registry-with-images",level:2},{value:"Installing Rocket.Chat in an Air-gapped environment through Docker &amp; Docker Compose",id:"installing-rocketchat-in-an-air-gapped-environment-through-docker--docker-compose",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"rocketchat-air-gapped-deployment",children:"Rocket.Chat Air-gapped Deployment"}),"\n",(0,n.jsx)(o.p,{children:"An air-gapped computer system is one that is not directly connected to any external network or the internet. It ensures that a secure computer network is physically isolated from unsecured networks, such as the public internet or an unsecured local area network. This isolation makes it challenging for malware or hackers to infiltrate sensitive systems, providing a strong defense against cyber threats. "}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["The recommended deployment method for Rocket.Chat is using ",(0,n.jsx)(o.a,{href:"/docs-exp/docs/deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose",children:"Docker and Docker Compose"}),"."]})}),"\n",(0,n.jsx)(o.h2,{id:"deploying--a-local-docker-registry-with-images",children:"Deploying  a local Docker Registry with Images"}),"\n",(0,n.jsxs)(o.p,{children:["To set up a local ",(0,n.jsx)(o.a,{href:"https://docs.docker.com/registry/",children:"Docker registry"})," on an air-gapped environment, consider building the registry's data volume on a host with internet connectivity so that you can use ",(0,n.jsx)(o.code,{children:"docker pull"})," to fetch the required images or any remotely accessible images, then move the volume to the air-gapped network."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["See the complete list of considerations in the ",(0,n.jsx)(o.a,{href:"https://docs.docker.com/registry/deploying/#considerations-for-air-gapped-registries",children:"Docker documentation"}),"."]})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Deploy a local registry following the",(0,n.jsx)(o.a,{href:"https://docs.docker.com/registry/deploying/",children:" official Docker guide"}),". "]}),"\n",(0,n.jsxs)(o.li,{children:["Then, pull the ",(0,n.jsx)(o.a,{href:"https://hub.docker.com/r/rocketchat/rocket.chat",children:"Rocket.Chat"}),", ",(0,n.jsx)(o.a,{href:"https://hub.docker.com/r/bitnami/mongodb",children:"MongoDB"}),", and Nginx images from the docker hub which are needed to run Rocket.Chat into your registry. "]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["For more details, see ",(0,n.jsx)(o.a,{href:"https://docs.docker.com/registry/deploying/#copy-an-image-from-docker-hub-to-your-registry",children:"copying an image from Docker Hub to your registry"}),"."]})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"After deploying the local registry, move the volume to the air-gapped environment and install Rocket.Chat."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"installing-rocketchat-in-an-air-gapped-environment-through-docker--docker-compose",children:"Installing Rocket.Chat in an Air-gapped environment through Docker & Docker Compose"}),"\n",(0,n.jsxs)(o.p,{children:["With your local registry completely ",(0,n.jsx)(o.a,{href:"https://distribution.github.io/distribution/about/deploying/",children:"deployed"})," and ",(0,n.jsx)(o.a,{href:"https://distribution.github.io/distribution/about/configuration/",children:"configured"}),", "]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Follow our guide on installing Rocket.Chat with ",(0,n.jsx)(o.a,{href:"/docs-exp/docs/deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose#fetching-compose-file",children:"Docker & Docker Compose"})," using the example ",(0,n.jsx)(o.code,{children:"compose.yml"})," file."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"Once your local registry is configured on an air-gapped system, Docker will pull and use images directly from there."})})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>c,x:()=>a});var n=t(96540);const r={},i=n.createContext(r);function c(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);