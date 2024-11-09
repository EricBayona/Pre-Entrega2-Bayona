
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/headers/Navbar';
import ItemlistConteiner from './components/ItemListConteiner/ItemlistConteiner';
import DisplayGifs from './components/DisplayGifs';
import GifDetail from './components/GifsDetail/GifsDetail';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemlistConteiner />} />
          <Route path="/cats" element={<DisplayGifs category="cats" />} />
          <Route path="/dogs" element={<DisplayGifs category="dogs" />} />
          <Route path="/simpson" element={<DisplayGifs category="simpson" />} />
          <Route path="/gif/:id" element={<GifDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
