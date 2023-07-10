---
sidebar_position: 1
---

# Timer

The [`schedule-flows` crate](https://crates.io/crates/schedule-flows) offers the ability to schedule a task.

## Features 
- **Cron Scheduling** : The library offers the `schedule_cron_job` function that accepts cron expressions for scheduling tasks​. 
- **Integration Ready** : It integrates with Flows Network's API and it can be used in combination with other services supported on the platform​​. 
- **Ease of Use** : With simple syntax, you can create tasks like sending a message to a Slack channel at a specific time daily​.


## Usage

The minimum interval of events triggered by `schedule-flows` is one hour.
To use Schedule Flows, import the necessary functions and define the task:

```rust
use schedule_flows::schedule_cron_job;
use slack_flows::send_message_to_channel;

#[no_mangle]
#[tokio::main(flavor = "current_thread")]
pub async fn run() {
    schedule_cron_job(String::from("50 8 * * *"), String::from("cron_job_evoked"), |body| {
        send_message_to_channel(
            "myworkspace",
            "mychannel",
            String::from_utf8_lossy(&body).into_owned(),
        ).await
    }).await;
}
```

This example sets up a cron job that sends a message to a Slack channel at 8:50 UTC daily.


## Flows that uses the `schedule-flows` crate

- [`Hacker News Alert`]( https://github.com/flows-network/hackernews-alert). This `schedule-flows` function is triggered hourly.