"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26178],{46320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=n(74848),a=n(28453);const c={},s="OpenShift",i={id:"deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/openshift",title:"OpenShift",description:"Deploy Rocket.Chat using the Red Hat OpenShift platform and easily manage your application. Several templates for providing Rocket.Chat are hosted in this repository.",source:"@site/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/openshift.md",sourceDirName:"deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools",slug:"/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/openshift",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/openshift",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/openshift.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ansible",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/ansible"},next:{title:"Vagrant",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/vagrant"}},r={},l=[{value:"Installation on Container Development Kit (CDK)",id:"installation-on-container-development-kit-cdk",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"openshift",children:"OpenShift"}),"\n",(0,o.jsxs)(t.p,{children:["Deploy Rocket.Chat using the ",(0,o.jsx)(t.a,{href:"https://www.redhat.com/en/technologies/cloud-computing/openshift",children:"Red Hat OpenShift"})," platform and easily manage your application. Several templates for providing Rocket.Chat are hosted in this ",(0,o.jsx)(t.a,{href:"http://developers.redhat.com/",children:"repository"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"installation-on-container-development-kit-cdk",children:"Installation on Container Development Kit (CDK)"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Download and install CDK."}),"\n",(0,o.jsx)(t.li,{children:"Download and install the OpenShift Client tool."}),"\n",(0,o.jsx)(t.li,{children:"Run OpenShift vagrant machine."}),"\n",(0,o.jsx)(t.li,{children:"Pull the Rocket.Chat Docker image from Docker Hub and tag/push to the internal OpenShift registry using these commands:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"docker pull registry.rocket.chat/rocketchat/rocket.chat\ndocker tag rocketchat/rocket.chat hub.openshift.rhel-cdk.10.1.2.2.xip.io/openshift/rocket-chat\ndocker push hub.openshift.rhel-cdk.10.1.2.2.xip.io/openshift/rocket-chat\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Login in OpenShift and create a new project in OpenShift"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"oc login -u openshift-devel https://10.1.2.2:8443\noc new-project rocket-chat\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Clone this repo and add the templates and ImageStream to the Openshift namespace:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/rimolive/rocketchat-openshift\noc create -n openshift -f rocket-chat-is.json\noc create -n openshift -f rocket-chat-ephemeral.json\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Create the rocket-chat app"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"oc new-app rocket-chat -p MONGODB_DATABASE=rocketchat,MONGODB_USER=rocketchat-admin,MONGODB_PASS=rocketchat\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Rocket.Chat uses a domain check code to verify the validity of the e-mail address. To disable it, run these commands:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"oc port-forward <mongodb_pod> 27017\nmongo localhost:27017\n"})}),"\n",(0,o.jsx)(t.p,{children:"Inside the mongo client, run these commands:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"use rocketchat\ndb.auth('rocketchat-admin','rocketchat')\ndb.rocketchat_settings.update({_id:'Accounts_UseDNSDomainCheck'},{$set:{value:false}})\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const a={},c=o.createContext(a);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);