import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';

function MyTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      
      <Nav variant="tabs" defaultActiveKey="tab1" onSelect={handleSelect}>
     
        <Nav.Item>
          <Nav.Link eventKey="tab1">Tab1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">Tab2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">Tab3</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <Tab.Content>
        <Tab.Pane eventKey="tab1">
          <p>Tab 1 content</p>
        </Tab.Pane>
        <Tab.Pane eventKey="tab2">
          <p>Tab 2 content</p>
        </Tab.Pane>
        <Tab.Pane eventKey="tab3">
          <p>Tab 3 content</p>
        </Tab.Pane>
      </Tab.Content> */}
    </div>
  );
}

export default MyTabs;
