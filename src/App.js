import { useState } from 'react';
import FakeTokHeader from './components/FakeTokHeader/FakeTokHeader';
import HashtagList from './components/HashtagList/HashtagList';
import './App.css';

function App() {
  const [hashtags] = useState(["test1hgiusheiruhewiurhfiwshfdiaushfidshufliushfiuh", "test2sojfosijfoijsofijsoijfoijsdofijsoidjf", "test3shfsdhfiushfoshfuhiufh", "test4"]);

  // TODO: get hashtags from BE
/*   useEffect(() => {
       
   }, [hashtags]); */

  return (
    <div className="App">
      <FakeTokHeader />
      <HashtagList hashtags={hashtags} />
    </div>
  );
}

export default App;
