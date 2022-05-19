import { useState } from 'react';
import './App.css';
import HashtagList from './components/HashtagList/HashtagList';

function App() {
  const [hashtags] = useState(["test1hgiusheiruhewiurhfiwshfdiaushfidshufliushfiuh", "test2sojfosijfoijsofijsoijfoijsdofijsoidjf", "test3shfsdhfiushfoshfuhiufh", "test4"]);

  // TODO: get hashtags from BE
/*   useEffect(() => {
       
   }, [hashtags]); */

  return (
    <div className="App">
      <HashtagList hashtags={hashtags} />
    </div>
  );
}

export default App;
