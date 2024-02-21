"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50622],{65144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(74848),i=t(28453);const r={},a="Google Calendar",s={id:"use-rocket.chat/workspace-administration/integrations/google-calendar",title:"Google Calendar",description:"This integration uses Rocket.Chat incoming webhook. With this integration, you get your event notifications right into Rocket.Chat.",source:"@site/docs/use-rocket.chat/workspace-administration/integrations/google-calendar.md",sourceDirName:"use-rocket.chat/workspace-administration/integrations",slug:"/use-rocket.chat/workspace-administration/integrations/google-calendar",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/google-calendar",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-rocket.chat/workspace-administration/integrations/google-calendar.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitLab",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/gitlab"},next:{title:"Grafana",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/grafana"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare Incoming Webhook",id:"prepare-incoming-webhook",level:2},{value:"Run Integration Program",id:"run-integration-program",level:2},{value:"Notifying Once Every Day",id:"notifying-once-every-day",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"google-calendar",children:"Google Calendar"}),"\n",(0,o.jsx)(n.p,{children:"This integration uses Rocket.Chat incoming webhook. With this integration, you get your event notifications right into Rocket.Chat."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["A Google Cloud Platform project with the Google Calendar API enabled. To create a project and enable an API, refer to ",(0,o.jsx)(n.a,{href:"https://developers.google.com/workspace/guides/create-project",children:"Create a project and enable the API"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Prepare authorization credentials for a desktop application. To learn how to create credentials for a desktop application, refer to ",(0,o.jsx)(n.a,{href:"https://developers.google.com/workspace/guides/create-credentials#desktop",children:"Create credentials"})," (make sure you download the JSON file)."]}),"\n",(0,o.jsxs)(n.li,{children:["Have a ",(0,o.jsx)(n.a,{href:"../../user-guides/rooms/channels/",children:"Channel"})," for the event messages to be posted."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["You can simply install and use the ",(0,o.jsx)(n.a,{href:"../../../extend-rocket.chat-capabilities/rocket.chat-marketplace/rocket.chat-public-apps-guides/google-calendar/",children:"Rocket.Chat Google Calendar app"})," on your workspace instead of manually configuring the integration."]})}),"\n",(0,o.jsx)(n.h2,{id:"prepare-incoming-webhook",children:"Prepare Incoming Webhook"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to ",(0,o.jsx)(n.strong,{children:"Administration > Workspace > Integration"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"+New"})," ",(0,o.jsx)(n.strong,{children:"> Incoming"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Turn on ",(0,o.jsx)(n.strong,{children:"Enabled"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Enter a name for the integration."}),"\n",(0,o.jsxs)(n.li,{children:["Enter the channel name where the integration messages are to be posted in the ",(0,o.jsx)(n.strong,{children:"Post to Channel"})," field."]}),"\n",(0,o.jsxs)(n.li,{children:["Enter an existing username the integration uses to post as that user in the ",(0,o.jsx)(n.strong,{children:"Post as"})," field."]}),"\n",(0,o.jsxs)(n.li,{children:["Optionally enter an alias that appears before the username in the ",(0,o.jsx)(n.strong,{children:"Alias"})," field."]}),"\n",(0,o.jsxs)(n.li,{children:["Enter an image URL to use as the avatar for this integration in the ",(0,o.jsx)(n.strong,{children:"Avatar URL"})," field if you have one."]}),"\n",(0,o.jsxs)(n.li,{children:["Optionally enter an emoji to use as the avatar instead in the ",(0,o.jsx)(n.strong,{children:"Emoj"}),"i field."]}),"\n",(0,o.jsxs)(n.li,{children:["Turn on ",(0,o.jsx)(n.strong,{children:"Script Enabled"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Copy and paste the contents of ",(0,o.jsx)(n.a,{href:"https://github.com/debdutdeb/rocketchat-google-calendar/blob/main/script.js",children:"script.js"})," in the Script field."]}),"\n",(0,o.jsxs)(n.li,{children:["Scroll to the bottom of the screen and click ",(0,o.jsx)(n.strong,{children:"Save"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The webhook URL is generated upon saving successfully saving the integration in the ",(0,o.jsx)(n.strong,{children:"Webhook URL"})," field."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"run-integration-program",children:"Run Integration Program"}),"\n",(0,o.jsx)(n.p,{children:"The integration program runs on a server, periodically grabs the event data from your calendar, and sends that data to your Rocket.Chat server to be processed and sent to the channel you set up in the previous section."}),"\n",(0,o.jsx)(n.p,{children:"To install the integration program:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[" Install the ",(0,o.jsx)(n.a,{href:"https://golang.org/doc/install",children:"go binary"})," and then run the ",(0,o.jsx)(n.code,{children:"go get github.com/debdutdeb/rocketchat-google-calendar"})," command in your terminal."]}),"\n",(0,o.jsxs)(n.li,{children:["Edit your ",(0,o.jsx)(n.code,{children:"bashrc"}),", ",(0,o.jsx)(n.code,{children:"zshrc"})," or ",(0,o.jsx)(n.code,{children:"fish"})," config and add ",(0,o.jsx)(n.code,{children:"$(go env GOPATH)/bin"})," to your ",(0,o.jsx)(n.code,{children:"PATH"}),". This way you won't have to specify the whole path to the command every time. Use the help option to learn all the command line options and modify its execution process - ",(0,o.jsx)(n.code,{children:"rocketchat-google-calendar -h"}),". Running the command gives an output that looks like this:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'Usage of ./rocketchat-google-calendar:\n  -calendars string\n        List of calendar IDs, separated by commas. (default "primary")\n  -credentials string\n        Enter path to the credentials file. (default "credentials.json")\n  -eventin string\n        The upper limit of upcoming event start time. Lower bound is the moment of API access. (default "30m")\n  -waitfor string\n        Time to wait before attempting a POST to Rocket.Chat webhook. (default "5m")\n  -webhook string\n        Enter the webhook url you got from Rocket.Chat.\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Enter the appropriate values for the respective options. The full command should be like this:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"rocketchat-google-calendar \\\n-webhook https://the-incoming-webhook-url \\ \n-calendars primary \\\n-credentials /full/path/to/cedentials.json \\\n-waitfor 5m -eventin 30m\n\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Click the link which prompts you to authorize the app to use your Google account."}),"\n",(0,o.jsx)(n.li,{children:"Once you get the token, please copy and paste it on the terminal and hit enter."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Your integration is now running."}),"\n",(0,o.jsx)(n.h2,{id:"notifying-once-every-day",children:"Notifying Once Every Day"}),"\n",(0,o.jsx)(n.p,{children:"The example command above fetches the event data from the Google servers every 5 minutes. You can change that behavior however you like."}),"\n",(0,o.jsxs)(n.p,{children:["One everyday use case is to be notified about all the meetings/events daily in the morning. You can achieve this by combining the two flags ",(0,o.jsx)(n.code,{children:"-eventin"})," and ",(0,o.jsx)(n.code,{children:"-waitfor"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"24h"})," for both of those options. This way, the integration program fetches data every 24 hours, lists the events that will occur in those 24 hours, and sends them to your configured channel."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);