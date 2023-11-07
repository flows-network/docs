---
sidebar_position: 2
---

# Create a Discord bot with your embeddings

In the last tutorial, we have [created embeddings for your knowledge base and named your embeddings](/docs/tutorials/rag-based-llm-agent/embedding.md). I will walk through how to build a RAG-based Discord bot based on the embeddings we created.

## Prerequisites

1. A GitHub account to log into the [flows.network](https://flows.network/) platform. It's free.
2. An Open API key to search the most relevant embeddings and answer users' questions.
3. Discord token and bot ID to set up the Discord token.

## Prepare the source code

For this part, we already created a repo named [demo-RAG-discord-bot](https://github.com/flows-network/demo-RAG-discord-bot) for you to fork.

## Import and build

[Click here](https://flows.network/flow/new) to import your forked source code repo for the flow function into flows.network.

For this flow function, we need to add five configurations. These configurations are to [set up Discord bot](https://flows.network/blog/discord-chat-bot-guide) and plan the behavior of LLM. Click on the Advanced link to configure these settings.

| Name             | Value |
| ---------------- | --------------- |
| discord_token    | Copied from Discord Developer Portal   |
| bot_id | Copied from Discord Developer Portal -- General information -- Application ID  |
| collection_name | The collection name you used to store the embeddings, e.g., `my_kb` |
| error_mesg | Sorry, an error has occurred or your question is not related to the Rust programming language. Please try again later. |
| system_prompt | You are an expert in the Rust programming language. Please answer the question based on the context provided. CONTEXT:  |

Next, click on the **Build** buttons to create the flow function.

## Configure the SaaS integration

Next, let's configure the SaaS integrations required by the flow function. 

You can ignore the Discord integration at this time because we already set up Discord tokens.

You will also need to add your OpenAI key here. The OpenAI key here is to search the most relevant embeddings based on the user's question and then generate a response to the user.

After that, click the **Deploy** button to deploy your flow function.

Once the status of the flow becomes `running`, follow [this guide](https://flows.network/blog/discord-chat-bot-guide) to make your Discord bot online.

And that's it! You've successfully created a RAG Discord Bot with your knowledge base.
