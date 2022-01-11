import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../containers/Home";
import Player from '../containers/Player';
import "../styles/App.scss";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-rick-and-morty" element={ 
          <Home darkMode={darkMode} setDarkMode={setDarkMode} /> 
        } />
        <Route path="/react-rick-and-morty/:id" element={ 
          <Player darkMode={darkMode} setDarkMode={setDarkMode} /> 
        } />
      </Routes>
    </BrowserRouter>
  )
};