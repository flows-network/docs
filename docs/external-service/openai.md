---
sidebar_position: 5
---

# ChatGPT

ChatGPT has taken the world by storm. It has become the de facto brand name for the family of OpenAI's generative AI services. Our [`openai-flows`](https://docs.rs/openai-flows/) library supports a wide range of OpenAI's natural language processing features on the [`Flows Network`](https://docs.flows.network/docs/) platform.

OpenAI's generative AI capabilities can be accessed directly from applications deployed on [`Flows Network`](https://flows.network/) platform, creating new possibilities for hosted applications and taking their perfomrance to the next level.


## Trigger

A `Flows Function` or bot built with the [`openai_flows` crate](https://crates.io/crates/openai-flows) interacts with OpenAI's AI over its chat/completion API. Your conversation/completion request is encapsulated and sent to API endpoints, then the function or bot waits for a response from OpenAI, which contains the generated chat response.


## Action

[`Flows Network`](https://flows.network/) receives the response from OpenAI's endpoint and relays it back to the user. 


## Recommended Flows and Templates

Here's a basic example demonstrating the usage of this library:

```rust
use openai_flows::{
    chat::ChatOptions,
    OpenAIFlows,
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
    let co = ChatOptions::default();
    let of = OpenAIFlows::new();

    let r = match of.chat_completion(
        "any_conversation_id",
        String::from_utf8_lossy(&body).into_owned().as_str(),
        &co,
    )
    .await
    {
        Ok(c) => c.choice,
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


This example illustrates a bot that listens for user requests, utilizes the OpenAI `chat_completion` function to generate a conversationally relevant response, and transmits that response back to the user.

**Note** : The `tokio` used here is `tokio_wasi` with `macros` and `rt` features.
