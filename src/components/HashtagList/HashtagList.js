import HashtagListItem from "../HashtagListItem/HashtagListItem";
import "./HashtagList.css";

function HashtagList({hashtags}) {
    return ( 
        <div className="HashtagListContainer">
            <h2 className="HashtagListTitle">Trending</h2>
            <div className="HashtagList">
                {hashtags.map((hashtag, index) => (
                    <HashtagListItem key={index} hashtag={hashtag}/>
                ))}
            </div>
        </div>
     );
}

export default HashtagList;