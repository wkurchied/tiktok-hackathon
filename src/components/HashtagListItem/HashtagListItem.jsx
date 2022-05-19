import "./HashtagListItem.css";

function HashtagListItem({hashtag, selectHashtag, isSelected}) {

    const onHashtagClick = () => {
        selectHashtag(hashtag);      
    }

    return ( 
        <span className={isSelected ? "HashtagListItem itemClicked" : "HashtagListItem"} onClick={() => onHashtagClick()}>#{hashtag}</span>
     );
}

export default HashtagListItem;