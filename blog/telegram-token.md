---
slug: api-guide
title: How to get a Telegram bot token
authors: help
tags: [telegram]
---

flows.network supports the Telgeram integration. A Telegram bot token is neceessary thing for building telegram bots.

Here's a step-by-step guide on how to get a bot token for Telegram. Then you can use this token to create your own telegram bot.

1. Open Telegram on your device or web browser and search for the "BotFather" account [@BotFather](https://t.me/BotFather).
2. Start a chat with the BotFather and type "/newbot" to create a new bot. BotFather will ask for a name and username for your bot.
3. Choose a name and username for your bot. The name can be anything you like but the username must end with "bot". For example, the name can be "FlowsNetworkBot" and the username can be "@flowsnetworkbot".
4. If your chosen username is available, BotFather will provide you with a unique API token for your bot. You should copy and store this token carefully.
5. Once you have the API token, you can start building your Telegram bot on flows.network. Here is a template project to [build a ChatGPT-powered Telegram bot](https://github.com/flows-network/telegram-gpt) on flows.network.

> Note that the API token is a unique identifier for your bot, which allows you to send requests to the Telegram Bot API. Make sure to keep this token safe and secure, as anyone with access to this token can potentially control your bot.

In conclusion, getting a bot token for Telegram is a simple process that can be completed with BotFather's help. Once you have the token, you can start building your bot on flows.network.
