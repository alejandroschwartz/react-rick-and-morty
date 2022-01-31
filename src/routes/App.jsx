import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Player from '../pages/Player';
import "../styles/App.scss";


export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const darkMode = window.localStorage.getItem('darkMode')
      return JSON.parse(darkMode)
    } catch (error) {
      return false
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ 
          <Home darkMode={darkMode} setDarkMode={setDarkMode} /> 
        } />
        <Route path="/:id" element={ 
          <Player darkMode={darkMode} setDarkMode={setDarkMode} /> 
        } />
      </Routes>
    </BrowserRouter>
  )
};