---
sidebar_position: 4
---
# Discord

The [`discord_flows`](https://docs.rs/discord-flows/) library allows you to create Discord bots hosted on [`Flows Network`](https://flows.network) platform. This allows you to listen to events in your Discord guilds/channels, interact with rich Discord services, and build more on top of it.

Thanks to the solid foundation of [`serenity` crate](https://crates.io/crates/serenity), based on which much of this library is built, [`discord_flows`](https://crates.io/crates/discord_flows) supports a broad array of Discord API features, please visit the documentation page for more information on what can be done with this library. 


## Trigger

Built with this library, a `Flows Function` or bot waits for an event to happen on Discord, such as receiving a message, then springs into action. In the case of our example on this page, the function uses the method `listen_to_event()` to register a listener for incoming messages.


## Action

Once the function receives a trigger, it performs an action. In this case, the function echoes back the message it receives in the server or channel where the message was posted. The `handle()` function defines the action to take upon receiving a message.


## Recommended flows and templates

Here is a minimal example:

```rust
use discord_flows::{get_client, listen_to_event, model::Message};

#[no_mangle]
#[tokio::main(flavor = "current_thread")]
pub async fn run() {
    let token = std::env::var("DISCORD_TOKEN").unwrap();

    listen_to_event(token.clone(), move |msg| handle(msg, token)).await;
}

async fn handle(msg: Message, token: String) {
    let client = get_client(token);
    let channel_id = msg.channel_id;
    let content = msg.content;

    if msg.author.bot {
        return;
    }

    _ = client
        .send_message(
            channel_id.into(),
            &serde_json::json!({
                "content": content,
            }),
        )
        .await;
}
```


This code shows a basic bot that listens for incoming messages and responds by sending a message with the same content.
