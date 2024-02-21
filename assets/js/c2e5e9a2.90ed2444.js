"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50673],{46115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(74848),i=n(28453);const o={description:"Central Authentication Service allows members to use one set of credentials to sign in to multiple sites over multiple protocols."},r="CAS",a={id:"use-rocket.chat/workspace-administration/settings/cas",title:"CAS",description:"Central Authentication Service allows members to use one set of credentials to sign in to multiple sites over multiple protocols.",source:"@site/docs/use-rocket.chat/workspace-administration/settings/cas.md",sourceDirName:"use-rocket.chat/workspace-administration/settings",slug:"/use-rocket.chat/workspace-administration/settings/cas",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/cas",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-rocket.chat/workspace-administration/settings/cas.md",tags:[],version:"current",frontMatter:{description:"Central Authentication Service allows members to use one set of credentials to sign in to multiple sites over multiple protocols."},sidebar:"tutorialSidebar",previous:{title:"Bots",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/bots"},next:{title:"Custom Emoji Filesystem",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/custom-emoji-filesystem"}},l={},c=[{value:"Attribute Handling",id:"attribute-handling",level:3},{value:"CAS Login Layout",id:"cas-login-layout",level:3}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"cas",children:"CAS"}),"\n",(0,s.jsx)(t.p,{children:"Central Authentication Service (CAS) allows users to use one set of credentials to sign in to many sites over many different protocols."}),"\n",(0,s.jsx)(t.p,{children:"Rocket.Chat includes a CAS plugin that allows you to use your existing CAS server for user authentication."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["For more information on CAS, see the ",(0,s.jsx)(t.a,{href:"https://github.com/apereo/cas",children:"CAS github repo"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["To access this setting, navigate to ",(0,s.jsx)(t.strong,{children:"Administration"})," > ",(0,s.jsx)(t.strong,{children:"Workspace"})," > ",(0,s.jsx)(t.strong,{children:"Settings"})," > ",(0,s.jsx)(t.strong,{children:"CAS"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Remember to hit ",(0,s.jsx)(t.strong,{children:"Save Changes"})," in order to apply any changes made."]})}),"\n",(0,s.jsxs)(t.p,{children:["Your Rocket.Chat workspace is the ",(0,s.jsx)(t.em,{children:"CAS client"}),". You must provide a compatible ",(0,s.jsx)(t.em,{children:"CAS Server"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Once you know your CAS server's URL, proceed with the settings below"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Enabled"}),": Enable CAS on your workspace"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SSO Base URL"}),": The base URL of your external SSO service e.g ",(0,s.jsx)(t.code,{children:"https://sso.example.undef/sso/"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SSO Login URL"}),": The login URL of your external SSO service e.g ",(0,s.jsx)(t.code,{children:"https://<<CAS_server_url>>/cas/login"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"CAS Version"}),": Only use a supported CAS version supported by your CAS SSO service e.g ",(0,s.jsx)(t.code,{children:"(1.0|2.0)"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"/cas"})," and ",(0,s.jsx)(t.code,{children:"/cas/login"})," URLs are defaults but not mandatory. Check with your CAS server provider if the defaults do not work."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Trust CAS username"}),": When enabled, Rocket.Chat trusts that any username from CAS belongs to the same user on Rocket.Chat.",(0,s.jsx)(t.br,{}),"\n","This may be needed if a user is renamed on CAS, but may also allow people to take over Rocket.Chat accounts by renaming their own CAS users."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Allow user creation"}),": Allows CAS User creation from data provided by the CAS ticket when enabled."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"attribute-handling",children:"Attribute Handling"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Always Sync User Data"}),": When set to true, it synchronizes external CAS User data into available attributes upon login. Note: Attributes are always synced upon account creation anyway."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Attribute Map"}),": Use this JSON input to build internal attributes (key) from external attributes (value). External attribute names enclosed with '%' are interpolated in value strings."]}),"\n",(0,s.jsxs)(t.p,{children:["Example, ",(0,s.jsx)(t.code,{children:'{"email":"%email%", "name":"%firstname%, %lastname%"}'})]}),"\n",(0,s.jsxs)(t.p,{children:["The attribute map is always interpolated. In CAS 1.0, only the ",(0,s.jsx)(t.code,{children:"username"})," attribute is available. Available internal attributes are: username, name, email, and rooms; rooms is a comma-separated list of rooms to join upon user creation e.g: ",(0,s.jsx)(t.code,{children:'{"rooms": "%team%,%department%"}'})," would join CAS users on creation to their team and department channel."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"cas-login-layout",children:"CAS Login Layout"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Login Popup Width"}),": Lets you set the width in ",(0,s.jsx)(t.code,{children:"px"})," of the popup screen during login."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Login Popup Height"}),": This lets you set the popup height in ",(0,s.jsx)(t.code,{children:"px"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Login Button Label"}),": Set the button's label."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Login Button Text Color"}),": Sets the login button text color from the existing variable."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Login Button Background Color"}),": Sets the background color of the login button."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Autoclose Login Popup"}),": When enabled, the popups automatically close after authenticating."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After successful configuration, your registration and login screens have the CAS button available."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["CAS by ja-sig requires ",(0,s.jsx)(t.code,{children:"ssl/tls"})," all connections."]}),"\n",(0,s.jsxs)(t.li,{children:["Any Drupal 7 or 8 sites can serve as a compatible CAS Server. To learn more, see the  ",(0,s.jsx)(t.a,{href:"https://www.drupal.org/project/cas",children:"Drupal project guide"}),"."]}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);