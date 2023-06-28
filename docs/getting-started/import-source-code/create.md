---
sidebar_position: 1
---
# Bring your own source code

Template is a good way to onboard with flows.network. However, templates can't cover all kinds of use cases. In this case, you can create your own flow function using the wrapped SaaS SDKs and then import and deploy the GitHub Repo that containing your flows code.

In this article, I will walk you through how to create a flow from importing your own source code.

## Prerequisite

1. A GitHub account to sign with the flows.network platform and clone the template code.
2. Sign up with the [flows.network](https://flows.network/) platform. It's free.

## Prepare your code

If you don't have one, you can simply fork the [flows.network/github-pr-summary](https://github.com/flows-network/github-pr-summary) repo. After forking this source code, you can make some code changes to suit your needs, like write `github_owner` and `github_repp` in the code  directly.

## Import your source code

Open this [page](https://flows.network/flow/new) on your browser.

When the code is ready，Follow the UI to select the repo where your source code exists.

> Tips #1: You can search your repo by entering keywords on repo box if you have many GitHub repos.
> Tips #2: If you want to customize your repo, click Advanced text to see more settings. You can choose the branch and folder and set up some parameters.

Click Build to build the function you choose.

## Configure the SaaS integration required by your function

Next, we will need to grant flow.network to access the SaaS you will use in this flow.

The UI will reminder you which SaaS you should configure.

For the [flows.network/github-pr-summary](https://github.com/flows-network/github-pr-summary) repo, we will need to configure OpenAI and GitHub.

Just click the Connect button to open a new authentication page. Once you're done. The Go to the Flow button will turn purple. Click the button to finish the flow.

After that, you will be directed to a new page showing the details of the flow you just created.

Once the function is ready and the flow is running, you can go to the repo to trigger this bot by creating a PR.