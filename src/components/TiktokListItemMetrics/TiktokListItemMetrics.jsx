import React from 'react';
import './styles.css';

const TiktokListItemMetrics = () => {
  return (
    <div className="metrics-content">
        <div className="metrics-item">
            <i class="fa-solid fa-heart metric-icon"></i>
            <span className="metric-count">content</span>
        </div>

        <div className="metrics-item">
            <i class="fa-solid fa-comments metric-icon"></i>
            <span className="metric-count">content</span>
        </div>

        <div className="metrics-item">
            <i class="fa-solid fa-share metric-icon"></i>
            <span className="metric-count">content</span>
        </div>
    </div>
  )
}

export default TiktokListItemMetrics;