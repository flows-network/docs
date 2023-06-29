---
slug: flows-network-update-0525
title: Changelog flows.network (0525)
authors:
  name: release
  title: New things about flows.network
tags: [changelog,product]
---

flows.nework just released a new version last week. This version comes with Flow Template features that allows users onboard in 3 minutes. We also released new versions of OpenAI integrations GitHub integrations, and flowsnet-platform-sdk.

## Integration updates for developers

1. Upgrade the `github-flows` Integration to the 0.5.1 version. The latest version includes a new feature called `GithubLogin::Default`, which automatically identifies the user's unique login account as their GitHub `login` account. This eliminates the need for users to manually input their personal GitHub account in the code. For an example, please click on the following link: https://github.com/flows-network/github-star-slack-messenger/pull/2/files.
2. Upgrade the openai-flows integration to the 0.7.1 version. Added  `let of = OpenAIFlows::new();`, which will find the OpenAI key named default.  If there is no key named default, the platform will search for other keys. This method eliminates the need for users to specify the key name in the code.  [Click the link to check out an example](https://github.com/flows-network/github-pr-summary/blob/main/src/github-pr-summary.rs#L165).
3. Add log feature for the `flowsnet-platform-sdk` integration in the 0.1.4 version. With this feature, users can get more detailed and long-time logs for their flows. [Click the link to check out an example](https://github.com/DarumaDocker/github-func-test/blob/text-detection-lambda/src/lib.rs#L7).

[Image: Image.jpg]



## Introducing template  for users

In order to make the process of using flows.network easier for users, we have introduced pre-built flow templates that are popular. You can view these templates on the [templates](https://flows.network/templates) page. We are also working on adding more templates. 
By using a flow template, you only need to adjust certain settings for your bot and the SaaS integration required for the flow. Additionally, we will create a GitHub repository under your personal account to ensure that you have full control of the source code. Any updates you make to the repo will be automatically built by flows.network. 

After deploying a bot from the template, you will have a functioning bot and access to its source code. Let's take a look at how a Flow Template works.


### How to deploy a telegram bot from a flow template

Click the template [ChatGPT Based Telegram Bot](https://flows.network/flow/createByTemplate/telegram-chatgpt-bot) to start. Make sure you have signed in [flows.network](https://flows.network/).

On this page, you can see which template you’re using and you will create a new GitHub repo for yourself.  As I mentioned before, to make sure you have the full control of the flow’s code, flows.network will create a GitHub repo containing the template source code under your own GitHub org. Here you can change the repo name. The name by default is the name of the template you used. You can also choose your own repo public or not.

[Image: Image.jpg]If you’re ok with the default setting on this page, just click on Create and Build to create the GitHub repo and build the flow function.

Building the function takes some time, meanwhile let’s configure the SaaS integration required by the flow template meanwhile. Next you will go through the SaaS integrations that you need to configure.


We also need to grant flows.netowork to access OpenAI. Click on Connect if it’s your first time to connect OpenAI.  You will be directed to a new page. Here you need to copy and paste your OpenAI key on the API key zone. If you have connected OpenAI, just click on continue button to check out the flow details.


>If you already connected to OpenAI  and want to add a new one, click on +Add new authentication.


[Image: Image.jpg]

 For this `ChatGPT Telegram Bot`, we need to [add a telegram API token from the botfather](https://flows.network/blog/how-to-get-a-telegram-bot-token). After you copy and paster the telegram API token in the configuration section, click on Deploy to deploy you flow.

That’s it. You can see your flow is building. Once the status of your flow becomes `running`, you can go to the telegram to give the bot a try.

This is how a template works. With a template, deploying a bot is easy and  simple. Welcome to give it a try! Feel free to join our Discord server to stay updated or to request a template.
