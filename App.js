import './App.css';
import Homepage from './Pages/Homepage';
import Contact from './Pages/Contact';
import Navbar from './navbar';
import Resume from './Pages/Resume';
import Blog from './Pages/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newpopup from './modal';

function App() {
  return (
    <div className='popupoverlay'>
      <Newpopup />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <footer>John Green 2023</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;



