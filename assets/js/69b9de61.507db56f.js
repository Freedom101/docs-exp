"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88621],{33756:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(74848),r=s(28453);const i={description:"Integration between Rocket.Chat and Salesforce CRM platform."},c="Salesforce CRM Integration",o={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/salesforce-crm-integration/README",title:"Salesforce CRM Integration",description:"Integration between Rocket.Chat and Salesforce CRM platform.",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/salesforce-crm-integration/README.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/salesforce-crm-integration",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/salesforce-crm-integration/",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/salesforce-crm-integration/",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/salesforce-crm-integration/README.md",tags:[],version:"current",frontMatter:{description:"Integration between Rocket.Chat and Salesforce CRM platform."},sidebar:"tutorialSidebar",previous:{title:"Rasa App",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/rasa-app"},next:{title:"Salesforce CRM Agent's Guide",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/salesforce-crm-integration/salesforce-crm-agents-guide"}},a={},l=[{value:"Configure Salesforce CRM ",id:"configure-salesforce-crm-",level:2},{value:"Install Salesforce CRM Integration App",id:"install-salesforce-crm-integration-app",level:2},{value:"Configure Salesforce CRM Integration App",id:"configure-salesforce-crm-integration-app",level:2},{value:"Salesforce CRM Integration App Shortcuts",id:"salesforce-crm-integration-app-shortcuts",level:2},{value:"Uninstall Salesforce CRM Integration App",id:"uninstall-salesforce-crm-integration-app",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"salesforce-crm-integration",children:"Salesforce CRM Integration"}),"\n",(0,t.jsx)(n.h2,{id:"configure-salesforce-crm-",children:"Configure Salesforce CRM "}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a private key and public key certificate with these commands: "}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Linux has OpenSSL by default to run these commands. However, you can choose your preferred method."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"openssl genrsa -out privatekey.pem 1024\n\nopenssl req -new -x509 -key privatekey.pem -out publickey.cer -days 3650\n"})}),"\n",(0,t.jsx)(n.p,{children:" To view the keys you just created, run this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ls -lrt\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Retrieve and copy the private key using this command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"openssl rsa -in privatekey.pem -check\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new connected app on Salesforce.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fill in the name, email, and other required information."}),"\n",(0,t.jsxs)(n.li,{children:["Check the ",(0,t.jsx)(n.strong,{children:"Enable OAuth Settings"})," option."]}),"\n",(0,t.jsx)(n.li,{children:"Add your callback URL."}),"\n",(0,t.jsxs)(n.li,{children:["Check the ",(0,t.jsx)(n.strong,{children:"Use Digital signatures"})," option and upload the public key certificate ",(0,t.jsx)(n.em,{children:"(publickey.cer)"})," you created earlier."]}),"\n",(0,t.jsxs)(n.li,{children:["For the ",(0,t.jsx)(n.strong,{children:"Selected OAuth scopes"}),", add the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"api refresh_token offline_access"})})," option. "]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Manage Consumer Key"})," and copy the ",(0,t.jsx)(n.strong,{children:"Consumer Key"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Settings > Apps > Manage Apps > Connected Apps."})," From the list of connected apps, click the ",(0,t.jsx)(n.strong,{children:"Edit"})," action beside the app you created earlier.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Admin approved users are pre-authorized"})," option for ",(0,t.jsx)(n.strong,{children:"Permitted Users"})," dropdown option."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Settings > Users > Users"})," and confirm your user profile name. "]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Settings > Users > Profile."})," From the list of profiles, click the ",(0,t.jsx)(n.strong,{children:"Edit"})," action beside your user's profile name. Alternatively, click the profile name, then hit the ",(0,t.jsx)(n.strong,{children:"Edit"})," button**.** ","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Scroll to ",(0,t.jsx)(n.strong,{children:"Connected App Access"})," and select the checkbox of the app you created."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-salesforce-crm-integration-app",children:"Install Salesforce CRM Integration App"}),"\n",(0,t.jsx)(n.p,{children:"To install the Salesforce CRM Integration App,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Administration > Apps > Marketplace."})]}),"\n",(0,t.jsxs)(n.li,{children:["Search for the ",(0,t.jsx)(n.strong,{children:"Salesforce CRM Integration"})," app."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Install"})," and accept the needed permissions. "]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"You must have the"})," ",(0,t.jsx)(n.a,{href:"https://docs.rocket.chat/use-rocket.chat/omnichannel#enable-omnichannel",children:(0,t.jsx)(n.strong,{children:"Omnichannel feature"})})," ",(0,t.jsx)(n.strong,{children:"enabled and have"})," ",(0,t.jsx)(n.a,{href:"https://docs.rocket.chat/use-rocket.chat/omnichannel/agents",children:(0,t.jsx)(n.strong,{children:"agents"})})," ",(0,t.jsx)(n.strong,{children:"and"})," ",(0,t.jsx)(n.a,{href:"https://docs.rocket.chat/use-rocket.chat/omnichannel/managers",children:(0,t.jsx)(n.strong,{children:"managers"})})," ",(0,t.jsx)(n.strong,{children:"assigned to receive and send Omnichannel messages."})]})}),"\n",(0,t.jsx)(n.h2,{id:"configure-salesforce-crm-integration-app",children:"Configure Salesforce CRM Integration App"}),"\n",(0,t.jsx)(n.p,{children:"To configure the Salesforce CRM Integration App,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Salesforce CRM Integration App Info"})," screen, navigate to ",(0,t.jsx)(n.strong,{children:"Settings."})]}),"\n",(0,t.jsxs)(n.li,{children:["Update the required fields:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consumer Key:"})," The consumer key from your Salesforce instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Private Key:"})," The private key from your Salesforce instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Salesforce Username"}),": Your salesforce username, it's useful for identification."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authentication URL"}),": Authentication URL for Salesforce Api. In the case of production, this should be ",(0,t.jsx)(n.a,{href:"https://login.salesforce.com/services/oauth2/token",children:"https://login.salesforce.com/services/oauth2/token"})," . "]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Audience for JWT"}),": In case of production, this should be ",(0,t.jsx)(n.a,{href:"https://login.salesforce.com/",children:"https://login.salesforce.com"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Display Contact information when assigning the agent to the chat"}),": If enabled, Salesforce contact information will be displayed to agents when assigned to chats."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auto-Save/Update Contacts when a Chat Ends"}),": If enabled, the app will auto-save/update the customers' info on Salesforce once an agent closes the chat."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Metadata Refresh Interval(in Minutes)"}),": The duration within which the app will automatically refresh its cache. For a better user experience, the app will cache some meta-data information from Salesforce."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Salesforce Session Timeout(in Minutes)"}),": It should be the same as the ",(0,t.jsx)(n.strong,{children:"Session Timeout"})," setting on your Salesforce Setting ( ",(0,t.jsx)(n.strong,{children:"Setup"})," > ",(0,t.jsx)(n.strong,{children:"Session Settings"})," > ",(0,t.jsx)(n.strong,{children:"Session Timeout"})," > ",(0,t.jsx)(n.strong,{children:"Timeout Value"})," )."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes."})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"salesforce-crm-integration-app-shortcuts",children:"Salesforce CRM Integration App Shortcuts"}),"\n",(0,t.jsx)(n.p,{children:"The Salesforce CRM Integration lists shortcuts to ease usage during Omnichannel conversations. "}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/salesforce contact"})})," : View Contact information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/salesforce create-contact"})})," : Create a new contact."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/salesforce cases"})})," : View All Contact cases."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/salesforce create-case"})})," : Create a new case."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/salesforce case 123"})})," : View information about a specific Case using the Case Number."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/salesforce help"})})," : Shows help message."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"uninstall-salesforce-crm-integration-app",children:"Uninstall Salesforce CRM Integration App"}),"\n",(0,t.jsx)(n.p,{children:"To delete the Salesforce CRM Integration app from your workspace,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Administration > Apps > Installed."})]}),"\n",(0,t.jsxs)(n.li,{children:["Click th",(0,t.jsx)(n.strong,{children:"e kebab menu"})," against the ",(0,t.jsx)(n.strong,{children:"Salesforce CRM Integration"})," app**.**"]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Uninstall"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Yes"})," to confirm the uninstallation."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);