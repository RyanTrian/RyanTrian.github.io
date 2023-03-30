import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav"
import Home from './pages/home';

import './App.css'

export default function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  )
}