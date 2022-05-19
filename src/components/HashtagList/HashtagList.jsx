import HashtagListItem from "../HashtagListItem/HashtagListItem";
import "./HashtagList.css";

function HashtagList({hashtags, selectedHashtag, selectHashtag}) {

    return ( 
        <div className="HashtagListContainer">
            <div className="HashtagList">
                {hashtags.map((hashtag, index) => (
                    <HashtagListItem key={index} hashtag={hashtag} selectHashtag={selectHashtag} isSelected={hashtag === selectedHashtag}/>
                ))}
            </div>
        </div>
     );
}

export default HashtagList;