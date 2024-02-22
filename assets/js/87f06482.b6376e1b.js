"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27808],{90608:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=o(85893),i=o(11151);const s={},r="Google OAuth Setup",c={id:"use-rocket.chat/authentication/oauth/google-oauth-setup",title:"Google OAuth Setup",description:"Signing in with Google is a hassle-free and secure way to access a large number of web applications today. Learn how you can set up Google sign-in for your users on this page.",source:"@site/docs/use-rocket.chat/authentication/oauth/google-oauth-setup.md",sourceDirName:"use-rocket.chat/authentication/oauth",slug:"/use-rocket.chat/authentication/oauth/google-oauth-setup",permalink:"/docs-exp/docs/use-rocket.chat/authentication/oauth/google-oauth-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/authentication/oauth/google-oauth-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitLab OAuth Setup",permalink:"/docs-exp/docs/use-rocket.chat/authentication/oauth/gitlab-oauth-setup"},next:{title:"LinkedIn OAuth Setup",permalink:"/docs-exp/docs/use-rocket.chat/authentication/oauth/linkedin-oauth-setup"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure Google OAuth",id:"configure-google-oauth",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"google-oauth-setup",children:"Google OAuth Setup"}),"\n",(0,n.jsx)(t.p,{children:"Signing in with Google is a hassle-free and secure way to access a large number of web applications today. Learn how you can set up Google sign-in for your users on this page."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A project on the ",(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/",children:"Google Cloud console"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["A consent screen. You can create one from ",(0,n.jsx)(t.strong,{children:"API & Services"})," > ",(0,n.jsx)(t.strong,{children:"OAuth consent screen"})," and fill in the required fields."]}),"\n",(0,n.jsxs)(t.li,{children:["Credentials \u2014 the client ID and secret. You can create the credentials by clicking ",(0,n.jsx)(t.strong,{children:"New Credentials"})," and then selecting ",(0,n.jsx)(t.strong,{children:"OAuth client ID"}),". Select ",(0,n.jsx)(t.strong,{children:"Web application"})," as the application type, then fill in the required details."]}),"\n",(0,n.jsx)(t.li,{children:"The authorized redirect URIs that you need to enter are as follows:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://YOU DOMAIN/_oauth/google?close\nhttps://YOU DOMAIN/_oauth/google\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["It is necessary to register with ",(0,n.jsx)(t.code,{children:"?close"})," to avoid receiving a ",(0,n.jsx)(t.code,{children:"Erro 400: redirect_uri_mismatch"})," (",(0,n.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat/issues/16919#issuecomment-601321898",children:"reference"}),")"]})}),"\n",(0,n.jsx)(t.h2,{id:"configure-google-oauth",children:"Configure Google OAuth"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["On your Rocket.Chat workspace, navigate to ",(0,n.jsx)(t.strong,{children:"Administration > Workspace > Settings > OAuth > Google"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Enable ",(0,n.jsx)(t.strong,{children:"Google Login"})," and fill in the OAuth credentials you copied earlier."]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save changes"}),". "]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.strong,{children:"Sign in with Google"})," button appears on your workspace's login page. Users can now ",(0,n.jsx)(t.strong,{children:"Sign in with Google"}),"!"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>r});var n=o(67294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);