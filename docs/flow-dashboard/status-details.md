---
sidebar_position: 1
---

# Flow Status and Details

As mentioned earlier, after successfully creating a flow, you will be directed to a flow page that provides details and settings for the flow. In this chapter, we will discuss the flow status and details.


## What You Can See on the Flow Details Page

On the flow details page, you will find the following information from top to bottom:


1. Flow Name and [Status](#flow-status-explanation). 
2. Imported GitHub Repo: This is the link to the source code repository associated with this flow, along with the status of the function. You can click on the link to access the repository.
3. Deployment Log: The deployment time and build log are displayed here. If the SaaS integration was not successfully connected, an 'Unregistered' error will be shown. In such cases, please ensure that the SaaS integration is connected properly.
4. Trigger: It shows he event source and the SaaS platforms that the flow is listening to.
5. Connected Integrations: This section displays the SaaS integrations you have authenticated, including details such as the GitHub organization and Slack workspace. Integrations that do not require authentication, such as Lambda, Store, and Schedule, will not be displayed here. It's important to note that the connection with SaaS integrations is a global parameter, meaning you only need to connect them once.

## Flow Status Explanation

To help you determine if your flow is ready and running, we provide the status of both the function and the flow. The flow status depends on the function status. Only when the function status is ready and the flow status is running, your flow is actively working.

Here is a table showing the relationship between function status, flow status, and their respective meanings:

| Function Status | Flow Status | Meaning |
|-----------------|-------------|---------|
| Queued          | Pending     | Your function is waiting to be built. |
| Building        | Pending     | Your function is currently being built. |
| Unregister      | Error       | The SaaS integration is not successfully connected. |
| Error           | Error       | There is an issue with your function. Please check the deployment log for more information. |
| Ready           | Running     | Your flow is ready and actively running. |
| Ready           | Pause       | You have paused your flow. The flow will not run until you unpause it. |
