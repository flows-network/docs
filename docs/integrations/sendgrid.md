---
sidebar_position: 6
---

# SendGrid

The [`sendgrid-flows`](https://docs.rs/sendgrid-flows/) library enables you to automate email operations using SendGrid on the [Flows Network](https://flows.network/) platform. You can send emails directly from your `Flows Functions`, providing you with more ways of communication and enhancing your ability to deliver results.


## Trigger

A `Flows Function` or bot, built with this library, is able to send emails upon your request. It can be integrated seamlessly with other services on the `Flows Network`.


## Action

When instructed, the function uses the `send_email()` function to send an email through SendGrid. The specific action taken is defined within the function that you provide to `listen_to_channel()`.


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

## API Reference

https://docs.rs/sendgrid-flows/
