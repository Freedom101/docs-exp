"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85315],{5321:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(74848),r=s(28453);const o={description:"Deploying Rocket.Chat on Amazon Web Services"},i="Deploy with AWS",c={id:"deploy/deploy-rocket.chat/deploy-with-aws",title:"Deploy with AWS",description:"Deploying Rocket.Chat on Amazon Web Services",source:"@site/docs/deploy/deploy-rocket.chat/deploy-with-aws.md",sourceDirName:"deploy/deploy-rocket.chat",slug:"/deploy/deploy-rocket.chat/deploy-with-aws",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/deploy-with-aws",draft:!1,unlisted:!1,editUrl:"https://github.com/Freedom101/docs-exp/tree/main/my-website/docs/deploy/deploy-rocket.chat/deploy-with-aws.md",tags:[],version:"current",frontMatter:{description:"Deploying Rocket.Chat on Amazon Web Services"},sidebar:"tutorialSidebar",previous:{title:"Windows Server",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/windows-server"},next:{title:"Deploy with Docker & Docker Compose",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose"}},a={},l=[{value:"Preparation Steps",id:"preparation-steps",level:2},{value:"Deploy Rocket.Chat on an EC2 instance",id:"deploy-rocketchat-on-an-ec2-instance",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-with-aws",children:"Deploy with AWS"}),"\n",(0,t.jsx)(n.p,{children:"By leveraging Amazon Web Services (AWS) to deploy. Rocket.Chat on an EC2 instance, organizations can unlock a host of benefits, from scalability and reliability to cost-effectiveness and simplified management"}),"\n",(0,t.jsx)(n.h2,{id:"preparation-steps",children:"Preparation Steps"}),"\n",(0,t.jsx)(n.p,{children:"The minimum requirement to run Rocket.Chat successfully is 2Gb 2 cores. You need an active AWS account to proceed with the deployment."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[" It is not recommended to use this method for large production. Instead, see how to deploy on ",(0,t.jsx)(n.a,{href:"https://docs.rocket.chat/deploy/prepare-for-your-deployment/rapid-deployment-methods/helm",children:"Kubernetes with Helm"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"In this guide, you'll learn how to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Host Rocket.Chat on an EC2 instance with a domain name."}),"\n",(0,t.jsxs)(n.li,{children:["Secure your  Rocket.Chat server with a free SSL certificate from ",(0,t.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-rocketchat-on-an-ec2-instance",children:"Deploy Rocket.Chat on an EC2 instance"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Launch an EC2 Instance"})}),"\n",(0,t.jsx)(n.p,{children:"To create a new EC2 instance:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Log into your ",(0,t.jsx)(n.a,{href:"https://console.aws.amazon.com/",children:"AWS Console"}),", and open the ",(0,t.jsx)(n.strong,{children:"EC2 Service."})]}),"\n",(0,t.jsxs)(n.li,{children:["From the sidebar, click ",(0,t.jsx)(n.strong,{children:"Instances."})," Then, click ",(0,t.jsx)(n.strong,{children:"Launch Instances"})," to set up a new EC2 instance."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the instance name and select at least ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Ubuntu Server 18.04 LTS"})}),(0,t.jsx)(n.strong,{children:'" with "'}),(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"64-bit (x86)"})})," architecture as the OS image."]}),"\n",(0,t.jsx)(n.li,{children:"Select an instance type of your choice according to the Cores recommendation above."}),"\n",(0,t.jsx)(n.li,{children:"Choose an existing key pair or create a new one for SSH connections."}),"\n",(0,t.jsx)(n.li,{children:"Adjust the instance details as needed or keep the defaults."}),"\n",(0,t.jsx)(n.li,{children:"Adjust the storage size and configuration as required."}),"\n",(0,t.jsxs)(n.li,{children:["Make sure to add a tag called ",(0,t.jsx)(n.strong,{children:"Name"})," and assign a value."]}),"\n",(0,t.jsxs)(n.li,{children:["Allow ",(0,t.jsx)(n.strong,{children:"SSH, HTTP,"})," and ",(0,t.jsx)(n.strong,{children:"HTTPS"})," in the security group configuration, and proceed with ",(0,t.jsx)(n.strong,{children:"Review and Launch"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["After confirming your instance configuration, ",(0,t.jsx)(n.strong,{children:"Launch Instance"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Allocate an Elastic IP"})}),"\n",(0,t.jsx)(n.p,{children:"Next, allocate an IP address to the EC2 instance. To allocate an elastic IP,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["From the ",(0,t.jsx)(n.a,{href:"https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fec2%2Fv2%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fec2&forceMobileApp=0&code_challenge=9eFrxS4u_-ut1PIoNw1-Cx5EmHMwRGaqLYRat_RnBGE&code_challenge_method=SHA-256",children:"EC2 Service"})," dashboard, click ",(0,t.jsx)(n.strong,{children:"Elastic IPs."})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Allocate Elastic IP address."})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Amazon's pool of IPv4 addresses,"})," and click ",(0,t.jsx)(n.strong,{children:"Allocate."})]}),"\n",(0,t.jsxs)(n.li,{children:["Click and open the newly created IP address and select ",(0,t.jsx)(n.strong,{children:"Associate Elastic IP address."})]}),"\n",(0,t.jsxs)(n.li,{children:["Select your instance and click ",(0,t.jsx)(n.strong,{children:"Associate."})]}),"\n",(0,t.jsxs)(n.li,{children:["In the details below, copy the ",(0,t.jsx)(n.strong,{children:"Public DNS"}),". You will need it to configure the DNS. The format looks like this: ",(0,t.jsx)(n.code,{children:"ec2-18-XXX-XXX-XXX.eu-central-1.compute.amazonaws.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Configure DNS with AWS Route 53"})}),"\n",(0,t.jsx)(n.p,{children:"To make your workspace accessible on the internet, you will require a domain name that people can use to access it."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.strong,{children:"Route 53"})," service dashboard and navigate to ",(0,t.jsx)(n.strong,{children:"Hosted Zones"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create Hosted Zone."})]}),"\n",(0,t.jsxs)(n.li,{children:["Enter your domain name and select ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Public Hosted Zone"})})," as the type. Click the ",(0,t.jsx)(n.strong,{children:"Create hosted zone"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Select your newly created zone and click ",(0,t.jsx)(n.strong,{children:"Create Record Set."})]}),"\n",(0,t.jsxs)(n.li,{children:['Enter "',(0,t.jsx)(n.em,{children:"www"}),'" as a subdomain (if desired), select Type ',(0,t.jsx)(n.em,{children:"CNAME"}),', enter the Public DNS name you copied from the elastic IP to the value field, and click "',(0,t.jsx)(n.strong,{children:"Create."}),'"']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Get an SSL Certificate from Let's Encrypt"})}),"\n",(0,t.jsx)(n.p,{children:"Use Let's Encrypt to get a free & open-source SSL certificate:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SSH to your instance."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ssh -i <path_to_key_file.pem> ubuntu@<public_ip_address>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"If your DNS has resolved, you may replace the Ip address with your domain name."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.code,{children:"certbot"})," using ",(0,t.jsx)(n.code,{children:"apt"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt update\nsudo apt install certbot\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Obtain a certificate from Let's Encrypt by running this command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo certbot certonly --standalone --email <emailaddress@email.com> -d <domain.com> -d <subdomain.domain.com>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"A second (or more) domain is optional."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Restrict access using security groups."})}),"\n",(0,t.jsxs)(n.p,{children:['If you want to restrict traffic to your AWS instance, you may adjust the security groups again. Make sure you allow "',(0,t.jsx)(n.em,{children:"TCP/22"}),'" from your current location for the SSH connection, as well as "',(0,t.jsx)(n.em,{children:"TCP/443"}),'" from the location you wish to use to access from.']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Configure Nginx Web Server with TLS/SSL"})}),"\n",(0,t.jsxs)(n.p,{children:["Rocket.Chat is set to run on port ",(0,t.jsx)(n.em,{children:"3000"})," by default. However, you can use Nginx as a reverse proxy to link your domain name to the Rocket.Chat server running on that port. This way, your users can access your workspace through your domain name(",(0,t.jsx)(n.em,{children:"example.com)"}),", instead of directly using the port in the URL(",(0,t.jsx)(n.em,{children:"example.com:3000"}),")."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install Nginx web server:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" sudo apt-get install nginx\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Backup the default config file for reference:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" cd /etc/nginx/sites-available\n sudo mv default default.reference\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new site configuration for Rocket.Chat:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" sudo nano /etc/nginx/sites-available/default\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:" server {\n     listen 443 ssl;\n\n     server_name <ABC.DOMAIN.COM>;\n\n     ssl_certificate /etc/letsencrypt/live/<ABC.DOMAIN.COM>/fullchain.pem;\n     ssl_certificate_key /etc/letsencrypt/live/<ABC.DOMAIN.COM>/privkey.pem;\n     ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n     ssl_prefer_server_ciphers on;\n     ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';\n\n     root /usr/share/nginx/html;\n     index index.html index.htm;\n\n     # Make site accessible from http://localhost/\n     server_name localhost;\n\n     location / {\n         proxy_pass http://localhost:3000/;\n         proxy_http_version 1.1;\n         proxy_set_header Upgrade $http_upgrade;\n         proxy_set_header Connection \"upgrade\";\n         proxy_set_header Host $http_host;\n         proxy_set_header X-Real-IP $remote_addr;\n         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n         proxy_set_header X-Forwarded-Proto http;\n         proxy_set_header X-Nginx-Proxy true;\n         proxy_redirect off;\n     }\n }\n\n server {\n     listen 80;\n\n     server_name <ABC.DOMAIN.COM>;\n\n     return 301 https://$host$request_uri;\n }\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Ensure to update ",(0,t.jsx)(n.code,{children:"ABC.DOMAIN.COM"})," with your domain name. Update it in the path to your key files as well."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Test the Nginx configuration to make sure there are no syntax errors"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nginx -t\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the syntax test went successful, restart Nginx:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart nginx\n"})}),"\n",(0,t.jsxs)(n.p,{children:['Confirm it is running correctly by opening a web browser and entering your domain name. A "',(0,t.jsx)(n.em,{children:"502 Bad Gateway"}),'" page is expected since the Rocket.Chat backend is not yet running. Ensure the SSL connection works appropriately by clicking the lock icon next to the address bar. Confirm it\'s valid and issued by "',(0,t.jsx)(n.em,{children:"Let's Encrypt Authority X3"}),'".']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Install Rocket.Chat"})}),"\n",(0,t.jsxs)(n.p,{children:["Now that your EC2 instance and domain are ready, SSH into your instance and follow our ",(0,t.jsx)(n.a,{href:"/docs-exp/docs/deploy/deploy-rocket.chat/deploy-with-docker-and-docker-compose",children:"Deploy with Docker & Docker Compose"})," guide to set up your Rocket.Chat workspace. Once your workspace is running, log in to your site at ",(0,t.jsx)(n.code,{children:"https://ABC.DOMAIN.COM."}),"The first user to log in will be the workspace administrator."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);