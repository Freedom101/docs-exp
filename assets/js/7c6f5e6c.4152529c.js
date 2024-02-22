"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84926],{88028:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>r});var n=t(85893),a=t(11151);const o={},i="WhatsApp Cloud App",p={id:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/README",title:"WhatsApp Cloud App",description:"The Rocket.Chat WhatsApp Cloud App provides direct communication between Rocket.Chat and WhatsApp using the WhatsApp Cloud API without needing third-party services like 360Dialog. It is a more secure option and addresses privacy concerns. Your Rocket.Chat workspace is linked through a Facebook Developer app with the WhatsApp setup.",source:"@site/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/README.md",sourceDirName:"extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app",slug:"/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WhatsApp Agent's Guide",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp/whatsapp-agents-guide"},next:{title:"Configure Whatsapp Cloud App",permalink:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/configure-whatsapp-cloud-app"}},c={},r=[{value:"Install Whatsapp Cloud App",id:"install-whatsapp-cloud-app",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Set up Facebook Developer Account with Whatsapp",id:"set-up-facebook-developer-account-with-whatsapp",level:2},{value:"Adding WhatsApp Business phone number to the Facebook app",id:"adding-whatsapp-business-phone-number-to-the-facebook-app",level:3},{value:"Create a Permanent Whatsapp Cloud API Token",id:"create-a-permanent-whatsapp-cloud-api-token",level:3},{value:"Uninstall Whatsapp App",id:"uninstall-whatsapp-app",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"whatsapp-cloud-app",children:"WhatsApp Cloud App"}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:"..//Premium.svg",alt:""}),(0,n.jsx)("figcaption",{})]}),"\n",(0,n.jsxs)(s.p,{children:["The Rocket.Chat WhatsApp Cloud App provides direct communication between Rocket.Chat and WhatsApp using the WhatsApp Cloud API without needing third-party services like 360Dialog. It is a more secure option and addresses privacy concerns. Your Rocket.Chat workspace is linked through a ",(0,n.jsx)(s.a,{href:"https://developers.facebook.com/apps",children:"Facebook Developer app"})," with the WhatsApp setup."]}),"\n",(0,n.jsx)(s.h2,{id:"install-whatsapp-cloud-app",children:"Install Whatsapp Cloud App"}),"\n",(0,n.jsx)(s.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"It is required to have your workspace on a secured, publicly available domain."}),"\n",(0,n.jsxs)(s.li,{children:["You need a Meta developer's account to get the WhatsApp API credentials.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Make available a Facebook Business account to link with."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Your workspace must be registered on Rocket.Chat Cloud."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To install the WhatsApp Cloud Rocket.Chat App,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Administration > Apps > Marketplace."})]}),"\n",(0,n.jsxs)(s.li,{children:["Search for the ",(0,n.jsx)(s.strong,{children:"WhatsApp Cloud"})," app."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Install"})," and accept the needed permissions. You receive a message from ",(0,n.jsx)(s.code,{children:"whatsapp-cloud.bot"})," in the ",(0,n.jsx)(s.code,{children:"#omnichannel-whatsapp-cloud-setup"})," channel with setup instructions."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"set-up-facebook-developer-account-with-whatsapp",children:"Set up Facebook Developer Account with Whatsapp"}),"\n",(0,n.jsxs)(s.p,{children:["Meta provides developer tools through their ",(0,n.jsx)(s.a,{href:"http://developers.facebook.com/",children:"Facebook Developer's"})," portal to easily build around the Meta ecosystem."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Login to your Facebook ",(0,n.jsx)(s.a,{href:"http://developers.facebook.com",children:"Developer account"})," and navigate to ",(0,n.jsx)(s.strong,{children:"My Apps"})]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"You must verify your account before proceeding if it is your first time accessing Facebook for developers."})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Click on ",(0,n.jsx)(s.strong,{children:"Create App"})," to create a new app"]}),"\n",(0,n.jsxs)(s.li,{children:["Select Business as the ",(0,n.jsx)(s.strong,{children:"App type"})," and fill in the details","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"App name"}),": The name you want to call your app."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Contact address"}),": Your email to use when contacting you."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Business Account"}),": Select a business account if you have one. A new account can be created automatically if none is selected."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Click on ",(0,n.jsx)(s.strong,{children:"Setup"})," against ",(0,n.jsx)(s.strong,{children:"WhatsApp"})," in the list of products to add displayed. A WhatsApp section is added to the left panel of your Facebook Developer dashboard."]}),"\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"WhatsApp"})," > ",(0,n.jsx)(s.strong,{children:"Getting Started"}),"; you will see a set of credentials to be used later to set ",(0,n.jsx)(s.a,{href:"/docs-exp/docs/extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/omnichannel-apps/whatsapp-cloud-app/configure-whatsapp-cloud-app",children:"up the WhatsApp Cloud App in Rocket.Chat"})]}),"\n",(0,n.jsx)(s.li,{children:"Verify any existing WhatsApp number to receive messages while in Test Mode."}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["The access token provided is temporary; see ",(0,n.jsx)(s.a,{href:"./#create-a-permanent-whatsapp-cloud-api-token",children:"this guide"})," on how to create a permanent token."]})}),"\n",(0,n.jsx)(s.h3,{id:"adding-whatsapp-business-phone-number-to-the-facebook-app",children:"Adding WhatsApp Business phone number to the Facebook app"}),"\n",(0,n.jsx)(s.p,{children:"It is optional to link your original WhatsApp Business number to the App."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"WhatsApp"})," > ",(0,n.jsx)(s.strong,{children:"Getting Started"})," and click on ",(0,n.jsx)(s.strong,{children:"Add phone number."})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Follow the guides below to learn more about how to add a WhatsApp production number here:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/add-a-phone-number/",children:"add-a-phone-number"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://youtu.be/CEt_KMMv3V8?t=388"})}),"\n",(0,n.jsxs)(s.p,{children:["When you connect a new number to WhatsApp cloud, you will get  some free messages per month. If you exceed this quota, your card will start getting charged. See the ",(0,n.jsx)(s.a,{href:"https://developers.facebook.com/docs/whatsapp/pricing/",children:"official pricing guide"})," to learn more about the billing and free tier."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"We recommend adding your card details as soon as you connect a new number. This ensures that your service integration won't be disrupted if you go beyond the monthly free limit."})}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsxs)(s.p,{children:["If access to cloud services is suspended on your workspace, you may still incur charges from ",(0,n.jsx)(s.strong,{children:"Whatsapp"}),", as  Rocket.Chat does not manage these services and can not cancel them on your behalf. See your ",(0,n.jsx)(s.a,{href:"https://developers.facebook.com/docs/whatsapp/cloud-api/get-started",children:"WhatsApp Business Account panel"})," for any pending bills and to manage your payments."]})}),"\n",(0,n.jsx)(s.h3,{id:"create-a-permanent-whatsapp-cloud-api-token",children:"Create a Permanent Whatsapp Cloud API Token"}),"\n",(0,n.jsxs)(s.p,{children:["Facebook uniquely provides the WhatsApp Cloud API token, Phone ",(0,n.jsx)(s.em,{children:"Number ID"}),", and ",(0,n.jsx)(s.em,{children:"WhatsApp Business Account ID"}),". These credentials are needed by every business when using WhatsApp Cloud services."]}),"\n",(0,n.jsx)(s.p,{children:"The token provided by Facebook initially is temporal. Optionally, you can get a permanent WhatsApp Cloud API token."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Open the app panel on your ",(0,n.jsx)(s.a,{href:"https://developers.facebook.com/apps",children:"Facebook Developers portal"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Click to open the business page linked to the app."}),"\n",(0,n.jsxs)(s.li,{children:["From the Facebook business setting page, navigate to ",(0,n.jsx)(s.strong,{children:"System user."})]}),"\n",(0,n.jsxs)(s.li,{children:["A list of existing users on that app is seen, if any. Click ",(0,n.jsx)(s.strong,{children:"Add"})," to add a user, then ",(0,n.jsx)(s.strong,{children:"Accept"})," the terms and conditions."]}),"\n",(0,n.jsxs)(s.li,{children:["Fill in the ",(0,n.jsx)(s.strong,{children:"System username"}),", then set the ",(0,n.jsx)(s.strong,{children:"System User Role"})," to ",(0,n.jsx)(s.strong,{children:"Admin."})," Click ",(0,n.jsx)(s.strong,{children:"Create System User."})]}),"\n",(0,n.jsxs)(s.li,{children:["Click on ",(0,n.jsx)(s.strong,{children:"Add Assets"})," across the newly created user to add assets to use."]}),"\n",(0,n.jsxs)(s.li,{children:["A modal opens up, navigate to ",(0,n.jsx)(s.strong,{children:"Apps"}),", select the app, and enable ",(0,n.jsx)(s.strong,{children:"Manage App."})," Then ",(0,n.jsx)(s.strong,{children:"Save changes."})]}),"\n",(0,n.jsxs)(s.li,{children:["The asset gets added to the system user. Click ",(0,n.jsx)(s.strong,{children:"Done."})]}),"\n",(0,n.jsxs)(s.li,{children:["Click on ",(0,n.jsx)(s.strong,{children:"Generate New Token"})," against the user to generate a new access token."]}),"\n",(0,n.jsxs)(s.li,{children:["Select the ",(0,n.jsx)(s.strong,{children:"App"})," from the dropdown and check the ",(0,n.jsx)(s.code,{children:"whatsapp_business_messaging"})," and ",(0,n.jsx)(s.code,{children:"whatsapp_business_management"})," permissions. Then, click ",(0,n.jsx)(s.strong,{children:"Generate Token."})]}),"\n",(0,n.jsx)(s.li,{children:"The permanent token is generated and presented to you. Copy this token and use it in your integrations."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"uninstall-whatsapp-app",children:"Uninstall Whatsapp App"}),"\n",(0,n.jsx)(s.p,{children:"To delete the Whatsapp app from your workspace,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Administration > Apps > Installed."})]}),"\n",(0,n.jsxs)(s.li,{children:["Click th",(0,n.jsx)(s.strong,{children:"e kebab menu"})," against the ",(0,n.jsx)(s.strong,{children:"Whatsapp app."})]}),"\n",(0,n.jsxs)(s.li,{children:["Select ",(0,n.jsx)(s.strong,{children:"Uninstall"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Yes"})," to confirm the uninstallation."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs-exp/docs/resources/frequently-asked-questions/whatsapp-cloud-api-faqs",children:"whatsapp-cloud-api-faqs.md"})})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>p,a:()=>i});var n=t(67294);const a={},o=n.createContext(a);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function p(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);