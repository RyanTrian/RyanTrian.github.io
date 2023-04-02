import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav"
import Home from './pages/home';
import Error404 from './components/Error404';

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
        <Route 
          path="/resume"
          element={"Hello, no resume here yet"}
        />
        <Route
          path="*"
          element={<Error404 />} 
        />
      </Routes>
    </Router>
  )
}