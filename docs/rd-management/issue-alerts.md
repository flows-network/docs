---
sidebar_position: 1
---
# Triaged alerts for issues

For many software developers, being bombarded by email notifications from GitHub is a frustrating yet common experience. The alert fatigue is real. The asynchronous nature of email also encourages the developer to ignore the excessive notifications, resulting in missed notifications and opportunities.

GitHub bots can filter GitHub Issues notifications based on criteria such as labels, assignees and comments. It could then send those filtered notifications to different Slack channels instead of an email address. However, the traditional approach to create a GitHub bot requires developers to set up a webhook server and to interact with the GitHub web API directly (eg to explicitly authenticate every request).

Flows.network provides a serverless platform for developers to create SaaS automation and bots. You can simply upload the issue filtering logic in a function. 

## The use case

When a user raises an issue and labels that issue bug, we often want a dedicated support team to be notified immediately.

For many organizations, the support team often hang out in a Slack channel (eg a #bug channel).

So, our use case is to automatically forward all bug labeled issues to the #bug slack channel.