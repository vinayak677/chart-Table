import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateAds from './pages/Create-ads';
import TextAdd from './pages/TextAdd';
import MediaAd from './pages/MediaAd';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-ads" element={<CreateAds />} />
          <Route path="/text-ad" element={<TextAdd />} />
          <Route path="/media-ad" element={<MediaAd/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
