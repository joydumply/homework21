import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import TestNavbar from './MainPage/MainPage';
import About from './About/About';
import Slider from './Slider/Slider';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<TestNavbar/>} />
        <Route path='about' element={<About/>} />
        <Route path='gallery' element={<Slider />} />
      </Routes>
    </div>
  );
}

export default App;
