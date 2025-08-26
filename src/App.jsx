import './app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar'; 
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';

function App() {

  return (
  
    <Router>
      <Navbar />
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes> 
    </Router>
  );
}

export default App;
