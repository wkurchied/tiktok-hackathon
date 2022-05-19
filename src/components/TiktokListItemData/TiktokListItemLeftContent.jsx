import React from 'react';
import './styles.css';

const TiktokListItemLeftContent = ({ videoContent }) => {
  return (
    <div className="left-side-content">
      <img src={videoContent.thumbnail} className="content-thumbnail" />
      
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
          <span className="video-content-value">{videoContent.tags.join(', ')}</span>
        </div>
      </div>
    </div>
  )
}

export default TiktokListItemLeftContent