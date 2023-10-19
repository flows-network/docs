---
sidebar_position: 2
---
# Access external web services

In this article, I will show you how to create a flow function that responds to events from external services with the webhook flows. This flow function provides a webhook. When an HTTP request is received on the webhook, the flow function makes an HTTP request to an external web service to retrieve real-time weather data for a specified city. 

## Prerequisites

 1. A GitHub account to log into the [flows.network](https://flows.network/) platform. It's free.
 2. An [OpenWeatherMap API key](https://openweathermap.org/api) to query the weather information.. 

## Prepare the source code

For this tutorial, we already created [a repo named `weather-lookup`](https://github.com/flows-network/weather-lookup) for you to fork.

## Import, build and deploy

[Click here](https://flows.network/flow/new) to import your forked source code repo for the flow function into flows.network.

For this flow function, we need to add an OpenWeatherMap API key.
Click on the **Advanced** link to configure the settings.

| Name             | Value                                 |
| ---------------- | ------------------------------------- |
| API_KEY    | Copied from OpenWeatherMap  |

> We put the API token in the settings as opposed to in the source code for two reasons. First, we keep the token secure by keeping it out of the public GitHub repos. Second, we make it easy to reuse the flow function source code.

Next, click on the **Build** and **Deploy** buttons to create the flow function.

Finally, you will be redirected to the flow details page, where you can check for
service status and logs.

## Test it!

![](webhook.png)

When the status of the flow is ready and running, you can see a link in the Webhook Endpoint section. Copy and paste this URL to your browser and add `?city=cityname` to look up the weather of the city  you want to know.

For example, you can use this link to inquire about the weather in Austin.

https://code.flows.network/webhook/EmkeFZOrR4uRxeKBFiCK?city=Austin

## Code walkthrough

The source code for the flow function is written in the Rust programming language. 

### Initialize the webhook

The `on_deploy()` function creates the webhook endpoint. It listens for incoming HTTP requests.

```rust
#[no_mangle]
#[tokio::main(flavor = "current_thread")]
pub async fn on_deploy() {
    create_endpoint().await;
}
```

### Handle the request

The `handler()` function annotated with `#[request_handler]` will handle the incoming HTTP request. The function first fetches the `city` query parameter, then calls `get_weather` to retrieve weather data for the specified city. The result will be returned in the HTTP response.

```rust
#[request_handler]
async fn handler(_headers: Vec<(String, String)>, _subpath: String, qry: HashMap<String, Value>, _body: Vec<u8>) {
    // Get the city query parameter
    let city = qry.get("city").unwrap_or(&Value::Null).as_str();

    // Call the `get_weather` function and retrieve the weather data
    let resp = match city {
        Some(c) => get_weather(c).map(|w| {
            format!(
                "Today: {},
Low temperature: {} °C,
High temperature: {} °C,
Wind Speed: {} km/h",
                w.weather
                    .first()
                    .unwrap_or(&Weather {
                        main: "Unknown".to_string()
                    })
                    .main,
                w.main.temp_min as i32,
                w.main.temp_max as i32,
                w.wind.speed as i32
            )
        }),
        None => Err(String::from("No city in query")),
    };

    //Send the result in HTTP Response
    match resp {
        Ok(r) => send_response(
            200,
            vec![(
                String::from("content-type"),
                String::from("text/html; charset=UTF-8"),
            )],
            r.as_bytes().to_vec(),
        ),
        Err(e) => send_response(
            400,
            vec![(
                String::from("content-type"),
                String::from("text/html; charset=UTF-8"),
            )],
            e.as_bytes().to_vec(),
        ),
    }
}
```

### Fetch the weather data

The `get_weather` function makes a GET request to the OpenWeatherMap API and returns a `Result` with the weather information if successful or an error message string if not. The `request` struct is from the `http_req` crate. It performs the HTTP request to the external OpenWeatherMap API service.

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

### Data structure

These structures are used to deserialize the JSON response from the OpenWeatherMap API:

```rust
#[derive(Deserialize)]
struct ApiResult {
    weather: Vec<Weather>,
    main: Main,
    wind: Wind,
}

#[derive(Deserialize)]
struct Weather {
    main: String,
}

#[derive(Deserialize)]
struct Main {
    temp_max: f64,
    temp_min: f64,
}

#[derive(Deserialize)]
struct Wind {
    speed: f64,
}
```
