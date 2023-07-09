---
sidebar_position: 9
---
# Cloud Vision


The [`cloud_vision_flows` crate](https://docs.rs/cloud_vision_flows)  allows you to integrate Google Cloud Vision functionality into your flows on the `Flows Network` platform. You can easily perform actions such as text detection on images using Google Cloud Vision's powerful image analysis capabilities.


## Trigger

A `Flows Function` waits for a request to occur. This request could be the need to extract text from an image. For our example on this page, the function utilizes the method `request_received()` to respond to such requests.


## Action

When a function is triggered by an event, it performs a corresponding action. In this case, the action could be detecting text from an image using Google Cloud Vision. The action to be taken upon receiving a request is defined by the user.


## Recommended flows and templates

Here is a minimal example:

```rust

use cloud_vision_flows::text_detection;
use lambda_flows::{request_received, send_response};

#[no_mangle]
pub fn run() {
    request_received(|_qry, body| {
        let text = text_detection(String::from_utf8(body).unwrap());
        match text {
            Ok(r) => send_response(
                200,
                vec![(
                    String::from("content-type"),
                    String::from("text/plain; charset=UTF-8"),
                )],
                r.as_bytes().to_vec(),
            ),
            Err(e) => send_response(
                500,
                vec![(
                    String::from("content-type"),
                    String::from("text/plain; charset=UTF-8"),
                )],
                e.as_bytes().to_vec(),
            ),
        }
    });
}
```


This program takes a base64 encoded image as a request, extracts text from it using Google Cloud Vision, and sends back the extracted text or an error message as a response.

