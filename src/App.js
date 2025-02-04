import React from 'react';
import Navbar from './components/Navbar1';
import Main from './components/Main';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
import Footer from './components/Footer';
import './components/global.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">Navbar1</div>
      <div className="main">Main</div>
      <div className="sidebar">
        <div className="sidebar1">Sidebar1</div>
        <div className="sidebar2">Sidebar2</div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
};
export default App;
