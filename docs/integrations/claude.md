---
sidebar_position: 7
---
# Claude

The [`claude_flows`](https://docs.rs/claude_flows) library provides integration with Claude, a conversational AI, which leads the world's generative AI sector with its 100k context window of claude-100k models.

Claude generative AI service is not generally available yet. Our library provides coverage of its key features, such as chat completion, and claude-100k models. The claude_flows library is currently under active development. Please join our [Discord community](https://discord.com/invite/ccZn9ZMfFf) for updates.


## Trigger

A `Flows Function` or bot built with the [`claude_flows` crate](https://crates.io/crates/claude-flows) interacts with Claude's AI over its chat/completion API. Your conversation/completion request is encapsulated and sent to API endpoints, then the function or bot waits for a response from Claude, which contains the generated chat response.


## Action

[`Flows Network`](https://flows.network/) receives the response from Claude's endpoint and relays it back to the user. 


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

In this program, the Flows Function or bot sends a user request to Claude's endpoint for chat completion. It waits for Claude's response, which contains the generated chat response. The response is then sent back to the user.

## API Reference

https://docs.rs/claude_flows