---
sidebar_position: 1
---

# Introducing WasmHaiku

WasmHaiku is a serverless function platform for SaaS. It makes SaaS more programmable and more customizable. Instead of creating webhook servers to interact with web APIs, WasmHaiku developers can create and upload simple functions (flow functions), written in Rust or JavaScript, to handle SaaS events and to make further API calls based on one's own business logic. A flow function can connect together multiple SaaS to create customized workflows.

🙅 No need to setup and maintain servers. Just upload serverless flow functions! \
✅ Focus on the business logic instead of integration logic (e.g., authentication and message parsing) \
🦀 Write serverless flow functions in Rust or JavaScript \
⚙️ Use language native APIs (in SDKs) instead of web APIs \
⚡ Much faster and safer than web APIs \
🛠️ Integrate with any SaaS you love \
💰 Save money 

Next, I will walk you through a flow function that sends new issues in a GitHub repo to your team's Slack channel. It showscases WasmHaiku flow function's ability to respond to a SaaS event (i.e., new issues in the GitHub repo) and to perform new SaaS actions (i.e., posting a Slack message). The flow functions are written by SaaS users, and uploaded to WasmHaiku as serverless functions. They can be triggered by SaaS or timer events.
