---
sidebar_position: 4
---

# Discord slash command

In this article, I will show you how to use **slash commands** to interact with your Discord bot based on an external web service. Specifically, this flow function is a weather inquiry bot. When you type `/weather` + the city name, the bot will respond to you with the weather information of this city.

![](discord-slash-command.png)

## Prerequisites
1. A GitHub account to log into the [flows.network](https://flows.network/) platform. It's free.
2. A Discord server that you have permission to add a bot.

## Prepare the source code

For this tutorial, we already created [a repo named `discord-api-demo`](https://github.com/flows-network/discord-api-demo) for you to fork.

## Import and build

[Click here](https://flows.network/flow/new) to import your forked source code repo for the flow function into flows.network.

For this flow function, we need to add a Discord token and a bot id in settings so that it can listen for messages from a specific Discord bot.
Please refer to [How to create a Discord chat bot](https://flows.network/blog/discord-chat-bot-guide) on how to get your Discord token.
Click on the **Advanced** link to configure the settings.

| Name             | Value                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------- |
| discord_token    | Copied from Discord Developer Portal                                                        |
| bot_id | Copied from Discord Developer Portal -- General information -- Application ID  |

Click on the **Build** button to create the flow function.

In the next screen, you will be asked to connect to Discord. Since we are providing a Discord API token to access the bot here, you can simply click on **Deploy**.

## Deploy

Finally, you will be redirected to the flow details page, where you can check for service status and logs. Discord and OpenAI should appear as connected external services on this page.

When the status of the flow is ready and running, you can invite the Discord bot to your server.

> Refer to this guide to [invite the bot to your server](https://flows.network/blog/discord-chat-bot-guide).

After the bot joins your server, you can find the bot on the right online contact list. Then you can go to the specific channel and type /weather + name to give it a try.

## Code walkthrough

The source code for the flow function is written in the Rust programming language.  Let's start with how to register a slash command for a bot. The following code registers a slash command `weather` for a Discord bot with the `register_commands` function using Discord's HTTP API.

```
async fn register_commands() {

    let bot_id = env::var("bot_id").unwrap_or("1124137839601406013".to_string());
 // the details of a slash command
    let command = serde_json::json!({
        "name": "weather",
        "description": "Get the weather for a city",
        "options": [
            {
                "name": "city",
                "description": "The city to lookup",
                "type": 3,
                "required": true
            }
        ]
    });

    let discord_token = env::var("discord_token").unwrap();
    let http_client = HttpBuilder::new(discord_token)
        .application_id(bot_id.parse().unwrap())
        .build();

    match http_client
        .create_global_application_command(&command)
        .await
    {
        Ok(_) => log::info!("Successfully registered command"),
        Err(err) => log::error!("Error registering command: {}", err),
    }
}
```
Now we have registered a slash command. It is shown on the Discord UI when the user tries to send a message to the bot. When the user sends a slash command to the bot, we need to capture and handle it in our application. Next, let's see how to listen for a slash command. The `handler` function is annotated with `#[application_command_handler]`. If the input matches a `/weather` command, it will extract the `city` option from the command arguments and then call the `get_weather()` function to look up weather data for the given city. Finally, it will send the content to the channel. 

```
#[application_command_handler]
async fn handler(ac: ApplicationCommandInteraction) {
    logger::init();
    let discord_token = env::var("discord_token").unwrap();
    let bot = ProvidedBot::new(discord_token);
    let client = bot.get_client();

    client.set_application_id(ac.application_id.into());

    _ = client
        .create_interaction_response(
            ac.id.into(),
            &ac.token,
            &serde_json::json!({
                "type": InteractionResponseType::DeferredChannelMessageWithSource as u8,
            }),
        )
        .await;
    let options = &ac.data.options;
// Listen to the slash command
    match ac.data.name.as_str() {
        "weather" => {
            let city = match options
                .get(0)
                .expect("Expected city option")
                .resolved
                .as_ref()
                .expect("Expected city object")
            {
                CommandDataOptionValue::String(s) => s,
                _ => panic!("Expected string for city"),
            };
// Send the result to the channel
            let resp_inner = match get_weather(&city) {
                Some(w) => format!(
                    r#"Today: {},
                Low temperature: {} °C,
                High temperature: {} °C,
                Wind Speed: {} km/h"#,
                    w.weather
                        .first()
                        .unwrap_or(&Weather {
                            main: "Unknown".to_string()
                        })
                        .main,
                    w.main.temp_min as i32,
                    w.main.temp_max as i32,
                    w.wind.speed as i32
                ),
                None => String::from("No city or incorrect spelling"),
            };
            let resp = serde_json::json!({ "content": resp_inner });
            _ = client
                .edit_original_interaction_response(&ac.token, &resp)
                .await;
        }
        _ => {}
    }
}
```

After receiving a slash command `/weather`, the function will call the `get_weather` function via HTTP. It's not the core part of this guide, you can [check out the weather inquiry function](https://github.com/flows-network/discord-api-demo/blob/main/src/lib.rs#L140-L166). You also can refer to the Acess external web service guide.


You also need to structure the output data format, refer to this [snippet](https://github.com/flows-network/discord-webhook-demo/blob/main/src/lib.rs#L119-L140) for more information.
