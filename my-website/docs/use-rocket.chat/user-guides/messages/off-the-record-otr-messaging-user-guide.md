# Off-the-record (OTR) Messaging User Guide

:::info
This feature is currently in beta. Search operations will not find encrypted messages of encrypted rooms. The mobile apps and multi-DMs may not support the encrypted messages (currently under implementation). File Uploads will not be encrypted in this version.
:::

Off-the-record (OTR) Messaging is a feature that allows users to exchange **temporary, encrypted messages directly between each other**. This happens by using the local, non-persistent session storage of their browser rather than storing messages on the Rocket.Chat server. After an OTR session ends and the session storage is cleared, the OTR messages are removed and can no longer be restored.

:::info
OTR messages can help exchange confidential information between users without creating a record of this exchange on the server.
:::

:::info
In contrast to OTR, _end-to-end encrypted messages_ have a record on the server (in the form of the encrypted message string) and are persistent.
:::

## Getting started

Prerequisites for using OTR are:

* OTR has been enabled by your server administrator (if not, you will not be able to see OTR in the DM context menu)
* a direct message (DM) room with only one other participant
* you and your DM-partner have entered their [end-to-end encryption key](../security-bundle/end-to-end-encryption-user-guide.md)
* you and your DM-partner are both online

## Starting an OTR Conversation

_See the following steps with the sample users A and B._

_User A:_ Start the OTR conversation by clicking the DM context menu and selecting **OTR**. This will open the OTR-sidebar.

![Selecting OTR-Panel](/img/image (664).png)

**User A:** Start OTR.

![Starting OTR-Chat](/img/image (718).png)

_User B:_ Accept the OTR invitation.

![Accepting the invitation](/img/image (82).png)

The following messages will be subject to the OTR session and be marked by a key-icon. Unlike end-to-end encryption, this key icon is **bold**.

![OTR messages visual display](/img/image (747).png)

If User A or B breaks OTR (by clearing their local session storage, e.g., refreshing the web client), one of them needs to re-initiate the OTR session by clicking **Refresh Keys**.

![Options during OTR conversation](/img/image (706).png)

## Ending an OTR conversation

In case User A or B wants to end the OTR session, one needs to click "End OTR". This ends the OTR session. The following messages will follow the normal configuration of the DM and be recorded on the server again. If the user refreshes their local session storage, **all OTR messages disappears.**

![Ending OTR conversations](/img/image (1245).png)
