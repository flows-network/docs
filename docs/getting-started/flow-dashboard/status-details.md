---
sidebar_position: 1
---

# Flow status and details

Like we mentioned before, when you create a flow successfully, there will be a flow page showing some details and setting about this flow. In this chapter, I will start with the Flow status and details.

## What you can see from the Flow Details page

From top to bottom, you can see

1. Flow Name and its status
2. Imported GitHub repo: the link to the source code repo of this flow and the status of the function. The link is clickable.
3. Deployment log: the deployment time and build log. If the SaaS integration was not successfully connected, an ‘Unregistered’ error will be displayed. In this case, please check if the SaaS integration is connected successfully.
4. Connected integrations: the SaaS integrations you authenticated and its details like which GitHub organization and which Slack workspace. Integrations that don't require authentication, such as Lambda, Store, and Schedule, will not be displayed here. The connection with the SaaS integrations is a global parameter, which means you only need to connect the SaaS once.

## Flows Status explanation

To help you determine if your flow is ready and running, we will show you the status of the function and flow. The Flow status depends on the function status. Only when the status of function is ready and the status of flow is running, you flow is working.

Here are a table to show the relationship between function and status and it's meaning.

| Function status | Flow Status | What does this mean |
|-----------------|-------------|-----------------------------------|
| Queued          | Pending     | Your function is waiting to be built.     |
| Building        | Pending     | Your function is building now.    |
| Unregister      | Error       | The SaaS integration is not connected successfully.  |
| Error           | Error       | There is something wrong with your function. Check out the deployment log. |
| Ready           | Running     | You flow is ready and running.    |
| Ready           | Pause       | You paused your flow. The flow won't run until you unpause this flow.   |
