import './App.css';
import Header from './Component/Header/Header';
import ShortStory from './Component/ShortStory/ShortStory';
import FullStory from './Component/FullStory/FullStory';
import Blogs from './Component/Blogs/Blogs';
import Authors from './Component/Authors/Authors';
import ShorTitle from './Component/ShortTitle/ShorTitle';
import Follwo from './Component/Follwo/Follwo';

function App() {
  return (
    <div >
      {/* import all component app js file */}
      <Header></Header>
      <ShortStory></ShortStory>
      <FullStory></FullStory>
      <Blogs></Blogs>
      <Authors></Authors>
      <ShorTitle></ShorTitle>
      <Blogs></Blogs>
      <FullStory></FullStory>
      <Follwo></Follwo>
    </div>
  );
}

export default App;
