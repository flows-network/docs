---
sidebar_position: 1
---

# A Telegram bot powered by ChatGPT

In this article, I will show you how to create a flow function that incorporates ChatGPT services. This flow function is a Telegram bot.
You can chat with it in a conversation. All the bot answers come from ChatGPT. You can change the ChatGPT prompt in the bot's source code
for the bot to take on different personalities. 

> You can also [create the Telegram bot through a flow template](https://flows.network/flow/createByTemplate/Telegram-ChatGPT). The template is an easy-to-use no-code solution, but it is also less flexible.

## Prerequisites

 1. A GitHub account to log into the [flows.network](https://flows.network/) platform. It's free.
 2. A Telegram bot token.
 3. An OpenAI API key.

## Prepare the source code

For this tutorial, we already created [a repo named `telegram-gpt`](https://github.com/flows-network/telegram-chatgpt/) for you to fork.

## Import and build

[Click here](https://flows.network/flow/new) to import your forked source code repo for the flow function into flows.network.

For this flow function, we need to add a Telegram bot token in settings so that it can listen for messages from a specific Telegram bot.
Please refer to [How to create a Telegram chat bot](https://flows.network/blog/telegram-token) on how to get your Telegram bot token.
Click on the **Advanced** link to configure the settings.

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| telegram_token   | Copied from Telegram @botfather                                                             |
| placeholder_text | Optional: The "wait" message displayed to the user while the bot waits for ChatGPT replies  |
| system_prompt    | Optional: The system level prompt that sets the context for the entire conversation         |
| help_mesg        | Optional: The help message displayed to the user for the /help command                      |


Click on the **Build** button to create the flow funtion.

## Configure the OpenAI API key

Enter your OpenAI API key on the next screen. You can have multiple keys and give each of them a name. You can 
then access the keys by their names through the OpenAI SDK in the flow function.

## Deploy

Finally, you will be redirected to the flow details page, where you can check for
service status and logs.
Telegram and OpenAI should appear as connected external services on this page.

## Test it!

When the status of the flow is ready and running, you can start sending messages to your bot!

## Code walkthrough

The source code for the flow function is written in the Rust programming language. 
The `on_deploy()` function is called by the flows.network platform when the flow is deployed. We start a listener for
the designated bot in `on_deploy()`.

```rust
pub async fn on_deploy() {
    let telegram_token = std::env::var("telegram_token").unwrap();
    listen_to_update(telegram_token).await;
}
```

The `handler()` function is annotated with `#[update_handler]`. It is called when the bot receives an update, which could be a message, a file, or a command. 
If the incoming update is a message, we first 
detect if the message is `/restart` command. For this command, it will set a flag in a KV store provided by the
flows.network platform. The flow function can access the KV store using the `store` API in the SDK.
When the flag is set, the flow function knows to "restart" the conversation when it is triggered the next time.
That is, it will start a new conversation when the user sends in a new message after `/restart`.

sends
the placeholder message back to the user asking him to wait.
Note that `chat_id` uniquely identifies the Discord conversation for this bot message
as the bot can be in multiple conversations at the same time.

```rust
#[update_handler]
async fn handler(update: Update) {
    let telegram_token = std::env::var("telegram_token").unwrap();
    let placeholder_text = std::env::var("placeholder").unwrap_or("Typing ...".to_string());
    let system_prompt = std::env::var("system_prompt").unwrap_or("You are a helpful assistant answering questions on Telegram.".to_string());
    let help_mesg = std::env::var("help_mesg").unwrap_or("I am your assistant on Telegram. Ask me any question! To start a new conversation, type the /restart command.".to_string());

    let tele = Telegram::new(telegram_token.to_string());

    if let UpdateKind::Message(msg) = update.kind {
        let chat_id = msg.chat.id;

        let text = msg.text().unwrap_or("");
        if text.eq_ignore_ascii_case("/help") {
            _ = tele.send_message(chat_id, &help_mesg);

        } else if text.eq_ignore_ascii_case("/restart") {
            _ = tele.send_message(chat_id, "Ok, I am starting a new conversation.");
            set(&chat_id.to_string(), json!(true), None);
```

Now, we know that the message is a question or statement from the user. Before querying ChatGPT, we will first send back a placeholder
message asking the user to wait.

```rust
let placeholder = tele
    .send_message(chat_id, &placeholder_text)
    .expect("Error occurs when sending Message to Telegram");
```

Then, we send the bot message ChatGPT via the OpenAI SDK. Once we receive a reply, we will replace the placeholder message
with the actual reply. Note that the OpenAI SDK automatically caches the conversation history,
including the `system_prompt` at the beginning, so that you do not need to replay the entire conversation at every request.
The conversation history is cached under the key `chat_id`.

```rust
let mut openai = OpenAIFlows::new();
openai.set_retry_times(3);
let mut co = ChatOptions {
    model: ChatModel::GPT35Turbo,
    restart: false,
    system_prompt: Some(&system_prompt),
};

match openai.chat_completion(&chat_id.to_string(), &text, &co).await {
    Ok(r) => {
        _ = tele.edit_message_text(chat_id, placeholder.id, r.choice);
    }
}
```

As you can see, the flow function gives you fine-grained control over the interactions between Telegram and ChatGPT
so that you can deliver a fully customized experience for your bot users.

## Read more

Tutorials and sample code for related flow functions. Click on the **Deploy** link to [configure and deploy your own flow without writing any code from a template](../category/getting-started-with-templates).

* Discord bot with ChatGPT [Tutorial](discord-chatgpt) | [Code](https://github.com/flows-network/discord-chatgpt/) | [Deploy](https://flows.network/flow/createByTemplate/discord-chatgpt)
* Telegram bot with ChatGPT [Tutorial](telegram-chatgpt) | [Code](https://github.com/flows-network/telegram-gpt) | [Deploy](https://flows.network/flow/createByTemplate/Telegram-ChatGPT)
* Slack bot with ChatGPT [Tutorial](slack-chatgpt) | [Code](https://github.com/flows-network/slack-chatgpt) | [Deploy](https://flows.network/flow/createByTemplate/Slack-Chatgpt)
* GitHub comment bot with ChatGPT [Tutorial](github-chatgpt) | [Code](https://github.com/flows-network/chatgpt-github-app)

