import { useEffect, useState } from 'react';
import FakeTokHeader from './components/FakeTokHeader/FakeTokHeader';
import HashtagList from './components/HashtagList/HashtagList';
import TiktokList from './components/TiktokList';
import Loader from "react-js-loader";
import { getHashtagList, fetchVideoContent } from './utils/apis';

function App() {
  const [hashtags, setHashtags] = useState([]);
  const [selectedHashtag, setSelectedHashtag] = useState("");
  const [videosContent, setVideosContent] = useState([]);
  const [isContentLoading, setIsContentLoading] = useState(false);

  const selectHashtag = (hashtag) => {
    setSelectedHashtag(hashtag)
  }
  // TODO: get hashtags from BE
  useEffect(() => {
    getHashtagList().then(hashtagsData => {
      setHashtags(hashtagsData);
    })
   }, []);

   useEffect(() => {
     if (selectedHashtag && selectedHashtag.length > 0) {
        setIsContentLoading(true);
        fetchVideoContent(selectedHashtag)
      .then(videos => {
        setVideosContent(videos);
        setIsContentLoading(false);
      })
     }
   }, [selectedHashtag])

  return (
    <div className="App">
      <FakeTokHeader />
      <HashtagList hashtags={hashtags} selectedHashtag={selectedHashtag} selectHashtag={selectHashtag} />
      { 
        isContentLoading ? <Loader type="spinner-default" bgColor="#FFFFFF" color={'#FFFFFF'} size={100} title="Loading ..." />:
        <TiktokList tiktokData={videosContent} />
      }
    </div>
  );
}

export default App;
