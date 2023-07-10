---
sidebar_position: 3
---
# GitHub 

The [`github_flows` crate](https://docs.rs/github_flows) enables you to create GitHub automation bots hosted on the [Flows Network](https://flows.network/) platform. This allows you to listen to events in your GitHub repositories, interact with rich GitHub services, and build more complex and tailored solutions on top of these features.

The [`Octocrab` crate](https://docs.rs/octocrab) is a popular third party GitHub API client in Rust, we brought it to the serverless world with [`octocrab_wasi` crate](https://docs.rs/octocrab_wasi), and further built [github_flows](https://docs.rs/github_flows) on top of it.

This library supports extensive GitHub API features. Please visit the documentation page for more information on what can be done with it.


## Trigger

Built with this library, a `Flows Function` or bot, can listen to events happening on your GitHub or choose to use other triggers like [`schedule_flows`](https://docs.rs/schedule_flows) events, a scheduling feature for running tasks at specified times. Upon receiving a trigger event, such as a new comment on an issue, it executes a pre-defined action or series of actions. In many cases, these events are GitHub WebHook events. [github_flows](https://docs.rs/github_flows) handles these WebHook payloads, parsing them and passing them on for further actions.

In the case of our example on this page, the function uses the method `listen_to_event()` to register a listener for incoming issue comments.


## Action

Once the function receives a trigger, it performs an action. In this case, the function reacts to the issue comment with a rocket emoji. The `handler()` function defines the action to take upon receiving a comment on an issue.


## Recommended flows and templates

Here is a minimal example:

```rust
use github_flows::{
    get_octo, listen_to_event,
    octocrab::models::{events::payload::EventPayload, reactions::ReactionContent},
    GithubLogin,
};

#[no_mangle]
#[tokio::main(flavor = "current_thread")]
pub async fn run() {
    // `some_login` must be authed in flows.network
    listen_to_event(&GithubLogin::Provided(String::from("some_login")), "some_owner", "some_repo", vec!["issue_comment"], handler).await;
}

async fn handler(payload: EventPayload) {
    if let EventPayload::IssueCommentEvent(e) = payload {
        let comment_id = e.comment.id.0;

        // installed app login
        let octo = get_octo(&GithubLogin::Provided(String::from("some_login")));

        let _reaction = octo
            .issues("some_owner", "some_repo")
            .create_comment_reaction(comment_id, ReactionContent::Rocket)
            .await
            .unwrap();
    };
}
```


This code shows a basic bot that listens for incoming issue comments and reacts with a rocket emoji.

*Note*: The `tokio` used here is `tokio_wasi` with `macros` and `rt` features.
