import React from 'react';
import './styles.css';

const TiktokListItemMetrics = ({ videoContent }) => {
  return (
    <div className="metrics-content">
        <div className="metrics-item">
            <i className="fa-solid fa-heart metric-icon"></i>
            <span className="metric-count">{videoContent.likesCount}</span>
        </div>

        <div className="metrics-item">
            <i className="fa-solid fa-eye metric-icon"></i>
            <span className="metric-count">{videoContent.viewsCount}</span>
        </div>

        <div className="metrics-item">
            <i className="fa-solid fa-share metric-icon"></i>
            <span className="metric-count">{videoContent.sharesCount}</span>
        </div>
    </div>
  )
}

export default TiktokListItemMetrics;