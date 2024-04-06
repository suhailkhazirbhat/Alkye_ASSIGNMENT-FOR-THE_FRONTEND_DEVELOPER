import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './Logo 2.png'
function MobileNavigation() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="light" expand="lg" style={{border:'solid white 2px',postion:'absolute'}}>
      {/* <Navbar.Brand href="#home"><img src={logo} style={{width:"20px",height:'20px', position:'sticky', left:'40'}}/></Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav" className={`${expanded ? 'show' : ''}`}>
        
        <div class="container">
  <div class="row">
    <div class="col-8"><Nav.Link style={{color:'white', padding:'20px',display: 'inline-flex'}} href="#home">Projects</Nav.Link>
          <Nav.Link style={{color:'white',padding:'20px',display: 'inline-flex'}} href="#link">EXPERTISE</Nav.Link>
          <Nav.Link style={{color:'white',padding:'20px',display: 'inline-flex'}} href="#link">ABOUT US</Nav.Link>
          <Nav.Link style={{color:'white',padding:'20px',display: 'inline-flex'}} href="#link">PEOPLE</Nav.Link>
         </div>
   
  
    <div class="col-sm"> <Nav.Link style={{color:'white'}} href="#link"> <img src={logo} style={{width:"80px",height:'80px', position:'sticky', left:'40'}}/></Nav.Link></div>
    <div class="col-sm"> <Nav.Link style={{color:'white',padding:'20px',display: 'inline-flex'}} href="#link">CAREERS</Nav.Link>
          <Nav.Link style={{color:'white',padding:'20px',display: 'inline-flex',float:'end'}} href="#link">AU</Nav.Link></div>
  </div>
</div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MobileNavigation;
