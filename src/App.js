import {React,useState} from 'react'
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
import VideoSec from './Pages/VideoSec/VideoSec';
import Navbar from './components/Navbar/Navbar';
import FullImg from './components/FullImg/FullImg';
import  Vids from './components/Vids/Vids';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [video,setVideo] = useState();
  const [img,setImg] = useState();

  const data = (id) =>{
    setVideo(id)
  }

  const galleryImg = (id) =>{
    setImg(id)
  }
  return (
    <div className="App">
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home data={data}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/gallery' element={<Gallery galleryImg={galleryImg}/>} />
          <Route path='/video' element={<Vids video={video}/>} />
          <Route path='/fullimg' element={<FullImg img={img}/>} />
          <Route path='/videos' element={<VideoSec/>} />
          {/* <Route path='/uno' element={<Vids vic={uno}/>} /> */}
        </Routes>
         
        </Router>
    </div>
  );
}

export default App;
