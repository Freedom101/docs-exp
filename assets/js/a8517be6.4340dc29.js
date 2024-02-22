"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58566],{34275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(85893),r=n(11151);const s={},i="GitLab",o={id:"use-rocket.chat/workspace-administration/integrations/gitlab",title:"GitLab",description:"Setting up GitLab webhook integration gives you the ability to receive event notifications from GitLab directly in your desired Rocket.Chat room.",source:"@site/docs/use-rocket.chat/workspace-administration/integrations/gitlab.md",sourceDirName:"use-rocket.chat/workspace-administration/integrations",slug:"/use-rocket.chat/workspace-administration/integrations/gitlab",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/integrations/gitlab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/github"},next:{title:"Google Calendar",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/google-calendar"}},c={},l=[{value:"GitLab Rocket.Chat Integration",id:"gitlab-rocketchat-integration",level:2},{value:"Creating a new GitLab webhook integration",id:"creating-a-new-gitlab-webhook-integration",level:3},{value:"GitLab Webhooks settings",id:"gitlab-webhooks-settings",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"gitlab",children:"GitLab"}),"\n",(0,a.jsx)(t.p,{children:"Setting up GitLab webhook integration gives you the ability to receive event notifications from GitLab directly in your desired Rocket.Chat room."}),"\n",(0,a.jsx)(t.p,{children:"These events include and are not limited to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Comments"}),"\n",(0,a.jsx)(t.li,{children:"Issues events"}),"\n",(0,a.jsx)(t.li,{children:"Merge requests"}),"\n",(0,a.jsx)(t.li,{children:"Deployment events"}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"In configuring this integration, make sure your Rocket.Chat is publicly available on a URL."})}),"\n",(0,a.jsx)(t.h2,{id:"gitlab-rocketchat-integration",children:"GitLab Rocket.Chat Integration"}),"\n",(0,a.jsx)(t.p,{children:"To configure the webhook integration between GitLab and Rocket.Chat, you need to:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/gitlab#creating-a-new-gitlab-webhook-integration",children:"Create a new webhook integration on Rocket.Chat"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs-exp/docs/use-rocket.chat/workspace-administration/integrations/gitlab#gitlab-webhooks-settings",children:"Link to the GitLab repository webhook setting"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Follow these steps below to do that"}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-new-gitlab-webhook-integration",children:"Creating a new GitLab webhook integration"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["On your Rocket.Chat workspace, go to ",(0,a.jsx)(t.strong,{children:"Administration"})," -> ",(0,a.jsx)(t.strong,{children:"Workspace"})," -> ",(0,a.jsx)(t.strong,{children:"Integrations"})]}),"\n",(0,a.jsxs)(t.li,{children:["Switch to the ",(0,a.jsx)(t.strong,{children:"Incoming"})," tab and create a ",(0,a.jsx)(t.strong,{children:"New"})," Integration"]}),"\n",(0,a.jsxs)(t.li,{children:["Fill in the details of your webhook including the ",(0,a.jsx)(t.strong,{children:"name"})," of the webhook, the ",(0,a.jsx)(t.strong,{children:"room"})," to post into, the ",(0,a.jsx)(t.strong,{children:"user to post as"})," and enable it"]}),"\n"]}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:"/img/image (1277).png",alt:""}),(0,a.jsx)("figcaption",{children:(0,a.jsx)("p",{children:"GitLab new incoming Webhook"})})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Enable Scripts and paste the following code into the Scripts box"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"/* eslint no-console:0, max-len:0 */\n// see <https://gitlab.com/help/web_hooks/web_hooks> for full json posted by GitLab\nconst MENTION_ALL_ALLOWED = false; // <- check that bot permission allow has mention-all before passing this to true.\nconst NOTIF_COLOR = '#6498CC';\nconst IGNORE_CONFIDENTIAL = true;\nconst refParser = (ref) => ref.replace(/^refs\\/(?:tags|heads)\\/(.+)$/, '$1');\nconst displayName = (name) => (name && name.toLowerCase().replace(/\\s+/g, '.'));\nconst atName = (user) => (user && user.name ? '@' + displayName(user.name) : '');\nconst makeAttachment = (author, text, color) => {\n    return {\n        author_name: author ? displayName(author.name) : '',\n        author_icon: author ? author.avatar_url : '',\n        text,\n        color: color || NOTIF_COLOR\n    };\n};\nconst pushUniq = (array, val) => ~array.indexOf(val) || array.push(val); // eslint-disable-line\n\nclass Script { // eslint-disable-line\n    process_incoming_request({ request }) {\n        try {\n            let result = null;\n            const channel = request.url.query.channel;\n            const event = request.headers['x-gitlab-event'];\n            switch (event) {\n                case 'Push Hook':\n                    result = this.pushEvent(request.content);\n                    break;\n                case 'Merge Request Hook':\n                    result = this.mergeRequestEvent(request.content);\n                    break;\n                case 'Note Hook':\n                    result = this.commentEvent(request.content);\n                    break;\n                case 'Confidential Issue Hook':\n                case 'Issue Hook':\n                    result = this.issueEvent(request.content, event);\n                    break;\n                case 'Tag Push Hook':\n                    result = this.tagEvent(request.content);\n                    break;\n                case 'Pipeline Hook':\n                    result = this.pipelineEvent(request.content);\n                    break;\n                case 'Build Hook': // GitLab < 9.3\n                    result = this.buildEvent(request.content);\n                    break;\n                case 'Job Hook': // GitLab >= 9.3.0\n                    result = this.buildEvent(request.content);\n                    break;\n                case 'Wiki Page Hook':\n                    result = this.wikiEvent(request.content);\n                    break;\n                default:\n                    result = this.unknownEvent(request, event);\n                    break;\n            }\n            if (result && result.content && channel) {\n                result.content.channel = '#' + channel;\n            }\n            return result;\n        } catch (e) {\n            console.log('gitlabevent error', e);\n            return this.createErrorChatMessage(e);\n        }\n    }\n\n    createErrorChatMessage(error) {\n        return {\n            content: {\n                username: 'Rocket.Cat ErrorHandler',\n                text: 'Error occured while parsing an incoming webhook request. Details attached.',\n                icon_url: '',\n                attachments: [\n                    {\n                        text: `Error: '${error}', \\n Message: '${error.message}', \\n Stack: '${error.stack}'`,\n                        color: NOTIF_COLOR\n                    }\n                ]\n            }\n        };\n    }\n\n    unknownEvent(data, event) {\n        return {\n            content: {\n                username: data.user ? data.user.name : (data.user_name || 'Unknown user'),\n                text: `Unknown event '${event}' occured. Data attached.`,\n                icon_url: data.user ? data.user.avatar_url : (data.user_avatar || ''),\n                attachments: [\n                    {\n                        text: `${JSON.stringify(data, null, 4)}`,\n                        color: NOTIF_COLOR\n                    }\n                ]\n            }\n        };\n    }\n    issueEvent(data, event) {\n        if (event === 'Confidential Issue Hook' && IGNORE_CONFIDENTIAL) {\n            return false;\n        }\n        const project = data.project || data.repository;\n        const state = data.object_attributes.state;\n        const action = data.object_attributes.action;\n        let user_action = state;\n        let assigned = '';\n\n        if (action === 'update') {\n            user_action = 'updated';\n        }\n\n        if (data.assignee) {\n            assigned = `*Assigned to*: @${data.assignee.username}\\n`;\n        }\n\n        return {\n            content: {\n                username: 'gitlab/' + project.name,\n                icon_url: project.avatar_url || data.user.avatar_url || '',\n                text: (data.assignee && data.assignee.name !== data.user.name) ? atName(data.assignee) : '',\n                attachments: [\n                    makeAttachment(\n                        data.user, `${user_action} an issue _${data.object_attributes.title}_ on ${project.name}.\n*Description:* ${data.object_attributes.description}.\n${assigned}\nSee: ${data.object_attributes.url}`\n                    )\n                ]\n            }\n        };\n    }\n\n    commentEvent(data) {\n        const project = data.project || data.repository;\n        const comment = data.object_attributes;\n        const user = data.user;\n        const at = [];\n        let text;\n        if (data.merge_request) {\n            const mr = data.merge_request;\n            const lastCommitAuthor = mr.last_commit && mr.last_commit.author;\n            if (mr.assignee && mr.assignee.name !== user.name) {\n                at.push(atName(mr.assignee));\n            }\n            if (lastCommitAuthor && lastCommitAuthor.name !== user.name) {\n                pushUniq(at, atName(lastCommitAuthor));\n            }\n            text = `commented on MR [#${mr.id} ${mr.title}](${comment.url})`;\n        } else if (data.commit) {\n            const commit = data.commit;\n            const message = commit.message.replace(/\\n[^\\s\\S]+/, '...').replace(/\\n$/, '');\n            if (commit.author && commit.author.name !== user.name) {\n                at.push(atName(commit.author));\n            }\n            text = `commented on commit [${commit.id.slice(0, 8)} ${message}](${comment.url})`;\n        } else if (data.issue) {\n            const issue = data.issue;\n            text = `commented on issue [#${issue.id} ${issue.title}](${comment.url})`;\n        } else if (data.snippet) {\n            const snippet = data.snippet;\n            text = `commented on code snippet [#${snippet.id} ${snippet.title}](${comment.url})`;\n        }\n        return {\n            content: {\n                username: 'gitlab/' + project.name,\n                icon_url: project.avatar_url || user.avatar_url || '',\n                text: at.join(' '),\n                attachments: [\n                    makeAttachment(user, `${text}\\n${comment.note}`)\n                ]\n            }\n        };\n    }\n\n    mergeRequestEvent(data) {\n        const user = data.user;\n        const mr = data.object_attributes;\n        const assignee = mr.assignee;\n        let at = [];\n\n        if (mr.action === 'open' && assignee) {\n            at = '\\n' + atName(assignee);\n        } else if (mr.action === 'merge') {\n            const lastCommitAuthor = mr.last_commit && mr.last_commit.author;\n            if (assignee && assignee.name !== user.name) {\n                at.push(atName(assignee));\n            }\n            if (lastCommitAuthor && lastCommitAuthor.name !== user.name) {\n                pushUniq(at, atName(lastCommitAuthor));\n            }\n        }\n        return {\n            content: {\n                username: `gitlab/${mr.target.name}`,\n                icon_url: mr.target.avatar_url || mr.source.avatar_url || user.avatar_url || '',\n                text: at.join(' '),\n                attachments: [\n                    makeAttachment(user, `${mr.action} MR [#${mr.iid} ${mr.title}](${mr.url})\\n${mr.source_branch} into ${mr.target_branch}`)\n                ]\n            }\n        };\n    }\n\n    pushEvent(data) {\n        const project = data.project || data.repository;\n        const web_url = project.web_url || project.homepage;\n        const user = {\n            name: data.user_name,\n            avatar_url: data.user_avatar\n        };\n        // branch removal\n        if (data.checkout_sha === null && !data.commits.length) {\n            return {\n                content: {\n                    username: `gitlab/${project.name}`,\n                    icon_url: project.avatar_url || data.user_avatar || '',\n                    attachments: [\n                        makeAttachment(user, `removed branch ${refParser(data.ref)} from [${project.name}](${web_url})`)\n                    ]\n                }\n            };\n        }\n        // new branch\n        if (data.before == 0) { // eslint-disable-line\n            return {\n                content: {\n                    username: `gitlab/${project.name}`,\n                    icon_url: project.avatar_url || data.user_avatar || '',\n                    attachments: [\n                        makeAttachment(user, `pushed new branch [${refParser(data.ref)}](${web_url}/commits/${refParser(data.ref)}) to [${project.name}](${web_url}), which is ${data.total_commits_count} commits ahead of master`)\n                    ]\n                }\n            };\n        }\n        return {\n            content: {\n                username: `gitlab/${project.name}`,\n                icon_url: project.avatar_url || data.user_avatar || '',\n                attachments: [\n                    makeAttachment(user, `pushed ${data.total_commits_count} commits to branch [${refParser(data.ref)}](${web_url}/commits/${refParser(data.ref)}) in [${project.name}](${web_url})`),\n                    {\n                        text: data.commits.map((commit) => `  - ${new Date(commit.timestamp).toUTCString()} [${commit.id.slice(0, 8)}](${commit.url}) by ${commit.author.name}: ${commit.message.replace(/\\s*$/, '')}`).join('\\n'),\n                        color: NOTIF_COLOR\n                    }\n                ]\n            }\n        };\n    }\n\n    tagEvent(data) {\n        const project = data.project || data.repository;\n        const web_url = project.web_url || project.homepage;\n        const tag = refParser(data.ref);\n        const user = {\n            name: data.user_name,\n            avatar_url: data.user_avatar\n        };\n        let message;\n        if (data.checkout_sha === null) {\n            message = `deleted tag [${tag}](${web_url}/tags/)`;\n        } else {\n            message = `pushed tag [${tag} ${data.checkout_sha.slice(0, 8)}](${web_url}/tags/${tag})`;\n        }\n        return {\n            content: {\n                username: `gitlab/${project.name}`,\n                icon_url: project.avatar_url || data.user_avatar || '',\n                text: MENTION_ALL_ALLOWED ? '@all' : '',\n                attachments: [\n                    makeAttachment(user, message)\n                ]\n            }\n        };\n    }\n\n    createColor(status) {\n        switch (status) {\n            case 'success':\n                return '#2faa60';\n            case 'pending':\n                return '#e75e40';\n            case 'failed':\n                return '#d22852';\n            case 'canceled':\n                return '#5c5c5c';\n            case 'created':\n                return '#ffc107';\n            case 'running':\n                return '#607d8b';\n            default:\n                return null;\n        }\n    }\n\n    pipelineEvent(data) {\n        const project = data.project || data.repository;\n        const commit = data.commit;\n        const user = {\n            name: data.user_name,\n            avatar_url: data.user_avatar\n        };\n        const pipeline = data.object_attributes;\n\n        return {\n            content: {\n                username: `gitlab/${project.name}`,\n                icon_url: project.avatar_url || data.user_avatar || '',\n                attachments: [\n                    makeAttachment(user, `pipeline returned *${pipeline.status}* for commit [${commit.id.slice(0, 8)}](${commit.url}) made by *${commit.author.name}*`, this.createColor(pipeline.status))\n                ]\n            }\n        };\n    }\n\n    buildEvent(data) {\n        const user = {\n            name: data.user_name,\n            avatar_url: data.user_avatar\n        };\n\n        return {\n            content: {\n                username: `gitlab/${data.repository.name}`,\n                icon_url: '',\n                attachments: [\n                    makeAttachment(user, `build named *${data.build_name}* returned *${data.build_status}* for [${data.project_name}](${data.repository.homepage})`, this.createColor(data.build_status))\n                ]\n            }\n        };\n    }\n\n    wikiPageTitle(wiki_page) {\n        if (wiki_page.action === 'delete') {\n            return wiki_page.title;\n        }\n\n        return `[${wiki_page.title}](${wiki_page.url})`;\n    }\n\n    wikiEvent(data) {\n        const user_name = data.user.name;\n        const project = data.project;\n        const project_path = project.path_with_namespace;\n        const wiki_page = data.object_attributes;\n        const wiki_page_title = this.wikiPageTitle(wiki_page);\n        const action = wiki_page.action;\n\n        let user_action = 'modified';\n\n        if (action === 'create') {\n            user_action = 'created';\n        } else if (action === 'update') {\n            user_action = 'edited';\n        } else if (action === 'delete') {\n            user_action = 'deleted';\n        }\n\n        return {\n            content: {\n                username: project_path,\n                icon_url: project.avatar_url || data.user.avatar_url || '',\n                text: `The wiki page ${wiki_page_title} was ${user_action} by ${user_name}`\n            }\n        };\n    }\n}\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Save"})," the settings"]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.strong,{children:"Webhook URL"})," and ",(0,a.jsx)(t.strong,{children:"Token"})," are generated after saving"]}),"\n",(0,a.jsx)(t.li,{children:"Copy these credentials, they will be used later"}),"\n"]}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:"/img/image (705).png",alt:""}),(0,a.jsx)("figcaption",{children:(0,a.jsx)("p",{children:"GitLab webhook url and token"})})]}),"\n",(0,a.jsx)(t.h3,{id:"gitlab-webhooks-settings",children:"GitLab Webhooks settings"}),"\n",(0,a.jsx)(t.p,{children:"After creating the new incoming webhook integration on Rocket.Chat, it is time to link it up with the GitLab repository."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Go to your GitLab project page then navigate to ",(0,a.jsx)(t.strong,{children:"Settings"})," > ",(0,a.jsx)(t.strong,{children:"Webhooks"})]}),"\n",(0,a.jsxs)(t.li,{children:["Fill in the ",(0,a.jsx)(t.code,{children:"URL"})," and ",(0,a.jsx)(t.code,{children:"token"})," you copied from the Rocket.Chat setting"]}),"\n",(0,a.jsxs)(t.li,{children:["Select the type of events you want to be notified on and ",(0,a.jsx)(t.strong,{children:"Add webhook"})]}),"\n"]}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:"/img/image (394).png",alt:""}),(0,a.jsx)("figcaption",{children:(0,a.jsx)("p",{children:"GitLab webhook setting"})})]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"After successful configuration, you can test the Webhook with any event trigger and see the notification in your specified Rocket.Chat room."})}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:"/img/image (916).png",alt:""}),(0,a.jsx)("figcaption",{children:(0,a.jsx)("p",{children:"GitLab webhook test"})})]}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"More material"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["GitLab-Rocket.Chat webhook example: ",(0,a.jsx)(t.a,{href:"https://github.com/malko/rocketchat-gitlab-hook",children:"https://github.com/malko/rocketchat-gitlab-hook"})]}),"\n",(0,a.jsxs)(t.li,{children:["GitLab webhook help: ",(0,a.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/integrations/webhooks.html",children:"https://docs.gitlab.com/ee/user/project/integrations/webhooks.html"})]}),"\n"]})]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(67294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);