import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import Nav from "./components/Nav"
import Home from './pages/Home';
import About from './components/About';
import Resume from './components/Resume';
import Error404 from './components/Error404';

import './App.css'

export default function App() {
  return (
    <HashRouter>
      <Nav />

      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/about"
          element={<About />}
        />
        <Route 
          path="/resume"
          element={<Resume />}
        />
        <Route
          path="*"
          element={<Error404 />} 
        />
      </Routes>
    </HashRouter>
  )
}