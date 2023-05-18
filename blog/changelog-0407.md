---
slug: flows-network-update-0407
title: This week in flows.network (0403-0407)
authors:
  name: release
  title: New things about flows.network
tags: [changelog,product]
---

From April 3rd to April 7th, flows.network made the following updates:

* Added support for manually rebuilding flow functions: You can now find a "Rebuild" button next to the Deployment Log. While you generally won't need to rebuild your function, if you commit new changes to your code or re-authenticate your SaaS integrations, the flows.network platform will still automatically build the function again. This button has been added specifically to address unexpected problems. However, we hope no one need to clicks this button.

* Upgrade OpenAI-flows integration to 0.4 and support `retry_time` function. This function can ask ChatGPT to retry to answer your question if ChatGPT can't reply to you previouly due to some network issues. For example, please check the [github-pr-summary](https://github.com/flows-network/github-pr-summary/blob/main/src/github-pr-summary.rs#L150) repo.



