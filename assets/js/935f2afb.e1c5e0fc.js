"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Rust Developers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\ud83e\udd80 Step by Step Guide in Rust","href":"/docs/getting-started/rust/step-by-step-guide","docId":"getting-started/rust/step-by-step-guide"},{"type":"link","label":"\ud83e\udd80  Understand the flow function","href":"/docs/getting-started/rust/understand-the-flow-function-in-rust","docId":"getting-started/rust/understand-the-flow-function-in-rust"}],"href":"/docs/category/rust-developers"},{"type":"category","label":"JavaScript Developers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Step by Step Guide in JavaScript","href":"/docs/getting-started/javascript/step-by-step-guide","docId":"getting-started/javascript/step-by-step-guide"},{"type":"link","label":"Understand the flow function","href":"/docs/getting-started/javascript/understand-the-flow-function-in-javascript","docId":"getting-started/javascript/understand-the-flow-function-in-javascript"}],"href":"/docs/category/javascript-developers"}],"href":"/docs/category/getting-started"},{"type":"category","label":"Cookbook","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"GitHub automation cookbook","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Customize your GitHub PR Review workflow to save time and reduce errors","href":"/docs/cookbook/github/pr-review-bot","docId":"cookbook/github/pr-review-bot"},{"type":"link","label":"Reduce alert fatigue through GitHub notification triage","href":"/docs/cookbook/github/github-notification","docId":"cookbook/github/github-notification"},{"type":"link","label":"Streamline and automate GitHub Issue responses","href":"/docs/cookbook/github/issue-review-bot","docId":"cookbook/github/issue-review-bot"},{"type":"link","label":"DevRel automation with GitHub","href":"/docs/cookbook/github/devrel-engagement","docId":"cookbook/github/devrel-engagement"}],"href":"/docs/category/github-automation-cookbook"}],"href":"/docs/category/cookbook"},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is a flow","href":"/docs/concepts/what-is-a-flow","docId":"concepts/what-is-a-flow"},{"type":"link","label":"What is a Connector","href":"/docs/concepts/what-is-a-connector","docId":"concepts/what-is-a-connector"}],"href":"/docs/category/concepts"},{"type":"category","label":"references","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Supported SaaS","href":"/docs/references/supported-saas","docId":"references/supported-saas"}]}]},"docs":{"concepts/what-is-a-connector":{"id":"concepts/what-is-a-connector","title":"What is a Connector","description":"flows.network introduces the inbound connector and outbound connectors.","sidebar":"tutorialSidebar"},"concepts/what-is-a-flow":{"id":"concepts/what-is-a-flow","title":"What is a flow","description":"Flow in flows.network means a workflow that connects two SaaS APIs. First, a flow is triggered by an event from the inbound SaaS connector. Then the flow function processes the event. In the end, the flow then calls the outbound SaaS to connect to perform an action.","sidebar":"tutorialSidebar"},"cookbook/github/devrel-engagement":{"id":"cookbook/github/devrel-engagement","title":"DevRel automation with GitHub","description":"GitHub is a great platform for companies and open source projects to build a developer community. A best practice for community building is to immediately respond to new users and contributors when they first engage your projects with new stars, forks, issues and PRs. But that typically requires dedicated community managers in all time zones. DevRel is hard! It is a task that is ripe for automation!","sidebar":"tutorialSidebar"},"cookbook/github/github-notification":{"id":"cookbook/github/github-notification","title":"Reduce alert fatigue through GitHub notification triage","description":"For many software developers, being bombarded by email notifications from GitHub is a frustrating yet common experience. The alert fatigue is real. The asynchronous nature of email also encourages the developer to ignore the excessive notifications, resulting in missed notifications and opportunities.","sidebar":"tutorialSidebar"},"cookbook/github/issue-review-bot":{"id":"cookbook/github/issue-review-bot","title":"Streamline and automate GitHub Issue responses","description":"GitHub issues is an important channel for software development teams to receive product feedbacks, feature requests, and bug reports from users. A typical workflow of an issue starts from a review from the project owner or lead developer. If the issue is valid, it will be tagged (categorized), scheduled and assigned to a developer on the team. The developer then work on it, update it, and create a PR to close the issue.","sidebar":"tutorialSidebar"},"cookbook/github/pr-review-bot":{"id":"cookbook/github/pr-review-bot","title":"Customize your GitHub PR Review workflow to save time and reduce errors","description":"A Pull Request (PR) makes it easy for software developers to collaborate and discuss proposed changes to the code base. When a developer or contributor wants to make a change to the source code, s/he would open a PR that contains all proposed changes. The project\u2019s code owners (or maintainers for open source projects) would then review the PR, discuss it in a message board, request changes, and decide if it can be merged into the code base.","sidebar":"tutorialSidebar"},"getting-started/javascript/step-by-step-guide":{"id":"getting-started/javascript/step-by-step-guide","title":"Step by Step Guide in JavaScript","description":"It only takes minutes to create a flows.network flow function that ties together multiple SaaS services to create a customized business application. It is much easier than creating custom webhook servers and client applications to interact with those SaaS web APIs manually!","sidebar":"tutorialSidebar"},"getting-started/javascript/understand-the-flow-function-in-javascript":{"id":"getting-started/javascript/understand-the-flow-function-in-javascript","title":"Understand the flow function","description":"An important feature of flows.network is that its SaaS API flows are programmable. For example, in the Getting Started example, we could write code in the flow function to transform and filter the event received from GitHub, and construct a customized message for Slack.","sidebar":"tutorialSidebar"},"getting-started/rust/step-by-step-guide":{"id":"getting-started/rust/step-by-step-guide","title":"\ud83e\udd80 Step by Step Guide in Rust","description":"It only takes minutes to create a flows.network flow function that ties together multiple SaaS services to create a customized business application. It is much easier than creating custom webhook servers and client applications to interact with those SaaS web APIs manually!","sidebar":"tutorialSidebar"},"getting-started/rust/understand-the-flow-function-in-rust":{"id":"getting-started/rust/understand-the-flow-function-in-rust","title":"\ud83e\udd80  Understand the flow function","description":"An important feature of flows.network is that its SaaS API flows are programmable. For example, in the Getting Started example, we could write code in the flow function to transform and filter the event received from GitHub, and construct a customized message for Slack.","sidebar":"tutorialSidebar"},"references/supported-saas":{"id":"references/supported-saas","title":"Supported SaaS","description":"You will find a complete SaaS list supported by flows.network, which means you could use flows.network to customize the workflows across these SaaS.","sidebar":"tutorialSidebar"}}}')}}]);