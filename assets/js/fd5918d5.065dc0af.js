"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35997],{45575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(74848),s=t(28453);const r={},o="Okta Identity Cloud Service",c={id:"use-rocket.chat/authentication/openid-connect/okta-identity-cloud-service",title:"Okta Identity Cloud Service",description:"Using Okta as an OpenID Connect identity provider is similar to using it as an OAuth provider, but OpenConnect ID has additional features specific to identity and access management. You can find more information on the OAuth 2.0 and OpenID Connect overview page.",source:"@site/docs/use-rocket.chat/authentication/openid-connect/okta-identity-cloud-service.md",sourceDirName:"use-rocket.chat/authentication/openid-connect",slug:"/use-rocket.chat/authentication/openid-connect/okta-identity-cloud-service",permalink:"/docs-exp/docs/use-rocket.chat/authentication/openid-connect/okta-identity-cloud-service",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/authentication/openid-connect/okta-identity-cloud-service.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Keycloak",permalink:"/docs-exp/docs/use-rocket.chat/authentication/openid-connect/keycloak"},next:{title:"SAML",permalink:"/docs-exp/docs/use-rocket.chat/authentication/saml/"}},a={},l=[{value:"Configure Okta in Rocket.Chat",id:"configure-okta-in-rocketchat",level:2},{value:"Configure Okta as the identity provider",id:"configure-okta-as-the-identity-provider",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"okta-identity-cloud-service",children:"Okta Identity Cloud Service"}),"\n",(0,i.jsxs)(n.p,{children:["Using Okta as an OpenID Connect identity provider is similar to ",(0,i.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/authentication/oauth/additional-oauth-methods#custom-oauth-okta",children:"using it as an OAuth provider"}),", but OpenConnect ID has additional features specific to identity and access management. You can find more information on the ",(0,i.jsx)(n.a,{href:"https://developer.okta.com/docs/concepts/oauth-openid/",children:"OAuth 2.0 and OpenID Connect overview"})," page."]}),"\n",(0,i.jsx)(n.p,{children:"Okta Identity Cloud Service can be integrated with Rocket.Chat via its OpenID Connect support."}),"\n",(0,i.jsx)(n.h2,{id:"configure-okta-in-rocketchat",children:"Configure Okta in Rocket.Chat"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Login to Rocket.Chat with an administrator account and navigate to the ",(0,i.jsx)(n.strong,{children:"OAuth"})," page in the ",(0,i.jsx)(n.strong,{children:"Settings"})," tab."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Add custom OAuth"})," button and provide the following configurations.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Give the custom OAuth a unique name. For this example, we will use ",(0,i.jsx)(n.em,{children:"okta"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enabled"}),": ",(0,i.jsx)(n.em,{children:"True"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"URL"}),": The URL to your okta domain on okta.com with a suffix of ",(0,i.jsx)(n.em,{children:"/oauth2/v1"}),". For example: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"https://mycompany.okta.com/oauth2/v1"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Token"}),": ",(0,i.jsx)(n.em,{children:"/token"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Token Sent Via"}),": ",(0,i.jsx)(n.em,{children:"Header"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Identity Token Sent Via"}),": ",(0,i.jsx)(n.em,{children:"Same as Token Sent Via"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Identity Path"}),": ",(0,i.jsx)(n.em,{children:"/userinfo"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Authorize Path"}),": ",(0,i.jsx)(n.em,{children:"/authorize"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scope"}),": ",(0,i.jsx)(n.em,{children:"openid email profile groups offline_access"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Param Name for access token"}),": ",(0,i.jsx)(n.em,{children:"access_token"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"id"}),": Set to the ",(0,i.jsx)(n.strong,{children:"Client ID"})," in the Okta app ",(0,i.jsx)(n.strong,{children:"Client Credentials"})," below."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Secret"}),": Set to the ",(0,i.jsx)(n.strong,{children:"Client secret"})," in the Okta app ",(0,i.jsx)(n.strong,{children:"Client Credentials"})," below."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Login Style"}),": Either setting works. ",(0,i.jsx)(n.strong,{children:"Popup"})," will pop up the Okta check/login in another window. ",(0,i.jsx)(n.strong,{children:"Redirect"})," will redirect the current page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Button Text"}),": Set to personal preference."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Button Text Color"}),": Set to personal preference."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Button Color"}),": Set to personal preference."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Username field"}),": ",(0,i.jsx)(n.em,{children:"preferred_username"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avatar field"}),": Was not used on our Okta instance. Further research will be required to use this."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Roles/Groups field name"}),": roles"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Merge Roles from SSO"}),": Our server syncs from LDAP, so we left this ",(0,i.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Merge users"}),": Our server syncs from LDAP, so we left this ",(0,i.jsx)(n.em,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configure-okta-as-the-identity-provider",children:"Configure Okta as the identity provider"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(40747).A+"",width:"709",height:"406"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new app on your Okta Application Dashboard."}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Web"})," as the ",(0,i.jsx)(n.strong,{children:"Platform"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"OpenID Connect"})," as the ",(0,i.jsx)(n.strong,{children:"Sign on method"}),". Click ",(0,i.jsx)(n.strong,{children:"Create"})," to open the window to create the new integration."]}),"\n",(0,i.jsxs)(n.li,{children:["Update the ",(0,i.jsx)(n.strong,{children:"application name"})," and ",(0,i.jsx)(n.strong,{children:"redirect URI."})," The ",(0,i.jsx)(n.strong,{children:"redirect UR"}),"I is the same ",(0,i.jsx)(n.strong,{children:"callback URL"})," displayed after creating the custom OAuth in your Rocket.Chat workspace."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["In this example, the custom OAuth is called ",(0,i.jsx)(n.em,{children:"okta"}),". This will result in a ",(0,i.jsx)(n.strong,{children:"redirect URI"})," of ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"https://my-rocketchat-server.org/_oauth/okta"})}),"."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save."})," You are redirected to the ",(0,i.jsx)(n.strong,{children:"General Settings"})," for the new app."]}),"\n",(0,i.jsxs)(n.li,{children:["Copy the ",(0,i.jsx)(n.strong,{children:"Client ID"})," to the Rocket.Chat ",(0,i.jsx)(n.strong,{children:"ID"})," field on your workspace OAuth settings page."]}),"\n",(0,i.jsxs)(n.li,{children:["Copy the ",(0,i.jsx)(n.strong,{children:"Client secret"})," to the Rocket.Chat ",(0,i.jsx)(n.strong,{children:"secret"})," field on your workspace OAuth settings page."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Everything should be configured appropriately now! You can now assign users or group users to your integration app on the Okta Dashboard and then test the login on your Rocket.Chat workspace."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},40747:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/AddApp-e491ae0854108ac439c8f54b118ee745.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);