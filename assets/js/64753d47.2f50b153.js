"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88435],{47314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(74848),r=n(28453);const i={},s="AppVeyor",c={id:"use-rocket.chat/workspace-administration/integrations/appveyor",title:"AppVeyor",description:"AppVeyor is a CI/CD service for Windows, Linux, and macOS. AppVeyor supports most source control platforms. You can link AppVeyor to Rocket.Chat through webhooks and get notified in a Rocket.Chat channel each time a build runs.",source:"@site/docs/use-rocket.chat/workspace-administration/integrations/appveyor.md",sourceDirName:"use-rocket.chat/workspace-administration/integrations",slug:"/use-rocket.chat/workspace-administration/integrations/appveyor",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/appveyor",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/integrations/appveyor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add Jira notifications via webhook",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/add-jira-notifications-via-webhook"},next:{title:"Azure Alerts",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/azure-alerts"}},a={},l=[{value:"AppVeyor webhook integration",id:"appveyor-webhook-integration",level:2},{value:"Create a New AppVeyor Project",id:"create-a-new-appveyor-project",level:3},{value:"Create Rocket.Chat Incoming Webhook",id:"create-rocketchat-incoming-webhook",level:3},{value:"Script details",id:"script-details",level:3},{value:"Code details",id:"code-details",level:3},{value:"Configuring AppVeyor build",id:"configuring-appveyor-build",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"appveyor",children:"AppVeyor"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://www.appveyor.com/",children:"AppVeyor"})," is a CI/CD service for Windows, Linux, and macOS. AppVeyor supports most source control platforms. You can link AppVeyor to Rocket.Chat through webhooks and get notified in a Rocket.Chat channel each time a build runs."]}),"\n",(0,o.jsx)(t.h2,{id:"appveyor-webhook-integration",children:"AppVeyor webhook integration"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://ci.appveyor.com/signup",children:"Sign up"})," for an Appveyor account and link it to your source control platform. The demonstration here is done using ",(0,o.jsx)(t.a,{href:"https://github.com",children:"GitHub"})," as the source control platform."]}),"\n",(0,o.jsx)(t.h3,{id:"create-a-new-appveyor-project",children:"Create a New AppVeyor Project"}),"\n",(0,o.jsx)(t.p,{children:"To create an AppVeyor project:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Create a new GitHub repository or clone ",(0,o.jsx)(t.a,{href:"https://github.com/ngengesenior/nodeproject",children:"this NodeJs project"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Sign in to AppVeyor."}),"\n",(0,o.jsxs)(t.li,{children:["Go to the ",(0,o.jsx)(t.a,{href:"https://ci.appveyor.com/projects",children:"Projects"})," page."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"+NEW PROJECT."})]}),"\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.strong,{children:"GitHub"})," on the left pane."]}),"\n",(0,o.jsxs)(t.li,{children:["Select either ",(0,o.jsx)(t.strong,{children:"public repositories only"})," or both ",(0,o.jsx)(t.strong,{children:"public and private repositories"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Authorize GitHub"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Sign in to GitHub in the newly opened tab. "}),"\n",(0,o.jsx)(t.li,{children:"Select the above-created webhook project in the list of projects shown as the repository to use."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"create-rocketchat-incoming-webhook",children:"Create Rocket.Chat Incoming Webhook"}),"\n",(0,o.jsxs)(t.p,{children:["Follow the necessary steps to create a Rocket.Chat incoming webhook. See",(0,o.jsx)(t.a,{href:"./#create-a-new-incoming-webhook",children:" Create a new incoming webhook"}),". Take note of the generated webhook URL."]}),"\n",(0,o.jsx)(t.h3,{id:"script-details",children:"Script details"}),"\n",(0,o.jsxs)(t.p,{children:["Paste the following script into the ",(0,o.jsx)(t.strong,{children:"Script"})," field for the incoming webhook created."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'/* exported Script */\n/* globals console, _, s */\n\n/** Global Helpers\n *\n * console - A standard console instance\n * _       - An underscore instance\n * s       - An underscore string instance\n */\n\nclass Script {\n    /**\n     * @params {object} request\n     */\n    process_incoming_request({ request }) {\n        let reqContent = request.content;\n        let message = "";\n        const name = reqContent.commitAuthor;\n        const authorEmail = reqContent.commitAuthorEmail;\n        const commitDate = reqContent.commitDate;\n        const commitMessage = reqContent.commitMessage;\n        const repo = reqContent.repositoryName;\n        const commitId = reqContent.commitId;\n        const projectName = reqContent.projectName;\n        const buildNumber = reqContent.buildNumber;\n        const buildId = reqContent.buildId;\n        message += "Commit by author:" + name + " whose email is " + authorEmail;\n        message += " on the repo " + "[" + projectName + "](https://github.com/" + repo + ")";\n        message += " on " + commitDate + " and their commit message was,\'" + commitMessage + "\'\\n"\n        message += "Build details, build ID:" + buildId + ", build number:" + buildNumber + "\\n"\n        message += "You can check the [Commit](https://github.com/" + repo + "/commit/" + commitId + ")"\n\n        const content = {\n            "emoji": ":smiley:",\n            "text": message,\n            "attachments": [\n                {\n                    "title": projectName + " build",\n                    "title_link": "https://rocket.chat",\n                    "text": "Appveyor is a CI tool,"\n                    "image_url": "https://writing-demo.dev.rocket.chat/images/integration-attachment-example.png",\n                    "color": "#764FA5"\n                }\n            ]\n        };\n\n        return {\n            content:content\n        };\n    }\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"code-details",children:"Code details"}),"\n",(0,o.jsxs)(t.p,{children:["Each time you push to your configured GitHub repository, AppVeyor posts a payload to our webhook. The structure of the payload is similar to that of ",(0,o.jsx)(t.a,{href:"https://github.com/ngengesenior/nodeproject/blob/master/sample.json",children:"sample.json"})," found in the example repository. You retrieve the ",(0,o.jsx)(t.code,{children:"content"})," object and use the details to create a message object which becomes the text portion of the Rocket.Chat message returned in the method. ",(0,o.jsx)(t.code,{children:"process_incoming_request"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"configuring-appveyor-build",children:"Configuring AppVeyor build"}),"\n",(0,o.jsx)(t.p,{children:"To configure your build:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Create a file in the root directory of your configured GitHub project called ",(0,o.jsx)(t.code,{children:"appveyor.yml"})," and paste the following content."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"environment:\n  nodejs_version: \"8\"\n\n# Install scripts. (runs after repo cloning)\ninstall:\n  # Get the latest stable version of Node.js or io.js\n  - ps: Install-Product node ''\n  # install modules\n  - npm install\n\n# Post-install test scripts.\ntest_script:\n  # Output useful info for debugging.\n  - node --version\n  - npm --version\n  # run tests\n  - npm test\n\n# Don't actually build.\nbuild: off\ndeploy:\n  provider: Webhook\n  url: https://the-link-to-your-incoming-webhook\n  request_timeout: 5\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"install"})," block in the configuration tells the build to install the latest version of NodeJS and the deploy block tells AppVeyor to make use of webhooks. Replace the ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"url"})})," variable with the webhook URL generated during the creation of your incoming webhook. Check ",(0,o.jsx)(t.a,{href:"https://www.appveyor.com/docs/deployment/webhook/#provider-settings",children:"provider settings"})," to understand better."]}),"\n",(0,o.jsx)(t.li,{children:"Commit and push the code to your GitHub repository."}),"\n",(0,o.jsx)(t.li,{children:"The build process starts immediately after the push is successful."}),"\n",(0,o.jsx)(t.li,{children:"A notification is sent in the channel you configured to be used for your incoming webhook."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The current build can be verified by navigating to ",(0,o.jsx)(t.strong,{children:"Projects"})," > ",(0,o.jsx)(t.strong,{children:"Your-Project"})," > ",(0,o.jsx)(t.strong,{children:"Current build"})," on AppVeyor."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);