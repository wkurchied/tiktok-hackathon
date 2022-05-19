import { useState } from "react";
import "./HashtagListItem.css";

function HashtagListItem({hashtag, selectedHashtag}) {
    const [itemClicked, setItemClicked] = useState(false);

    const onHashtagClick = (itemClicked) => {
        console.log("cc")
        // TODO: update tiktok list
       setItemClicked(!itemClicked);
       if (itemClicked) {
            selectedHashtag(hashtag);
       }
    }

    return ( 
        <span className={itemClicked ? "HashtagListItem itemClicked" : "HashtagListItem"} onClick={() => onHashtagClick(itemClicked)}>#{hashtag}</span>
     );
}

export default HashtagListItem;