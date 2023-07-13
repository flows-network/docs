---
sidebar_position: 10
---
# Twitter

The [`twitter_flows`](https://docs.rs/twitter_flows) library allows you to create Twitter bots hosted on the `Flows Network` platform. You can easily handle events like receiving and sending messages, and interact with Twitter's API functionality.


## Trigger

A `Flows Function` waits for an event to occur on Twitter. This event could be the posting of a new tweet, the liking of a tweet, etc. For our example on this page, the function utilizes the method `channel_msg_received()` to check for new messages in a specified Slack channel.


## Action

When a function is triggered by an event, it performs a corresponding action. In this case, the action could be creating a new tweet on Twitter. The action to be taken upon receiving a message or an event is defined by the user.


## Recommended flows and templates

Here is a minimal example:

```rust
use twitter_flows::create_tweet;
use slack_flows::{channel_msg_received};

#[no_mangle]
pub fn run() {
    if let Some(sm) = channel_msg_received("myworkspace", "mychannel") {
        let tweet = serde_json::json!({
            "text": sm.text,
        });
        create_tweet("mytwitteruser", tweet);
    }
}
```


When you receive a Slack message in a predefined channel, this program create a new tweet in Twitter using `create_tweet`.

## API Reference

https://docs.rs/twitter_flows