"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17080],{26561:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var t=o(74848),a=o(28453);const r={},c="Vagrant",s={id:"deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/vagrant",title:"Vagrant",description:"You can set up a Vagrant virtual machine environment to deploy a portable Rocket.Chat workspace. The following code explains how you can deploy Rocket.Chat on Vagrant with Ubuntu.",source:"@site/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/vagrant.md",sourceDirName:"deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools",slug:"/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/vagrant",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/vagrant",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/vagrant.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenShift",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/automation-tools/openshift"},next:{title:"Microservices",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/scaling-rocket.chat/microservices"}},i={},h=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"vagrant",children:"Vagrant"}),"\n",(0,t.jsxs)(n.p,{children:["You can set up a ",(0,t.jsx)(n.a,{href:"https://www.vagrantup.com/",children:"Vagrant"})," virtual machine environment to deploy a portable Rocket.Chat workspace. The following code explains how you can deploy Rocket.Chat on Vagrant with Ubuntu."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# -*- mode: ruby -*-\n# vi: set ft=ruby :\n\n# All Vagrant configuration is done below. The "2" in Vagrant.configure\n# configures the configuration version (we support older styles for\n# backwards compatibility). Please don\'t change it unless you know what\n# you\'re doing.\nVagrant.configure(2) do |config|\n  # The most common configuration options are documented and commented below.\n  # For a complete reference, please see the online documentation at\n  # https://docs.vagrantup.com.\n\n  # Every Vagrant development environment requires a box. You can search for\n  # boxes at https://atlas.hashicorp.com/search.\n  config.vm.box = "ubuntu/trusty64"\n\n  # Disable automatic box update checking. If you disable this, then\n  # boxes will only be checked for updates when the user runs\n  # `vagrant box outdated`. This is not recommended.\n  # config.vm.box_check_update = false\n\n  # Create a forwarded port mapping which allows access to a specific port\n  # within the machine from a port on the host machine. In the example below,\n  # accessing "localhost:8080" will access port 80 on the guest machine.\n  # config.vm.network "forwarded_port", guest: 80, host: 8080\n\n  # Create a private network, which allows host-only access to the machine\n  # using a specific IP.\n  config.vm.network "private_network", ip: "192.168.33.10"\n\n  # Create a public network, which generally matched to bridged network.\n  # Bridged networks make the machine appear as another physical device on\n  # your network.\n  # config.vm.network "public_network"\n\n  # Share an additional folder to the guest VM. The first argument is\n  # the path on the host to the actual folder. The second argument is\n  # the path on the guest to mount the folder. And the optional third\n  # argument is a set of non-required options.\n  # config.vm.synced_folder "../data", "/vagrant_data"\n\n  # Provider-specific configuration so you can fine-tune various\n  # backing providers for Vagrant. These expose provider-specific options.\n  # Example for VirtualBox:\n  #\n  config.vm.provider "virtualbox" do |vb|\n  #   # Display the VirtualBox GUI when booting the machine\n  #   vb.gui = true\n  #\n  #   # Customize the amount of memory on the VM:\n    vb.memory = "2048"\n  end\n  #\n  # View the documentation for the provider you are using for more\n  # information on available options.\n\n  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies\n  # such as FTP and Heroku are also available. See the documentation at\n  # https://docs.vagrantup.com/v2/push/atlas.html for more information.\n  # config.push.define "atlas" do |push|\n  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"\n  # end\n\n  # Enable provisioning with a shell script. Additional provisioners such as\n  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the\n  # documentation for more information about their specific syntax and use.\n  config.vm.provision "shell", inline: <<-SHELL\n    # SYSTEM CONFIGURATION\n    apt-get update\n    apt-get install -y nodejs npm mongodb unzip\n\n    ln -s /usr/bin/nodejs /usr/bin/node\n    ln -s /usr/bin/nodejs /usr/sbin/node\n\n    npm install nave -g\n    npm install pm2 -g\n    nave usemain 12.14.0\n\n    curl https://install.meteor.com/ | sh\n\n    pm2 startup\n\n    mkdir -p /var/www/\n    mkdir -p /var/log/rocket.chat\n\n    # DEPLOY\n    HOST=http://your_hostname.com\n    MONGO_URL=mongodb://localhost:27017/rocketchat\n    MONGO_OPLOG_URL=mongodb://localhost:27017/local\n    ROOT_URL=http://localhost:3000\n    PORT=3000\n\n    cd /var/www/\n    wget https://github.com/RocketChat/Rocket.Chat/archive/master.zip\n    unzip master.zip\n    mv Rocket.Chat-master rocket.chat\n\n    cd ./rocket.chat\n    meteor build --server "$HOST" --directory .\n\n    cd ./bundle/programs/server\n    npm install\n\n    cd ../..\n\n    rm -f pm2-rocket-chat.json\n    echo \'{\'                                                     > pm2-rocket-chat.json\n    echo \'  "apps": [{\'                                         >> pm2-rocket-chat.json\n    echo \'    "name": "rocket.chat",\'                           >> pm2-rocket-chat.json\n    echo \'    "script": "/var/www/rocket.chat/bundle/main.js",\' >> pm2-rocket-chat.json\n    echo \'    "out_file": "/var/log/rocket.chat/app.log",\'      >> pm2-rocket-chat.json\n    echo \'    "error_file": "/var/log/rocket.chat/err.log",\'    >> pm2-rocket-chat.json\n    echo "    \\\\"port\\\\": \\\\"$PORT\\\\","                         >> pm2-rocket-chat.json\n    echo \'    "env": {\'                                         >> pm2-rocket-chat.json\n    echo "      \\\\"MONGO_URL\\\\": \\\\"$MONGO_URL\\\\","             >> pm2-rocket-chat.json\n    echo "      \\\\"MONGO_OPLOG_URL\\\\": \\\\"$MONGO_OPLOG_URL\\\\"," >> pm2-rocket-chat.json\n    echo "      \\\\"ROOT_URL\\\\": \\\\"$ROOT_URL\\\\","               >> pm2-rocket-chat.json\n    echo "      \\\\"PORT\\\\": \\\\"$PORT\\\\""                        >> pm2-rocket-chat.json\n    echo \'    }\'                                                >> pm2-rocket-chat.json\n    echo \'  }]\'                                                 >> pm2-rocket-chat.json\n    echo \'}\'                                                    >> pm2-rocket-chat.json\n\n    pm2 start pm2-rocket-chat.json\n    pm2 save\n  SHELL\nend\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>s});var t=o(96540);const a={},r=t.createContext(a);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);