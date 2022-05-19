# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
from api import Tiktok
from download import Download
from functools import reduce
from TikTokApi import TikTokApi as tiktok
import uvicorn
import numerize

from fastapi import FastAPI

app = FastAPI()


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
        hashtags_in_trending_videos.append( [w.split()[0] for w in text.split('#')[1:]])
    trending_hashtags = (set(reduce(lambda x,y : x+y, hashtags_in_trending_videos)))
    return trending_hashtags




def get_videos_by_hashtag(hashtag):
    found_videos = []
    Api = Tiktok()
    # videos, _ = Api.getInfoChallenge(hashtag)
    # print(videos)
    # for video in videos:
    #     print(video)
    # found_videos
    top_10_post_hashtag = Api.get_hashtags(hashtag)
    for h in top_10_post_hashtag.values():
        desc = [w.split()[0] for w in h['desc'].split('#')[1:]]
        created_at = h['createTime']
        video_cover = h['video']['playAddr']
        view_count = numerize(h['stats']['playCount'])
        share_count = numerize(h['stats']['shareCount'])
        print(desc, created_at, video_cover, view_count, share_count)
    return []

    # from TikTokApi.tiktok import TikTokApi
    #
    # with TikTokApi() as api:
    #     hashtag_response = api.hashtag(trending_hashtags.pop())
    #     hashtag_response.info()
    #     hashtag_response.as_dict

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)




