---
sidebar_position: 1
---

# A Discord bot powered by ChatGPT

In this article, I will show you how to create a flow function that incorporates ChatGPT services. This flow function is a Discord bot.
You can chat with it in a conversation. All the bot answers come from ChatGPT. You can change the ChatGPT prompt in the bot's source code
for the bot to take on different personalities. 

> You can also [create the Discord bot through a flow template](../getting-started-template/discord-chatgpt). The template is an easy-to-use no-code solution, but it is also less flexible.

## Prerequisites

 1. A GitHub account to log into the [flows.network](https://flows.network/) platform. It's free.
 2. A Discord server that you have permission to add a bot.
 3. An OpenAI API key.

## Prepare the source code

For this tutorial, we already created [a repo named `discord-gpt`](https://github.com/flows-network/discord-chatgpt/) for you to fork.

## Import and build

[Click here](https://flows.network/flow/new) to import your forked source code repo for the flow function into flows.network.

For this flow function, we need to add a Discord token in settings so that it can listen for messages from a specific Discord bot.
Please refer to [How to create a Discord chat bot](https://flows.network/blog/discord-chat-bot-guide) on how to get your Discord token.
Click on the **Advanced** link to configure the settings.

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| discord_token    | Copied from Discord Developer Portal                                                        |
| placeholder_text | Optional: The "wait" message displayed to the user while the bot waits for ChatGPT replies  |
| system_prompt    | Optional: The system level prompt that sets the context for the entire conversation         |


Click on the **Build** button to create the flow funtion.

In the next screen, you will be asked to connect to Discord. Since we are providing a Discord API token to access the bot here, you can
simply click on **Continue**.

## Configure the OpenAI API key

Enter your OpenAI API key on the next screen. You can have multiple keys and give each of them a name. You can 
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

The source code for the flow function is written in the Rust programming language. 
The `on_deploy()` function is called by the flows.network platform when the flow is deployed. We start a listener for
the designated bot in `on_deploy()`.

```rust
pub async fn on_deploy() {
    let token = std::env::var("discord_token").unwrap();
    let bot = ProvidedBot::new(token);
    bot.listen_to_messages().await;
}
```

The `handler()` function is annotated with `#[message_handler]`. It is called when the bot receives a message. We first sends
the placeholder message back to the user asking him to wait.
Note that `channel_id` uniquely identifies the Discord conversation for this bot message
as the bot can be in multiple conversations at the same time.

```rust
#[message_handler]
async fn handler(msg: Message) {
    let token = env::var("discord_token").unwrap();
    let placeholder_text = env::var("placeholder").unwrap_or("Typing ...".to_string());
    let system_prompt = env::var("system_prompt").unwrap_or("You are a helpful assistant answering questions on Discord.".to_string());

    let bot = ProvidedBot::new(token);
    let discord = bot.get_client();

    let channel_id = msg.channel_id;
    let content = msg.content;

    let placeholder  = discord.send_message(
        channel_id.into(),
        &serde_json::json!({
            "content": &placeholder_text
        }),
    ).await.unwrap();
```

Next, it detects if the message is `/restart` command. For this command, it will set a flag in a KV store provided by the
flows.network platform. The flow function can access the KV store using the `store` API in the SDK.
When the flag is set, the flow function knows to "restart" the conversation when it is triggered the next time.
That is, it will start a new conversation when the user sends in a new message after `/restart`.

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

Then, we send the bot message ChatGPT via the OpenAI SDK. Once we receive a reply, we will replace the placeholder message
with the actual reply. Note that the OpenAI SDK automatically caches the conversation history,
including the `system_prompt` at the beginning, so that you do not need to replay the entire conversation at every request.
The conversation history is cached under the key `channel_id`.

```rust
    let mut openai = OpenAIFlows::new();
    openai.set_retry_times(3);
    let co = ChatOptions {
        model: ChatModel::GPT35Turbo,
        restart: restart,
        system_prompt: Some(&system_prompt),
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
    }
}
```

As you can see, the flow function gives you fine-grained control over the interactions between Discord and ChatGPT
so that you can deliver a fully customized experience for your bot users.

## Read more

Tutorials and sample code for related flow functions. Click on the **Deploy** link to [configure and deploy your own flow without writing any code from a template](../category/getting-started-template).

* Discord bot with ChatGPT [Tutorial](discord-chatgpt) | [Code](https://github.com/flows-network/discord-chatgpt/) | [Deploy](https://flows.network/flow/createByTemplate/discord-chatgpt)
* Telegram bot with ChatGPT [Tutorial](telegram-chatgpt) | [Code](https://github.com/flows-network/telegram-gpt) | [Deploy](https://flows.network/flow/createByTemplate/Telegram-ChatGPT)
* Slack bot with ChatGPT [Tutorial](slack-chatgpt) | [Code](https://github.com/flows-network/slack-chatgpt) | [Deploy](https://flows.network/flow/createByTemplate/Slack-Chatgpt)
* GitHub comment bot with ChatGPT [Tutorial](github-chatgpt) | [Code](https://github.com/flows-network/chatgpt-github-app)

