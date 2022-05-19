import React from 'react';
import TiktokListItem from '../TiktokListItem';
import './styles.css';

const TiktokList = ({ tiktokData }) => {
  return (
    <div className="tiktok-list">
        {tiktokData.map(videoContent => (
            <TiktokListItem videoContent={videoContent} />
        ))}
    </div>
  );
}

export default TiktokList;