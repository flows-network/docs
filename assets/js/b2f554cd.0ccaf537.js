"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"changelog","metadata":{"permalink":"/blog/changelog","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/changelog-0407.md","source":"@site/blog/changelog-0407.md","title":"This week in flows.network (0403-0407)","description":"From April 3rd to April 7th, flows.network has made the following updates:","date":"2023-04-12T07:53:32.000Z","formattedDate":"April 12, 2023","tags":[{"label":"changelog","permalink":"/blog/tags/changelog"},{"label":"product","permalink":"/blog/tags/product"}],"readingTime":0.59,"hasTruncateMarker":false,"authors":[{"name":"release","title":"New things about flows.network"}],"frontMatter":{"slug":"changelog","title":"This week in flows.network (0403-0407)","authors":{"name":"release","title":"New things about flows.network"},"tags":["changelog","product"]},"nextItem":{"title":"How to get a Telegram bot token","permalink":"/blog/api-guide"}},"content":"From April 3rd to April 7th, flows.network has made the following updates:\\n\\n* Supprot rebuilding your flow function mannuly. You can find Rebuild button next to the Deployment Log. As usual, you won\'t need to rebuild your function. Whether you commit new changes in your code or re-authticate your SaaS integrations, the flows.network platform will automatically build function again. In order to solve some unexpected problems, we add this button. But we hope no one clicks this button.\\n\\n* Upgrade OpenAI-flows integration to 0.4 and support `retry_time` function. This function can ask ChatGPT to retry to answer your question if ChatGPT can\'t reply to you previouly due to some network issues. See an example in the [github-pr-summary](https://github.com/flows-network/github-pr-summary/blob/main/src/github-pr-summary.rs#L150) repo."},{"id":"api-guide","metadata":{"permalink":"/blog/api-guide","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/telegram-token.md","source":"@site/blog/telegram-token.md","title":"How to get a Telegram bot token","description":"flows.network supports the Telgeram integration. A Telegram bot token is neceessary thing for building telegram bots.","date":"2023-04-12T07:53:32.000Z","formattedDate":"April 12, 2023","tags":[{"label":"telegram","permalink":"/blog/tags/telegram"}],"readingTime":1.26,"hasTruncateMarker":false,"authors":[{"name":"customer service","key":"helper"}],"frontMatter":{"slug":"api-guide","title":"How to get a Telegram bot token","authors":"helper","tags":["telegram"]},"prevItem":{"title":"This week in flows.network (0403-0407)","permalink":"/blog/changelog"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"flows.network supports the Telgeram integration. A Telegram bot token is neceessary thing for building telegram bots.\\n\\nHere\'s a step-by-step guide on how to get a bot token for Telegram. Then you can use this token to create your own telegram bot.\\n\\n1. Open Telegram on your device or web browser and search for the \\"BotFather\\" account [@BotFather](https://t.me/BotFather).\\n2. Start a chat with the BotFather and type \\"/newbot\\" to create a new bot. BotFather will ask for a name and username for your bot.\\n3. Choose a name and username for your bot. The name can be anything you like but the username must end with \\"bot\\". For example, the name can be \\"FlowsNetworkBot\\" and the username can be \\"@flowsnetworkbot\\".\\n4. If your chosen username is available, BotFather will provide you with a unique API token for your bot. You should copy and store this token carefully.\\n5. Once you have the API token, you can start building your Telegram bot on flows.network. Here is a template project to [build a ChatGPT-powered Telegram bot](https://github.com/flows-network/telegram-gpt) on flows.network.\\n\\n> Note that the API token is a unique identifier for your bot, which allows you to send requests to the Telegram Bot API. Make sure to keep this token safe and secure, as anyone with access to this token can potentially control your bot.\\n\\nIn conclusion, getting a bot token for Telegram is a simple process that can be completed with BotFather\'s help. Once you have the token, you can start building your bot on flows.network."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"We (flows.network) will use our blog posts to provide updates for flows.network. We use tag to specify blog content. You can find the details below.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.445,"hasTruncateMarker":false,"authors":[{"name":"customer service","key":"helper"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["helper"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"How to get a Telegram bot token","permalink":"/blog/api-guide"}},"content":"We (flows.network) will use our blog posts to provide updates for flows.network. We use tag to specify blog content. You can find the details below. \\n\\n| Tag name  | description                                                                |\\n|-----------|----------------------------------------------------------------------------|\\n| changelog | Updates for flows.network in the past week. Published on Monday each week. |\\n| products  | New features about flows.network                                           |\\n| telegram  | Updates and guide for the Telegram integration.                            |\\n| GitHub    | Updates and guide for the GitHub integration.                              |\\n| OpenAI    | Updates and guide for the OpenAI integration                               |"}]}')}}]);