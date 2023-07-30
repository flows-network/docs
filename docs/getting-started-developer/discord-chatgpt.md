---
sidebar_position: 3
---

# A Discord bot powered by ChatGPT

In this article, I will show you how to create a flow function that incorporates ChatGPT services. This flow function is a Discord bot.
You can chat with it in a conversation. All the bot answers come from ChatGPT. You can change the ChatGPT prompt in the bot's source code
for the bot to take on different personalities. 

> You can also create the Discord bot through a flow function template. The template is suitable for 

## Prerequisites

 1. A GitHub account to log into the [flows.network](https://flows.network/) platform. It's free.
 2. A Discord server that you have permission to add a bot.

## Prepare the source code

For this tutorial, we already created [a repo named `discord-gpt`](https://github.com/flows-network/discord-chatgpt/) for you to fork.

## Import and build

[Click here](https://flows.network/flow/new) to import your forked source code repo for the flow function into flows.network.

For this flow function, we need to add a Discord token in settings so that it can listen for messages from a specific Discord bot.
Please refer to [How to create a Discord chat bot](https://flows.network/blog/discord-chat-bot-guide) on how to get your Discord token.
Click on the **Advanced** link to configure the settings.

| Name             | Value                                 |
| ---------------- | ------------------------------------- |
| discord_token    | Copied from Discord Developer Portal  |


Click on the **Build** button to create the flow funtion.

## Configure the OpenAI API key

Configure OpenAI integration so that the flow function can access the ChatGPT API service.
Enter your OpenAI API key here. You can have multiple keys and give each of them a name. You can 
then access the keys by their names through the OpenAI SDK in the flow function.

## Deploy

Finally, you will be redirected to the flow details page, where you can check for
service status and logs.
Discord and OpenAI should appear as connected external services on this page.

## Test it!

When the status of the flow is ready and running, you can invite the Discord bot to your sever.

> Refer to this guide to [invite the bot to your server](https://flows.network/blog/discord-chat-bot-guide).

After the bot joined your server, you can find the bot on the right contact list and DM the bot. The bot will chat with you now!

## Code walkthrough

The source code for the flow function is written in the Rust programming language. The `run()` function
is called by flows.network when it receives a trigger event. In this case, the trigger is a message received by the Discord bot
designated by the `discord_token` setting in the `env`. The `placeholder_text` value specifies what the bot should say to the user while
it is waiting for ChatGPT to respond. The `system_prompt` value is the context of the conversation given to ChatGPT. You can change 
it to make the bot behavior as different characters (e.g., a programmer, a doctor, an accountant, a consultant, or a tour guide).

```rust
pub async fn run() {
    let discord_token = env::var("discord_token").unwrap();
    let placeholder_text = env::var("placeholder").unwrap_or("Typing ...".to_string());
    let system_prompt = std::env::var("system_prompt").unwrap_or("You are a helpful assistant answering questions on Discord.".to_string());

    let bot = ProvidedBot::new(discord_token);
    bot.listen(|msg| handler(&bot, &placeholder_text, &system_prompt, msg)).await;
}
```

The `bot.listen()` function is provided by the flows.network SDK to receive the Discord message.
It passes the message to the `handler()` function, which
determines whether it should reply, and if so, sends the response.
It ignore messages from bots, including its own, and then extracts the conversation (`channel_id`) and message text (`content`).

```rust
async fn handler(bot: &ProvidedBot, placeholder_text: &str, system_prompt: &str, msg: Message) {
    let discord = bot.get_client();
    if msg.author.bot {
        return;
    }
    let channel_id = msg.channel_id;
    let content = msg.content;
```

Next, it detects if the message is the `/restart` command. For this command, it will set a flag in a KV store provided by the 
flows.network platform. The flow function can access the KV store using the `store` API in the SDK.

```rust
    if content.eq_ignore_ascii_case("/restart") {
        _ = discord.send_message(
            channel_id.into(),
            &serde_json::json!({
                "content": "Ok, I am starting a new conversation."
            }),
        ).await;
        store::set(&channel_id.to_string(), json!(true), None);
        return;
    }
```

When the flag is set, the flow function knows to "restart" the conversation when it is triggered the next time. 
That is, it will start a new conversation when the user sends in a new message after `/restart`.

```rust
    let restart = store::get(&channel_id.to_string())
        .and_then(|v| v.as_bool())
        .unwrap_or(false);
    if restart {
        log::info!("Detected restart = true");
        store::set(&channel_id.to_string(), json!(false), None);
    }
```

Since ChatGPT often takes a long time to respond with the complete answer, we will display a placeholder
message asking the user to wait.

```rust
    let placeholder  = discord.send_message(
        channel_id.into(),
        &serde_json::json!({
            "content": placeholder_text
        }),
    ).await.unwrap();
```

Finally, we can make an OpenAI API call to ChatGPT now. The flows.network platform will add your OpenAI API key
automatically when it makes a request to ChatGPT. 
The `restart` value will be passed to the SDK so that it can determine whether
to send the conversation history as context to ChatGPT.
If ChatGPT returns with an answer, the flow function would update the placeholder message with the answer.

```rust
    let mut openai = OpenAIFlows::new();
    openai.set_retry_times(3);
    let co = ChatOptions {
        // model: ChatModel::GPT4,
        model: ChatModel::GPT35Turbo,
        restart: restart,
        system_prompt: Some(system_prompt),
        ..Default::default()
    };

    match openai.chat_completion(&channel_id.to_string(), &content, &co).await {
        Ok(r) => {
            _ = discord.edit_message(
                channel_id.into(), placeholder.id.into(),
                &serde_json::json!({
                    "content": r.choice
                }),
            ).await;
        }
        Err(e) => {
            _ = discord.edit_message(
                channel_id.into(), placeholder.id.into(),
                &serde_json::json!({
                    "content": "Sorry, an error has occured. Please try again later!"
                }),
            ).await;
            log::error!("OpenAI returns error: {}", e);
        }
    }
}
```

As you can see, the flow function gives you fine-grained control over the interactions between Discord and ChatGPT
so that you can deliver a fully customized experience for your bot users.
