import React from 'react';
import { Carousel } from 'react-bootstrap';
import Capture1 from './Group 12.png'
import '../App.css'
import MobileNavigation from './MobileNavigation';

function MyCarousel() {
  return (
    <Carousel className='rrr'>
 
        
      <Carousel.Item>
      <div className='task'>
  <p>Home / Why work with us</p>
        <h1>Headline #1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <img
          className="d-block w-100"
          src={Capture1}
          alt="First slide"
          
        />
        {/* <div class='ii'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg></div> */}
      </Carousel.Item>
      <Carousel.Item>
      <div className='task'>
  <p>Home / Why work with us</p>
        <h1>Headline #1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
        {/* <div class='ii'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg></div> */}

      </Carousel.Item>
      <Carousel.Item>
      <div className='task'>
  <h3>Home / Wmy work with us</h3>
        <h1>Headline #1</h1>
      <p className='line'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
