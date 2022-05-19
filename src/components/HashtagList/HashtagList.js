import { useEffect, useState } from "react";
import HashtagListItem from "../HashtagListItem/HashtagListItem";

function HashtagList() {
    const [hashtags, setHashtags] = useState(["test1", "test2", "test3", "test4"]);

    // TODO: get hashtags from BE
   /*  useEffect(() => {
        if(hashtags && hashtags.length === 0) {
            setHashtags("test1", "test2", "test3", "test4")
        }
    }, [hashtags]); */

    return ( 
        <div className="HashtagListContainer">
            <h2>Trending</h2>
            <div className="HashtagList">
                {hashtags.map((hashtag, index) => (
                    <HashtagListItem key={index} hashtag={hashtag}/>
                ))}
            </div>
        </div>
     );
}

export default HashtagList;