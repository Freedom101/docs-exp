"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31974],{48559:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var o=t(74848),n=t(28453);const i={},s="Rocket.Chat Basic Federation",d={id:"use-rocket.chat/workspace-administration/settings/federation/rocket.chat-federation/README",title:"Rocket.Chat Basic Federation",description:".png) Rocket.Chat basic federation is deprecated as from Rocket.Chat 6.0. We recommend federating using Matrix Bridge.",source:"@site/docs/use-rocket.chat/workspace-administration/settings/federation/rocket.chat-federation/README.md",sourceDirName:"use-rocket.chat/workspace-administration/settings/federation/rocket.chat-federation",slug:"/use-rocket.chat/workspace-administration/settings/federation/rocket.chat-federation/",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/rocket.chat-federation/",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/settings/federation/rocket.chat-federation/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix Bridge FAQs",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrixbridge-faqs"},next:{title:"Cross-server Federated Channels",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/rocket.chat-federation/cross-server-federated-channels"}},c={},a=[{value:"Configuration",id:"configuration",level:2},{value:"Adding Federation to your Server",id:"adding-federation-to-your-server",level:2},{value:"Recommended: Configure your DNS",id:"recommended-configure-your-dns",level:3},{value:"SRV Record (2.0.0 or newer)",id:"srv-record-200-or-newer",level:4},{value:"Public Key TXT Record",id:"public-key-txt-record",level:4},{value:"If you use http instead of https",id:"if-you-use-http-instead-of-https",level:4},{value:"Legacy Support: If your DNS provider does not support SRV records with <code>_http</code> or <code>_https</code>",id:"legacy-support-if-your-dns-provider-does-not-support-srv-records-with-_http-or-_https",level:4},{value:"Legacy Support: SRV Record",id:"legacy-support-srv-record",level:4},{value:"Legacy Support: protocol TXT Record (if not provided, HTTPS will be used)",id:"legacy-support-protocol-txt-record-if-not-provided-https-will-be-used",level:4},{value:"Test your configuration from CLI",id:"test-your-configuration-from-cli",level:4},{value:"Conclusion",id:"conclusion",level:4},{value:"Alternative: Register on Hub",id:"alternative-register-on-hub",level:3},{value:"Confirm Domain Ownership",id:"confirm-domain-ownership",level:4},{value:"Using Rocket.Chat Federation",id:"using-rocketchat-federation",level:2}];function l(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"rocketchat-basic-federation",children:"Rocket.Chat Basic Federation"}),"\n",(0,o.jsx)(r.admonition,{type:"warning",children:(0,o.jsxs)(r.p,{children:["![](/img/Deprecated (1).png) Rocket.Chat basic federation is deprecated as from Rocket.Chat ",(0,o.jsx)(r.code,{children:"6.0"}),". We recommend federating using ",(0,o.jsx)(r.a,{href:"../matrix-bridge/",children:"Matrix Bridge"}),"."]})}),"\n",(0,o.jsx)(r.p,{children:"Rocket.Chat Federation lets your server becomes part of the Rocket.Chat Federated Network. This makes your server visible and can be found over the network, and messages, files can be exchanged with other Federation-enabled Rocket.Chat servers."}),"\n",(0,o.jsx)(r.p,{children:"Rocket.Chat uses industry standards, like DNS records, to keep the process seamless and seek the most hassle-free communication between servers."}),"\n",(0,o.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(r.p,{children:"The following configurations can be done"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Enabled"}),": It determines whether or not Federation is enabled on this server."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Status"}),": It is the current Federation status, which can be one of the following:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Could not enable, settings are not fully set:"})," make sure all the options are correctly filled and saved"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Booting:"})," the federation is initializing"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.em,{children:"[HUB Only]"})," ",(0,o.jsx)(r.strong,{children:"Registering with Hub:"})," the federation is trying to register with the Hub"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.em,{children:"[HUB Only]"})," ",(0,o.jsx)(r.strong,{children:"Disabled, could not register with Hub:"})," the federation could not register with the Hub"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Disabled:"})," the federation is disabled"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Running:"})," the federation is running and ready to communicate with other servers"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Domain"}),": Fill this option with your domain name, usually the one that hosts the Rocket.Chat."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Public Key"}),": All Federation communications are double-encrypted, which means messages cannot be delivered by mistake to the wrong peer. This is your public key, which is specially generated for Rocket.Chat and by Rocket.Chat, and is shared with peers you communicate with.",(0,o.jsx)(r.br,{}),"\n","The encryption process encrypts the message using the Server A private key, and the Server B public key.",(0,o.jsx)(r.br,{}),"\n","When a server receives the message, it uses the Server B private key and the Server A public key to decrypt it.",(0,o.jsx)(r.br,{}),"\n","So, let's say the message ended up on Server C: this server won't have Server B private key to decrypt it, so the message can't be read at all."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Discovery Method"}),": How are you going to be found in the Rocket.Chat Federated Network? You can choose through DNS or, as a fallback, the Rocket.Chat Hub.",(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.strong,{children:"Important:"})," We recommend using the DNS method. The Hub is a tool to allow users to easily adapt, try, and validate the feature or as a different way to be part of the Rocket.Chat Federated Network until DNS record changes are made. Also, the Hub requires external communication and access to a specific e-mail address owned by your domain, as explained below, which introduces extra configuration steps in some protected internal networks."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"adding-federation-to-your-server",children:"Adding Federation to your Server"}),"\n",(0,o.jsx)(r.p,{children:"You have two ways to add your server to the Rocket.Chat Federated Network:"}),"\n",(0,o.jsx)(r.h3,{id:"recommended-configure-your-dns",children:"Recommended: Configure your DNS"}),"\n",(0,o.jsxs)(r.p,{children:["To add your server to the Federated Network using the DNS, fill in all the configuration fields required. Make sure to pick ",(0,o.jsx)(r.code,{children:"true"})," on the ",(0,o.jsx)(r.code,{children:"Enabled"}),", and select ",(0,o.jsx)(r.strong,{children:"DNS"})," as your ",(0,o.jsx)(r.code,{children:"Discovery Method"})," option, save, and follow the guide below."]}),"\n",(0,o.jsxs)(r.p,{children:["Let's suppose we have a domain named ",(0,o.jsx)(r.code,{children:"mydomain.com"}),", and my Rocket.Chat server is hosted at ",(0,o.jsx)(r.code,{children:"mydomain.com"}),", port ",(0,o.jsx)(r.code,{children:"443"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"You must add two DNS records:"}),"\n",(0,o.jsx)(r.h4,{id:"srv-record-200-or-newer",children:"SRV Record (2.0.0 or newer)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Service: ",(0,o.jsx)(r.code,{children:"_rocketchat"})]}),"\n",(0,o.jsxs)(r.li,{children:["Protocol: ",(0,o.jsx)(r.code,{children:"_https"})]}),"\n",(0,o.jsxs)(r.li,{children:["Name: ",(0,o.jsx)(r.code,{children:"mydomain.com"})]}),"\n",(0,o.jsxs)(r.li,{children:["Weight: ",(0,o.jsx)(r.code,{children:"1"})]}),"\n",(0,o.jsxs)(r.li,{children:["Priority: ",(0,o.jsx)(r.code,{children:"1"})]}),"\n",(0,o.jsxs)(r.li,{children:["TTL: ",(0,o.jsx)(r.code,{children:"1 hour"})]}),"\n",(0,o.jsxs)(r.li,{children:["Target: ",(0,o.jsx)(r.code,{children:"mydomain.com"})]}),"\n",(0,o.jsxs)(r.li,{children:["Port: ",(0,o.jsx)(r.code,{children:"443"})]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"public-key-txt-record",children:"Public Key TXT Record"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Host: ",(0,o.jsx)(r.code,{children:"rocketchat-public-key.mydomain.com"})]}),"\n",(0,o.jsxs)(r.li,{children:["Value: ",(0,o.jsx)(r.code,{children:"<my public key, as shown on the configuration screen>"})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Note"}),": Some DNS providers do not allow entering the full public key string. So, after saving, make sure the string is complete: it starts as ",(0,o.jsx)(r.code,{children:"-----BEGIN PUBLIC KEY-----"})," and ends as ",(0,o.jsx)(r.code,{children:"-----END PUBLIC KEY-----"}),". If that is not the case, follow your provider's instructions. For example, AWS Route 53 needs to split the string in two pieces, as follows:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:'"-----BEGIN PUBLIC KEY-----...."\n"...-----END PUBLIC KEY-----"\n'})}),"\n",(0,o.jsx)(r.h4,{id:"if-you-use-http-instead-of-https",children:"If you use http instead of https"}),"\n",(0,o.jsxs)(r.p,{children:["We recommend using ",(0,o.jsx)(r.code,{children:"HTTPS"})," for all kinds of communications, but sometimes that is not possible. If you need, in the SRV DNS entry replace:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["the protocol: change ",(0,o.jsx)(r.code,{children:"_https"})," to ",(0,o.jsx)(r.code,{children:"_http"})]}),"\n",(0,o.jsxs)(r.li,{children:["the port: change ",(0,o.jsx)(r.code,{children:"443"})," to ",(0,o.jsx)(r.code,{children:"80"})]}),"\n"]}),"\n",(0,o.jsxs)(r.h4,{id:"legacy-support-if-your-dns-provider-does-not-support-srv-records-with-_http-or-_https",children:["Legacy Support: If your DNS provider does not support SRV records with ",(0,o.jsx)(r.code,{children:"_http"})," or ",(0,o.jsx)(r.code,{children:"_https"})]}),"\n",(0,o.jsxs)(r.p,{children:["Some DNS providers will not allow setting ",(0,o.jsx)(r.code,{children:"_https"})," or ",(0,o.jsx)(r.code,{children:"_http"})," on SRV records, so we have support for those cases, using our old DNS record resolution method."]}),"\n",(0,o.jsx)(r.h4,{id:"legacy-support-srv-record",children:"Legacy Support: SRV Record"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Service: ",(0,o.jsx)(r.code,{children:"_rocketchat"})]}),"\n",(0,o.jsxs)(r.li,{children:["Protocol: ",(0,o.jsx)(r.code,{children:"_tcp"})]}),"\n",(0,o.jsxs)(r.li,{children:["Name: ",(0,o.jsx)(r.code,{children:"mydomain.com"})]}),"\n",(0,o.jsxs)(r.li,{children:["Weight: ",(0,o.jsx)(r.code,{children:"1"})]}),"\n",(0,o.jsxs)(r.li,{children:["Priority: ",(0,o.jsx)(r.code,{children:"1"})]}),"\n",(0,o.jsxs)(r.li,{children:["TTL: ",(0,o.jsx)(r.code,{children:"1 hour"})]}),"\n",(0,o.jsxs)(r.li,{children:["Target: ",(0,o.jsx)(r.code,{children:"mydomain.com"})]}),"\n",(0,o.jsxs)(r.li,{children:["Port: ",(0,o.jsx)(r.code,{children:"443"})]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"legacy-support-protocol-txt-record-if-not-provided-https-will-be-used",children:"Legacy Support: protocol TXT Record (if not provided, HTTPS will be used)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Host: ",(0,o.jsx)(r.code,{children:"rocketchat-tcp-protocol.mydomain.com"})]}),"\n",(0,o.jsxs)(r.li,{children:["Value: ",(0,o.jsx)(r.code,{children:"https"})," or ",(0,o.jsx)(r.code,{children:"http"})]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"test-your-configuration-from-cli",children:"Test your configuration from CLI"}),"\n",(0,o.jsx)(r.p,{children:"From your CLI, issue the following commands and make sure the answers look like the following:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:'dig srv _rocketchat._https.mydomain.com\n...\n;; ANSWER SECTION:\n_rocketchat._https.mydomain.com. 1800 IN SRV    1 1 443 mydomain.com.\n...\n\ndig -t txt rocketchat-public-key.mydomain.com\n...\n;; ANSWER SECTION:\nrocketchat-public-key.mydomain.com. 1799 IN TXT "-----BEGIN PUBLIC KEY----- THEPUBLICKEY :) -----END PUBLIC KEY-----"\n...\n'})}),"\n",(0,o.jsx)(r.h4,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(r.p,{children:"When the SRV and the Public Key TXT records are added to the DNS records, other peers should be able to find you after the propagation."}),"\n",(0,o.jsx)(r.h3,{id:"alternative-register-on-hub",children:"Alternative: Register on Hub"}),"\n",(0,o.jsxs)(r.p,{children:["To add your server to the Federated Network using the Hub, fill in all the configuration fields needed. Make sure to pick ",(0,o.jsx)(r.strong,{children:"true"})," on the ",(0,o.jsx)(r.code,{children:"Enabled"})," field), pick the ",(0,o.jsx)(r.strong,{children:"Hub"})," as your ",(0,o.jsx)(r.code,{children:"Discovery Method"})," option, save, and follow the guide below."]}),"\n",(0,o.jsx)(r.h4,{id:"confirm-domain-ownership",children:"Confirm Domain Ownership"}),"\n",(0,o.jsxs)(r.p,{children:["When you click ",(0,o.jsx)(r.strong,{children:"Save"})," on the Federation config screen, you begin your registration process. This process takes a few seconds, and if you are not yet registered to the Hub, you should receive an email at ",(0,o.jsx)(r.code,{children:"webmaster@mydomain.com"}),", where ",(0,o.jsx)(r.code,{children:"mydomain.com"})," is the domain address you configured on the ",(0,o.jsx)(r.code,{children:"Domain"})," field."]}),"\n",(0,o.jsx)(r.p,{children:"Make sure the data is correct and confirm the changes."}),"\n",(0,o.jsx)(r.p,{children:"After that step, other peers should be able to find you in the Rocket.Chat Federated Network."}),"\n",(0,o.jsx)(r.h2,{id:"using-rocketchat-federation",children:"Using Rocket.Chat Federation"}),"\n",(0,o.jsxs)(r.p,{children:["Click ",(0,o.jsx)(r.a,{href:"/docs-exp/docs/use-rocket.chat/rocket.chat-federation",children:"here"})," to learn how to use Rocket.Chat Federation."]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>d});var o=t(96540);const n={},i=o.createContext(n);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);