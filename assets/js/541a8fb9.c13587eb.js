"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68815],{49803:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(74848),i=s(28453);const r={},o="LDAP Setup",c={id:"use-rocket.chat/authentication/ldap/ldap-setup",title:"LDAP Setup",description:"After exploring the comprehensive LDAP settings in Rocket.Chat, it's beneficial to examine practical examples of these configurations. This requires an up and running LDAP server, which we'll guide you through how to setup (using Osixia OpenLDAP) in order to build a clearer understanding of how Rocket.Chat's LDAP settings can be applied in real-world scenarios.",source:"@site/docs/use-rocket.chat/authentication/ldap/ldap-setup.md",sourceDirName:"use-rocket.chat/authentication/ldap",slug:"/use-rocket.chat/authentication/ldap/ldap-setup",permalink:"/docs-exp/docs/use-rocket.chat/authentication/ldap/ldap-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-rocket.chat/authentication/ldap/ldap-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LDAP Premium Settings",permalink:"/docs-exp/docs/use-rocket.chat/authentication/ldap/ldap-premium-settings"},next:{title:"LDAP User Search",permalink:"/docs-exp/docs/use-rocket.chat/authentication/ldap/ldap-user-search"}},a={},d=[{value:"Running a LDAP Server",id:"running-a-ldap-server",level:2},{value:"Adding organizational units, users and groups",id:"adding-organizational-units-users-and-groups",level:2},{value:"Organizational units",id:"organizational-units",level:3},{value:"Users",id:"users",level:3},{value:"Groups",id:"groups",level:3},{value:"<strong>Connection</strong>",id:"connection",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Search Filter",id:"search-filter",level:2},{value:"Group Filter",id:"group-filter",level:2},{value:"Log in with an email address",id:"log-in-with-an-email-address",level:2},{value:"LDAP SSL connection",id:"ldap-ssl-connection",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ldap-setup",children:"LDAP Setup"}),"\n",(0,t.jsx)(n.p,{children:"After exploring the comprehensive LDAP settings in Rocket.Chat, it's beneficial to examine practical examples of these configurations. This requires an up and running LDAP server, which we'll guide you through how to setup (using Osixia OpenLDAP) in order to build a clearer understanding of how Rocket.Chat's LDAP settings can be applied in real-world scenarios."}),"\n",(0,t.jsx)(n.h2,{id:"running-a-ldap-server",children:"Running a LDAP Server"}),"\n",(0,t.jsxs)(n.p,{children:["Rocket.Chat allows workspace owners to connect to OpenLDAP or Active Directory LDAP servers to authenticate or retrieve information. In this first step, we'll guide you through how to setup a LDAP server using Docker and OpenLDAP, which is an open source implementation of the LDAP protocol. For starters, navigate to your preferred directory and create a ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file with the following content:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'services:\n  openldap:\n    image: osixia/openldap:1.3.0\n    container_name: rc-openldap\n    environment:\n      LDAP_LOG_LEVEL: "256"\n      LDAP_ORGANISATION: "rcldap"\n      LDAP_DOMAIN: "rcldap.com.br"\n      LDAP_ADMIN_PASSWORD: "admin"\n    volumes:\n      - /var/lib/ldap\n      - /etc/ldap/slapd.d\n      - /container/service/slapd/assets/certs/\n    ports:\n      - "389:389"\n      - "636:636"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then, use ",(0,t.jsx)(n.code,{children:"docker compose up"})," to start the container. This will locally deploy an ",(0,t.jsx)(n.strong,{children:"Osixia OpenLDAP"})," server running on port 389 (or 636 if the default one is unavailable)."]}),"\n",(0,t.jsxs)(n.p,{children:["Also, for the next steps you'll need to download and install ",(0,t.jsx)(n.a,{href:"https://directory.apache.org/studio/downloads.html",children:"Apache Directory Studio"})," (ADS), but any LDAP data management tool (such as phpLDAPadmin) will do the job. After installing, open your LDAP management tool and create a new connection (in ADS, this can be achieved through the ",(0,t.jsx)(n.strong,{children:"Connections"})," section) using the following information:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Host name:"})," ",(0,t.jsx)(n.code,{children:"localhost"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Port:"})," 389;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Authentication method:"})," Simple authentication;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Admin user's Bind DN:"})," ",(0,t.jsx)(n.code,{children:"cn=admin,dc=rcldap,dc=com,dc=br"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bind password:"})," admin;"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Apache Directory Studio's authentication model should look as follows (click \"Finish\" to complete the connection's setup):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ADS connection setup",src:s(90262).A+"",width:"613",height:"722"})}),"\n",(0,t.jsxs)(n.p,{children:["After succesfully connecting to the LDAP server through ADS, a LDAP tree structure containing an admin and the standard domain (",(0,t.jsx)(n.code,{children:"dc=rcldap,dc=com,dc=br"}),") should be displayed:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LDAP Server tree structure result before full setup",src:s(39292).A+"",width:"1133",height:"722"})}),"\n",(0,t.jsx)(n.p,{children:"ADS is now ready to populate the LDAP server with groups and users that can connect to Rocket.Chat."}),"\n",(0,t.jsx)(n.h2,{id:"adding-organizational-units-users-and-groups",children:"Adding organizational units, users and groups"}),"\n",(0,t.jsx)(n.p,{children:"For this example's use case, all users and organizational units will be added under the default domain already provided after setting up the LDAP server."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can refer to ",(0,t.jsx)(n.a,{href:"https://docs.oracle.com/cd/E79533_01/VSMGU/ldap001.htm",children:"Oracle LDAP Security Fundamentals Docs"})," for more info about Users, Groups and Organizational Units in LDAP servers."]})}),"\n",(0,t.jsx)(n.p,{children:"After setting up all organizational units, groups and users as described in the next steps, your LDAP tree structure should look as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LDAP Server tree structure result after setup",src:s(11306).A+"",width:"1181",height:"618"})}),"\n",(0,t.jsx)(n.h3,{id:"organizational-units",children:"Organizational units"}),"\n",(0,t.jsxs)(n.p,{children:["In order to add new organizational units within the default domain, right-click on its element (",(0,t.jsx)(n.code,{children:"dc=rcldap,dc=com,dc=br"}),") in the tree structure, then choose ",(0,t.jsx)(n.strong,{children:"New > New Entry"})," and follow the steps provided below (for this example, we'll need two organizational units created with the ",(0,t.jsx)(n.code,{children:"organizationalUnit"})," object class: ",(0,t.jsx)(n.strong,{children:"Users"})," and ",(0,t.jsx)(n.strong,{children:"Groups"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ADS steps for adding organizational units",src:s(8288).A+"",width:"2000",height:"451"})}),"\n",(0,t.jsx)(n.h3,{id:"users",children:"Users"}),"\n",(0,t.jsxs)(n.p,{children:["For this example, users must be added under the Users organizational unit. This can be achieved with a right-click on the ",(0,t.jsx)(n.code,{children:"ou=Users"})," element in the tree structure, then choose ",(0,t.jsx)(n.strong,{children:"New > New Entry"})," and follow the steps provided below (use the ",(0,t.jsx)(n.code,{children:"inetOrgPerson"})," object class)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ADS steps for adding users",src:s(33782).A+"",width:"1999",height:"457"})}),"\n",(0,t.jsx)(n.h3,{id:"groups",children:"Groups"}),"\n",(0,t.jsxs)(n.p,{children:["For this example, we'll only allow users that are members of a given LDAP group to log in to Rocket.Chat. In order to do that, add a new ",(0,t.jsx)(n.code,{children:"RCUsers"})," group under the Groups organizational unit with a right-click on the ",(0,t.jsx)(n.code,{children:"ou=Groups"})," element in the tree structure, then choose ",(0,t.jsx)(n.strong,{children:"New > New Entry"})," and follow the steps provided below (use the ",(0,t.jsx)(n.code,{children:"groupOfNames"})," object class and browse to the user you just created in order to assign it to a ",(0,t.jsx)(n.code,{children:"member"})," property of the group in the last step)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ADS steps for adding groups",src:s(25552).A+"",width:"2000",height:"454"})}),"\n",(0,t.jsxs)(n.p,{children:["More members can be added to the group later by adding new ",(0,t.jsx)(n.code,{children:"member"})," attributes to the existing ",(0,t.jsx)(n.code,{children:"RCUsers"})," group."]}),"\n",(0,t.jsx)(n.h2,{id:"connection",children:(0,t.jsx)(n.strong,{children:"Connection"})}),"\n",(0,t.jsxs)(n.p,{children:["Access ",(0,t.jsx)(n.strong,{children:"Workspace > Settings > LDAP > Connection"}),", enable LDAP and configure the settings as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Server Type:"})," ",(0,t.jsx)(n.code,{children:"Other"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Host:"})," ",(0,t.jsx)(n.code,{children:"localhost"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Port:"})," ",(0,t.jsx)(n.code,{children:"389"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Save the changes and press the ",(0,t.jsx)(n.strong,{children:'"Test Connection"'}),' button in the upper right side of the screen. A "LDAP Connection Succesful" toast message should be displayed.']}),"\n",(0,t.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["Access ",(0,t.jsx)(n.strong,{children:"Workspace > Settings > LDAP > Connection > Authentication"})," and configure the settings as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User DN:"})," ",(0,t.jsx)(n.code,{children:"cn=admin,dc=rcldap,dc=com,dc=br"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Password:"})," ",(0,t.jsx)(n.code,{children:"admin"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"search-filter",children:"Search Filter"}),"\n",(0,t.jsxs)(n.p,{children:["Access ",(0,t.jsx)(n.strong,{children:"Workspace > Settings > LDAP > User Search > Search Filter"})," and configure the settings as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Base DN:"})," ",(0,t.jsx)(n.code,{children:"dc=rcldap,dc=com,dc=br"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Filter:"})," ",(0,t.jsx)(n.code,{children:"(objectclass=inetOrgPerson)"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scope:"})," ",(0,t.jsx)(n.code,{children:"sub"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Search Field:"})," ",(0,t.jsx)(n.code,{children:"uid"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Search Page Size:"})," ",(0,t.jsx)(n.code,{children:"250"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Search Size Limit:"})," ",(0,t.jsx)(n.code,{children:"1000"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['After this step, you should be able to successfully search LDAP users in your workspace using the connection that has been setup. Try it with the "Test LDAP Search" button on the upper right side of the screen, specify an LDAP user\'s ',(0,t.jsx)(n.code,{children:"uid"})," field and a successful toast message should be displayed."]}),"\n",(0,t.jsx)(n.h2,{id:"group-filter",children:"Group Filter"}),"\n",(0,t.jsxs)(n.p,{children:["Configuring this section will restrict access to Rocket.Chat to members of the ",(0,t.jsx)(n.code,{children:"RCUsers"})," group built in the previous steps. Access ",(0,t.jsx)(n.strong,{children:"Workspace > Settings > LDAP > User Search > Group Filter"}),', enable it (switch on "Enable LDAP User Group Filter") and configure the settings as follows:']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Group ObjectClass:"})," ",(0,t.jsx)(n.code,{children:"groupOfNames"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Group ID Attribute:"})," ",(0,t.jsx)(n.code,{children:"cn"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Group Member Attribute:"})," ",(0,t.jsx)(n.code,{children:"member"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Group Member Format:"})," ",(0,t.jsx)(n.code,{children:"#{userdn}"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Group name:"})," ",(0,t.jsx)(n.code,{children:"RCUsers"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After this step, LDAP users should already be able to log in to Rocket.Chat using their ",(0,t.jsx)(n.code,{children:"uid"}),"/",(0,t.jsx)(n.code,{children:"mail"})," and password set in the LDAP server!"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["To sync new users that exist in your LDAP directory but not in Rocket.Chat, you must enable the ",(0,t.jsx)(n.strong,{children:"Background Sync Import New Users"})," option in ",(0,t.jsx)(n.strong,{children:"LDAP"})," > ",(0,t.jsx)(n.strong,{children:"Premium"})," > ",(0,t.jsx)(n.strong,{children:"Background Sync"}),". Click ",(0,t.jsx)(n.strong,{children:"Sync Now"})," and your new users are imported to your workspace."]})}),"\n",(0,t.jsx)(n.h2,{id:"log-in-with-an-email-address",children:"Log in with an email address"}),"\n",(0,t.jsxs)(n.p,{children:["Rocket.Chat allows workspace owners to pick which LDAP fields will be used to identify users on authentication. By default, the ",(0,t.jsx)(n.code,{children:"uid"})," field is set so that users can log in using username and password. However, this can be customized in ",(0,t.jsx)(n.strong,{children:"Workspace > Settings > LDAP > User Search > Search Filter > Search Field"})," to allow distinct login formats:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Log in with either e-mail address or username: ",(0,t.jsx)(n.code,{children:"uid,mail"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:["Log in with e-mail address: ",(0,t.jsx)(n.code,{children:"mail"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ldap-ssl-connection",children:"LDAP SSL connection"}),"\n",(0,t.jsx)(n.p,{children:"When you enable LDAP, the login form will log in users via LDAP instead of the internal account system."}),"\n",(0,t.jsxs)(n.p,{children:["Here, we are using Stunnel to create a secure connection to the LDAP server. Create a new configuration file ",(0,t.jsx)(n.code,{children:"/etc/stunnel/ldaps.conf"})," with the following content:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"options = NO_SSLv2\n\n[ldaps]\nclient = yes\naccept = 389\nconnect = your_ldap_server.com:636\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To enable Stunnel automatic startup, change the ",(0,t.jsx)(n.code,{children:"ENABLED"})," variable in ",(0,t.jsx)(n.code,{children:"/etc/default/stunnel4"})," to ",(0,t.jsx)(n.code,{children:"1"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Change to one to enable stunnel automatic startup\nENABLED=1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Finally, on the Rocket.Chat server under ",(0,t.jsx)(n.code,{children:"/admin/LDAP"})," set these values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["LDAP host = ",(0,t.jsx)(n.code,{children:"localhost"})]}),"\n",(0,t.jsxs)(n.li,{children:["LDAP port = ",(0,t.jsx)(n.code,{children:"389"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By tailoring these settings to your specific environment, you can ensure a secure, efficient, and user-friendly experience. As we conclude this section, remember that these examples serve as a guide, and it's crucial to adapt them to the unique requirements of your workspace."}),"\n",(0,t.jsx)(n.p,{children:"This concludes the LDAP configuration section, which provides the various connection and user management settings in Rocket.Chat."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},25552:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ldap-ads-groups-steps-20052563240d90d387adf5cb87bbb16d.png"},8288:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ldap-ads-ou-steps-4825f648ea02b4d2d8ae26376a28d5d9.png"},33782:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ldap-ads-users-steps-1ddfa42ec4918e4731e477318904be69.png"},90262:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ldap-apache-new-connection-auth-ff9eda2df6f4b336542f92d1b9227f7d.png"},39292:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ldap-apache-start-ebe3e317719e02adbaec169234403d35.png"},11306:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ldap-result-754122c4fede2cad41ee87a1affd8937.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);