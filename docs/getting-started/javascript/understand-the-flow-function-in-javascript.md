---
sidebar_position: 2
---

# Understand the flow function

An important feature of flows.network is that its SaaS API flows are programmable. For example, in the Getting Started example, we could write code in the flow function to transform and filter the event received from GitHub, and construct a customized message for Slack.

Let’s first review the simple wasm flow function we published for the [Getting Started guide](getting-started-javascript.md). It is written in [JavaScript](https://github.com/second-state/flow-functions/tree/main/getting-started/javascript). The Rust version of this flow function can be found here. The flow is triggered when someone comments on an issue on the connected GitHub repo. The flow function takes the GitHub event message as the input argument, and parses important data fields, such as `action` and `comment`, from the message.


```
(s) => {
    let x = JSON.parse(s);
    switch(x["action"]){
        case "created":
            ... ...
    }
    ... ...
}
```


Then, the flow function constructs and returns a new message for the Slack API. The outbound connector receives the return value from the flow function and forwards it to Slack. 


```
(s) => {
    let x = JSON.parse(s);
    ... ...
        case "created":
            body = x["comment"]["body"];
            html_url = x["comment"]["html_url"];
            break;
    }

    ... ...
        return body.replace(/(?:\\[rn])+/g, "\n") + "\n" + html_url;
    ... ...
}
```


You can upload the `getting_started.js` file to the flows.network flow as shown in Getting Started.


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




