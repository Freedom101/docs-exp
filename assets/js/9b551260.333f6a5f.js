"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47865],{77865:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=n(85893),t=n(11151);const i={description:"Customize the look of your workspace"},r="Layout",l={id:"use-rocket.chat/workspace-administration/settings/layout",title:"Layout",description:"Customize the look of your workspace",source:"@site/docs/use-rocket.chat/workspace-administration/settings/layout.md",sourceDirName:"use-rocket.chat/workspace-administration/settings",slug:"/use-rocket.chat/workspace-administration/settings/layout",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/layout",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/settings/layout.md",tags:[],version:"current",frontMatter:{description:"Customize the look of your workspace"},sidebar:"tutorialSidebar",previous:{title:"IRC Federation",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/irc-federation"},next:{title:"Logs",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/logs"}},c={},a=[{value:"Custom CSS",id:"custom-css",level:2},{value:"Custom Scripts",id:"custom-scripts",level:2},{value:"Home page content",id:"home-page-content",level:2},{value:"Login",id:"login",level:2},{value:"User Interface",id:"user-interface",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"layout",children:"Layout"}),"\n",(0,o.jsx)(s.p,{children:"The layout feature empowers you to personalize the appearance of your Rocket.Chat workspace. This includes defining content, applying custom CSS, and incorporating JavaScript, providing you with the means to tailor your workspace's visual aspects."}),"\n",(0,o.jsxs)(s.p,{children:["To access this setting, go to ",(0,o.jsx)(s.strong,{children:"Administration"})," > ",(0,o.jsx)(s.strong,{children:"Workspace"})," > ",(0,o.jsx)(s.strong,{children:"Settings"})," > ",(0,o.jsx)(s.strong,{children:"Layout"}),"."]}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["Remember to ",(0,o.jsx)(s.strong,{children:"Save changes"})," to apply any customization made."]})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsxs)("summary",{children:["Colors ",(0,o.jsx)("img",{src:"/img/Deprecated (1).png",alt:""})]}),(0,o.jsx)(s.p,{children:"This section has color settings and definitions you can edit or customize to have a different look on your UI elements."}),(0,o.jsxs)(s.p,{children:["Colors can be set using existing ",(0,o.jsx)(s.strong,{children:"Expressions"})," or ",(0,o.jsx)(s.strong,{children:"Color"})," by specifying them from the color picker provided."]}),(0,o.jsx)("img",{src:"/img/image (345).png",alt:"","data-size":"original"}),(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Old Colors"})}),(0,o.jsxs)(s.p,{children:["A list of pre-defined color variables for old versions of Rocket.Chat (&lth;6.0) can be found ",(0,o.jsxs)(s.a,{href:"https://github.com/RocketChat/Rocket.Chat/blob/b092bef8139f9db692872073ce9788c19b364780/app/theme/client/imports/general/variables.css",children:[(0,o.jsx)(s.strong,{children:"here"}),"."]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"custom-css",children:"Custom CSS"}),"\n",(0,o.jsx)(s.p,{children:"You can define custom CSS to modify your workspace's appearance."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Example"})}),"\n",(0,o.jsx)(s.p,{children:"The following CSS code snippet changes the color of your Rocket.Chat rooms and the hover color on the sidebar."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-css",children:".rcx-content--main {\n  --rcx-color-surface-room: #5d91f7;\n}\n.rcx-sidebar--main {\n--rcx-color-surface-hover: #e07c41;\n}\n"})}),"\n",(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"/img/image (355).png",alt:""}),(0,o.jsx)("figcaption",{children:(0,o.jsx)("p",{children:"Customized Rocket.Chat UI"})})]}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["To learn more about the available classes and colors for easy customization in Rocket.Chat, you can refer to the ",(0,o.jsx)(s.a,{href:"https://developer.rocket.chat/customize-and-embed/white-labelling/customizing-colors",children:"Customizing Colors"})," guide."]})}),"\n",(0,o.jsx)(s.h2,{id:"custom-scripts",children:"Custom Scripts"}),"\n",(0,o.jsx)(s.p,{children:"Custom Scripts allow you to execute JavaScript code in response to specific events in the workspace."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Custom Script for Logout Flow"}),": Set a script to be executed during any logout process."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Custom Script for Logged Out Users"}),": Define a custom script that will run ALWAYS and to ANY user that is NOT logged in. For example, when they access the login page."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Custom Script for Logged In Users"}),": Set a custom script that will run ALWAYS and to ANY user that is logged in. For example, whenever they enter the chat and they're logged in."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Example"})}),"\n",(0,o.jsxs)(s.p,{children:['Setting a custom script for logged-in users, as demonstrated in the example below, will trigger a "Welcome" alert when a user logs in and is on the ',(0,o.jsx)(s.code,{children:"/home"})," page."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:"if(window.location.pathname == '/home'){\n    alert(\"Welcome\")\n}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"home-page-content",children:"Home page content"}),"\n",(0,o.jsx)(s.p,{children:"The section allows you to change the content of your workspace homepage."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Home Title:"})," The title on the header of the first screen that your users will see when they log in."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Show home page button on sidebar header"}),": When enabled, the Home button will be shown on your server's navbar."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Block content:"})," The content of the first screen that your users will see when logging in."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Show custom content to homepage"}),": Enable to show custom content on the homepage."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Show custom content only"}),": Turn this on to hide all other content blocks in the homepage."]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.strong,{children:"Show custom content to homepage"})," settings is only available to workspaces on the ",(0,o.jsx)(s.a,{href:"/docs-exp/docs/readme/our-plans#enterprise-plan",children:"enterprise plan"}),". ",(0,o.jsx)(s.strong,{children:"Show custom content only"})," can be enabled only when ",(0,o.jsx)(s.strong,{children:"Show custom content to homepage"})," is enabled."]})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Terms of Service:"})," Set the terms of service of your workspace. You can also redirect to YOUR-SERVER-URL/terms-of-service. This is shown by default on the links below your login page."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Login Terms:"})," Specify the terms on which users are to accept before login in."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Privacy Policy:"})," Set the privacy policy of your server. Can also be accessed via ",(0,o.jsx)(s.code,{children:"YOUR-SERVER-URL/privacy-policy"}),". This is shown by default on the links below your login page."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Legal Notice:"})," By default this screen is accessed on the links under the login page, here you can set the legal notice of your server. Can also be accessed via ",(0,o.jsx)(s.code,{children:"YOUR-SERVER-URL/legal-notice"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Side navigation footer:"})," This is the logo or text on the bottom left of the sidebar. We recommend using the images set on your ",(0,o.jsx)(s.a,{href:"/docs-exp/docs/setup-and-configure/accessing-your-workspace/basic-white-labeling#assets",children:"Assets"})," for better consistency."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"login",children:"Login"}),"\n",(0,o.jsx)(s.p,{children:"Customize your login page."}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:['All the login settings except "',(0,o.jsx)(s.strong,{children:'Show Default Login Form"'})," are only available to workspaces on the ",(0,o.jsx)(s.a,{href:"/docs-exp/docs/readme/our-plans",children:"premium plan"}),"."]})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Hide Logo"}),": Enable this to hide the Rocket.Chat."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Hide Title"}),": Turn this on to hide the title on the login page."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:'Hide "Powered by"'}),': Enabling this hides the "Powered by" on the login page.']}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Login Template"}),": Select the direction of the login page. ",(0,o.jsx)(s.code,{children:"Horizontal"}),"/",(0,o.jsx)(s.code,{children:"Vertical"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Show Default Login Form"}),": Enable to show the default login form."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Display Roles:"})," Toggles the display of user roles shown beside the usernames on messages."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"![](/img/image (833).png)"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Group Channels By Type:"})," Enabling this separates the channels by category (",(0,o.jsx)(s.strong,{children:"Channel"}),", ",(0,o.jsx)(s.strong,{children:"Private Room"}),", ",(0,o.jsx)(s.strong,{children:"Direct Message"})," or ",(0,o.jsx)(s.strong,{children:"Discussion"}),") on the left sidebar."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Use Full Name Initials to Generate Default Avatar:"}),' This setting changes default avatars to use the user\'s full name instead of username. For example, if the username is "blue.ducks" and the name is "Richards Nate", the default avatar displays "BD" by default. With this setting enabled, it displays "RN" instead.']}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Use Real Name:"})," Enabling this changes the display of usernames to full names."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Click to Create Direct Message:"})," Turn this on for workspace users to be able to create a direct message with another user when they click on their profile. This skips the viewing of the user's profile."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Number of users' autocomplete suggestions"}),": Sets the number of autocomplete suggestions shown when you begin tagging any user with the ",(0,o.jsx)(s.code,{children:"@"})," symbol."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Unread Counter Style"}),":","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Different Style for user mentions:"})," Makes the notification counter differentiate normal messages from mentions."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Same style for mentions:"})," Makes the count mark mentions and normal messages the same."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Allow Special Characters in Room Names:"})," When enabled, it allows for the use of special characters like ",(0,o.jsx)(s.code,{children:"! @ # $ % ^ & *"})," in room names"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Show top navbar in embedded layout:"})," If set to true, it shows the top navbar when embedding using ",(0,o.jsx)(s.code,{children:"?layout=embedded"})," at the end of the URL."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var o=n(67294);const t={},i=o.createContext(t);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);