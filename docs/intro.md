---
sidebar_position: 1
---

# What is flows.network?

Flows.network is a serverless platform for building and deploying workflow functions.

* Those functions are triggered by Internet events, including web requests, webhook callbacks, blockchain transactions, IoT events, message queues, and even streaming data.
* The function can access databases, AI models, and any other web service to process the incoming events data.
* Upon completion, the function can perform actions such as sending the results to Slack, Discord, Telegram clients, posting comments on GitHub, and triggering another flow function.

Flows.network is powered by the [WasmEdge Runtime](https://github.com/WasmEdge/WasmEdge/). All flow functions are compiled into Wasm (WebAssembly) by the platform. That means you can use any Wasm supported programming language to create flow functions. Currently, Rust is the best supported language on flows.network, while JavaScript and Python support is coming soon.

If you are not a programmer and would like to use flow functions the community has created for specific tasks, you can simply use flows templates.
With templates, you can just clone and configure an existing flow function. No coding needed to get it working! Yet, with flows.network, you 
can always go back to customize the flow function code later when your use cases grow in complexity.

## Key features

* **GitOps:** All your flow functions are stored in your GitHub repo. Any time you make a change, the flows.network platform will automatically re-build and re-deploy your function. GitHub is the single source of truth.
* **Serverless:** There is no need to run your own servers to listen for triggers and events, and to authenticate for actions (e.g., sending the result into your team's private Slack group). You just write the code. The platform does the rest!
* **AI agents:** Flow functions have easy access to all leading commercial and open source LLMs (eg, GPT4, Claude2, PaLM2, llama2) and generative image models. You can create AI agents that leverage model capabilities to interact with the world.
* **Batteries included:** Flow functions have access to relational databases, vector databases, KV stores, popular AI models, as well as asynchronous and non-blocking HTTP and HTTPS networking. All the cloud services you need for your app are here.
* **Ecosystem:** Flow functions can access many third party cloud services. Authorization of those services are fully integrated into the platform UI. You just need to click through a few web pages to give a flow function access to an external service.

## How it works

1. Create your flow function and push it into a GitHub repo. You can also re-use other people's flow functions by cloning a template into your GitHub account.
2. Deploy the flow function. You need to authorize flows.network to access your GitHub repo. After that, flows.network will compile, build, and deploy the function.
3. Give the flow function to access to external SaaS or LLM services. That is done via the flows.network UI. You will be able to access those external services using your account and API keys.

## What's next

Learn how flow functions work and how to create your own.

Or, if you are not a programmer, you can reuse existing flow functions from templates. For example, you can deploy your own ChatGPT bots
on Telegram or Slack. You can also deploy a GPT4 bot to automatically review GitHub Pull Requests for your repos.


