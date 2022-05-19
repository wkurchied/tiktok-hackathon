import React from 'react';
import './styles.css';

const TiktokListItemLeftContent = ({ videoContent }) => {
  return (
    <div className="left-side-content">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBxxlPDkOdmKZW7btolKxZCDZcFXnf_9Axw&usqp=CAU" className="content-thumbnail" />
      
      <div className="video-content-container">
        <div className="video-content-item">
          <span className="video-content-heading">Username: </span> 
          <span className="video-content-value">{videoContent.username}</span>
        </div>

        <div className="video-content-item">
          <span className="video-content-heading">Description: </span> 
          <span className="video-content-value">{videoContent.description}</span>
        </div>

        <div className="video-content-item">
          <span className="video-content-heading">Created on: </span> 
          <span className="video-content-value">11/11/2011</span>
        </div>

        <div className="video-content-item">
          <span className="video-content-heading">Tags: </span> 
          <span className="video-content-value">{videoContent.tags}</span>
        </div>
      </div>
    </div>
  )
}

export default TiktokListItemLeftContent