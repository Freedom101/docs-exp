"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14932],{19865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(74848),o=t(28453);const r={description:"Deploying Rocket.Chat on FreeBSD"},i="FreeBSD",d={id:"deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/freebsd/README",title:"FreeBSD",description:"Deploying Rocket.Chat on FreeBSD",source:"@site/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/freebsd/README.md",sourceDirName:"deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/freebsd",slug:"/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/freebsd/",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/freebsd/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/freebsd/README.md",tags:[],version:"current",frontMatter:{description:"Deploying Rocket.Chat on FreeBSD"},sidebar:"tutorialSidebar",previous:{title:"Cloudron.io",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/cloudron-io"},next:{title:"Deploying Rocket.Chat Server Binaries on a FreeBSD system",permalink:"/docs-exp/docs/deploy/deploy-rocket.chat/additional-deployment-methods/unsupported-methods/freebsd/deploying-rocket.chat-server-binaries-on-a-freebsd-system"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Packages",id:"packages",level:2},{value:"Installing pm2",id:"installing-pm2",level:3},{value:"Add user for Rocket.Chat",id:"add-user-for-rocketchat",level:2},{value:"Switch to the newly created user",id:"switch-to-the-newly-created-user",level:3},{value:"Building the dev_bundle",id:"building-the-dev_bundle",level:2},{value:"Setting up the environment",id:"setting-up-the-environment",level:3},{value:"Building meteor",id:"building-meteor",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Running Rocket.Chat",id:"running-rocketchat",level:2},{value:"Install tmux (optional)",id:"install-tmux-optional",level:3},{value:"Troubleshooting tmux",id:"troubleshooting-tmux",level:3},{value:"Notes",id:"notes",level:3},{value:"Thanks",id:"thanks",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"freebsd",children:"FreeBSD"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note: This is a community supported installation method. You can discuss about this in the"})," ",(0,s.jsx)(n.a,{href:"https://forums.rocket.chat/t/freebsd-installation-guide/651",children:(0,s.jsx)(n.em,{children:"forum thread"})}),(0,s.jsx)(n.em,{children:"."})]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Valid for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FreeBSD 10.3-RELEASE"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"(64bit, meteor's development scripts will not compile under 32bit)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Please use a fresh system without traces of node or npm. Most of my initial problems came from old and/or special versions of node/npm/meteor"})}),"\n",(0,s.jsx)(n.h2,{id:"packages",children:"Packages"}),"\n",(0,s.jsx)(n.p,{children:"You need to install the following packages either as root or via sudo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo pkg install git scons python gcc48 gmake npm bash wget\n"})}),"\n",(0,s.jsx)(n.p,{children:"Also install mongodb if you will be running the database setup on this server as well."}),"\n",(0,s.jsx)(n.p,{children:"If you get the following output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"The package management tool is not yet installed on your system.\nDo you want to fetch and install it now? [y/N]:\n"})}),"\n",(0,s.jsx)(n.p,{children:"It's just because the pkg-ng binary package system have not been setup / bootstraped yet. Simply choose yes (y) here. And press enter."}),"\n",(0,s.jsx)(n.h3,{id:"installing-pm2",children:"Installing pm2"}),"\n",(0,s.jsx)(n.p,{children:"We need pm2 later to daemonize or Rocket.Chat build."}),"\n",(0,s.jsx)(n.p,{children:"Now, install pm2:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo npm install pm2 -g\n$ sudo pm2 startup freebsd\n"})}),"\n",(0,s.jsx)(n.h2,{id:"add-user-for-rocketchat",children:"Add user for Rocket.Chat"}),"\n",(0,s.jsx)(n.p,{children:"This user will be the one used for running Rocket.Chat server."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ adduser\nUsername: rocketchat\nFull name: User used for running rocket chat\nUid (Leave empty for default): *press enter*\nLogin group [rocketchat]: *press enter*\nLogin group is rocketchat. Invite rocketchat into other groups? []: *press enter*\nLogin class [default]: *press enter*\nShell (sh csh tcsh git-shell bash rbash nologin) [sh]: bash\nHome directory [/home/rocketchat]: *press enter, or pick where you want your Rocket.Chat installation to be*\nHome directory permissions (Leave empty for default): *press enter*\nUse password-based authentication? [yes]: *press enter*\nUse an empty password? (yes/no) [no]: *press enter*\nUse a random password? (yes/no) [no]: yes\nLock out the account after creation? [no]: *press enter*\nUsername   : rocketchat\nPassword   : <random>\nFull Name  : User used for running Rocket.Chat\nUid        : 1001\nClass      :\nGroups     : rocketchat\nHome       : /home/rocketchat\nHome Mode  :\nShell      : /usr/local/bin/bash\nLocked     : no\nOK? (yes/no): yes\nadduser: INFO: Successfully added (rocketchat) to the user database.\nadduser: INFO: Password for (rocketchat) is: qGn&j9nXBx&j*C#u\nAdd another user? (yes/no): no\n"})}),"\n",(0,s.jsx)(n.p,{children:"Be sure to save the password somewhere safe if you will need to login as the Rocket.Chat user in the future."}),"\n",(0,s.jsx)(n.h3,{id:"switch-to-the-newly-created-user",children:"Switch to the newly created user"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ su -l rocketchat\n"})}),"\n",(0,s.jsx)(n.p,{children:"(Or what ever username you picked)."}),"\n",(0,s.jsx)(n.h2,{id:"building-the-dev_bundle",children:"Building the dev_bundle"}),"\n",(0,s.jsx)(n.h3,{id:"setting-up-the-environment",children:"Setting up the environment"}),"\n",(0,s.jsx)(n.p,{children:"Set some environment Variables to make the build work under FreeBSD:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ export MAKE_CMD=gmake\n$ export CXX=clang++\n$ export CC=clang\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MAKE_CMD=gmake"})," is important, because meteor requires GNU make to build. The fork we will be building lets us set ",(0,s.jsx)(n.code,{children:"MAKE_CMD"})," so we don't have to do nasty stuff to our BSD make."]}),"\n",(0,s.jsx)(n.h3,{id:"building-meteor",children:"Building meteor"}),"\n",(0,s.jsxs)(n.p,{children:["We need a fork of meteor which allows us to set ",(0,s.jsx)(n.code,{children:"MAKE_CMD"})," as mentioned before:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ cd $HOME\n$ git clone -b freebsd https://github.com/williambr/meteor\n"})}),"\n",(0,s.jsx)(n.p,{children:"Meteor comes with scripts to build it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ cd meteor\n$ ./scripts/build-mongo-for-dev-bundle.sh\n$ ./scripts/build-node-for-dev-bundle.sh\n$ ./scripts/generate-dev-bundle.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"(These commands might take a long time to run depending on your hardware)"}),"\n",(0,s.jsx)(n.p,{children:"After compiling the development bundles above test out the meteor setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ ./meteor --version\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should give you output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"It's the first time you've run Meteor from a git checkout.\nI will download a kit containing all of Meteor's dependencies.\nSkipping download and installing kit from /usr/home/rocketchat/meteor2/dev_bundle_FreeBSD_amd64_0.5.16.tar.gz\n*** SNIPPED HERE ***\nUnreleased, running from a checkout at 9719021 (HEAD -> freebsd, origin/freebsd)\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should output no errors (Also version numbers might change)."}),"\n",(0,s.jsx)(n.h4,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"That should run without problems. If you run into issues check the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"is the Environment setup right?"}),"\n",(0,s.jsx)(n.li,{children:"Are the scripts running in bash?"}),"\n",(0,s.jsxs)(n.li,{children:["do I have ",(0,s.jsx)(n.code,{children:"gmake"})," installed?"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-rocketchat",children:"Running Rocket.Chat"}),"\n",(0,s.jsxs)(n.p,{children:["First, we need the ",(0,s.jsx)(n.code,{children:"meteor"})," binary in our ",(0,s.jsx)(n.code,{children:"$PATH"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ export PATH=$PATH:$HOME/meteor\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, we need to download Rocket.Chat:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ cd $HOME\n$ git clone https://github.com/RocketChat/Rocket.Chat.git\n$ cd Rocket.Chat\n"})}),"\n",(0,s.jsx)(n.p,{children:"We need to install bcrypt separately."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ npm install --clang=1 bcrypt\n"})}),"\n",(0,s.jsx)(n.p,{children:"After that: Go ahead and start Rocket.Chat!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ meteor\n"})}),"\n",(0,s.jsx)(n.p,{children:"The first launch of Rocket.Chat might take some time as its installing dependencies. If all goes well you would see output like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"=> App running at: http://localhost:3000/\nI20160422-21:52:50.733(2)? \u2794 System \u2794 startup\nI20160422-21:52:50.734(2)? \u2794 +----------------------------------------+\nI20160422-21:52:50.735(2)? \u2794 |             SERVER RUNNING             |\nI20160422-21:52:50.735(2)? \u2794 +----------------------------------------+\nI20160422-21:52:50.736(2)? \u2794 |                                        |\nI20160422-21:52:50.737(2)? \u2794 |       Version: 0.27.0                  |\nI20160422-21:52:50.737(2)? \u2794 |  Process Port: 21690                   |\nI20160422-21:52:50.738(2)? \u2794 |      Site URL: http://localhost:3000/  |\nI20160422-21:52:50.739(2)? \u2794 |                                        |\nI20160422-21:52:50.739(2)? \u2794 +----------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you would like to have the Rocket.Chat daemon running while signed out. You could use tmux to keep it running."}),"\n",(0,s.jsx)(n.h3,{id:"install-tmux-optional",children:"Install tmux (optional)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ sudo pkg install tmux\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start a tmux session and run Rocket.Chat"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ tmux (when tmux is running)\n$ meteor\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will run Rocket.Chat inside a tmux session allowing you to disconnect from the terminal and let the daemon running."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)(n.code,{children:"ctrl+b d"})," to exit the tmux session."]}),"\n",(0,s.jsxs)(n.li,{children:["And use ",(0,s.jsx)(n.code,{children:"tmux a"})," to access the session again."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To read more about using tmux see this page:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://man.openbsd.org/OpenBSD-current/man1/tmux.1",children:"http://man.openbsd.org/OpenBSD-current/man1/tmux.1"})}),"\n",(0,s.jsx)(n.p,{children:"Or look up one of the many tmux guides online."}),"\n",(0,s.jsx)(n.h3,{id:"troubleshooting-tmux",children:"Troubleshooting tmux"}),"\n",(0,s.jsxs)(n.p,{children:["If you run into any troubles with bcrypt, try this: ",(0,s.jsx)(n.code,{children:"cp -R ~/meteor/packages/non-core/npm-bcrypt ~/Rocket.Chat/packages/*"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you run into problems with ",(0,s.jsx)(n.code,{children:"fibers"})," check your ",(0,s.jsx)(n.code,{children:"node"})," and ",(0,s.jsx)(n.code,{children:"npm"})," version. Then try to build it again."]}),"\n",(0,s.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This guide is tested in a FreeBSD 10.3-RELEASE jail."}),"\n",(0,s.jsx)(n.li,{children:"Ensure you don't expose the mongoDB instance to the internet without setting up security for it!"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"thanks",children:"Thanks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Filias Heidt"}),"\n",(0,s.jsx)(n.li,{children:"Matt Olander"}),"\n",(0,s.jsx)(n.li,{children:"William Grzybowski"}),"\n",(0,s.jsx)(n.li,{children:"Cory Smelosky"}),"\n",(0,s.jsx)(n.li,{children:"Sing Li"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);