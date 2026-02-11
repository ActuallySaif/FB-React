import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './pages/NavBar';
import SideMenu from './pages/SideMenu';
import MainFeed from './pages/MainFeed';
import './MainCss.css'
import RightMenu from './pages/RightMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className='main'>
      <SideMenu />
      <MainFeed />
      <RightMenu />
    </div>
  </React.StrictMode>
);

