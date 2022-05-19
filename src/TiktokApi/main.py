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
from pydantic import BaseModel


app = FastAPI()


class TikTokVideo(BaseModel):
    username: str
    description: str
    tags: List[str]
    viewsCount: str
    sharesCount: str
    likesCount: str
    thumbnail:str


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
            tags=parse_hashtags(h['desc']),
            viewsCount=human_format(h['stats']['playCount']),
            sharesCount=human_format(h['stats']['shareCount']),
            likesCount=human_format(h['stats']['diggCount']),
            thumbnail=h['video']['shareCover'][1]
        )
        found_videos.append(video)
    return found_videos

def parse_hashtags(text):
    return [w.split()[0] for w in text.split('#')[1:]]

def human_format(num):
    magnitude = 0
    while abs(num) >= 1000:
        magnitude += 1
        num /= 1000.0
    # add more suffixes if you need them
    return '%.2f%s' % (num, ['', 'K', 'M', 'G', 'T', 'P'][magnitude])


# if __name__ == "__main__":
#     print(get_videos_by_hashtag('uk'))
