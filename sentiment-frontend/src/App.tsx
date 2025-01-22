import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Navbar from "./components/NavFooter/Navbar";
import Footer from "./components/NavFooter/Footer";
import Home from "./Home";
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Login from './components/LoginRegisterPages/Login';
import Register from './components/LoginRegisterPages/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
