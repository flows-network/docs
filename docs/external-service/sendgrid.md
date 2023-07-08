---
sidebar_position: 6
---

# SendGrid

The [`sendgrid-flows` crate](https://docs.rs/sendgrid-flows/), enables you to automate email operations using SendGrid on the [Flows Network](https://flows.network/)  platform. You can send emails directly from your Flows functions, thereby enhancing the communication and alerting capabilities of your Flows applications.

## Trigger

A `Flows Function` or bot, built with this library, waits for an event to occur, such as a new message in a Slack channel, then kicks into action. The `listen_to_channel()` function from the `slack_flows` library is used to register a listener for incoming messages in a specific Slack channel.


## Action

Upon your instruction, the function sends an email through SendGrid. The `send_email()` function is used to dispatch the email. The action is defined within the callback function provided to `listen_to_channel()`.


## Recommended flows and templates

Here is a minimal example:

```rust

use openai_flows::{Email, send_email};
use slack_flows::{listen_to_channel};

#[no_mangle]
pub fn run() {
    listen_to_channel("myworkspace", "mychannel", |sm| {
        let email = Email {
            to: vec!["receiver@domain.com"],
            subject: "Hi",
            content: sm.text
        };
        send_email("sender@domain.com", email);
    });
}
```


This code shows a basic bot that listens for incoming messages in a specific Slack channel and sends an email through SendGrid with the content of the Slack message.
