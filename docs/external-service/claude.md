---
sidebar_position: 7
---
# Claude

The [`claude_flows` crate](https://docs.rs/claude_flows)  provides integration with Claude, a conversational AI, allowing you to enrich your flows on the `Flows Network` platform with advanced conversation capabilities. It's easy to generate human-like chat responses using Claude's AI within your flows.

This library supports Claude's industry leading 100k context window model.

## Trigger

A `Flows Function` responds to a request, acting as the trigger. For our example, the function uses the `request_received()` method to listen for such requests containing a string message.


## Action

Upon being triggered by an event, a function performs a corresponding action. In this case, the action is generating a chat response using Claude's conversational AI. The action taken on receiving a request is user-defined.


## Recommended flows and templates

Here is a minimal example:

```rust

use claude_flows::{
    chat,
    ClaudeFlows,
};
use lambda_flows::{request_received, send_response};
use serde_json::Value;
use std::collections::HashMap;

#[no_mangle]
#[tokio::main(flavor = "current_thread")]
pub async fn run() {
    request_received(handler).await;
}

async fn handler(_qry: HashMap<String, Value>, body: Vec<u8>) {
    let cf = ClaudeFlows::new();
    let co = chat::ChatOptions::default();

    let r = match cf.chat_completion(
        "any_conversation_id",
        String::from_utf8_lossy(&body).into_owned().as_str(),
        &co,
    )
    .await
    {
        Ok(c) => c,
        Err(e) => e,
    };
    
    send_response(
        200,
        vec![(
            String::from("content-type"),
            String::from("text/plain; charset=UTF-8"),
        )],
        r.as_bytes().to_vec(),
    );
}
```



In this program, the function listens for a request containing a string message. Upon receiving such a request, it uses Claude's AI to generate a chat response and sends it back.
