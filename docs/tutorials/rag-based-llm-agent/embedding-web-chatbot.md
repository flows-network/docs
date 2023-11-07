---
sidebar_position: 2
---

# Create a web chatbot with your embeddings

In the last tutorial, we have [created embeddings for your knowledge base and named your embeddings](/docs/tutorials/rag-based-llm-agent/embedding.md). I will walk through how to build a RAG-based web chatbot based on the embeddings we created.

## Prerequisites

1. A GitHub account to log into the [flows.network](https://flows.network/) platform. It's free.
2. An Open API key to search the most relevant embeddings and answer users' questions.

## Prepare the source code

For this part, we already create a repo named [demo-RAG-chatbot-web](https://github.com/flows-network/demo-RAG-chatbot-web) for you to fork.

## Import and build

[Click here](https://flows.network/flow/new) to import your forked source code repo for the flow function into flows.network.

For this flow function, we need to add the name of the embedding so that the web chatbot knows which database it can retrieve. We also need to add prompts to plan the agent's behavior. Click on the Advanced link to configure these settings.

| Name | Value |
| ---------- | ----------- |
| collection_name | The collection name you used to store the embeddings, e.g., `my_kb` |
| error_mesg | Sorry, an error has occurred or your question is not related to the Rust programming language. Please try again later. |
| system_prompt | You are an expert in the Rust programming language. Please answer the question based on the context provided. CONTEXT:  |

Next, click on the **Build** buttons to create the flow function.

## Configure the SaaS integration

Next, let's configure the SaaS integrations required by the flow function.

You will need to add your OpenAI key here. The OpenAI for this function is to search the most relevant embeddings based on the user's question and then generate a response to the user.

After that, click the **Deploy** button to deploy your flow function. Upon a successful build, you'll be provided with a URL in the "Webhook Endpoint" section of the flow details page.

![webhook-url](rag-agent-01.png)

## Build your web chatbot

To commence a conversation with your RAG chatbot, simply copy and paste the provided URL after 'https://flows-chat-ui.vercel.app/?chat_url=' in your browser's address bar:

```
https://flows-chat-ui.vercel.app/?chat_url=https://code.flows.network/webhook/a-z
```

And that's it! You've successfully created a RAG web chatbot with your knowledge base.
