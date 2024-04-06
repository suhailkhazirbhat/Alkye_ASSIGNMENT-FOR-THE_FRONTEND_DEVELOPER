import React from 'react';
import ring from './Rectangle 649.png'
import arow from './Vector.png'
import './../App.css'
const Tabs = () => {
  return (
   
    <div style={{ display: 'block', width: '100%' }}>

      <div className='toptabcont'>
      <div style={{ padding: '12px', display: 'inline-block' }}>
          <div style={{
            color: '#6B6B6B'
          }}>02</div>
          <p>We believe in diversity & inclusion</p>

        </div>
        <div className='tabiconn' > <div style={{ display: 'inline-block' }}><img src={ring} /> </div><div style={{ display: 'inline-block', marginLeft: '-28px' }}><img src={arow} /></div>
        </div> 
      </div>
      
      <div className='toptabcont'>



        <div style={{ padding: '12px', display: 'inline-block' }}>
          <div style={{
            color: '#6B6B6B'
          }}>02</div>
          <p>We believe in diversity & inclusion</p>

        </div>
        <div className='tabiconn'> <div style={{ display: 'inline-block' }}><img src={ring} /> </div><div style={{ display: 'inline-block', marginLeft: '-28px' }}><img src={arow} /></div>
        </div> </div>

      <div className='toptabcont'>
        <div style={{ padding: '12px', display: 'inline-block' }}>
          <div style={{
            color: '#6B6B6B'
          }}>03</div>
          <p>We celebrate success</p>
        </div>
        <div className='tabiconn'><div style={{ display: 'inline-block' }}><img src={ring} /> </div><div style={{ display: 'inline-block', marginLeft: '-28px' }}><img src={arow} /></div>
        </div>
        
      </div>

    </div>
  );
};

export default Tabs;
