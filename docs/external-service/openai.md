---
sidebar_position: 5
---

# ChatGPT

The [`openai-flows` crate](https://docs.rs/openai-flows/) supports a wide range of ChatGPT's functionalities on the [`Flows Network`](https://docs.flows.network/docs/) platform.


## Overview

This library facilitates natural language conversation, text completion, image generation, and more. It encapsulates the functionalities provided by OpenAI's ChatGPT, enabling the creation of rich, interactive applications hosted on the Flows Network.


## Trigger

A `Flows Function` or a bot built with this library sends a user request for Chat, Completions, etc to OpenAI's endpoints and waits for response.


## Action

[`Flows Network`](https://flows.network/) receives OpenAI's response then relays back to the user. The [`openai-flows` crate](https://docs.rs/openai-flows/) supports streaming and non-streaming requests from OpenAI. 


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



This sample illustrates a bot that listens for user requests, utilizes the OpenAI `chat_completion` function to generate a conversationally relevant response, and transmits that response back to the user.

For more in-depth information and guidance on utilizing this library, please visit the official documentation page.

**Note** : The `tokio` used here is `tokio_wasi` with `macros` and `rt` features.
