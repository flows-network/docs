---
sidebar_position: 1
---

# WasmHaiku Intro

WasmHaiku is a Serverless functions platform for SaaS.

## The traditional way to custom SaaS

It is a common practice for a SaaS platform to provide an API for developers and customers to extend its core functionalities. Think of custom plugins for JIRA or chatbots on Slack. 

However, the traditional RESTful API approach typically requires the developer to set up a server to receive and respond to events from the SaaS platform. For example, in a Slack chatbot app, a developer needs to set up a server to listen to messages sent to the bot, and then send the bot’s response back to Slack. That is tedious and expensive for the developer.

## A serverless way to custom SaaS 
With the advancement of serverless computing, especially lightweight serverless functions enabled by new runtimes such as [WebAssembly](https://github.com/WasmEdge/WasmEdge), it is now possible to embed reactive functions directly into a SaaS platform without creating any new servers. That's where WasmHaiku comes in.

With WasmHaiku, you can

* 🙅 Say no to long-winded DevOps

* ✅ Only care about the business logic

* 🦀 Write serverless functions in Rust and JavaScript

* 🛠️ Integrate various SaaS you love

* 💰 Save money 

Next, I will walk you through a quick start guide with WasmHaiku. Let's go.