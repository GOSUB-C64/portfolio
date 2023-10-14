# bbc news api

# importing package

import requests

api_url = "https://newsapi.org/v2/top-headlines"

# specify the query parameters
query_params = {
    "sources": "bbc-news",
    "apiKey": "fcb24c7f9d2343b081364a7f64b5cce8"
}

response = requests.get(api_url, params=query_params)

articles = response.json()['articles']

for article in articles:
    print(article['title'])
    print(article['description'])
    print("." * 100)
