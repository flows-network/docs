---
sidebar_position: 1
---

# Overview of flows.network

# Introduction

flows.network is a serverless platform for building and deploying workflows with AI workloads. It is designed for developers to have full control of the application logic through code, enabling them to create complex and sophisticated AI applications and SaaS workflows with ease.

> The flows.network is powered by [WasmEdge (project under CNCF)](https://github.com/WasmEdge/WasmEdge/). Now you could deploy your function in Rust. JavaScript support is in development.

The whole workflow on flows.network should be:

* Write your own business logic code and push it to your GitHub repository. It doesn't matter if your code is public or private; flows.network can work with both. Here are [some awesome flow functions](https://github.com/flows-network/awesome-flow-fucntions) for your reference. Or you can simply use the templates provided by flows.network and the community.
* Deploy the code on flows.network. In this step, you need to authenticate flows.network to access your code. After that, flows.network will compile, build, and deploy it. And whenever you push new changes to the repository in the future, the flow function will be automatically rebuilt and redeployed.
* Configure your SaaS integrations (Optional). If your flow function is to automate SaaS workflows, then you need to authenticate your SaaS accounts to allow flows.network to listen to and perform the events.

There are two main use cases for flows.network.

One is to run general Rust serverless functions like AI inference.

The other one is to build bots, connections, and workflows for online services. For this use case, flows.network has wrapped popular SaaS APIs and it wll be easy to use. please refer to [Getting Started with SaaS](docs/category/getting-started) for more information.