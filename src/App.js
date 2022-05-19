import './App.css';
import TiktokList from './components/TiktokList';

const mockedTikTokData = [
  {username: 'walid', description: "some video content", tags: ["tag1", "tag2", "tag3"], viewsCount: 12, sharesCount: 111, likesCount: 2132},
  {username: 'walid', description: "some video content", tags: ["tag1", "tag2", "tag3"], viewsCount: 12, sharesCount: 111, likesCount: 2132},
  {username: 'walid', description: "some video content", tags: ["tag1", "tag2", "tag3"], viewsCount: 12, sharesCount: 111, likesCount: 2132},
  {username: 'walid', description: "some video content", tags: ["tag1", "tag2", "tag3"], viewsCount: 12, sharesCount: 111, likesCount: 2132},
]
function App() {
  return (
    <div className="App">
      <TiktokList tiktokData={mockedTikTokData} />
    </div>
  );
}

export default App;
