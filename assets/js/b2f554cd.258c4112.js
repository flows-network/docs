"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"flows-network-update-0407","metadata":{"permalink":"/blog/flows-network-update-0407","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/changelog-0407.md","source":"@site/blog/changelog-0407.md","title":"This week in flows.network (0403-0407)","description":"From April 3rd to April 7th, flows.network made the following updates:","date":"2023-06-25T10:40:19.000Z","formattedDate":"June 25, 2023","tags":[{"label":"changelog","permalink":"/blog/tags/changelog"},{"label":"product","permalink":"/blog/tags/product"}],"readingTime":0.615,"hasTruncateMarker":false,"authors":[{"name":"release","title":"New things about flows.network"}],"frontMatter":{"slug":"flows-network-update-0407","title":"This week in flows.network (0403-0407)","authors":{"name":"release","title":"New things about flows.network"},"tags":["changelog","product"]},"nextItem":{"title":"Changelog flows.network (0525-0407)","permalink":"/blog/flows-network-update-0525"}},"content":"From April 3rd to April 7th, flows.network made the following updates:\\n\\n* Added support for manually rebuilding flow functions: You can now find a \\"Rebuild\\" button next to the Deployment Log. While you generally won\'t need to rebuild your function, if you commit new changes to your code or re-authenticate your SaaS integrations, the flows.network platform will still automatically build the function again. This button has been added specifically to address unexpected problems. However, we hope no one need to clicks this button.\\n\\n* Upgrade OpenAI-flows integration to 0.4 and support `retry_time` function. This function can ask ChatGPT to retry to answer your question if ChatGPT can\'t reply to you previouly due to some network issues. For example, please check the [github-pr-summary](https://github.com/flows-network/github-pr-summary/blob/main/src/github-pr-summary.rs#L150) repo."},{"id":"flows-network-update-0525","metadata":{"permalink":"/blog/flows-network-update-0525","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/changelog-0525.md","source":"@site/blog/changelog-0525.md","title":"Changelog flows.network (0525-0407)","description":"flows.nework just released a new version last week. This version comes with Flow Template features that allows users onboard in 3 minutes. We also released new versions of OpenAI integrations GitHub integrations, and flowsnet-platform-sdk.","date":"2023-06-25T10:40:19.000Z","formattedDate":"June 25, 2023","tags":[{"label":"changelog","permalink":"/blog/tags/changelog"},{"label":"product","permalink":"/blog/tags/product"}],"readingTime":3.34,"hasTruncateMarker":false,"authors":[{"name":"release","title":"New things about flows.network"}],"frontMatter":{"slug":"flows-network-update-0525","title":"Changelog flows.network (0525-0407)","authors":{"name":"release","title":"New things about flows.network"},"tags":["changelog","product"]},"prevItem":{"title":"This week in flows.network (0403-0407)","permalink":"/blog/flows-network-update-0407"},"nextItem":{"title":"Step-by-Step Guide: Building a Telegram bot for ChatGPT","permalink":"/blog/build-a-chatgpt-telegram-bot-with-flows-network"}},"content":"flows.nework just released a new version last week. This version comes with Flow Template features that allows users onboard in 3 minutes. We also released new versions of OpenAI integrations GitHub integrations, and flowsnet-platform-sdk.\\n\\n## Integration updates for developers\\n\\n1. Upgrade the `github-flows` Integration to the 0.5.1 version. The latest version includes a new feature called `GithubLogin::Default`, which automatically identifies the user\'s unique login account as their GitHub `login` account. This eliminates the need for users to manually input their personal GitHub account in the code. For an example, please click on the following link: https://github.com/flows-network/github-star-slack-messenger/pull/2/files.\\n2. Upgrade the openai-flows integration to the 0.7.1 version. Added  `let of = OpenAIFlows::new();`, which will find the OpenAI key named default.  If there is no key named default, the platform will search for other keys. This method eliminates the need for users to specify the key name in the code.  [Click the link to check out an example](https://github.com/flows-network/github-pr-summary/blob/main/src/github-pr-summary.rs#L165).\\n3. Add log feature for the `flowsnet-platform-sdk` integration in the 0.1.4 version. With this feature, users can get more detailed and long-time logs for their flows. [Click the link to check out an example](https://github.com/DarumaDocker/github-func-test/blob/text-detection-lambda/src/lib.rs#L7).\\n\\n[Image: Image.jpg]\\n\\n\\n\\n## Introducing template  for users\\n\\nIn order to make the process of using flows.network easier for users, we have introduced pre-built flow templates that are popular. You can view these templates on the [templates](https://flows.network/templates) page. We are also working on adding more templates. \\nBy using a flow template, you only need to adjust certain settings for your bot and the SaaS integration required for the flow. Additionally, we will create a GitHub repository under your personal account to ensure that you have full control of the source code. Any updates you make to the repo will be automatically built by flows.network. \\n\\nAfter deploying a bot from the template, you will have a functioning bot and access to its source code. Let\'s take a look at how a Flow Template works.\\n\\n\\n### How to deploy a telegram bot from a flow template\\n\\nClick the template [ChatGPT Based Telegram Bot](https://flows.network/flow/createByTemplate/telegram-chatgpt-bot) to start. Make sure you have signed in [flows.network](https://flows.network/).\\n\\nOn this page, you can see which template you\u2019re using and you will create a new GitHub repo for yourself.  As I mentioned before, to make sure you have the full control of the flow\u2019s code, flows.network will create a GitHub repo containing the template source code under your own GitHub org. Here you can change the repo name. The name by default is the name of the template you used. You can also choose your own repo public or not.\\n\\n[Image: Image.jpg]If you\u2019re ok with the default setting on this page, just click on Create and Build to create the GitHub repo and build the flow function.\\n\\nBuilding the function takes some time, meanwhile let\u2019s configure the SaaS integration required by the flow template meanwhile. Next you will go through the SaaS integrations that you need to configure.\\n\\n\\nWe also need to grant flows.netowork to access OpenAI. Click on Connect if it\u2019s your first time to connect OpenAI.  You will be directed to a new page. Here you need to copy and paste your OpenAI key on the API key zone. If you have connected OpenAI, just click on continue button to check out the flow details.\\n\\n\\n>If you already connected to OpenAI  and want to add a new one, click on +Add new authentication.\\n\\n\\n[Image: Image.jpg]\\n\\n For this `ChatGPT Telegram Bot`, we need to [add a telegram API token from the botfather](https://flows.network/blog/how-to-get-a-telegram-bot-token). After you copy and paster the telegram API token in the configuration section, click on Deploy to deploy you flow.\\n\\nThat\u2019s it. You can see your flow is building. Once the status of your flow becomes `running`, you can go to the telegram to give the bot a try.\\n\\nThis is how a template works. With a template, deploying a bot is easy and  simple. Welcome to give it a try! Feel free to join our Discord server to stay updated or to request a template."},{"id":"build-a-chatgpt-telegram-bot-with-flows-network","metadata":{"permalink":"/blog/build-a-chatgpt-telegram-bot-with-flows-network","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/chatgpt-telegram-bot.md","source":"@site/blog/chatgpt-telegram-bot.md","title":"Step-by-Step Guide: Building a Telegram bot for ChatGPT","description":"ChatGPT has taken the world by storm. However, it\'s desktop web browser UI is cumbersome and delivers a subpar conversation experience for users. Users already have messaging apps they love and use. We should bring ChatGPT to messaging apps and enable users to converse with ChatGPT anytime anywhere.","date":"2023-06-25T10:40:19.000Z","formattedDate":"June 25, 2023","tags":[{"label":"telegram","permalink":"/blog/tags/telegram"},{"label":"guide","permalink":"/blog/tags/guide"}],"readingTime":6.55,"hasTruncateMarker":false,"authors":[{"name":"guide","title":"Build something awesome together"}],"frontMatter":{"slug":"build-a-chatgpt-telegram-bot-with-flows-network","title":"Step-by-Step Guide: Building a Telegram bot for ChatGPT","authors":{"name":"guide","title":"Build something awesome together"},"tags":["telegram","guide"]},"prevItem":{"title":"Changelog flows.network (0525-0407)","permalink":"/blog/flows-network-update-0525"},"nextItem":{"title":"How to create a Discord bot","permalink":"/blog/discord-bot-guide"}},"content":"ChatGPT has taken the world by storm. However, it\'s desktop web browser UI is cumbersome and delivers a subpar conversation experience for users. Users already have messaging apps they love and use. We should bring ChatGPT to messaging apps and enable users to converse with ChatGPT anytime anywhere. \\n\\nTelegram is a popular messaging app that allows users to securely send messages, files, and media to individuals or groups. In this article, I will walk through how to build a ChatGPT bot on Telegram. I will further discuss how to customize your bot with your own prompts and how to access external services from the bot (ie similar to ChatGPT plugins in the desktop web UI). \\n\\n\\n> The bot is deployed on flows.network, [a serverless platform for automating SaaS workflows with AI workloads](https://flows.network/).\\n\\n\\n\\n## What is a telegram bot\\n\\nBefore we started, let\u2019s first understand how a telegram bot works. If you are familiar with Telegram bots, you can skip this part and go to the next part to [create a ChatGPT telegram bot](#create-a-general-chatgpt-telegram-bot-from-a-flow-template-in-3-minutes).\\n\\nEssentially, a Telegram bot is a software application that runs inside the Telegram app. It allows us to interact with it using text messages or commands. Telegram bots are built using APIs, which enable developers to create custom code to handle different types of messages and perform various actions.\\n\\nYou can use telegram bot to automate repetitive receptive tasks, such as send a welcome message to the new member. You can also integrate telegram with other SaaS. This is what exactly we are doing right now \u2014 integrate Telegram with ChatGPT. \\n\\n## Create a general ChatGPT Telegram bot from a flow template in 3 minutes\\n\\nWith ChatGPT\'s integration on Telegram, you can easily communicate with ChatGPT without the need to open an additional browser. This feature provides a convenient way to seek assistance from ChatGPT using Telegram\'s interface.\\n\\n\\n> Make sure you have signed up for an account for [flows.network](https://flows.network/).\\n\\n\\n1. Load [the ChatGPT based Telegram bot template](https://flows.network/flow/createByTemplate/telegram-chatgpt-bot) and click on the Create and Build button. The template contains the source code for the bot itself. flows.networl will clone the source code to your own GitHub account so that you can modify and customize it later. We will use the code to combine awesome prompts with this telegram bot.\\n\\n![get the source code for the ChatGPT Telegram bot](chatgpt-telegram-bot-01.png)\\n\\n2. **Give the bot your OpenAI API key.** Click the Connect button to add your OpenAI API key. If you have saved API keys in the past, you can skip this step and reuse these keys.\\n\\n![get the source code for the ChatGPT Telegram bot](chatgpt-telegram-bot-02.png)\\n\\n3. **Configure the Telegram API token**. This is to connect the function with your bot. You can [get a telegram API token](https://flows.network/blog/how-to-get-a-telegram-bot-token) from @botfather and paste the box here. Once you\'re done, the grey Deploy button will turn purple.\\n\\n![get the source code for the ChatGPT Telegram bot](chatgpt-telegram-bot-03.png)\\n\\n\\nThat\u2019t it. After the function is ready and the status of flow is running, you can give your own ChatGPT Telegram bot a try. You can ask this ChatGPT Telegram bot to polish your english writing, being a writing tutor, and explain the code with different prompts.\\n\\n![get the source code for the ChatGPT Telegram bot](chatgpt-telegram-bot-04.png)\\n\\n\\n## Advanced: Import awesome ChatGPT prompts to your telegram bot\\n\\nThe ChatGPT prompts marketplace is another hot topic with the fire of ChatGPT. Prompting is critical for getting more accurate and efficient output from the language model. This is particularly important in fields such as question-answering, language translation, and chatbot development, where the output quality is directly related to the accuracy of the prompts used. A well-written prompt is an essential tool for improving the accuracy, efficiency, and usability of artificial intelligence systems in a wide range of applications. We have seen lots of ChatGPT prompts marketplace on the market, like the open-sourced [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts) GitHub repo, [AwesomeChatGPT,](https://www.awesomegptprompts.com/) [FlowGPT](https://flowgpt.com/) and so on.\\n\\nIn this section, I will show you how to add your favourite prompts to the ChatGPT Telegram bot you just built. The customized ChatGPT Telegram bot can be fine-tuned for a specific task. Here I use a prompt from AwesomeChatGPT.\\n\\n> I want you to act as an AI writing tutor. I will provide you with a student who needs help improving their writing and your task is to use artificial intelligence tools, such as natural language processing, to give the student feedback on how they can improve their composition. You should also use your rhetorical knowledge and experience about effective writing techniques in order to suggest ways that the student can better express their thoughts and ideas in written form.\\n\\nTo achieve this goal, we need to change the source code of the repo we created for you in the above step. You can find the GitHub repo address from the flow details page. \\n\\n ![get the source code for the ChatGPT Telegram bot](chatgpt-telegram-bot-05.jpg)\\n \\nThen go to the `src` file of your source code repo and replace the existing ChatGPT prompt \u201cYou are a helpful assistant answering questions on Telegram\u201d with any of the ChatGPT prompt you need in [line 22](https://github.com/flows-network/telegram-gpt/blob/main/src/lib.rs#L22). \\n\\nBefore:\\n\\n```\\nlet system = \\"You are a helpful assistant answering questions on Telegram.\\\\n\\\\nIf someone greets you without asking a question, you can simply respond \\\\\\"Hello, I am your assistant on Telegram, built by the Second State team. I am ready for your question now!\\\\\\"\\";\\n```\\n\\nAfter:\\n\\n```\\nlet system = \\"I want you to act as an AI writing tutor. I will provide you with non-native english speakers who needs help improving their writing and your task is to use artificial intelligence tools, such as natural language processing, to give the student feedback on how they can improve their composition. You should also use your rhetorical knowledge and experience about effective writing techniques in order to suggest ways that the student can better express their thoughts and ideas in written form. \\\\n\\\\nIf someone greets you without asking a question, you can simply respond \\\\\\"Hello, I am your assistant on Telegram, built by the Second State team. I am ready for improving your English writing now!\\\\\\"\\";\\n```\\n\\n\\nAfter making the necessary changes, push them to the GitHub repository and flows.network will automatically build your function. Once the build is complete, you will receive a customized ChatGPT Telegram bot for your specific use, eliminating the need to prompt ChatGPT when you strat a new conversation.\\n\\n\\n## Access external web services\\n\\nThe flow function behind the bot has access to the web. That allows the Telegram to use the latest information and web services injunction with ChatGPT. In another word, you can build ChatGPT plugin-like functionalities into your own bot. [This example](https://github.com/flows-network/weather-lookup/blob/main/src/lib.rs) shows how to make HTTPS requests to an external web service to look up the current weather and parse the result from the response JSON data. \\n\\n\\n```\\nfn get_weather(city: &str) -> Result<ApiResult, String> {\\n    let mut writer = Vec::new();\\n    let api_key = std::env::var(\\"API_KEY\\").unwrap();\\n    let query_str = format!(\\n        \\"https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}\\"\\n    );\\n\\n    request::get(query_str, &mut writer)\\n        .map_err(|e| e.to_string())\\n        .and_then(|_| {\\n            serde_json::from_slice::<ApiResult>(&writer).map_err(|_| {\\n                \\"Please check if you\'ve typed the name of your city correctly\\".to_string()\\n            })\\n        })\\n}\\n```\\n\\n\\nCombining ChatGPT with the web, your Telegram bot could be the conversational UI for complex applications. You can also call external web services to perform real world actions \u2014 for example, you could call the Twilio API to make a phone call based on ChatGPT outputs. \\n\\n\\n## What\u2019s next?\\n\\nWith flows.network, you can create a ChatGPT-powered Telegram bot in just three minutes. You can personalize your bot by making changes directly to the bot\u2019s source code. For example, you can  customize it with your favorite prompts or use external web services to provide additional context or to perform real world actions.\\n\\nWhat are you waiting for? [Give it a try](https://flows.network/flow/createByTemplate/telegram-chatgpt-bot) today! Feel free to join our [Discord server](https://discord.gg/ccZn9ZMfFf) to stay updated or to provide feedback."},{"id":"discord-bot-guide","metadata":{"permalink":"/blog/discord-bot-guide","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/how-to-create-a-discord-bot.md","source":"@site/blog/how-to-create-a-discord-bot.md","title":"How to create a Discord bot","description":"Discord is a great communication tool for the community. Lots of organisations, companies, and open-source projects use Discord as the home of their community. One of the most famous use cases is Midjounry. Lots of people use midjourny to generate unbelievable images with the help of a Discord server bot. In this article, I will show you how to create a Discord server bot and connect the bot with flows.work. This will be helpful when you want to create Discord-related flows.","date":"2023-06-25T10:40:19.000Z","formattedDate":"June 25, 2023","tags":[{"label":"discord","permalink":"/blog/tags/discord"}],"readingTime":2.15,"hasTruncateMarker":false,"authors":[{"name":"customer service","key":"helper"}],"frontMatter":{"slug":"discord-bot-guide","title":"How to create a Discord bot","authors":"helper","tags":["discord"]},"prevItem":{"title":"Step-by-Step Guide: Building a Telegram bot for ChatGPT","permalink":"/blog/build-a-chatgpt-telegram-bot-with-flows-network"},"nextItem":{"title":"How to get a Telegram bot token","permalink":"/blog/how-to-get-a-telegram-bot-token"}},"content":"Discord is a great communication tool for the community. Lots of organisations, companies, and open-source projects use Discord as the home of their community. One of the most famous use cases is Midjounry. Lots of people use midjourny to generate unbelievable images with the help of a Discord server bot. In this article, I will show you how to create a Discord server bot and connect the bot with flows.work. This will be helpful when you want to create Discord-related flows.\\n\\nTo connect Discord on flows.network, generally we will need two parameters: `discord_channel_id` and `discord-token`. \\n\\n## How to get the Discord channel id\\n\\nLet\u2019s get started with channel id, which is much easier. Discord channel id is an 18-digit number. \\n\\n\\nEach channel has its own unique URL. A standard URL of a discord channel is made up of `discord.com/channels/numbers/discord_id`. All you need to do is to enter the channel where you want to deploy the bot and copy the last numbers of the URL. \\n\\n```\\nhttps://discord.com/channels/846973236280950824/846973236280950827\\n                                               |---channel id-----|\\n```\\n\\nThat\u2019s how we get the Discord channel id.You can use a Discord channel ID to indicate the channel from which the bot should exit.\\n\\n\\n## How to get the Discord bot token\\n\\n1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) You need to log in your Discord account first.\\n2. Click on the \\"New Application\\" button and give your bot a name.\\n3. Then, you will be redirected to the application details page. On the general information page, you can update your app icon, description, tags and other stuff.\\n4. Click on the \\"Bot\\" tab on the left-hand side of the page. In this page, we need to \\n    1. Click the Reset Token button to get the Discord bot token. Then save the token carefully, which we will use to build a flow on flows.network.\\n    2. Open the PRESENCE INTENT, SERVER MEMBERS INTENT, and MESSAGE CONTENT INTENT.\\n5. Click on the \u201cOauth\\" tab on the left-hand side of the page and click on URL Generator.\\n    1. On the URL Generator page, select bot in the scope.\\n    2. Copy the bot url from the GENERATED RRL in the bottom of this page. This URL is used to invite your bot to your Discord server after your flow is running successfully.\\n\\nAfter you get the Discord Chanel id and Discord bot token , go to flows.network to create a Discord bot, like the ChatGPT Discord server.\\n\\n\\n## Connect the channel id and Discord token with your bot\\n\\nThe most easiest way to create a discord bot is to get started with a pre-build template."},{"id":"how-to-get-a-telegram-bot-token","metadata":{"permalink":"/blog/how-to-get-a-telegram-bot-token","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/telegram-token.md","source":"@site/blog/telegram-token.md","title":"How to get a Telegram bot token","description":"To build Telegram bots or automate Telegram-related workflows on the flows.network platform, a Telegram bot token is necessary. flows.network supports Telegram integration, which enables you to create Telegram bots with ease.","date":"2023-06-25T10:40:19.000Z","formattedDate":"June 25, 2023","tags":[{"label":"telegram","permalink":"/blog/tags/telegram"}],"readingTime":1.425,"hasTruncateMarker":false,"authors":[{"name":"customer service","key":"helper"}],"frontMatter":{"slug":"how-to-get-a-telegram-bot-token","title":"How to get a Telegram bot token","authors":"helper","tags":["telegram"]},"prevItem":{"title":"How to create a Discord bot","permalink":"/blog/discord-bot-guide"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"To build Telegram bots or automate Telegram-related workflows on the flows.network platform, a Telegram bot token is necessary. flows.network supports [Telegram integration](https://flows.network/integration/Telegram), which enables you to create Telegram bots with ease.\\n\\nHere\'s a step-by-step guide on how to get a bot token for Telegram. Then you can use this token to create your own telegram bot.\\n\\n1. Open Telegram on your device or web browser and search for the \\"BotFather\\" account [@BotFather](https://t.me/BotFather).\\n2. Start a chat with the BotFather and type \\"/newbot\\" to create a new bot. BotFather will ask for a name and username for your bot.\\n3. Choose a name and username for your bot. The name can be anything you like but the username must end with \\"bot\\". For example, the name can be \\"FlowsNetworkBot\\" and the username can be \\"@flowsnetworkbot\\".\\n4. If your chosen username is available, BotFather will provide you with a unique API token for your bot. You should copy and store this token carefully.\\n5. Once you have the API token, you can start building your Telegram bot on flows.network. Here is a template project to [build a ChatGPT-powered Telegram bot](https://github.com/flows-network/telegram-gpt) on flows.network.\\n\\n> Note that the API token is a unique identifier for your bot, which allows you to send requests to the Telegram Bot API. Make sure to keep this token safe and secure, as anyone with access to this token can potentially control your bot.\\n\\nIn conclusion, getting a bot token for Telegram is a simple process that can be completed with BotFather\'s help. Once you have the token, you can start building your bot on flows.network.\\n\\nNext step is to fork the [telegram-gpt](https://github.com/flows-network/telegram-gpt) repo and folow the instrcutions to build your own chatgpt bot."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"We (flows.network) will use our blog posts to provide updates for flows.network. We use tag to specify blog content. You can find the details below.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"hello","permalink":"/blog/tags/hello"}],"readingTime":0.445,"hasTruncateMarker":false,"authors":[{"name":"customer service","key":"helper"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["helper"],"tags":["hello"]},"prevItem":{"title":"How to get a Telegram bot token","permalink":"/blog/how-to-get-a-telegram-bot-token"}},"content":"We (flows.network) will use our blog posts to provide updates for flows.network. We use tag to specify blog content. You can find the details below. \\n\\n| Tag name  | description                                                                |\\n|-----------|----------------------------------------------------------------------------|\\n| changelog | Updates for flows.network in the past week. Published on Monday each week. |\\n| products  | New features about flows.network                                           |\\n| telegram  | Updates and guide for the Telegram integration.                            |\\n| GitHub    | Updates and guide for the GitHub integration.                              |\\n| OpenAI    | Updates and guide for the OpenAI integration                               |"}]}')}}]);