"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53673],{80228:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(74848),s=i(28453);const r={},o="SAML Configuration",l={id:"use-rocket.chat/authentication/saml/saml-configuration",title:"SAML Configuration",description:"This page guides you through the various available settings you can configure for your SAML integration. This enables you to customize the user sign-in experience and behavior, map user data, and additional premium settings.&#x20;",source:"@site/docs/use-rocket.chat/authentication/saml/saml-configuration.md",sourceDirName:"use-rocket.chat/authentication/saml",slug:"/use-rocket.chat/authentication/saml/saml-configuration",permalink:"/docs-exp/docs/use-rocket.chat/authentication/saml/saml-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/authentication/saml/saml-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Keycloak",permalink:"/docs-exp/docs/use-rocket.chat/authentication/saml/keycloak"},next:{title:"Omnichannel",permalink:"/docs-exp/docs/use-rocket.chat/omnichannel/"}},a={},c=[{value:"Connection",id:"connection",level:2},{value:"Certificate",id:"certificate",level:3},{value:"Premium",id:"premium",level:2},{value:"Roles",id:"roles",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Mapping",id:"mapping",level:3},{value:"General",id:"general",level:2},{value:"User Interface",id:"user-interface",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Mapping",id:"mapping-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"saml-configuration",children:"SAML Configuration"}),"\n",(0,t.jsx)(n.p,{children:"This page guides you through the various available settings you can configure for your SAML integration. This enables you to customize the user sign-in experience and behavior, map user data, and additional premium settings. "}),"\n",(0,t.jsxs)(n.p,{children:["In your Rocket.Chat workspace, go to ",(0,t.jsx)(n.strong,{children:"Administration"})," > ",(0,t.jsx)(n.strong,{children:"Workspace"})," > ",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"SAML"}),". On the ",(0,t.jsx)(n.strong,{children:"SAML"})," page, you will find the configuration tabs where you can provide the details according to your requirements. Make sure that you have an identity provider and the necessary credentials."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can refer to ",(0,t.jsx)(n.a,{href:"broken-reference",children:"SimpleSAMLphp"}),", ",(0,t.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/authentication/saml/active-directory-federation-services",children:"Active Directory Federation Services"}),", ",(0,t.jsx)(n.a,{href:"broken-reference",children:"Oracle Identity Cloud Service"}),", and ",(0,t.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/authentication/saml/keycloak#troubleshooting",children:"Keycloak"})," for specific configuration options and sample values."]})}),"\n",(0,t.jsx)(n.h2,{id:"connection",children:"Connection"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enable"}),": Enables the SAML connection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Provider"}),": The SAML provider's name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Entry Point"}),": The custom entry point."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IDP SLO Redirect URL"}),": This is the URL provided by your identity provider for logging out. In SAML terminology, it refers to the location (URL) of the ",(0,t.jsx)(n.code,{children:"SingleLogoutService"})," with the redirect binding (",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:bindings: HTTP-Redirect"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Custom Issuer"}),": The URI is the unique identifier of your service. By convention, this is also the URL of your (unedited) metadata. Again, where you set ",(0,t.jsx)(n.strong,{children:"Custom Provider"})," to your provider app name, this will be: ",(0,t.jsx)(n.code,{children:"https://my-rocketchat-domain.tld/_saml/metadata/my-app"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enable Debug"}),": Set to true to enable debugging."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"certificate",children:"Certificate"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Custom Certificate"}),": This is the public certificate for the identity providers used to verify SAML requests. The format for this is the PEM without ",(0,t.jsx)(n.code,{children:"-----BEGIN CERTIFICATE-----"})," and ",(0,t.jsx)(n.code,{children:"--"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Public Cert Contents"}),": The public part of the self-signed certificate you created for encrypting your SAML transactions. ",(0,t.jsx)(n.a,{href:"https://simplesamlphp.org/docs/stable/simplesamlphp-sp.html#enabling-a-certificate-for-your-service-provider",children:"Example of self-signed certificate on the SimpleSAMLphp website here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Format for this is the PEM with  ",(0,t.jsx)(n.code,{children:"-----BEGIN CERTIFICATE-----"})," and ",(0,t.jsx)(n.code,{children:"-----END CERTIFICATE-----"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Signature Validation Type"}),": Select the type of signature validation. This setting will be ignored if no ",(0,t.jsx)(n.strong,{children:"Custom Certificate"})," is provided_",(0,t.jsx)(n.strong,{children:"."}),"_"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Private Key Contents"}),": The private key matches the self-signed certificate you created as PKCS#1 PEM. The format for this is PEM with  ",(0,t.jsx)(n.code,{children:"-----BEGIN PRIVATE KEY-----"})," and ",(0,t.jsx)(n.code,{children:"-----END PRIVATE KEY-----"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"premium",children:"Premium"}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)("img",{src:"/img/Premium.svg",alt:""}),(0,t.jsx)("figcaption",{})]}),"\n",(0,t.jsxs)(n.p,{children:["The settings on the ",(0,t.jsx)(n.strong,{children:"Premium"})," tab are only available to workspaces on any of the Rocket.Chat premium plans."]}),"\n",(0,t.jsx)(n.h3,{id:"roles",children:"Roles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sync User Roles"}),": Enable to sync user roles on login (overwrites local user roles)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Role Attribute Name"}),": If this attribute is found on the SAML response, its values will be used as role names for new users."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"advanced",children:"Advanced"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Identifier Format"}),": Format of the identifier. Leave this empty to omit the ",(0,t.jsx)(n.strong,{children:"NameID Policy"})," from the request"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NameID Policy Template"}),": The NameID policy template. You can use any variable from the ",(0,t.jsx)(n.strong,{children:"Authorize Request Template"})," here."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Custom Authn Context"}),": Leave this empty to omit the authorization context from the request."]}),"\n",(0,t.jsxs)(n.p,{children:["To add multiple authorization contexts, add the additional ones directly to the ",(0,t.jsx)(n.strong,{children:"AuthnContext Template"})," setting."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Authn Context Comparison"}),": Select the authorization context comparison method"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"AuthnContext Template"}),": You can use any variable from the ",(0,t.jsx)(n.strong,{children:"AuthnRequest Template"})," here."]}),"\n",(0,t.jsxs)(n.p,{children:["To add additional authorization contexts, duplicate the ",(0,t.jsx)(n.em,{children:"AuthnContextClassRef"})," tag and replace the ",(0,t.jsx)(n.em,{children:"__authnContext__"})," variable with the new context."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"AuthnRequest Template"}),": The following variables are available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__newId__"}),": Randomly generated id string"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__instant__"}),": Current timestamp"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__callbackUrl__"}),": The Rocket.Chat callback URL."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__entryPoint__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Custom Entry Point"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__issuer__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Custom Issuer"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__identifierFormatTag__"}),": The contents of the ",(0,t.jsx)(n.em,{children:"NameID Policy Template"})," if a valid ",(0,t.jsx)(n.em,{children:"Identifier Format"})," is configured."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__identifierFormat__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Identifier Format"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__authnContextTag__"}),": The contents of the ",(0,t.jsx)(n.em,{children:"AuthnContext Template"})," if a valid ",(0,t.jsx)(n.em,{children:"Custom Authn Context"})," is configured."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__authnContextComparison__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Authn Context Comparison"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__authnContext__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Custom Authn Context"})," setting."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Logout Response Template"}),": The following variables are available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__newId__"}),": Randomly generated id string"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__inResponseToId__"}),": The ID of the Logout Request received from the IdP"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__instant__"}),": Current timestamp"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__idpSLORedirectURL__"}),": The IDP Single LogOut URL to redirect to."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__issuer__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Custom Issuer"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__identifierFormat__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Identifier Format"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__nameID__"}),": The NameID received from the IdP Logout Request."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__sessionIndex__"}),": The sessionIndex received from the IdP Logout Request."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Logout Request Template"}),": The following variables are available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__newId__"}),": Randomly generated id string"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__instant__"}),": Current timestamp"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__idpSLORedirectURL__"}),": The IDP Single LogOut URL to redirect to."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__issuer__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Custom Issuer"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__identifierFormat__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Identifier Format"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__nameID__"}),": The NameID received from the IdP when the user logged in."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__sessionIndex__"}),": The sessionIndex received from the IdP when the user logged in."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Metadata Certificate Template"}),": The following variables are available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__certificate__"}),": The private certificate for assertion encryption."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Metadata Template"}),": The following variables are available:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__sloLocation__"}),": The Rocket.Chat Single LogOut URL."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__issuer__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Custom Issuer"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__identifierFormat__"}),": The value of the ",(0,t.jsx)(n.em,{children:"Identifier Format"})," setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__certificateTag__"}),": If a private certificate is configured, this will include the ",(0,t.jsx)(n.em,{children:"Metadata Certificate Template"}),", otherwise it will be ignored."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"__callbackUrl__"}),": The Rocket.Chat callback URL."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"mapping",children:"Mapping"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User Data Custom Field Map"}),": Configure how user custom fields are populated from a record in SAML (once found)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(n.h3,{id:"user-interface",children:"User Interface"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Button Text"}),": Text to display on the button."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Button Text Color"}),": Set the button text color."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Button Color"}),": The button color."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"behavior",children:"Behavior"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Generate Username"}),": Enable to generate usernames."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Normalize username"}),": Set the type of normalization to perform on a username."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Immutable field name"}),": Select the field name to be immutable."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Overwrite user fullname (use idp attribute)"}),": Enable to overwrite user full name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Overwrite user mail (use idp attribute)"}),": Enable to overwrite user mail."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Logout Behaviour"}),": Set the behavior to happen on logout."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update Room Subscriptions on Each Login"}),": When enabled, room subscriptions are updated on each login. Ensures the user is a member of all channels in SAML assertion on every login."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Include Private Rooms in Room Subscription"}),": Adds a user to any private rooms that exist in the SAML assertion."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default User Role"}),": Set the default user role. You can specify multiple roles, separating them with commas."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Allowed clock drift from Identity Provider"}),": The clock of the Identity Provider may drift slightly ahead of your system clocks. You can allow for a small amount of clock drift. Its value must be given in a number of milliseconds (ms). The value given is added to the current time at which the response is validated."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"mapping-1",children:"Mapping"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User Data Field Map"}),": Configure how user account fields (like email) are populated from a record in SAML (once found). As an example, ",(0,t.jsx)(n.code,{children:'{"name":"cn", "email":"mail"}'})," chooses a person's human-readable name from the cn attribute, and their email from the mail attribute. Available fields in Rocket.Chat: ",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"email"})," and ",(0,t.jsx)(n.code,{children:"username"}),". Everything else is discarded."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "email": "mail",\n  "username": {\n    "fieldName": "mail",\n    "regex": "(.*)@.+$",\n    "template": "user-__regex__"\n  },\n  "name": {\n   "fieldNames": [\n      "firstName",\n      "lastName"\n    ],\n    "template": "__firstName__ __lastName__"\n  },\n  "__identifier__": "uid"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This concludes the configuration options that you can enter for the SAML integration."}),"\n",(0,t.jsx)(n.p,{children:"In the upcoming sections, we look at some SAML identity providers and how you can integrate them with Rocket.Chat."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);