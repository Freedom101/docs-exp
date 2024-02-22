"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12807],{24625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(85893),s=t(11151);const o={description:"Learn how to use Google Translate feature with your Rocket.Chat workspace"},r="Google Translate Integration ",i={id:"setup-and-configure/advanced-workspace-management/google-translate-integration",title:"Google Translate Integration&#x20;",description:"Learn how to use Google Translate feature with your Rocket.Chat workspace",source:"@site/docs/setup-and-configure/advanced-workspace-management/google-translate-integration.md",sourceDirName:"setup-and-configure/advanced-workspace-management",slug:"/setup-and-configure/advanced-workspace-management/google-translate-integration",permalink:"/docs-exp/docs/setup-and-configure/advanced-workspace-management/google-translate-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/setup-and-configure/advanced-workspace-management/google-translate-integration.md",tags:[],version:"current",frontMatter:{description:"Learn how to use Google Translate feature with your Rocket.Chat workspace"},sidebar:"tutorialSidebar",previous:{title:"Database Migration",permalink:"/docs-exp/docs/setup-and-configure/advanced-workspace-management/database-migration"},next:{title:"Restoring an Admin User",permalink:"/docs-exp/docs/setup-and-configure/advanced-workspace-management/restoring-an-admin-user"}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"google-translate-integration-",children:"Google Translate Integration "}),"\n",(0,a.jsx)(n.p,{children:"In the era of cloud computing, the integration of cloud services into communication platforms is essential. Rocket.Chat has adopted this trend, particularly by incorporating Google Cloud features. This document will primarily focus on how Rocket.Chat leverages the Google Auto Translate feature, a significant aspect of Google Cloud services."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Google Auto Translate"}),": Rocket.Chat leverages Google Cloud's Auto Translate feature to enhance communication within its platform. This feature allows every communication received on a channel to be translated using the Google translation engine. To use this feature, a Google Translate API key is required. The process of obtaining this key involves creating a project on the Google Cloud Console, enabling the Cloud Translation API, and creating the API key under credentials. The ",(0,a.jsx)(n.a,{href:"https://cloud.google.com/translate/pricing",children:"official Google API documentation"})," explains how to get and use a Google Translate API key."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Getting the key"}),": To get the Google Translate API Key,"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.a,{href:"http://cloud.google.com/console/",children:"Google Cloud Console"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Create a Project and select it."}),"\n",(0,a.jsxs)(n.li,{children:["On the navigation menu, go to ",(0,a.jsx)(n.strong,{children:"APIs & Services >"})," ",(0,a.jsx)(n.strong,{children:"Dashboard."})]}),"\n",(0,a.jsxs)(n.li,{children:["Click on ",(0,a.jsx)(n.strong,{children:"ENABLE APIS AND SERVICES"})," and search for Cloud Translation API."]}),"\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.strong,{children:"Credentials."})]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Create credentials."})]}),"\n",(0,a.jsxs)(n.li,{children:["Select ",(0,a.jsx)(n.strong,{children:"API key."})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Configuration"}),": It's time to configure auto-translate in your workspace now that you have your API key.t."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to ",(0,a.jsx)(n.strong,{children:"Administration > Workspace > Settings > Message > Auto-Translate"})]}),"\n",(0,a.jsxs)(n.li,{children:["Enable ",(0,a.jsx)(n.strong,{children:"Auto-Translate"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Select ",(0,a.jsx)(n.strong,{children:"Google"})," as the ",(0,a.jsx)(n.strong,{children:"Service Provider"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Only users with ",(0,a.jsx)(n.code,{children:"auto-translate"})," ",(0,a.jsx)(n.a,{href:"../../use-rocket.chat/workspace-administration/permissions/",children:"permission"})," can use this feature."]})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Enabling Auto-Translate on a Channel"}),": Auto-Translate can be enabled on a per-channel basis. When enabled, any messages sent in a language that Google Translate supports will be translated into the user's chosen language. The translated messages are only visible to the user who enabled Auto Translation, while the original, untranslated messages are displayed for users who have not enabled this feature."]}),"\n",(0,a.jsx)(n.p,{children:"To activate Auto-Translate in a room,"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click the ",(0,a.jsx)(n.strong,{children:"kebab menu"})," in the room header."]}),"\n",(0,a.jsxs)(n.li,{children:["Select ",(0,a.jsx)(n.strong,{children:"Auto-Translate"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Enable ",(0,a.jsx)(n.strong,{children:"Automatic Translation"})," and select your desired language."]}),"\n",(0,a.jsxs)(n.li,{children:["An ",(0,a.jsx)(n.strong,{children:"auto-translate icon"})," ",(0,a.jsx)(n.img,{src:t(40525).Z+"",width:"19",height:"15"})," is displayed beside the room name to indicate that the feature is active."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To translate a message,"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Hover over the message and click the ",(0,a.jsx)(n.strong,{children:"kebab menu."})]}),"\n",(0,a.jsxs)(n.li,{children:["Select ",(0,a.jsx)(n.strong,{children:"Translate"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Rocket.Chat's integration with Auto Translate feature significantly enhances the platform's communication capabilities. By leveraging Google's powerful translation engine, Rocket.Chat ensures that language barriers do not hinder communication within its platform."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},40525:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAIAAACJJmN7AAAACXBIWXMAABJ0AAASdAHeZh94AAAAB3RJTUUH5wIZDzsdxKwOMwAAAdFJREFUKJFj/P//PwNZgImwkmdHlh16QUjn61ObNlx49xdF7MWp1fOX7bvz8s6FE3eQpRiRXPtlX3Vg+yk2v46tucYMDAwMv65vmrJs+/nrj158/MXAwMAmZJYzqdVTHKqaBWHI9wsnT/Hw8H85df0Rg7EcRIxV0dNfaPXMm/5zp4bIMeNy7YOrp9icclPNXpy6APEWm6ZfbpKfmQQPw/dHVy/fefEdh85HZ498sTa0MTDXun7y2keI8y9MjvFOnneH4c3hWXWZsX7esc37XvxF1/niwqkXZmYGbOIG5lKnTl78xcDw68jU6n1axd2pWgzKidM3zU1X+PXiUHv12keoOj9eO3md4VRnoKtr8vxnDEcuXGNguHb+0C8ndycJNgYGhl+PNvTOf+aUHq/16PiFd8gh9OviyVNSUd2TQlUYGL6c6I1ddu0Rg42kFMPhK9desP1iuD6z+q6EX1Or1ulYNkU5IYie/////////+qsAK+J5yHs/x/2VrnkbXzx//PleXnBXi4uXkk1806++P///tIkl7AZ16CqIDp/np9VMuP8T6jY/7d7W6u2vfiPAl5sK/H1ylv/HC7A8J9I8OLwvPVXPyMJIKch0gARKR4HAABCyTYA9DysYAAAAABJRU5ErkJggg=="},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(67294);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);