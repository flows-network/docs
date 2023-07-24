---
slug: claude-telegram-bot
title: "Build Your Own AI Chatbot: A Guide to Creating a Claude Assistant on Telegram"
authors: guide
tags: [telegram,guide,claude]
---


Recently, [flows.network](https://flows.network/) supports Anthropic's Claude and its newly issued Claude 2 (100k tokens supported). We talked about [how to build a Telegram ChatGPT bot](https://flows.network/blog/build-a-chatgpt-telegram-bot-with-flows-network). In this guide, I will walk you through the process of building your own Telegram chatbot powered by [Claude](https://www.anthropic.com/index/introducing-claude) in just three minutes using flows.network. You won't need to write any code or manage any servers. All you have to do is click a few buttons and provide some information.

With this Claude Telegram chatbot, you can:

* Customize prompts to prompt Claude based on your needs
* Chat privately and in a public group
* Optionally set the maximum token length for your Claude model in the code

Before we start, let’s learn some basic concepts of Claude and the Telegram bot.

![](https://user-images.githubusercontent.com/45785633/250013894-5c24d37f-ef45-431b-bc9f-841a5d60925b.png)


### What is Claude

Claude is an AI assistant created by Anthropic to be helpful, harmless, and honest. It was designed using a technique called Constitutional AI, which trains language models like Claude through natural conversations. During these conversations, humans provide feedback to reinforce positive behavior and ensure safety and transparency.

By building your own Claude bot on Telegram, you contribute to the development of AI that prioritizes trustworthy and reliable interactions. Your bot's users will experience Claude as a helpful and honest AI partner, designed and trained to uphold those values above all else.

If you're new to Telegram bots, you can refer to our previous article which [introduced telegram bot](https://flows.network/blog/build-a-chatgpt-telegram-bot-with-flows-network#what-is-a-telegram-bot).


### Create a Claude Telegram Bot from a Flow Template in Three Steps

The first step is to load the pre-built template for [creating a Claude Telegram bot](https://flows.network/flow/createByTemplate/telegram-claude) on your browser. Before you click on **Create and Build** button, you can review the three optional variables like the following image. Here I want to highlight the `system_prompt`  variables. This is for prompting Claude. You can type any prompts here.

> The template contains [the source code for the bot itself](https://github.com/flows-network/telegram-claude). We will clone the source code to your own GitHub account so that you can modify and customize it later.

![](https://user-images.githubusercontent.com/45785633/250009300-c91edcc2-207f-44d0-a545-9a61d0c6db2f.png)

Once you have made your customizations, click the **Create and Build** button, and you will be directed to another page to configure the Claude integration. Next, you need to add your Claude API key. Click on Connect and enter your key.

> If you don’t have one, [apply here](https://claude.flows.network/alabulei1/access).

![](https://github.com/flows-network/telegram-claude/assets/45785633/c5b42af7-58c0-4454-a6e2-22ecdd9d9d3e)

Then, you need to add the Telegram token. You can follow this article to [get a Telegram token from @botfather](https://flows.network/blog/how-to-get-a-telegram-bot-token). Once you're done, the grey **Deploy** button will turn purple. Click on the **Deploy** button in purple to complete the flow.

![](https://github.com/flows-network/telegram-claude/assets/45785633/805f78b0-ca9b-476d-8ec2-1e5763c0edf5)
That's it! Once the function is ready and the flow's status is "running," you can test your own Claude Telegram bot. You can explore different roles for your bot, such as polishing English writing, serving as a writing tutor, or explaining code, by using different prompts.

If you'd like to check out the source code, 

## Access External Web Service

The bot's flow function can access the web, enabling Telegram to utilize up-to-date information and web services in conjunction with Claude. In simpler terms, you have the ability to incorporate plugin-like functionalities of Claude into your own bot. 

For example,  you can make HTTPS requests to an external web service to look up the current weather and parse the result from the response JSON data.

```
fn get_weather(city: &str) -> Result<ApiResult, String> {
    let mut writer = Vec::new();
    let api_key = std::env::var("API_KEY").unwrap();
    let query_str = format!(
        "https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}"
    );

    request::get(query_str, &mut writer)
        .map_err(|e| e.to_string())
        .and_then(|_| {
            serde_json::from_slice::<ApiResult>(&writer).map_err(|_| {
                "Please check if you've typed the name of your city correctly".to_string()
            })
        })
}
```

Combining Claude with the web, your Telegram bot will be just like a ChatGPT Plugin and leverage conversational UI for complex applications. Calling external web services provides more dynamic and real-world functionality.  For example, you can call the SendGrid API to send emails based on ChatGPT outputs.

### References:

* [Get a Telegram token for your bot](https://flows.network/blog/how-to-get-a-telegram-bot-token)
* [Build a Telegram ChatGPT bot](https://flows.network/blog/build-a-chatgpt-telegram-bot-with-flows-network)






