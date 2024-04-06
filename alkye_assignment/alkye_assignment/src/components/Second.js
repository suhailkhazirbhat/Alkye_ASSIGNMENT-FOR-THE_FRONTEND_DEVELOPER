import React from 'react';
import MobileNavigation from './MobileNavigation';
// import '../App.css'
import textsideimg from './Capture33.PNG'
import icon1 from './Group 2.png';
import icon2 from './Group 1.png';
import icon3 from './Vector5.png';
const Second = () => {
    return (
        <>
            <div style={{ display: 'block', width: '100%',margin:'0px'   }}>
                <div style={{ display: 'inline-block', width: '50%',  }} >
                    <div style={{padding:'10px 30px 10px 60px'}}  >
                    
                    <h1>We  <span style={{color:'#F36F2B'}}>stay connected</span></h1>
                    <br></br>
                    <br></br>
                   <div ><img src={icon1} style={{display:'inline'}}/>  <h3 style={{display:'inline'}}>Quarterly Business Updates</h3></div>
                   <br></br>
                    <p>We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
                        member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.
                    </p>
                    <br></br>
                    <div><img src={icon2} style={{display:'inline'}}/>  <h3 style={{display:'inline'}}>Industry Events & Networking</h3></div>
                    <br></br>
                    <div><img src={icon3} style={{display:'inline'}}/>  <h3 style={{display:'inline'}}>Associations Memberships</h3></div>
                    </div>
                </div>



                <div style={{ display: 'inline-block', width: '40%',marginTop:'0px' }} > <img src={textsideimg} style={{ width: '669px',height:'600px',verticalAlign: 'none !important' }} /></div>
            </div>
        </>
    );
};

export default Second;
