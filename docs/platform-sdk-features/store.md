---
sidebar_position: 2
---

# State Store

The [`store-flows` crate](https://docs.rs/store-flows) offers the ability to store key/value. We can build stateful serverless functions in flows.network.
By enhancing the ability of your flows functions to persist and retrieve data, the library offers a simple way to keep track of state across multiple function invocations.

## Usage
The following example offers a taste of what this library can do:

 ```rust
use serde_json::json;
use lambda_flows::{request_received, send_response};
use store_flows::{get, set, Expire, ExpireKind};

#[no_mangle]
pub fn run() {
    if let Some((_qry, _body)) = request_received() {
        let mut c = match get("count") {
            Some(v) => v.as_u64().unwrap_or_default(),
            None => 0,
        };

        c = c + 1;

        set(
            "count",
            json!(c),
            Some(Expire {
                kind: ExpireKind::Ex,
                value: 20,
            }),
        );

        send_response(
            200,
            vec![(String::from("content-type"), String::from("text/html"))],
            c.to_string().as_bytes().to_vec(),
        );
    }
}
```

This is a [Lambda flow](https://docs.rs/lambda-flows) function. It can show the times it has been called. When a request is received, we [get](https://docs.rs/store-flows/latest/store_flows/fn.get.html) the previous count number from store, imcrement it by one, then [set](https://docs.rs/store-flows/latest/store_flows/fn.set.html) it back to store.

The whole document is [here](https://docs.rs/store-flows).


## Flows that used the `store-flows` crate

* [Integrate ChatGPT into Telegram](https://github.com/flows-network/telegram-gpt). the `store-flows` crate is used to save the conversation of ChatGPT.
