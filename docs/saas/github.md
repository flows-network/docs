---
sidebar_position: 2
---

# Reply to each GitHub issue comment with 🚀

GitHub is an online hosting service for software development and version control using Git. Lots of developers love GitHub and contribute to open source projects via GitHub. There are millions of github events one day. We could customize the internal GitHub workflows, like the management of PR. Beyond GitHub, we can connect GitHub with Slack, Discord, telegram and other tools to make the workflow on GitHub easier. For an example, send the GitHub issues with `bug` label to the Slack channel where the developers communicate work.

The slack integration exist as a Rust Crate: [github-flows](https://crates.io/crates/github-flows). So as a normal Rust project, make sure you have included github-flows in your Cargo.toml.

Based on the octocrab rust crate, now the github-flows crate supports all github events and wrapped three functions for users:
* `get_octo`: Get a Octocrab Instance with GitHub Integration base_url. If `login` is None, it will be the user'name who is deploying this function.
* `listen_to_event`: specify the repo you want to listen to and create a listener for the repo you listened.
* `revoke_listeners`: Revoke previous registered listener.

## the example
Taking an issue replier app as an example in this chapter, we will guide you how to write function for the GitHub integration provided by flows.network.

> The source code of this example is here: https://github.com/flows-network/github-issue-replier

In this example, the trigger and action both happen in GitHub. We use `get_octo` to create a github instance for `issue_comment` event and `listen_to_event` to specify the specific repo. When a new `issue_comment` happens, reply to this issue comment with 🚀.

The whole code with code comments is as the following:

```
use github_flows::{
    get_octo, listen_to_event,
    octocrab::models::{events::payload::EventPayload, reactions::ReactionContent},
};

#[no_mangle]
#[tokio::main(flavor = "current_thread")]

// listen to the issue comment event from the specified GitHub repo
pub async fn run() {
    listen_to_event("github_org", "github_repo", vec!["issue_comment"], handler).await;
}

// When an issue comment is added, then react with the rocket emoji.
async fn handler(payload: EventPayload) {
    if let EventPayload::IssueCommentEvent(e) = payload {
        let comment_id = e.comment.id.0;
 
        let octo = get_octo(Some(String::from("none")));

        let _reaction = octo
            .issues("github_org", "github_repo")
            .create_comment_reaction(comment_id, ReactionContent::Rocket)
            .await
            .unwrap();
    };
}
```

Now, I believe you have a basic understanding of how github-flows crate works. Next step is to write your own GitHub workflows or give this function a try.
* Follow [this instruction](https://github.com/flows-network/github-issue-replier/blob/main/README.md) to give this function a try.
* Find flow functions with GitHub integration [here](https://github.com/flows-network/awesome-flow-fucntions#github);
* Find API reference [here](https://docs.rs/slack-flows/latest/slack_flows/).

