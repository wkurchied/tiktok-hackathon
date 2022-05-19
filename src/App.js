import { useState } from 'react';
import FakeTokHeader from './components/FakeTokHeader/FakeTokHeader';
import HashtagList from './components/HashtagList/HashtagList';
import './App.css';
import TiktokList from './components/TiktokList';

const mockedTikTokData = [
  {username: 'walid', description: "some video content", tags: ["tag1", "tag2", "tag3"], viewsCount: 12, sharesCount: 111, likesCount: 2132},
  {username: 'walid', description: "some video content", tags: ["tag1", "tag2", "tag3"], viewsCount: 12, sharesCount: 111, likesCount: 2132},
  {username: 'walid', description: "some video content", tags: ["tag1", "tag2", "tag3"], viewsCount: 12, sharesCount: 111, likesCount: 2132},
  {username: 'walid', description: "some video content", tags: ["tag1", "tag2", "tag3"], viewsCount: 12, sharesCount: 111, likesCount: 2132},
]
function App() {
  const [hashtags] = useState(["test1hgiusheiruhewiurhfiwshfdiaushfidshufliushfiuh", "test2sojfosijfoijsofijsoijfoijsdofijsoidjf", "test3shfsdhfiushfoshfuhiufh", "test4", "test5", "test6", "test7"]);
  const [selectedHashtag, setSelectedHashtag] = useState("");

  const selectHashtag = (hashtag) => {
    setSelectedHashtag(hashtag)
  }
  // TODO: get hashtags from BE
/*   useEffect(() => {
       
   }, [hashtags]); */

  return (
    <div className="App">
      <FakeTokHeader />
      <HashtagList hashtags={hashtags} selectedHashtag={selectedHashtag} selectHashtag={selectHashtag} />
      <TiktokList tiktokData={mockedTikTokData} />
    </div>
  );
}

export default App;
