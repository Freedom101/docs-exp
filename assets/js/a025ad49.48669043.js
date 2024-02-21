"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61877],{92652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(74848),s=t(28453);const i={},o="Matrix Homeserver Setup",a={id:"use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/README",title:"Matrix Homeserver Setup",description:"Homeservers are key components that hosts user accounts and other data related to communication. It also facilitates communication between users on different servers by relaying messages through a network of matrix servers until it reaches the destination. Rocket.Chat listens to events happening in the homeserver and sends events relayed to other networks.",source:"@site/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/README.md",sourceDirName:"use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup",slug:"/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix Bridge Configuration",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-bridge-configuration"},next:{title:"Matrix Allow/Block List",permalink:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-homeserver-setup/matrix-allow-block-list"}},c={},d=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Important warning about the installation",id:"important-warning-about-the-installation",level:2},{value:"Automated Installation",id:"automated-installation",level:2},{value:"Installation Steps",id:"installation-steps",level:3},{value:"Standalone Manual installation",id:"standalone-manual-installation",level:2},{value:"Installation Steps",id:"installation-steps-1",level:3},{value:"Testing your setup",id:"testing-your-setup",level:2},{value:"Use your own federation-tester",id:"use-your-own-federation-tester",level:3},{value:"Clustered Manual Installation",id:"clustered-manual-installation",level:2},{value:"Reset your environment and Restart your setup ",id:"reset-your-environment-and-restart-your-setup-",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"matrix-homeserver-setup",children:"Matrix Homeserver Setup"}),"\n",(0,r.jsx)(n.p,{children:"Homeservers are key components that hosts user accounts and other data related to communication. It also facilitates communication between users on different servers by relaying messages through a network of matrix servers until it reaches the destination. Rocket.Chat listens to events happening in the homeserver and sends events relayed to other networks."}),"\n",(0,r.jsx)(n.p,{children:"You can set up your federated Rocket.Chat workspace using any of the following methods:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./#automated-installation",children:(0,r.jsx)(n.strong,{children:"Automated Installation"})}),": Install Synapse and Rocket.Chat using a simple setup script."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./#standalone-manual-installation",children:(0,r.jsx)(n.strong,{children:"Manual Installation"})}),": Manually install and configure your Homeserver with Rocket.Chat."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["We recommend using",(0,r.jsx)(n.a,{href:"./#automated-installation",children:" automatic installation"})," since this comes with some pre-configurations."]})}),"\n",(0,r.jsx)(n.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"8GB of RAM"}),"\n",(0,r.jsx)(n.li,{children:"2CPU"}),"\n",(0,r.jsx)(n.li,{children:"20GB of Storage"}),"\n",(0,r.jsx)(n.li,{children:"Ubuntu 20.04"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"You are required to have a domain available to host your matrix homeserver."})}),"\n",(0,r.jsx)(n.h2,{id:"important-warning-about-the-installation",children:"Important warning about the installation"}),"\n",(0,r.jsx)(n.p,{children:"You must be aware of this vital setting before proceeding with the installation."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Enabling ephemeral events like ",(0,r.jsx)(n.em,{children:"user typing indicator"})," can affect the performance of your Matrix Homeserver and Rocket.Chat server for federated communication.",(0,r.jsx)(n.br,{}),"\n","This can be enabled by adding the following property in your Application Service configuration file:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"de.sorunome.msc2409.push_ephemeral: true\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Add and enable the following properties to make public rooms visible and searchable on other Matrix networks."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"allow_public_rooms_without_auth: true\nallow_public_rooms_over_federation: true\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Following the automated installation enables everything by default and can be disabled by editing the generated configuration at ",(0,r.jsx)(n.code,{children:"data/matrix/synapse"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"automated-installation",children:"Automated Installation"}),"\n",(0,r.jsx)(n.p,{children:"The automated install offers a simple option to install a matrix homeserver pre-configured with Rocket.Chat."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,r.jsx)(n.p,{children:"You are required to have the following on your system before installing."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," and ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"Docker compose"})," (> 2.3.3)"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"If you don't have them installed, you can conveniently set them up using Docker's official helper script:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -L https://get.docker.com | sh\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To run Docker commands without using sudo, add the current user to the Docker group and then reboot using the following commands:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker $USER\nsudo reboot\n"})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A domain pointing to your server's IP."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open your terminal in any directory of your choice."}),"\n",(0,r.jsxs)(n.li,{children:["Download and execute the ",(0,r.jsx)(n.a,{href:"https://go.rocket.chat/i/federation-setup",children:"script"})," by running the following command. This creates a ",(0,r.jsx)(n.code,{children:"docker-compose"})," and a ",(0,r.jsx)(n.code,{children:".env"})," file that can be edited as needed"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bash <(curl -L -s https://go.rocket.chat/i/federation-setup)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Follow the instructions provided by the script to configure the workspace:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Server's hostname"}),": Add your domain name."]}),"\n",(0,r.jsxs)(n.li,{children:["Create ",(0,r.jsx)(n.code,{children:"A"})," domain records pointing to your server's IP address as requested.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"synapse.<your-domain>"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"element.<your-domain>"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"traefik.<your-domain>"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Enter your email address. This is used to issue an SSL certificate for your domain."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Update your Rocket.Chat version"}),(0,r.jsxs)(n.p,{children:["If you want to install a specific version Rocket.Chat, navigate to the  ",(0,r.jsx)(n.code,{children:".env"})," file, and modify the ",(0,r.jsx)(n.code,{children:"RELEASE"}),"  variable to point to the ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/rocketchat/rocket.chat/tags/",children:"docker image tag"})," of that version."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"RELEASE=<desired version>\n"})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Start the container by running the following command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up -d\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Installing with the Automated setup automatically sets the values at ",(0,r.jsx)(n.strong,{children:"Administration"})," > ",(0,r.jsx)(n.strong,{children:"Workspace"})," > ",(0,r.jsx)(n.strong,{children:"Settings"})," > ",(0,r.jsx)(n.strong,{children:"Federation"})," > ",(0,r.jsx)(n.strong,{children:"Matrix Bridge."})]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Rocket.Chat Matrix setup CLI is coming soon!"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Testing the Setup"})}),"\n",(0,r.jsx)(n.p,{children:"To test and ensure your Matrix setup is successful,"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Download and execute the test script in the same directory where the setup was initiated."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bash <(curl -L -s https://go.rocket.chat/i/federation-test)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You get a notice about the setup status."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"standalone-manual-installation",children:"Standalone Manual installation"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"If you don't have it  installed, you can conveniently set it  up using Docker's official helper script:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-<pre",metastring:'class="language-bash"><code class="lang-bash"><strong>curl -L https://get.docker.com | sh',children:"</strong></code></pre>\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To run Docker commands without using sudo, add the current user to the Docker group and then reboot using the following commands:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker $USER\nsudo reboot\n"})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Your domain records and SSL certificates. For example, if your domain is ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"ps-rocketchat.com,"})})," you can create subdomains under it like ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"matrix2.ps-rocketchat.com"})}),". "]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Name the subdomains based on your preference."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"All the generated DNS records pointed to your server's IP address (the same IP address)."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"installation-steps-1",children:"Installation Steps"}),"\n",(0,r.jsx)(n.p,{children:"To set up a Matrix Homeserver with Synapse manually,"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"ps-rocketchat.com"})})," and ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"matrix2.ps-rocketchat.com"})})," with your domain and subdomain respectively while following this guide."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set up the docker network with this command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker network create rocketchat\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To set up a ",(0,r.jsx)(n.a,{href:"https://matrix-org.github.io/synapse/latest/",children:"Synapse"})," server, run this command to set up the Synapse environment:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker run --rm -e SYNAPSE_SERVER_NAME=ps-rocketchat.com -e SYNAPSE_REPORT_STATS=yes -v $PWD/data:/data matrixdotorg/synapse generate\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"homeserver.yaml"}),' configuration file is stored in the "',(0,r.jsx)(n.em,{children:"data"}),'" directory of your current working directory. To start the Synapse Docker, use this command:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker run --name synapse --network rocketchat -v $PWD/data:/data:rw -d matrixdotorg/synapse\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Next, set up MongoDB with this command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'docker run --network rocketchat -d     --name "mongodb"     -e ALLOW_EMPTY_PASSWORD=yes -e MONGODB_REPLICA_SET_MODE=primary     -e MONGODB_REPLICA_SET_NAME=rs0 -e MONGODB_PORT_NUMBER=27017     -e MONGODB_INITIAL_PRIMARY_HOST="mongodb" -e MONGODB_INITIAL_PRIMARY_PORT_NUMBER=27017     -e MONGODB_ADVERTISED_HOSTNAME="mongodb" bitnami/mongodb:5.0\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To start Rocket.Chat , execute this command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'docker run --network rocketchat -d \t--name "rocketchat" \t-e ROOT_URL=https://ps-rocketchat.com -e PORT=3000 \t-e MONGO_URL=mongodb://mongodb:27017/rocketchat?replicaSet=rs0 -e MONGO_OPLOG_URL=mongodb://mongodb:27017/local?replicaSet=rs0 \tregistry.rocket.chat/rocketchat/rocket.chat\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Set up Reverse Proxy"})}),"\n",(0,r.jsx)(n.p,{children:"Before accessing your Rocket.Chat workspace,  set up the reverse proxy following the next steps:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Obtain SSL certificates for your domain records, if you don't have any. You can use ",(0,r.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Lets Encrypt"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Create an ",(0,r.jsx)(n.code,{children:"nginx.conf"})," file containing forwarding rules for each domain. Create the  file in the same folder where you intend to start your docker instance and paste the following contents:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'worker_processes 1;\nevents { worker_connections 1024; }\nhttp {\n    server {\n\tlisten 443 ssl;\n\tserver_name ps-rocketchat.com;\n\tssl_certificate /cert/certificate.crt;\n                  ssl_certificate_key /cert/private.key;\n\tadd_header X-Frame-Options DENY;\n\tadd_header X-Content-Type-Options nosniff;\n\tadd_header X-XSS-Protection "1; mode=block";\n        location /.well-known/matrix/server {\n            default_type application/json;\n            add_header Access-Control-Allow-Origin *;\n\t    return 200 \'{"m.server": "matrix2.ps-rocketchat.com:443"}\';\n\t}\n        location /.well-known/matrix/client {\n            default_type application/json;\n            add_header Access-Control-Allow-Origin *;\n            return 200 \'{"m.homeserver": {"base_url": "https://matrix2.ps-rocketchat.com"}}\';\n        }\n        location / {\n            proxy_set_header Host $host;\n            proxy_set_header X-Forwarded-For $remote_addr;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_pass http://rocketchat:3000;\n        }\n   }\n   server {\n    listen 80;\n    server_name ps-rocketchat.com;\n    return 302 https://$server_name$request_uri;\n   }\n    \n   server {\n    listen 443 ssl;\n    server_name matrix2.ps-rocketchat.com;\n    ssl_certificate /cert/certificate.crt;\n    ssl_certificate_key /cert/private.key;\n\tadd_header X-Frame-Options DENY;\n\tadd_header X-Content-Type-Options nosniff;\n\tadd_header X-XSS-Protection "1; mode=block";\n    location / {\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_pass http://synapse:8008;\n    }\n  }\n}\n\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Start the reverse proxy mapping the ",(0,r.jsx)(n.code,{children:"nginx.conf"})," and the certificate and private key for SSL by running  this command:"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Ensure to specify the paths to certificates if you are using relative paths. In this example, the reference location for certificates is the home folder."}),(0,r.jsxs)(n.p,{children:["Additionally, it's recommended to use the complete directory path for your nginx file, ",(0,r.jsxs)(n.em,{children:["for example \u2014 ",(0,r.jsx)(n.code,{children:"/home/ubuntu/test/nginx.conf:/etc/nginx/nginx.conf:ro"})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker run --name nginx --network rocketchat -p 443:443 -p 80:80 -v ./nginx.conf:/etc/nginx/nginx.conf:ro -v ./cert2/fullchain.pem:/cert/certificate.crt:ro -v ./cert2/privkey.pem:/cert/private.key:ro -d nginx\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Visit your domain URL in a web browser  to access your Rocket.Chat workspace. Complete the ",(0,r.jsx)(n.a,{href:"/docs-exp/docs/setup-and-configure/accessing-your-workspace/rocket.chat-setup-wizard#setup-wizard",title:"mention",children:"#setup-wizard"})," and your workspace will be set up and ready to use."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Configure Rocket.Chat Matrix Bridge"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Before you proceed, subscribe to any of our ",(0,r.jsx)(n.a,{href:"/docs-exp/docs/readme/our-plans",children:"premium plans "}),"or ",(0,r.jsx)(n.a,{href:"../../../../../../../setup-and-configure/trials/",children:"apply trial "}),"on your workspace to unlock all the available federation features."]})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs-exp/docs/use-rocket.chat/workspace-administration/settings/federation/matrix-bridge/matrix-admin-guide/matrix-bridge-configuration",title:"mention",children:"matrix-bridge-configuration.md"})," to learn more about the configurations and their definitions."]}),"\n",(0,r.jsxs)(n.p,{children:["Now that your workspace is set up, navigate to ",(0,r.jsx)(n.strong,{children:"Administration"})," > ",(0,r.jsx)(n.strong,{children:"Workspace"})," > ",(0,r.jsx)(n.strong,{children:"Settings"})," > ",(0,r.jsx)(n.strong,{children:"Federation > Matrix Bridge"})," and follow these steps:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Enable"})," Matrix Bridge."]}),"\n",(0,r.jsxs)(n.li,{children:["Update the following fields with these values:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Homeserver URL"}),": ",(0,r.jsx)(n.a,{href:"http://synapse:8008",children:"http://synapse:8008"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Homeserver Domain"}),": <your domain>"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bridge URL"}),": ",(0,r.jsx)(n.a,{href:"http://rocketchat:3300",children:"http://rocketchat:3300"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:'Be cautious not to include "https://" before your homeserver domain.'})}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"../../..//matrix-bridge-config.png",alt:""}),(0,r.jsx)("figcaption",{})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Save your changes and copy the contents of your registration file.                                                      "}),"\n"]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"../../..//image (613).png",alt:""}),(0,r.jsx)("figcaption",{children:(0,r.jsx)("p",{children:"App Service Registration File content"})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://matrix-org.github.io/synapse/latest/application_services.html",children:"Configure "}),"the support for ",(0,r.jsx)(n.a,{href:"https://matrix.org/docs/guides/application-services",children:"Application Service"})," on the matrix home server by creating a ",(0,r.jsx)(n.code,{children:"registration.yaml"})," file in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"data"})})," directory that was created for synapse earlier and paste the contents of the registration file. "]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Creating and modifying files in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"data"})})," directory may require administrative(sudo) rights."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add the following content at the end of the ",(0,r.jsx)(n.code,{children:"homeserver.yaml"})," file in that same ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"data"})})," directory and save:  "]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"app_service_config_files:\n  - /data/registration.yaml\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Now restart the rocketchat and synapse containers with these commands:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker restart synapse\ndocker restart rocketchat\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Now, you can proceed to ",(0,r.jsx)(n.a,{href:"./#testing-the-setup",children:"test your workspace setup"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["To run multiple Rocket.Chat instances, see ",(0,r.jsx)(n.a,{href:"./#clustered-manual-installation",title:"mention",children:"#clustered-manual-installation"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"testing-your-setup",children:"Testing your setup"}),"\n",(0,r.jsxs)(n.p,{children:["For testing the Matrix setup, you can use the  ",(0,r.jsx)(n.a,{href:"https://federationtester.matrix.org/",children:"Matrix Federation Tester"})," if your certificates are from a \u201cstandard\u201d CA recognized by Linux distros, etc."]}),"\n",(0,r.jsxs)(n.p,{children:["For more real-time testing, visit ",(0,r.jsx)(n.a,{href:"https://app.element.io/",children:"Element"})," and complete these steps:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create a user using matrix.org as a homeserver (assuming the default whitelisted matrix.org is still set on your matrix homeserver)"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../../../../../../user-guides/rooms/direct-messages/",children:"Start a direct message"})," from your Rocket.Chat workspace with the user you just created using their matrixId ",(0,r.jsxs)(n.em,{children:["(@username",":matrix",".org)."]})]}),"\n",(0,r.jsxs)(n.li,{children:["Check ",(0,r.jsx)(n.a,{href:"https://app.element.io/",children:"Element"})," to confirm that you received the DM from your Rocket.Chat user. You can choose to respond to the message from ",(0,r.jsx)(n.a,{href:"https://app.element.io/",children:"Element"})," and confirm that you can receive the response in your Rocket.Chat workspace. "]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Now that your federated is successful on your workspace, see the ",(0,r.jsx)(n.a,{href:"../../matrix-users-guide/",title:"mention",children:"matrix-users-guide"})," to learn more about how to use federation.  "]})}),"\n",(0,r.jsx)(n.h3,{id:"use-your-own-federation-tester",children:"Use your own federation-tester"}),"\n",(0,r.jsx)(n.p,{children:"You can decide to use your own federation tester if you're in an air-gapped environment or if you use non-standard certificates."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Download the ",(0,r.jsx)(n.a,{href:"https://github.com/matrix-org/matrix-federation-tester",children:"GitHub project"})," locally and run the test yourself from (supposing you have the CA in your keychain) using these commands:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git clone https://github.com/matrix-org/matrix-federation-tester.git\ncd matrix-federation-tester \ngo build\nBIND_ADDRESS=:8080 ./matrix-federation-tester\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Now, execute this command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl 'http://localhost:8080/api/report?server_name=ps-rocketchat.com'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"clustered-manual-installation",children:"Clustered Manual Installation"}),"\n",(0,r.jsxs)(n.p,{children:["To distribute the work on Rocket.Chat, you run two identical Rocket.Chat applications ( ",(0,r.jsxs)(n.em,{children:["can be named ",(0,r.jsx)(n.code,{children:"rocketchat1"})," and ",(0,r.jsx)(n.code,{children:"rocketchat2"})]}),") that both connect to the same MongoDB. To make this setup accessible externally, you use an NGINX load balancer. This load balancer acts as a single entry point, and internally it distributes the workload between the two Rocket.Chat instances. "]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Before you proceed, ensure you have completed the ",(0,r.jsx)(n.a,{href:"./#standalone-manual-installation",title:"mention",children:"#standalone-manual-installation"}),"."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Start the second Rocket.Chat with this command: "}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'docker run --network rocketchat -d \t--name "rocketchat2" \t-e ROOT_URL=https://ps-rocketchat.com -e PORT=3000 \t-e MONGO_URL=mongodb://mongodb:27017/rocketchat?replicaSet=rs0 -e MONGO_OPLOG_URL=mongodb://mongodb:27017/local?replicaSet=rs0 \tregistry.rocket.chat/rocketchat/rocket.chat\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Update the ",(0,r.jsx)(n.code,{children:"nginx.conf"})," file with these contents"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'worker_processes 1;\n\nevents { worker_connections 1024; }\n\nhttp {\n\n    upstream web-rocketchat {\n        ip_hash;\n        server rocketchat:3000;\n        server rocketchat2:3000;\n    }\n\n    upstream matrix-rocketchat {\n        server rocketchat:3300;\n        server rocketchat2:3300;\n    }\n\n    server {\n       listen 3300;\n\n       server_name nginx;\n\n       location / {\n            proxy_set_header Host $host;\n            proxy_set_header X-Forwarded-For $remote_addr;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_pass http://matrix-rocketchat;\n        }\n    }\n    \n    server {docker\n    \tlisten 443 ssl;\n\n    \tserver_name ps-rocketchat.com;\n\n    \tssl_certificate /cert/certificate.crt;\n        ssl_certificate_key /cert/private.key;\n\n    \tadd_header X-Frame-Options DENY;\n    \tadd_header X-Content-Type-Options nosniff;\n    \tadd_header X-XSS-Protection "1; mode=block";\n\n        location /.well-known/matrix/server {\n            default_type application/json;\n            add_header Access-Control-Allow-Origin *;\n\t       return 200 \'{"m.server": "matrix2.ps-rocketchat.com:443"}\';\n\t   }\n\n        location /.well-known/matrix/client {\n            default_type application/json;\n            add_header Access-Control-Allow-Origin *;\n            return 200 \'{"m.homeserver": {"base_url": "https://matrix2.ps-rocketchat.com"}}\';\n        }\n\n        location / {\n            proxy_set_header Host $host;\n            proxy_set_header X-Forwarded-For $remote_addr;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_pass http://web-rocketchat;\n        }\n   }\n\n   server {\n    listen 80;\n\n    server_name ps-rocketchat.com;\n\n    return 302 https://$server_name$request_uri;\n   }\n    \n   server {\n    listen 443 ssl;\n    server_name matrix2.ps-rocketchat.com;\n    ssl_certificate /cert/certificate.crt;\n    ssl_certificate_key /cert/private.key;\n\n\tadd_header X-Frame-Options DENY;\n\tadd_header X-Content-Type-Options nosniff;\n\tadd_header X-XSS-Protection "1; mode=block";\n\n    location / {\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_pass http://synapse:8008;\n    }\n  }\n\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Restart nginx with this command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker restart nginx\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"Administration"})," > ",(0,r.jsx)(n.strong,{children:"Workspace"})," > ",(0,r.jsx)(n.strong,{children:"Settings"})," > ",(0,r.jsx)(n.strong,{children:"Federation > Matrix Bridge"})," and update these configurations:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Homeserver URL"}),": ",(0,r.jsx)(n.a,{href:"http://synapse:8008",children:"http://synapse:8008"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Homeserver Domain"}),": <your domain>"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bridge URL"}),": ",(0,r.jsx)(n.a,{href:"http://rocketchat:3300",children:"http://nginx:3300"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"../../..//cluster-installation-config.png",alt:""}),(0,r.jsx)("figcaption",{children:(0,r.jsx)("p",{children:"Matrix Bridge configurations"})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Save your changes and copy the contents of your registration file."}),"\n"]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:"../../..//registration-file.png",alt:""}),(0,r.jsx)("figcaption",{children:(0,r.jsx)("p",{children:"Registration File"})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Paste the contents in the  ",(0,r.jsx)(n.code,{children:"data/registration.yaml"})," file ."]}),"\n",(0,r.jsx)(n.li,{children:"Now restart the rocketchat and synapse containers with these commands:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker restart synapse\ndocker restart rocketchat\ndocker restart rocketchat2           \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Now you can proceed to ",(0,r.jsx)(n.a,{href:"./#testing-your-setup",children:"test your workspace"})," again."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"reset-your-environment-and-restart-your-setup-",children:"Reset your environment and Restart your setup "}),"\n",(0,r.jsx)(n.p,{children:"Execute the following commands to clean up your files, reset your environment, and restart your setup:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker stop rocketchat\ndocker stop synapse\ndocker stop mongodb\ndocker remove rocketchat\ndocker remove synapse\ndocker remove mongodb\nsudo rm -fr data\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["If you had a ",(0,r.jsx)(n.a,{href:"./#clustered-manual-installation",children:"cluster set"}),",  you also need to stop/remove the rocketchat2 docker instance."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs-exp/docs/resources/frequently-asked-questions/federation-faqs",title:"mention",children:"federation-faqs.md"})," for more troubleshooting tips."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);