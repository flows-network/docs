---
sidebar_position: 2
---
# 🦀  Understand the flow function

An important feature of flows.network is that its SaaS API flows are programmable. For example, in the Getting Started example, we could write code in the flow function to transform and filter the event received from GitHub, and construct a customized message for Slack.

Let’s first review the simple wasm flow function we published for the [Getting Started guide](step-by-step-guide.md). It is written [in Rust](https://github.com/second-state/flow-functions/tree/main/getting-started/rust). The JavaScript version of this flow function is available [here](https://github.com/second-state/flow-functions/tree/main/getting-started/javascript). The flow is triggered when someone comments on an issue on the connected GitHub repo. The flow function takes the GitHub event message as the input argument, and parses important data fields, such as `action` and `comment`, from the message.

```rust
#[allow(unused_imports)]
use wasmedge_bindgen::*;
use wasmedge_bindgen_macro::*;
use flows_connector_dsi::github::inbound;

#[wasmedge_bindgen]
pub fn run(s: String) -> Result<String, String> {
    let payload = inbound(s)?;
    let comment = payload.get_comment()?;

    if payload.get_action()? != "created" {
        return Ok(String::new());
    }

    // Then, the flow function constructs and returns a new 
    // message for the Slack API. The outbound connector receives 
    // the return value from the flow function and forwards it to Slack.

    Ok(format!(
        "{}\n{}",
        comment.body.replace("\\r\\n", "\n"),
        comment.html_url
    ))
}
```

## Build it!

Make sure that you have installed [Rust](https://www.rust-lang.org/tools/install) and added the `wasm32-wasi` target.

```shell
rustup target add wasm32-wasi
```

Check out the above sample flow function's source code, and compile the Rust code to Wasm bytecode.

```shell
# Get the source code
git clone https://github.com/flows-network/flow-functions.git
# compile the rust code to Wasm bytecode
cargo build -p getting-started --target wasm32-wasi --release
# ... ...
#   Finished release [optimized] target(s) in 0.21s
    
# Locate the wasm file after a successful build
ls target/wasm32-wasi/release/*wasm
# ...
# target/wasm32-wasi/release/getting_started.wasm
```

After that, you can upload the `getting_started.wasm` file to the flows.network flow as shown in Getting Started.

## Create your own

Now you can add your own logic to the flow function. Here are some examples and ideas to get you started.

* The flow function could only forward comments containing a tag or command phrase.
* The flow function could only forward comments from a certain group of users.
* The flow function could only forward comments that demonstrate strong sentiments.

The flow function could also transform the message sent to Slack.

* GitHub short links, such as issue numbers and PR numbers, could be expanded by the flow function.
* The flow function could add links or context from the parent GitHub issue.
* The flow function could compute and add the time lapsed from the last comment in the same issue.

Remember to send us a [PR](https://github.com/second-state/flow-functions/) if you created a new flow function and wanted to share!
