---
sidebar_position: 2
---

# Deploy a simple flow 

In this article, we will guide you through the process of deploying a flow function on flows.network without any integrations. We will use a simple weather lookup as an example. Please note that we will not cover the code part in this article. If you want to learn about the code explanation, check out [the Web Service part](docs/features/web-service.md).

## Prerequisite

Before starting, ensure that you have signed up for a free account on flows.network.

## Deploy a flow 

1.  Write your code.

Here, we can just simply fork the weather lookup repo.

2. Deploy your function

Log into your flows.network account and click on the "Create a Flow" button. You will go to the create a flow page. The first step is to authenticate the flows.network to access the weather-lookup repo you just forked.

insert an image

Click "+the Authenticate to GitHub" and you will be directed to a new page where you can choose the GitHub organization where your source code is stored. After that, you will go back to the create a flow page automatically and select the repo where your code exists. 


In this function, we will use the API of openweathermap.org to look up the weather. To make your API key private and safe, we will use environment variables to pass the OpenWeatherMap API key to your function.

Finally, click the Deploy button. Your function is now deploying. 


## Play with your demo

All you need is done. After the status of your function is ready, you will see a link below the deployment log. Copy and paste this link in your browser, then you can lookup the weather.

Now you have understand how flows.network works, the next step is to explore [flows.network's other features](/docs/category/platform-features).









