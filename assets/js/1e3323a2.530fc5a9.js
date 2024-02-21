"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12551],{94433:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var n=i(74848),s=i(28453);const o={},c="Minio",r={id:"use-rocket.chat/workspace-administration/settings/file-upload/minio",title:"Minio",description:"Introduction",source:"@site/docs/use-rocket.chat/workspace-administration/settings/file-upload/minio.md",sourceDirName:"use-rocket.chat/workspace-administration/settings/file-upload",slug:"/use-rocket.chat/workspace-administration/settings/file-upload/minio",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/file-upload/minio",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/use-rocket.chat/workspace-administration/settings/file-upload/minio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File Upload FAQs",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/file-upload/file-upload-faqs"},next:{title:"Recommendations for File Upload",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/file-upload/recommendations-for-file-upload"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"AccessKey and SecretKey",id:"accesskey-and-secretkey",level:2},{value:"Setup Rocket.Chat to use Minio",id:"setup-rocketchat-to-use-minio",level:2},{value:"Set up Production",id:"set-up-production",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"minio",children:"Minio"}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["Minio is an object storage server built for cloud applications and DevOps. Minio is S3 compatible and provides an open-source alternative to AWS S3. You can ",(0,n.jsx)(t.a,{href:"https://minio.io/downloads",children:"download and install"})," Minio pretty quickly. Minio also provides an ",(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/minio/minio/",children:"official Docker image"}),". For further details, check out ",(0,n.jsx)(t.a,{href:"https://docs.minio.io/",children:"Minio documentation website"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"accesskey-and-secretkey",children:"AccessKey and SecretKey"}),"\n",(0,n.jsx)(t.p,{children:"Once you install and deploy Minio server, you can get the AccessKey and SecretKey from the startup message."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"2017-01-24T19:53:21.141689279Z\n2017-01-24T19:53:21.141730078Z Endpoint:  http://172.17.0.2:9000  http://127.0.0.1:9000\n2017-01-24T19:53:21.141735582Z AccessKey: 5fD3434325fDaGE77BNJlSoV1xGp\n2017-01-24T19:53:21.141738933Z SecretKey: Quie2teech4oofoo9Dahsoo7aithauja\n2017-01-24T19:53:21.141742292Z Region:    us-east-1\n2017-01-24T19:53:21.141745405Z SQS ARNs:  <none>\n2017-01-24T19:53:21.141749472Z\n2017-01-24T19:53:21.141752499Z Browser Access:\n2017-01-24T19:53:21.141755711Z    http://172.17.0.2:9000  http://127.0.0.1:9000\n2017-01-24T19:53:21.141758830Z\n2017-01-24T19:53:21.141762000Z Command-line Access: https://docs.minio.io/docs/minio-client-quickstart-guide\n2017-01-24T19:53:21.141765638Z    $ mc config host add myminio http://172.17.0.2:9000 1H2MI5BCU45990DZ3WRL flJlSoV1xGp+u2fhfDaGE77BNE6OdyvAsdI15kPq\n2017-01-24T19:53:21.141768751Z\n2017-01-24T19:53:21.141771631Z Object API (Amazon S3 compatible):\n2017-01-24T19:53:21.141774638Z    Go:         https://docs.minio.io/docs/golang-client-quickstart-guide\n2017-01-24T19:53:21.142003548Z    Java:       https://docs.minio.io/docs/java-client-quickstart-guide\n2017-01-24T19:53:21.142019474Z    Python:     https://docs.minio.io/docs/python-client-quickstart-guide\n2017-01-24T19:53:21.142024004Z    JavaScript: https://docs.minio.io/docs/javascript-client-quickstart-guide\n2017-01-24T19:53:21.142027614Z\n2017-01-24T19:53:21.142030994Z Drive Capacity: 262 GiB Free, 303 GiB Total\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To override Minio auto-generated keys, you may pass secret and access keys explicitly as environment variables. Find more details ",(0,n.jsx)(t.a,{href:"https://docs.minio.io/docs/minio-docker-quickstart-guide",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"setup-rocketchat-to-use-minio",children:"Setup Rocket.Chat to use Minio"}),"\n",(0,n.jsxs)(t.p,{children:["To setup Minio as the file storage server in Rocket.Chat, go to ",(0,n.jsx)(t.code,{children:"File Uploads"})," section under ",(0,n.jsx)(t.code,{children:"Administration"}),", then set ",(0,n.jsx)(t.code,{children:"Storage Type: GridFS (default)"})," to ",(0,n.jsx)(t.code,{children:"AmazonS3"}),". Next, access the ",(0,n.jsx)(t.code,{children:"AmazonS3"})," menu and update the following details:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Configuration Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bucket name"}),(0,n.jsx)(t.td,{children:"Minio Bucket Name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Access Key"}),(0,n.jsx)(t.td,{children:"Minio server Access Key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Secret Key"}),(0,n.jsx)(t.td,{children:"Minio server Secret Access Key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Region"}),(0,n.jsx)(t.td,{children:"us-east-1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bucket URL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"http://[your.minio.domain/bucketname]"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Signature Version"}),(0,n.jsx)(t.td,{children:"v2 (This may not be needed if using ssl)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Force Path Style"}),(0,n.jsx)(t.td,{children:"true (this may not be needed if using ssl)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"URLs expiration time"}),(0,n.jsx)(t.td,{children:"0 (if you want that your files don't have an expiry date)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"set-up-production",children:"Set up Production"}),"\n",(0,n.jsxs)(t.p,{children:["In production, you can use a reverse proxy with Minio server. Check out the documentation for ",(0,n.jsx)(t.a,{href:"https://docs.minio.io/docs/setup-nginx-proxy-with-minio#main",children:"Nginx"}),", ",(0,n.jsx)(t.a,{href:"https://docs.minio.io/docs/setup-apache-http-proxy-with-minio-server",children:"Apache"})," and ",(0,n.jsx)(t.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-use-apache-http-server-as-reverse-proxy-using-mod_proxy-extension",children:"Apache2"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can secure access to Minio server with TLS. Check out the documentation ",(0,n.jsx)(t.a,{href:"https://docs.minio.io/docs/how-to-secure-access-to-minio-server-with-tls",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": If you specify a different region in Minio, ensure it is the same as the S3 region. Find a complete list of regions ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var n=i(96540);const s={},o=n.createContext(s);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);