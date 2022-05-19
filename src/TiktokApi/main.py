# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
from api import Tiktok
from download import Download
from functools import reduce

# Press the green button in the gutter to run the script.
if __name__ == '__main__':


    hashtags_in_trending_videos = []
    Api = Tiktok()
    trending, _ = Api.getTrendingFeed(max_cursor='0')
    for trend in trending['itemListData']:
        text = trend['itemInfos']['text']
        hashtags_in_trending_videos.append( [w.split()[0] for w in text.split('#')[1:]])
    trending_hashtags = (set(reduce(lambda x,y : x+y, hashtags_in_trending_videos)))
    trending_hashtags.remove('trending')

    from TikTokApi.tiktok import TikTokApi

    with TikTokApi() as api:
        hashtag_response = api.hashtag(trending_hashtags.pop())
        hashtag_response.info()
        hashtag_response.as_dict




