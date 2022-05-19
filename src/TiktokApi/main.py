# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
from typing import List

from api import Tiktok
from download import Download
from functools import reduce
from TikTokApi import TikTokApi as tiktok
import uvicorn

from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TikTokVideo(BaseModel):
    username: str
    description: str
    tags: List[str]
    viewsCount: int
    sharesCount: int
    likesCount: int


@app.get("/hashtags")
async def hashtags():
    return get_hashtags()


@app.get("/videos/{hashtag}")
async def videos(hashtag):
    return get_videos_by_hashtag(hashtag)


def get_hashtags():
    hashtags_in_trending_videos = []
    Api = Tiktok()
    trending, _ = Api.getTrendingFeed(max_cursor='0')
    for trend in trending['itemListData']:
        text = trend['itemInfos']['text']
        hashtags_in_trending_videos.append(parse_hashtags(text))
    trending_hashtags = (set(reduce(lambda x, y: x + y, hashtags_in_trending_videos)))
    return trending_hashtags


def get_videos_by_hashtag(hashtag):
    found_videos = []
    Api = Tiktok()
    top_10_post_hashtag = Api.get_hashtags(hashtag)
    for h in top_10_post_hashtag.values():
        video = TikTokVideo(
            username=h['author'],
            description=h['desc'],
            tags=['asasd'],
            viewsCount=h['stats']['playCount'],
            sharesCount=h['stats']['shareCount'],
            likesCount=h['stats']['diggCount']
        )
        found_videos.append(video)
    return found_videos

def parse_hashtags(text):
    return [w.split()[0] for w in text.split('#')[1:]]

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)
