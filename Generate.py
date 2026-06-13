import json
from http.client import responses

from openai import OpenAI
apiKey = "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"

intellegence = OpenAI(api_key =  apiKey)

responses = intellegence.responses.create(model="gpt-3.5-turbo",input="hello")


print(responses)


with open("devotions.json", encoding='utf-8') as devotionsJSON:
    data = json.load(devotionsJSON)


def generateDevotions():
    ...

def getweek():
    ...
def write_devotions():
    ...