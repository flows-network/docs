---
sidebar_position: 1
---

# Flow status and details

Like I mentioned before, when you create a flow successfully, there will be a flow page showing some details and setting about this flow. In this chapter, I will start with the Flow status and details.

## What you can see from the Flow Details page

From up to down, you can see 

1. Flow Name and its status
2. Imported GitHub repo: the link of the source code repo for this flow and the status of the function
3. Deployment log: the deployment time and build log. If you didn't connect the SaaS integration successfully, there will be an error called `Unregister`. In this case, please check if the SaaS integration is connected successfully.
4. Connected integrations: the SaaS integrations you authenticated and its details like which GitHub organization and which Slack workspace. We won't show the integrations that don't need authentication, like Lambda, Store, and schedule. The connection with the SaaS integrations is a global parameter, which means you only need to connect the SaaS once.

## Flows Status explanation

To help you understand whether your flow is good to go, we will show you the status of the function and flow. The Flow status depends on the function status. Only when the status of function is ready and the status of flow is running, you flow is working.

Here are a table to show the relationship between function and status and it's meaning.

| Function status | Flow Status | What does this mean |
|-----------------|-------------|-----------------------------------|
| Queued          | Pending     | Your function is waiting to be built.     |
| Building        | Pending     | Your function is building now.    |
| Unregister      | Error       | The SaaS integration is not connected successfully.  |
| Error           | Error       | There is something wrong with your function. Check out the deployment log. |
| Ready           | Running     | You flow is good to go.    |
| Ready           | Pause       | You paused your flow. The flow won't work until you unsuspend this flow.   |
