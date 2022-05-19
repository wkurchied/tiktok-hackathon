import HashtagListItem from "../HashtagListItem/HashtagListItem";
import "./HashtagList.css";

function HashtagList({hashtags, selectedHashtag, selectHashtag}) {

    return ( 
        <div className="HashtagListContainer">
            <h2 className="HashtagListTitle">Trending</h2>
            <div className="HashtagList">
                {hashtags.map((hashtag, index) => (
                    <HashtagListItem key={index} hashtag={hashtag} selectHashtag={selectHashtag} isSelected={hashtag === selectedHashtag}/>
                ))}
            </div>
        </div>
     );
}

export default HashtagList;