import React from 'react';
import './App.css';
import Header from './components/Header';
import MyCarousel from './components/MyCarousel';
import Tabs from './components/Tabs';
import MobileNavigation from './components/MobileNavigation';

function App() {
  return (
    <>
      <div className='hh'><MobileNavigation/></div>
        <MyCarousel />
        <Tabs />
        <Tabs /> <Tabs /> <Tabs />
     
    </>
  );
}

export default App;
