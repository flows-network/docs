---
sidebar_position: 8
---
# Telegram

The [`tg_flows`](https://docs.rs/tg_flows) library allows you to create Telegram bots hosted on the [`Flows Network`](https://flows.network/) platform. You can easily handle events like receiving and sending messages, deal with user interactions and create complex Telegram bot functionalities.


## Trigger

A `Flows Function` waits for an event to occur on Telegram. This event can be a new message, an inline query, a callback query, etc. For our example on this page, the function utilizes the method `listen_to_update()` to register a listener for incoming updates.


## Action

When a function is triggered by an event, it performs a corresponding action. In this case, the action could be sending a response back, editing a message, updating a chat member, etc. The action to be taken upon receiving a message or an event is defined by the user.


## Recommended flows and templates

Here is a minimal example:


```rust
use tg_flows::{listen_to_update, Telegram, Update, UpdateKind};
use std::env;
use tokio;

#[tokio::main(flavor = "current_thread")]
pub async fn run() -> anyhow::Result<()> {
    let telegram_token = env::var("telegram_token").unwrap();

    listen_to_update(&telegram_token, |update| {
        let tele = Telegram::new(telegram_token.to_string());
        handler(tele, update)
    }).await;

    Ok(())
}

async fn handler(tele: Telegram, update: Update) {
    if let UpdateKind::Message(msg) = update.kind {
        let chat_id = msg.chat.id;

        if let Some(text) = msg.text() {
            let reply = format!("Received your message: {}", text);
            let _ = tele.send_message(chat_id, &reply);
        }
    }
}
```

This program creates a Telegram client with a `telegram_token`, listens for new messages, responds to text messages with "Received your message: [YOUR MESSAGE]", and ignores non-text messages.
