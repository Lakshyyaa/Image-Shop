import './App.css';
import React from 'react';
import Header from './components/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route exact path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
