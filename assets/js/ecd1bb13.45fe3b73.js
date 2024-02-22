"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79735],{5730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>_,default:()=>Z,frontMatter:()=>T,metadata:()=>C,toc:()=>O});var s=t(85893),a=t(11151),r=t(67294),o=t(90512),i=t(12466),l=t(16550),c=t(20469),u=t(91980),d=t(67392),h=t(50012);function m(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=g(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[l,u]=f({queryString:t,groupId:s}),[d,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,h.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=l??d;return p({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var x=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=l[t].value;s!==a&&(u(n),r(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,o.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=b(e);return(0,s.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,s.jsx)(w,{...e,...n}),(0,s.jsx)(k,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,s.jsx)(v,{...e,children:m(e.children)},String(n))}const q={tabItem:"tabItem_Ymn6"};function S(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(q.tabItem,a),hidden:t,children:n})}const T={},_="Webhooks",C={id:"use-rocket.chat/omnichannel/webhooks",title:"Webhooks",description:"Omnichannel webhooks allow you to integrate the Rocket.Chat Omnichannel to any third-party system, e.g., CRM, Zoho, etc.",source:"@site/docs/use-rocket.chat/omnichannel/webhooks.md",sourceDirName:"use-rocket.chat/omnichannel",slug:"/use-rocket.chat/omnichannel/webhooks",permalink:"/docs-exp/docs/use-rocket.chat/omnichannel/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/omnichannel/webhooks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Units",permalink:"/docs-exp/docs/use-rocket.chat/omnichannel/units"},next:{title:"Omnichannel Agent's Guides",permalink:"/docs-exp/docs/use-rocket.chat/omnichannel-agents-guides/"}},I={},O=[{value:"Create Omnichannel Webhook",id:"create-omnichannel-webhook",level:2},{value:"Sample JSON Data",id:"sample-json-data",level:3}];function P(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"webhooks",children:"Webhooks"}),"\n",(0,s.jsx)(n.p,{children:"Omnichannel webhooks allow you to integrate the Rocket.Chat Omnichannel to any third-party system, e.g., CRM, Zoho, etc."}),"\n",(0,s.jsxs)(n.p,{children:["To access ",(0,s.jsx)(n.strong,{children:"Webhooks"})," settings,"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Administration"})," > ",(0,s.jsx)(n.strong,{children:"Workspace"})," > ",(0,s.jsx)(n.strong,{children:"Omnichannel"})," > ",(0,s.jsx)(n.strong,{children:"CRM Integration"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-omnichannel-webhook",children:"Create Omnichannel Webhook"}),"\n",(0,s.jsxs)(n.p,{children:["To create a new ",(0,s.jsx)(n.strong,{children:"Omnichannel"})," webhook, you need to update the following details:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Webhook URL"}),": The Webhook URL from the system you want to connect(destination)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Secret Token"}),": Enter the secret token that can be used to verify the webhook."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The field ",(0,s.jsx)(n.strong,{children:"Secret Token"})," is sent to a header ",(0,s.jsx)(n.code,{children:"X-RocketChat-Livechat-Token"})," so you can validate if the request became from Livechat."]}),(0,s.jsxs)(n.p,{children:["If your endpoint returns a response status other than ",(0,s.jsx)(n.code,{children:"200"}),", Rocket.Chat will retry ten times, waiting ten seconds between retries."]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Request on"}),": Select the action(s) you want this integration to have."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Request on Chat Start"}),": Sends a post request to the webhook endpoint when an Omnichannel chat starts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Request on Chat Close"}),": Sends a request when a chat gets closed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Request on Chat Taken"}),": Sends a request when an Omnichannel agent ",(0,s.jsx)(n.strong,{children:"Takes"})," a chat."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send request on Chat Queued"}),": A request gets sent when a chat gets queued."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Request on Forwarding"}),": Triggers request to be sent when a chat gets forwarded to another Omnichannel department or Agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Request on Offline Messages"}),": Sends a request when a visitor leaves an offline message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Request on Visitor Messages"}),": A request is sent when an Omnichannel visitor sends a message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Request on Agent Messages"}),": Sends a request when an Omnichannel Agent sends a message or reply."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send Visitor Navigation History on Request"}),": Sends a request about visitor's navigation history. ",(0,s.jsx)(n.em,{children:'This feature depends on "Send Visitor Navigation History as a Message" to be enabled.'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send request on lead capture"}),": Sends a request when a lead is captured."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Lead capture email regex"}),": Specify the regex for lead captured email."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Lead capture phone regex"}),": Set the regex for lead-captured phone numbers."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"If you enable Send Request on Chat Start, Rocket.Chat sends a webhook to the external system telling it that a new conversation has started."})}),"\n",(0,s.jsx)(n.h3,{id:"sample-json-data",children:"Sample JSON Data"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of JSON data sent in the  request."}),"\n",(0,s.jsxs)(y,{children:[(0,s.jsx)(S,{value:"livechat",label:"Livechat session",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "_id": "Tc5SyBZHovD4k8BXv",\n  "label": "James",\n  "createdAt": "2023-02-02T10:16:07.230Z",\n  "lastMessageAt": "2023-02-02T10:22:14.087Z",\n  "tags": [\n    "self"\n  ],\n  "visitor": {\n    "_id": "63db8d4990fe6eda42ad429a",\n    "token": "e36e352c742eee48860d576fcefb372afc44ebc95750fa1e3b646195f702341a",\n    "name": "James",\n    "username": "guest-3",\n    "email": [\n      {\n        "address": "fongang.rodrique+local-on@rocket.chat"\n      }\n    ],\n    "phone": null\n  },\n  "agent": {\n    "_id": "aXjjcPwq4Pcp7xftH",\n    "username": "user1",\n    "name": "User One",\n    "email": "uaser1@mail.com"\n  },\n  "type": "LivechatSession",\n  "messages": [\n    {\n      "u": {\n        "_id": "63db8d4990fe6eda42ad429a",\n        "username": "guest-3",\n        "name": "James"\n      },\n      "_id": "2untSdndqBP7opGWw",\n      "username": "guest-3",\n      "msg": "Hi",\n      "ts": "2023-02-02T10:16:09.615Z"\n    },\n    {\n      "u": {\n        "_id": "aXjjcPwq4Pcp7xftH",\n        "username": "user1",\n        "name": "User One"\n      },\n      "_id": "7xjkw8ZFitMSNGmeJ",\n      "username": "user1",\n      "msg": "How can I help you today?",\n      "ts": "2023-02-02T10:21:05.391Z",\n      "agentId": "aXjjcPwq4Pcp7xftH"\n    },\n    {\n      "u": {\n        "_id": "63db8d4990fe6eda42ad429a",\n        "username": "guest-3",\n        "name": "James"\n      },\n      "_id": "y7p77YFfkHJeg5gD9",\n      "username": "guest-3",\n      "msg": "don\'t worry,thank you",\n      "ts": "2023-02-02T10:22:14.087Z"\n    },\n    {\n      "u": {\n        "_id": "aXjjcPwq4Pcp7xftH",\n        "username": "user1",\n        "name": "User One"\n      },\n      "_id": "ciAggDuN8ioqDrTby",\n      "username": "user1",\n      "msg": "Thank you for visiting",\n      "ts": "2023-02-02T10:23:11.437Z",\n      "agentId": "aXjjcPwq4Pcp7xftH",\n      "closingMessage": true\n    }\n  ],\n  "servedBy": {\n    "_id": "aXjjcPwq4Pcp7xftH",\n    "username": "user1",\n    "ts": "2023-02-02T10:16:07.375Z"\n  },\n  "closedAt": "2023-02-02T10:23:11.344Z",\n  "closedBy": {\n    "_id": "aXjjcPwq4Pcp7xftH",\n    "username": "user1"\n  },\n  "closer": "user"\n}\n'})})}),(0,s.jsx)(S,{value:"message",label:"Message sent",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "_id": "Tc5SyBZHovD4k8BXv",\n  "label": "James",\n  "createdAt": "2023-02-02T10:16:07.230Z",\n  "lastMessageAt": "2023-02-02T10:16:09.615Z",\n  "visitor": {\n    "_id": "63db8d4990fe6eda42ad429a",\n    "token": "e36e352c742eee48860d576fcefb372afc44ebc95750fa1e3b646195f702341a",\n    "name": "James",\n    "username": "guest-3",\n    "email": [\n      {\n        "address": "fongang.rodrique+local-on@rocket.chat"\n      }\n    ],\n    "phone": null\n  },\n  "agent": {\n    "_id": "aXjjcPwq4Pcp7xftH",\n    "username": "user1",\n    "name": "User One",\n    "email": "uaser1@mail.com"\n  },\n  "type": "Message",\n  "messages": [\n    {\n      "u": {\n        "_id": "aXjjcPwq4Pcp7xftH",\n        "username": "user1",\n        "name": "User One"\n      },\n      "_id": "7xjkw8ZFitMSNGmeJ",\n      "username": "user1",\n      "msg": "How can I help you today?",\n      "ts": "2023-02-02T10:21:05.391Z",\n      "agentId": "aXjjcPwq4Pcp7xftH"\n    }\n  ]\n}\n'})})})]})]})}function Z(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(P,{...e})}):P(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(67294);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);