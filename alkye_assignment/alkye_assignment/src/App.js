import React from 'react';
import './App.css';
import Header from './components/Header';
import MyCarousel from './components/MyCarousel';
import Tabs from './components/Tabs';
import MobileNavigation from './components/MobileNavigation';
import Second from './components/Second';
import Third from './components/Third';

function App() {
  return (
    <>
      <div className='hh'>
        
        <MobileNavigation/>
       </div>
        <MyCarousel />
       <Tabs />
       <Second/>
       <Third/>
       
        
     
    </>
  );
}

export default App;
