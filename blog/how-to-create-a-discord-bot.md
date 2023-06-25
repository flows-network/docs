---
slug: discord-bot-guide
title: How to create a Discord bot
authors: helper
tags: [discord]
---

# How  to create a Discord  server bot

Discord is a great communication tool for the community. Lots of organisations, companies, and open-source projects use Discord as the home of their community. One of the most famous use cases is Midjounry. Lots of people use midjourny to generate unbelievable images with the help of a Discord server bot. In this article, I will show you how to create a Discord server bot and connect the bot with flows.work. This will be helpful when you want to create Discord-related flows.

To connect Discord on flows.network, generally we will need two parameters: `discord_channel_id` and `discord-token`. 

## How to get the Discord channel id

Let’s get started with channel id, which is much easier. Discord channel id is an 18-digit number. 


Each channel has its own unique URL. A standard URL of a discord channel is made up of `discord.com/channels/numbers/discord_id`. All you need to do is to enter the channel where you want to deploy the bot and copy the last numbers of the URL. 

```
https://discord.com/channels/846973236280950824/846973236280950827
                                               |---channel id-----|
```

That’s how we get the Discord channel id.You can use a Discord channel ID to indicate the channel from which the bot should exit.


## How to get the Discord bot token

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) You need to log in your Discord account first.
2. Click on the "New Application" button and give your bot a name.
3. Then, you will be redirected to the application details page. On the general information page, you can update your app icon, description, tags and other stuff.
4. Click on the "Bot" tab on the left-hand side of the page. In this page, we need to 
    1. Click the Reset Token button to get the Discord bot token. Then save the token carefully, which we will use to build a flow on flows.network.
    2. Open the PRESENCE INTENT, SERVER MEMBERS INTENT, and MESSAGE CONTENT INTENT.
5. Click on the “Oauth" tab on the left-hand side of the page and click on URL Generator.
    1. On the URL Generator page, select bot in the scope.
    2. Copy the bot url from the GENERATED RRL in the bottom of this page. This URL is used to invite your bot to your Discord server after your flow is running successfully.

After you get the Discord Chanel id and Discord bot token , go to flows.network to create a Discord bot, like the ChatGPT Discord server.


## Connect the channel id and Discord token with your bot

The most easiest way to create a discord bot is to get started with a pre-build template. 









