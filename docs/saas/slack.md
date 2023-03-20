---
sidebar_position: 1
---

# Slack calculator bot

Slack is a great communication tool for teams. Slack is not a all-in-one tool, so we need to make Slack work with other SaaS tools like GitHub， Jira，and Notion. And we also need to automate workflow happening in Slack, like send a welcome message when a new Slack member is onboard.

The slack integration exist as a Rust Crate: [slack-flows](https://crates.io/crates/slack-flows). So as a normal Rust project, make sure you have included slack-flows in your Cargo.toml.

The slack-flows crate supports four events right now.
* `listen_to_channel`: Listen to the new message from channel`channel_name` of workspace `team_name`.
* `revoke_listeners`: Revoke previous registered listener.
* `send_message_to_channel`	Send messages to channel `channel_name` of workspace `team_name`.
* `upload_file`: Upload a file to the channel `channel_name` of workspace `team_name`.

##  A simple example

Taking a calculator bot as an example in this chapter, we will guide you how to write function for the Slack integration provided by flows.network.

The source code for this example: https://github.com/flows-network/slack-calculator

In this calculator example, the trigger and action both happen in Slack. We use `listen_to_channel` to listen to the message from a channel, a Rust code to calculate the result, and finally use `send_message_to_channel` to send the result back to the specified channel.

The whole code with code comments is as the following:

```
use serde_json::json;
use slack_flows::{listen_to_channel, send_message_to_channel};
use store_flows::{del, get, set};

#[no_mangle]
pub fn run() {
    // listen to the message from the specified channel
    listen_to_channel("workspace_name", "channel_name", |sm| {
        // Clearing stored results when receiving "C" as an input
        let last_result = match sm.text == "C" {
            true => {
                del("last_result");
                return;
            }
            // Store the results if there is no "C input"
            false => match get("last_result") {
                Some(v) => v.as_f64().unwrap_or_default(),
                None => 0.0,
            },
        };
        // Use arithmetic expressions to calculate the result
        let expr = match sm.text.chars().next() {
            Some(c) => match c {
                '+' | '-' | '*' | '/' => {
                    format!("{}{}", last_result, sm.text)
                }
                _ => sm.text,
            },
            None => sm.text,
        };
        // Send the result and error messages to the specified channel
        match meval::eval_str(expr) {
            Ok(v) => {
                set("last_result", json!(v));
                send_message_to_channel("workspace_name", "channel_name", v.to_string());
            }
            Err(_) => {
                send_message_to_channel("workspace_name", "channel_name", String::from("Invalid expression"));
            }
        }
    });
}
```

Now, I believe you have a basic understanding of how slack-flows crate works. Next step is to write your own Slack workflows.
* Follow [this instruction](https://github.com/flows-network/slack-calculator/blob/main/README.md) to give this function a try.
* Find flow functions with Slack integration [here](https://github.com/flows-network/awesome-flow-fucntions#slack);
* Find API reference [here](https://docs.rs/slack-flows/0.2.6/slack_flows/).












