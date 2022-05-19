import { useState } from 'react';
import FakeTokHeader from './components/FakeTokHeader/FakeTokHeader';
import HashtagList from './components/HashtagList/HashtagList';
import './App.css';

function App() {
  const [hashtags] = useState(["test1hgiusheiruhewiurhfiwshfdiaushfidshufliushfiuh", "test2sojfosijfoijsofijsoijfoijsdofijsoidjf", "test3shfsdhfiushfoshfuhiufh", "test4"]);
  const [selectedHashtag, setSelectedHashtag] = useState("");

  const setChosenHashtag = (hashtag) => {
    // if (hashtag && selectedHashtag !== hashtag)
    setSelectedHashtag(hashtag)
    console.log("hi", selectedHashtag);
  }
  // TODO: get hashtags from BE
/*   useEffect(() => {
       
   }, [hashtags]); */

  return (
    <div className="App">
      <FakeTokHeader />
      <HashtagList hashtags={hashtags} selectedHashtag={setChosenHashtag} />
    </div>
  );
}

export default App;
