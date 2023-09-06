---
slug: discord-chat-bot-guide
title: How to create a Discord chat bot
authors: helper
tags: [discord,integration guide]
---

A Discord chat bot is a bot user that can receive and respond to private messages, as well as channel messages that specifically mention or reply to the bot user. In order to connect a flow function with a Discord chat bot, you will need a `discord_token`.

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and log in.
2. Click on the "New Application" button and give your bot a name.
3. Next, on the application details page, you can update the app icon, description, tags etc.
4. Click on the "Bot" tab on the left panel.
    1. Click the "Reset Token" button to get the `discord_token`. **Write down the token and keep it safe!**
    2. Turn on the "PRESENCE INTENT", "SERVER MEMBERS INTENT", and "MESSAGE CONTENT INTENT" settings.
5. Click on the "OAuth" tab on the left panel
    1. Click on "URL Generator".
    2. Select the "bot" scope.
    3. Select the "administrator" permission (or select message reading and sending permissions individually as you need).
    4. Get the bot URL from the GENERATED URL in the bottom of this page.
7. Finally, use the bot URL from the last step to invite the bot into any of your Discord servers. 

Once you connect a flow function to the bot (via the `discord_token`), all users in the Discord server will be able to message the bot and mention / reply to it in channels.
