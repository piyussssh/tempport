import React from 'react';
import './App.css';
import Navbar from './compo/navbar';
import Home from './pages/home';
import Admin from './pages/admin';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
