import './app.css';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Navbar from './components/navbar'; 
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';
import { useState } from 'react';

function App() {
 
  return (
  
    <Router>
      <Navbar />
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        
      </Routes> 
    </Router>
  );
}

export default App;
