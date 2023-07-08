---
sidebar_position: 2
---
# Slack

This [`slack-flows` crate](https://docs.rs/slack-flows/) bring the support of most frequently used Slack API's to the [`Flows Network`](https://docs.flows.network/docs/) platform.

## Trigger

A `Flows Function` or bot, built with this library, waits for an event to occur on Slack, such as a new message in a channel, then kicks into action. The `listen_to_channel()` function is used to register a listener for incoming messages in a specific channel.


## Action

Once the function receives a trigger, it performs an action. In our basic example, the function sends a response message to the channel upon receiving a new message. The action is defined within the callback function provided to `listen_to_channel()`.



## Recommended flows and templates

Here is a minimal example:

```rust

use slack_flows::{listen_to_channel, send_message_to_channel};

#[no_mangle]
pub fn run() {
    listen_to_channel("myworkspace", "mychannel", |sm| {
        send_message_to_channel("myworkspace", "mychannel", format!("Hello, {}",
        sm.text))
    }).await;
}
```


This code shows a basic bot that listens for incoming messages in a specific channel (`mychannel`) of a given workspace (`myworkspace`) and responds with a greeting message.

