import "./HashtagListItem.css";

function HashtagListItem({hashtag}) {
    return ( 
        <span className="HashtagListItem">#{hashtag}</span>
     );
}

export default HashtagListItem;