"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9272],{28744:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=t(74848),i=t(28453);const r={description:"The following contains an overview of the implemented mechanisms of the Rocket.Chat End to End Encryption feature. It provides technical information and supplements the user guide."},o="End-to-End Encryption Specifications",c={id:"customer-center/security-center/end-to-end-encryption-specifications",title:"End-to-End Encryption Specifications",description:"The following contains an overview of the implemented mechanisms of the Rocket.Chat End to End Encryption feature. It provides technical information and supplements the user guide.",source:"@site/docs/customer-center/security-center/end-to-end-encryption-specifications.md",sourceDirName:"customer-center/security-center",slug:"/customer-center/security-center/end-to-end-encryption-specifications",permalink:"/docs-exp/docs/customer-center/security-center/end-to-end-encryption-specifications",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/customer-center/security-center/end-to-end-encryption-specifications.md",tags:[],version:"current",frontMatter:{description:"The following contains an overview of the implemented mechanisms of the Rocket.Chat End to End Encryption feature. It provides technical information and supplements the user guide."},sidebar:"tutorialSidebar",previous:{title:"Compliance Resources",permalink:"/docs-exp/docs/customer-center/security-center/compliance-resources"},next:{title:"Security fixes and updates",permalink:"/docs-exp/docs/customer-center/security-center/security-fixes-and-updates/"}},d={},a=[{value:"Encryption Process Overview",id:"encryption-process-overview",level:2},{value:"Code",id:"code",level:2},{value:"Algorithms Used",id:"algorithms-used",level:2},{value:"Architectural Specifications",id:"architectural-specifications",level:2},{value:"Server Methods",id:"server-methods",level:2},{value:"1. <code>addKeyToChain(key)</code>",id:"1-addkeytochainkey",level:3},{value:"2. fetchGroupE2EKey(rid)",id:"2-fetchgroupe2ekeyrid",level:3},{value:"3. fetchKeychain(userId)",id:"3-fetchkeychainuserid",level:3},{value:"4. updateGroupE2EKey(rid, uid, key)",id:"4-updategroupe2ekeyrid-uid-key",level:3},{value:"5. emptyKeychain()",id:"5-emptykeychain",level:3},{value:"6. fetchMyKeys()",id:"6-fetchmykeys",level:3},{value:"REST API routes for encryption-related requests",id:"rest-api-routes-for-encryption-related-requests",level:2},{value:"Push Notifications of End-to-End encrypted messages",id:"push-notifications-of-end-to-end-encrypted-messages",level:2},{value:"Process",id:"process",level:3},{value:"Fetching full message content from the server on receipt (Enterprise Edition only)",id:"fetching-full-message-content-from-the-server-on-receipt-enterprise-edition-only",level:3},{value:"Off-the-record Messaging (OTR) encryption specifications",id:"off-the-record-messaging-otr-encryption-specifications",level:2}];function h(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"end-to-end-encryption-specifications",children:"End-to-End Encryption Specifications"}),"\n",(0,n.jsx)(s.h2,{id:"encryption-process-overview",children:"Encryption Process Overview"}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"IMPORTANT:"})," ",(0,n.jsx)(s.strong,{children:"E2E encryption functionality is currently in beta"})," and includes notable restrictions that workspace owners should carefully consider before activating this feature for production use as follow:"]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"E2E encrypted messages will not appear in search operations "}),"\n",(0,n.jsx)(s.li,{children:"Bots or other ancillary systems interacting via webhooks or REST API will not be able to read E2EE encrypted messages "}),"\n",(0,n.jsx)(s.li,{children:"File uploads are not encrypted "}),"\n",(0,n.jsx)(s.li,{children:"Rocket.Chat enables users to reset their private E2EE key to avoid permanent loss of data during the beta period"}),"\n"]})]}),"\n",(0,n.jsxs)(s.p,{children:["Upon login, the client auto-generates the encryption password and asks the user to save it. This password is used to generate a secure 256-bit ",(0,n.jsx)(s.strong,{children:"AES-CBC"})," encryption key, called \u201c",(0,n.jsx)(s.strong,{children:"Master"})," ",(0,n.jsx)(s.strong,{children:"Key."}),"\u201d"]}),"\n",(0,n.jsxs)(s.p,{children:["For using end-to-end encryption (",(0,n.jsx)(s.strong,{children:"E2EE"}),"), the client (",(0,n.jsx)(s.strong,{children:"C"}),") of a user (",(0,n.jsx)(s.strong,{children:"U"}),") needs to have a Public-Private key pair (",(0,n.jsx)(s.strong,{children:"Ku, Kr"}),"). This key pair is generated when the user logs in with a client for the first time. The public key is sent to the server and stored in the database in the User model. The private key is first encrypted using the Master key and then sent to the server for storing in the User model database. If a public-private key pair already exists in the database for the user, instead of generating it again, it is downloaded from the server. The downloaded public key is used as-is, and the encrypted private key is first decrypted using the master key. If the master key has not been decrypted client-side already, the user is prompted to enter the master key again."]}),"\n",(0,n.jsxs)(s.p,{children:["The public key is used to encrypt a persistent session key (",(0,n.jsx)(s.strong,{children:"Ks"}),"), which is then used for the actual encryption of messages and files. This encrypted session key is stored in the database, in the Subscription model for every user in a room (including the user who initiates the ",(0,n.jsx)(s.strong,{children:"E2EE"})," session). Note that this method works for direct messages as well as groups since direct messaging is just a room with only two people in it."]}),"\n",(0,n.jsxs)(s.p,{children:["When starting a new ",(0,n.jsx)(s.strong,{children:"E2EE"})," session, first, if an existing session key exists in the room subscription of the current user, it is downloaded and decrypted using the user\u2019s private key and then used to encrypt future messages. In case an existing session key is not found in the database, a new session key is generated by the current user and then stored in the database encrypted for every user in the room."]}),"\n",(0,n.jsxs)(s.p,{children:["Once a session key has been obtained in the above manner, we enter ",(0,n.jsx)(s.strong,{children:"E2EE"})," mode, and all messages sent henceforth are encrypted using this session key."]}),"\n",(0,n.jsxs)(s.p,{children:["Because keys are stored in the database and are persistent, the other users in the room do not need to be online to participate in an ",(0,n.jsx)(s.strong,{children:"E2EE"})," conversation."]}),"\n",(0,n.jsx)(s.h2,{id:"code",children:"Code"}),"\n",(0,n.jsx)(s.p,{children:"The relevant code for E2EE is located in"}),"\n",(0,n.jsxs)(s.p,{children:["(rocket.chat/app/e2e/client) ",(0,n.jsx)(s.a,{href:"https://github.com/RocketChat/Rocket.Chat/tree/2bf8edab056dbc5e0d40aeae2c4472f729ec09d9/app/e2e/client",children:(0,n.jsx)(s.em,{children:"https://github.com/RocketChat/Rocket.Chat/tree/2bf8edab056dbc5e0d40aeae2c4472f729ec09d9/app/e2e/client"})}),"__"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"(rocket.chat/app/e2e/client)"})," ",(0,n.jsx)(s.a,{href:"https://github.com/RocketChat/Rocket.Chat/tree/2bf8edab056dbc5e0d40aeae2c4472f729ec09d9/app/e2e/client",children:"https://github.com/RocketChat/Rocket.Chat/tree/2bf8edab056dbc5e0d40aeae2c4472f729ec09d9/app/e2e/client"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"And"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"https://github.com/RocketChat/Rocket.Chat/blob/2bf8edab056dbc5e0d40aeae2c4472f729ec09d9/app/e2e/client/helper.js",children:"https://github.com/RocketChat/Rocket.Chat/blob/2bf8edab056dbc5e0d40aeae2c4472f729ec09d9/app/e2e/client/helper.js "}),(0,n.jsx)(s.a,{href:"https://github.com/RocketChat/Rocket.Chat/blob/2bf8edab056dbc5e0d40aeae2c4472f729ec09d9/app/e2e/client/helper.js",children:"https://github.com/RocketChat/Rocket.Chat/blob/2bf8edab056dbc5e0d40aeae2c4472f729ec09d9/app/e2e/client/helper.js"})]}),"\n",(0,n.jsx)(s.p,{children:"contains the technical specifications of the implementation of E2EE."}),"\n",(0,n.jsx)(s.h2,{id:"algorithms-used",children:"Algorithms Used"}),"\n",(0,n.jsxs)(s.p,{children:["Specifically, ",(0,n.jsx)(s.strong,{children:"E2EE"})," uses:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"- client key pair: RSA-OAEP, length 2048"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"- master key: AES-CBC, length 256, iterations: 1000"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"- session key: AES-CBC, length 128"})}),"\n",(0,n.jsx)(s.h2,{id:"architectural-specifications",children:"Architectural Specifications"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"User Login:"})," As soon as the user logs in, we ask for their \u201c",(0,n.jsx)(s.strong,{children:"E2E"})," ",(0,n.jsx)(s.strong,{children:"password"}),"\u201d. Using this password with a ",(0,n.jsx)(s.strong,{children:"PBKDF"})," (Password-based Key Derivation Function), we generate a \u201cMaster Key.\u201d We then check the server database for whether a public-private key pair exists for this user. If it does, we download that key pair. The public key is used as-is. The private key is in encrypted form and will be decrypted using the master key before it can be used."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Client Startup:"})," Using ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.code,{children:"startClient()"})})," in ",(0,n.jsx)(s.code,{children:"rocketchat.e2e.js"}),", check the local storage of the client to determine whether this is a new client or not. If local storage does not have the public-private key pair for this client, then this is treated as a new client, and this RSA-OAEP key pair is generated using a function call to: ",(0,n.jsx)(s.code,{children:"crypto.subtle.generateKey({name: 'RSA-OAEP', modulusLength: 2048, publicExponent: new Uint8Array([0x01, 0x00, 0x01]), hash: {name: 'SHA-256'}}, true, ['encrypt', 'decrypt']);"})," This key pair is finally stored in the client\u2019s local storage in a serialized form (JSON-stringified). This serial form of the public key and encrypted private key is also sent over to the server database using a server-method call to ",(0,n.jsx)(s.code,{children:"addKeyToChain()"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["The client starts the encryption session from the E2E flex tab button: The handshake() function in rocketchat.e2e.room.js is called for the room where the client started the session. First, try fetching an encrypted session key from the subscription for this user-room pair from the database. If this key is found, decrypt this using the client\u2019s private key, and the ",(0,n.jsx)(s.strong,{children:"E2EE"})," session is started using this decrypted key. If the user\u2019s subscription to this room does not contain a key, generate a new AES-CBC session key for use. This is done by a function call to: ",(0,n.jsx)(s.code,{children:"RocketChat.E2E.crypto.generateKey({name: 'AES-CBC', length: 128}, true, ['encrypt', 'decrypt'])"})," Once a key has been generated, it has to be stored, encrypted in the subscriptions of all users in the current room. This is done by: Fetch public keys for all users in the room using server-method calls to ",(0,n.jsx)(s.code,{children:"getUsersOfRoom()"})," and ",(0,n.jsx)(s.code,{children:"fetchKeychain()"}),". One by one, encrypt the newly generated session key using each of these public keys, and store this encrypted key in the corresponding user\u2019s subscription to this room using a server-method call to ",(0,n.jsx)(s.code,{children:"updateGroupE2EKey()"}),". ",(0,n.jsx)(s.strong,{children:"E2EE"})," session is now started using the generated session key. 4. Client sends a message: Making use of the ",(0,n.jsx)(s.code,{children:"onClientBeforeSendMessage"})," event when the user sends the message, the message object is encrypted using the session key obtained in the previous step when ",(0,n.jsx)(s.strong,{children:"E2E"})," is in session. This encrypted message is wrapped in another object, in a \u201cmsg\u201d parameter, and a new parameter for type, called \u201ct\u201d, is added to this new object with the value \u201c",(0,n.jsx)(s.strong,{children:"e2e"}),"\u201d to distinguish it from a regular message. Thus, the new object becomes:"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"final_message: {"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"msg: &lt;encrypted_message>,"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"T: \u201ce2e\u201d }"}),(0,n.jsx)(s.br,{}),"\n","This new object is sent to the other client. Note that the original message is not visible to anyone, and only the encrypted message is sent."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["The client receives a message: When a message object is received, using the `",(0,n.jsx)(s.code,{children:"onClientMessageReceived"})," event, we intercept it and check whether the \u201ct\u201d type parameter of the message object is \u201c",(0,n.jsx)(s.strong,{children:"e2e"}),"\u201d, like we set when sending the message. If it is not, we don't need to decrypt it as it is a plaintext message, and ",(0,n.jsx)(s.strong,{children:"E2EE"})," was not used. If it is an encrypted message, we take the \u201cmsg\u201d parameter\u2019s value and decrypt that message using the session key."]}),"\n",(0,n.jsxs)(s.p,{children:["Note that if the receiving client does not have the session key in its local storage, it will have to download the encrypted session key from the server using the ",(0,n.jsx)(s.code,{children:"fetchGroupE2EKey"}),"`method, and then decrypt it using its own private key, and then use this key for decryption of the incoming message."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"server-methods",children:"Server Methods"}),"\n",(0,n.jsxs)(s.h3,{id:"1-addkeytochainkey",children:["1. ",(0,n.jsx)(s.code,{children:"addKeyToChain(key)"})]}),"\n",(0,n.jsxs)(s.p,{children:["For saving a newly generated public key to the database for the current user.",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.strong,{children:"Request:"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"key = {"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"RSA-PubKey: \u201c&lt; The generated public key for a client>\u201d,"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"RSA-EPrivKey: \u201c&lt;"})," ",(0,n.jsx)(s.strong,{children:"``"}),(0,n.jsx)(s.code,{children:"Generated private key, encrypted using the master key>\u201d"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"}"})}),"\n",(0,n.jsx)(s.p,{children:"The keys have been converted from ArrayBuffer to String format before sending them."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Response:"})," null"]}),"\n",(0,n.jsx)(s.h3,{id:"2-fetchgroupe2ekeyrid",children:"2. fetchGroupE2EKey(rid)"}),"\n",(0,n.jsx)(s.p,{children:"For fetching the encrypted session key for a conversation, for the current user."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Request:"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"rid = The room id of a conversation"})," (either of direct or private)."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Response:"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"E2EE"})," session key for the current user for that conversation."]}),"\n",(0,n.jsx)(s.h3,{id:"3-fetchkeychainuserid",children:"3. fetchKeychain(userId)"}),"\n",(0,n.jsx)(s.p,{children:"For fetching the public key of a user (to be used for encrypting the session key for that user)."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Request:"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"userId = The id of a user"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Response:"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"{"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"RSA-PubKey: \u201c&lt; The public key for that user>\u201d,"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"RSA-EPrivKey: \u201c&lt; The private key, encrypted using the master key>\u201d"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"}"})}),"\n",(0,n.jsx)(s.h3,{id:"4-updategroupe2ekeyrid-uid-key",children:"4. updateGroupE2EKey(rid, uid, key)"}),"\n",(0,n.jsx)(s.p,{children:"For saving an encrypted session key to the database for a user."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Request:"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"rid = The room id of a conversation (either of direct or private)"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"uid = The id of a user"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"key = The E2EE Session key for that user, for that conversation"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Response:"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"{ Rocket.Chat subscription object }"})}),"\n",(0,n.jsx)(s.h3,{id:"5-emptykeychain",children:"5. emptyKeychain()"}),"\n",(0,n.jsx)(s.p,{children:"Clears out the current user\u2019s public and encrypted private keys from the server database."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Request:"})," "]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Response:"})," "]}),"\n",(0,n.jsx)(s.h3,{id:"6-fetchmykeys",children:"6. fetchMyKeys()"}),"\n",(0,n.jsx)(s.p,{children:"Fetches current user\u2019s public and encrypted private keys from the server database."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Request:"})," "]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Response:"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"{"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"RSA-PubKey: \u201c&lt;The public key for current user>\u201d,"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"RSA-EPrivKey: \u201c&lt;The private key, encrypted using the master key>\u201d"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"}"})}),"\n",(0,n.jsx)(s.h2,{id:"rest-api-routes-for-encryption-related-requests",children:"REST API routes for encryption-related requests"}),"\n",(0,n.jsx)(s.p,{children:"Each route directly corresponds to one server DDP method described above. These routes follow the same naming system as the DDP methods described above. Please refer to the above description to know more about the individual request/response pairs for each route."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET e2e.fetchGroupE2EKey(rid)"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET e2e.fetchKeychain(uid)"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET e2e.fetchMyKeys()"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"POST e2e.addKeyToChain(RSAPubKey, RSAEPrivKey)"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"POST e2e.emptyKeychain()"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"POST e2e.updateGroupE2EKey(uid, rid, key)"})}),"\n",(0,n.jsx)(s.h2,{id:"push-notifications-of-end-to-end-encrypted-messages",children:"Push Notifications of End-to-End encrypted messages"}),"\n",(0,n.jsx)(s.p,{children:"Push Notifications for messages of an E2EE room just contain the encrypted payload of a message, the job of decrypting this content before shown is done locally by the mobile clients (iOS/Android)."}),"\n",(0,n.jsx)(s.h3,{id:"process",children:"Process"}),"\n",(0,n.jsx)(s.p,{children:"The server sends Push notifications. The server, however, doesn't store the unencrypted content of any message from an E2EE room, because only the encrypted string is stored on the server. These encrypted strings can only be decrypted using the private key of a user that is stored locally on clients."}),"\n",(0,n.jsxs)(s.p,{children:["When a new push notification from a E2EE message arrives, it has a messageType: '",(0,n.jsx)(s.code,{children:"e2e"}),"'. The mobile client then starts decrypting the message, within the push payload, checking for the locally stored private key of a user and the E2EE key of the room that the message came from. If both are found, the message is decrypted locally on the device and then shows the plaintext message. In this process, only the encrypted message content passed via the push notification gateways."]}),"\n",(0,n.jsxs)(s.p,{children:["This feature is available in our ",(0,n.jsx)(s.strong,{children:"Community Edition."})]}),"\n",(0,n.jsx)(s.h3,{id:"fetching-full-message-content-from-the-server-on-receipt-enterprise-edition-only",children:"Fetching full message content from the server on receipt (Enterprise Edition only)"}),"\n",(0,n.jsx)(s.p,{children:"To add an additional layer of security, there exists another feature for push notifications:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Fetch full message content from the server on receipt"})}),"\n",(0,n.jsx)(s.p,{children:"This means to request the push message content from the server to display it, and it does not pass any message content - encrypted or not - via Google/Apple/other push gateways. Instead, the message content itself is fetched by and within the Rocket.Chat client itself. What passes via the gateways is only the information that a new message should be fetched and then shown as a push notification. Once the client receives this, the client will fetch the content. This way, you can prevent that the message content (even in encrypted form) passes via a separate gateway."}),"\n",(0,n.jsxs)(s.p,{children:["Note: This feature is ",(0,n.jsx)(s.strong,{children:"Enterprise Edition only"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"off-the-record-messaging-otr-encryption-specifications",children:"Off-the-record Messaging (OTR) encryption specifications"}),"\n",(0,n.jsx)(s.p,{children:"OTR is closely related to End-to-End-Encryption. It uses the same ciphers but instead uses only the participant\xb4s local session storage to store the keys."}),"\n",(0,n.jsx)(s.p,{children:"Keys are exchanged when the OTR invitation is accepted by the counterpart, that is why all participants need to be online. Messages from an OTR session are removed when the session storage is cleared."})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var n=t(96540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);