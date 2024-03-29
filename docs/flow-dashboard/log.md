---
sidebar_position: 1
---

# Running Log

The running log provides valuable information about the status of your flow, including the number of times the flow has been triggered. It is especially useful for debugging purposes when your flow is not functioning as expected.

To access the running log, navigate to the "Running Log" tab. It is important to note that the level of detail in the running log depends on whether and how you utilize the `flowsnet-platform-sdk` crate in your flow code. 

![](flows-log-01.png)

If you have not used the `flowsnet-platform-sdk` crate in your flow code, the running log will be empty as there will be no logs generated.

To learn how to present running log of your flow, please read [logging](/docs/integrations/platform-sdk-features/logging.md).
