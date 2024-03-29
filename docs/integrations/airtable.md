---
sidebar_position: 11
---
# Airtable

The [`airtable_flows`](https://docs.rs/airtable_flows) library enables you to integrate Airtable's spreadsheet-like database capabilities within your applications on the `Flows Network` platform. This crate provides key functions like creating, updating, and searching records in Airtable bases.

## Authentication


## Trigger

A `Flows Function` is typically triggered by a specific event. In the context of `airtable_flows`, this could be an event to create or update a record in an Airtable base. The trigger listens for such requests using the `request_received()` function.

## Action

On being triggered by an event, the function carries out a corresponding action. Here, actions might include creating, updating, or searching for a record in an Airtable base.

## Recommended flows and templates

Here's a simple example:

```rust
use airtable_flows::create_record;
use slack_flows::{listen_to_channel};

#[no_mangle]
pub fn run() {
    listen_to_channel("myworkspace", "mychannel", |sm| {
        let record = serde_json::json!({
            "Name": sm.text,
        });
        create_record("accountName", "mybaseId", "mytable", record);
    });
}
```

This function listens for new messages in a Slack channel. When a message is received, it creates a new record in an Airtable base with the text from the Slack message.

Please note that your Airtable account must be connected to the Flows Network platform for the `airtable_flows` crate to function properly. If it isn't, you'll see an error in the flow's build or run log.

## API Reference

https://docs.rs/airtable_flows
