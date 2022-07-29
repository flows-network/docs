# Connect GitHub and Slack

## GitHub Introduction

Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world. Developers could star their favorite GitHub repos, raise issues when they meet problems, and contribute to the open source projects. According to [GithHub 2020 Digital insight report](https://www.freecodecamp.org/news/open-source-insights-what-we-learned-from-860-million-github-event-logs/), there are 860 million GitHub event logs in 2020. Developers created tons of activity on GitHub. 

As a large SaaS, GitHub won't customize developers' personnel needs. But as a developer, we could solve this problem by writing codes! GitHub provides stable APIs for developers to customize. WasmHaiku is based on the GitHub APIs too.

This chapter will introduce several use cases for connecting GitHub and Slack.


## GitHub issue notifications

For many software developers, receiving tons of email notifications daily from GitHub is a common but frustrating experience. The alert fatigue is real. The GitHub webhook API allows developers to manage their notification experiences. However, setting up, maintaining, and authenticating the webhook server is a significant effort.

Let's see how to use WasmHaiku to solve this problem. We could filter the GitHub issue notifications by setting up different rules, such as different labels, which assignees, no comment issues for a week, and so on.

### Send label with `bug` issue to Slack

You're responsible for the security and stability of your software on GitHub repo. As one of the maintainers, you will receive lots of email notifications about your Github repo. But you only need to care about the bug issue. So you could write a function to customize your workflow.

The workflow should be if new issues with the bug label, then send this issue in the Slack Channel #bug. Then you don't need to see what each email says.

Find the flow code sample here: https://github.com/second-state/flow-functions/pull/2

Next, it's your turn to create a flow like this code. Just replace the label name in line 19 of the example code. You could choose the `good-first-issue`, `help wanted`, and other customize labels on your GitHub repo.

```
// Change `["bug"]` to other lable names.
return issue+"\n"+"label:\t"+x["issue"]["labels"][0]["bug"]+"\n"+"issue body:\t"+x["issue"]["body"];
````
Find the step-by-step guide in the [Quick Start with WasmHaiku](quick-start/quick-start.md) chapter.

### Send the issue assigned to me to Slack

Sometimes you are assigned to solve an issue, but you can't get alerts clearly because you get many email notifications daily. So let's use GitHub + Slack to custom this workflow.

The workflow should be if new issues are assigned to you, then send this issue in the Slack Channel #to-do-list. Then, you only need to care about the messages in channels.

Find the flow code sample here: https://github.com/second-state/flow-functions/tree/main/github/slack/issue-notifier

Next, it's your turn to create a flow like this code. Just replace the `github_id` with your GitHub id in line 69 of the example code. 

```
//replace @darumadocker with your GitHub id（must be lowercase） 
Change `["bug"]` to other label names.
        if event_type != "" {
            if body.contains("@darumadocker") {
                return format!(
                    "{}\n{}\n{}",
                    event_type,
                    body.replace("\\r\\n", "\n"),
                    html_url
                );
            }
        }
````
Find the step-by-step guide in the [Quick Start with WasmHaiku](quick-start/quick-start.md) chapter.


## New GitHub stars

Many developers also are responsible for the DevRel work. GitHub Satr is a good indicator to measure the popularity of your GitHub repo. The star history projects offer the overall status of your GitHub repo. It's not enough. WasmHaiku could make you interact with the GitHub star API instantly.

### Get a Slack alert if you get ten new stars

GitHub won't tell you how many stars each day your repo gets. But with Wasmaiku, you cloud know how long it took your GitHub to get ten new stars.

The workflow should be if ten new stars in your GitHub repo, then send a new message in the Slack Channel. 

Find the flow code sample here: https://github.com/second-state/flow-functions/tree/main/github/slack/star-messager

There is no need to change the sample code. Just follow the step-by-step guide in the [Quick Start with WasmHaiku](quick-start/quick-start.md) chapter to create your flow.


There will be more GitHub + Slack examples in the future. Stay tuned.