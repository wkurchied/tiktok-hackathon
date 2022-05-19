# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
from api import Tiktok
from download import Download
from functools import reduce
from TikTokApi import TikTokApi as tiktok
import pandas as pd



    #     flattened_data = process_results(trending)
    #
    # ##Export data to json
    # # with open('export.json', 'w') as f:
    # #   json.dump(flattened_data, f)
    #
    # # Convert the preprocessed data to a dataframe
    # df = pd.DataFrame.from_dict(flattened_data, orient='index')
    # df.to_csv('TikTok_data.csv', index=False)

# Press the green button in the gutter to run the script.
if __name__ == '__main__':


    hashtags_in_trending_videos = []
    Api = Tiktok()
    top_10_post_hashtag = Api.get_hashtags('uk')
    for h in top_10_post_hashtag:
        desc = h['desc']
        created_at = h['createTime']
        video_cover = h['video']['playAddr']
        view_count = h['stat']['playCount']
        share_count = h['stat']['shareCount']
        print(desc, created_at, video_cover, view_count,share_count )



    # trending, _ = Api.getTrendingFeed(max_cursor='0')
    # for trend in trending['itemListData']:
    #     text = trend['itemInfos']['text']
    #     hashtags_in_trending_videos.append( [w.split()[0] for w in text.split('#')[1:]])
    # trending_hashtags = (set(reduce(lambda x,y : x+y, hashtags_in_trending_videos)))
    # trending_hashtags.remove('trending')





