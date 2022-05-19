import React from 'react';
import './styles.css';

const TiktokListItemLeftContent = ({ videoContent }) => {
  return (
    <div className="left-side-content">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBxxlPDkOdmKZW7btolKxZCDZcFXnf_9Axw&usqp=CAU" className="content-thumbnail" />
      
      <div className="video-content-container">
        Username: <strong className="content-username">{videoContent.username}</strong>
        Description: <p className="content-description">{videoContent.description}</p>
        Tags: <p className="content-hashtags">{videoContent.tags}</p>
      </div>
    </div>
  )
}

export default TiktokListItemLeftContent