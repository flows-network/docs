---
sidebar_position: 1
---

# WasmHaiku Intro

WasmHaiku is a Serverless functions platform for SaaS.

## The traditional way to custom SaaS

It is common practice for a SaaS platform to provide an API for developers and customers to extend its core functionalities. Think custom plugins for JIRA or chatbots on Slack. 

However, the traditional RESTful API approach typically requires the developer to set up a server to receive and respond to events from the SaaS platform. For example, in a Slack chatbot app, the developer need to set up a server to listen to messages sent to the bot, and then to send the bot’s response back to Slack. That is tedious and expensive for the developer.

## Serverless way to custom SaaS 
With the advancement of serverless computing, especially lightweight serverless functions enabled by new runtimes such as [WebAssembly](https://github.com/WasmEdge/WasmEdge), it is now possible to embed reactive functions directly into a SaaS platform without creating any new servers. That's why WasmHaiku comes from.

With WasmHaiku, you could

* 🙅 Say no to DevOps work

* ✅ Only care about the business logic

* 🦀 Write serverless functions in Rust and JavaScript

* 🛠️ Integrate kinds of SaaS you love

* 💰 Save money 

Next, I will walk you through a quick start guide with WasmHaiku. Let's go.