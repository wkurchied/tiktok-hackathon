import React from 'react';
import TiktokListItemLeftContent from '../TiktokListItemData';
import TiktokListItemMetrics from '../TiktokListItemMetrics';
import './styles.css';

const TiktokListItem = ({ videoContent }) => {
  return (
    <div className="tiktok-item">
        <TiktokListItemLeftContent videoContent={videoContent} />
        <TiktokListItemMetrics videoContent={videoContent} />
    </div>
  )
}

export default TiktokListItem;