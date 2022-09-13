---
sidebar_position: 2
---
# 🦀  Understand the flow function

An important feature of flows.network is that its SaaS API flows are programmable. For example, in the Getting Started example, we could write code in the flow function to transform and filter the event received from GitHub, and construct a customized message for Slack.

Let’s first review the simple wasm flow function we published for the [Getting Started guide](getting-started-rust.md). It is written [in Rust](https://github.com/second-state/flow-functions/tree/main/getting-started/rust). The JavaScript version of this flow function is available [here](https://github.com/second-state/flow-functions/tree/main/getting-started/javascript). The flow is triggered when someone comments on an issue on the connected GitHub repo. The flow function takes the GitHub event message as the input argument, and parses important data fields, such as `action` and `comment`, from the message.


```
#[wasmedge_bindgen]
pub fn run(s: String) -> String {
    let result: Result<Value> = serde_json::from_str(s.as_str());
    if let Ok(pl) = result {
        match pl.get("action") {
            Some(action) => {
                if let Some(action) = action.as_str() {
                    match action {
                        ... ...
                        "created" => {
                            if let Some(comment) = pl.get("comment") {
                                ... ...
                            }
                        }
```


Then, the flow function constructs and returns a new message for the Slack API. The outbound connector receives the return value from the flow function and forwards it to Slack. 


```
#[wasmedge_bindgen]
pub fn run(s: String) -> String {
    ... ...
                        "created" => {
                            if let Some(comment) = pl.get("comment") {
                                html_url = comment.get("html_url").unwrap().as_str().unwrap();
                                body = comment.get("body").unwrap().as_str().unwrap().to_string();
                            }
                        }
    ... ...
    return format!(
        "{}\n{}",
        body.replace("\\r\\n", "\n"),
        html_url
    );
}
```



## Build it!

Make sure that you have installed [Rust](https://www.rust-lang.org/tools/install) and added the `wasm32-wasi` target.


```
rustup target add wasm32-wasi
```


Check out the above sample flow function's source code, and compile the Rust code to Wasm bytecode.


```
# Get the source code
$ git clone https://github.com/second-state/flow-functions.git
$ cd /getting-started/rust
# compile the rust code to Wasm bytecode
$ cargo build  --target wasm32-wasi --release
... ...
    Finished release [optimized] target(s) in 0.21s
    
# Locate the wasm file after a successful build
$ ls ../../../target/wasm32-wasi/release/*wasm
../../../target/wasm32-wasi/release/getting_started.wasm
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



