---
slug: changelog
title: This week in flows.network (0403-0407)
authors:
  name: release
  title: New things about flows.network
tags: [changelog,product]
---

From April 3rd to April 7th, flows.network has made the following updates:

* Supprot rebuilding your flow function mannuly. You can find Rebuild button next to the Deployment Log. As usual, you won't need to rebuild your function. Whether you commit new changes in your code or re-authticate your SaaS integrations, the flows.network platform will automatically build function again. In order to solve some unexpected problems, we add this button. But we hope no one clicks this button.

* Upgrade OpenAI-flows integration to 0.4 and support `retry_time` function. This function can ask ChatGPT to retry to answer your question if ChatGPT can't reply to you previouly due to some network issues. See an example in the [github-pr-summary](https://github.com/flows-network/github-pr-summary/blob/main/src/github-pr-summary.rs#L150) repo.
