---
sidebar_position: 2
---

# A Hello World Discord bot

In this article, I will show you how to create a flow function that responds to events from external services. This flow function is a Discord bot.
If you send the bot a private message, it will echo the message back to you.

## Prerequisites

 1. A GitHub account to log into the [flows.network](https://flows.network/) platform. It's free.
 2. A Discord server that you have permission to add a bot.

## Prepare the source code

For this tutorial, we already created [a repo named `hello-world-discord`](https://github.com/flows-network/hello-world-discord) for you to fork.

## Import, build and deploy

[Click here](https://flows.network/flow/new) to import your forked source code repo for the flow function into flows.network.

For this flow function, we need to add a Discord token in settings so that it can listen for messages from a specific Discord bot.
Please refer to [How to create a Discord chat bot](https://flows.network/blog/discord-chat-bot-guide) on how to get your Discord token.
Click on the **Advanced** link to configure the settings.

| Name             | Value                                 |
| ---------------- | ------------------------------------- |
| discord_token    | Copied from Discord Developer Portal  |


> We put the Discord token in the settings as opposed to in the source code for two reasons. First, we keep the token secure by keeping it out of the public GitHub repos. Second, we make it easy to reuse the flow function source code.

![](hello-world-discord-01.png)

Next, click on the **Build** and **Deploy** buttons to create the flow funtion.

![](hello-world-discord-02.png)

Finally, you will be redirected to the flow details page, where you can check for
service status and logs.
Discord should appear as a connected external service on this page.

## Test it!

When the status of the flow is ready and running, you can invite the Discord bot to your sever.
Refer to this guide to [invite the bot to your server](https://flows.network/blog/discord-chat-bot-guide).

![](hello-world-discord-03.png)

After the bot joined your server, you can find the bot on the right contact list and DM the bot. The bot will simply repeat what you just say.

![](hello-world-discord-04.png)

## Code walkthrough

The source code for the flow function is written in the Rust programming language. The `run()` function
is called by flows.network when it receives a trigger event. In this case, the trigger is a message received by the Discord bot 
designated by the `discord_token` setting in the `env`.

```rust
pub async fn run() -> anyhow::Result<()> {
    let discord_token = std::env::var("discord_token").unwrap();
    let bot = ProvidedBot::new(discord_token);
    bot.listen(|msg| handler(&bot, msg)).await;
    Ok(())
}
```

The `bot.listen()` function is provided by the flows.network SDK to receive the Discord message.
It passes the message to the `handler()` function, which 
determines whether it should reply, and if so, sends the response.

```rust
async fn handler(bot: &ProvidedBot, msg: Message) {
    logger::init();
    let discord = bot.get_client();

    if msg.author.bot {
        log::debug!("ignored bot message");
        return;
    }
    if msg.member.is_some() {
        log::debug!("ignored channel message");
        return;
    }

    let channel_id = msg.channel_id;
    let resp = format!("Welcome to flows.network.\nYou just said: '{}'.\nLearn more at: https://github.com/flows-network/hello-world\n", msg.content);

    _ = discord.send_message(
        channel_id.into(),
        &serde_json::json!({
            "content": resp
        }),
    ).await;
}
```

> When the flow function is deployed, the platform calls its `run()`, which calls `bot.listen()` for the first time. It registers the flow function to be triggered by incoming messages from the `bot`.

The flows.network platform retrieves the Rust source code from your GitHub repo and then compiles it for you. Of course, you can also
compile it locally by installing the Rust compiler toolchain and then run the command.

```bash
cargo build --target wasm32-wasi --release
```
