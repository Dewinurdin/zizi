import React from 'react';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
// import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

import Appetizer from '../Appetizer';
import BentoBox from '../BentoBox';
import Entrees from '../Entrees';
import NoodleRice from '../NoodleRice';
import SushiRolls from '../SushiRolls';
import SushiSashimi from '../SushiSashimi';
import LunchSpecial from '../LunchSpecial';

import './Menu.css';

class Menu extends React.Component {
  render (){
    const MenuTabs = [
      { eventkey:"appetizers", name: "Appetizers", component: <Appetizer /> },
      { eventkey:"sushisashimi", name: "Sushi & Sashimi", component: <SushiSashimi/> },
      { eventkey:"noodlerice", name: "Rice & Noodles", component: <NoodleRice/> },
      { eventkey:"sushirolls", name: "Sushi Rolls", component: <SushiRolls/> },
      { eventkey:"bentobox", name: "Bento Box", component: <BentoBox/> },
      { eventkey:"entrees_desserts", name: "Entrees & Desserts", component: <Entrees/> },
      { eventkey:"lunchspecial", name: "Lunch Special", component: <LunchSpecial /> },
    ];
    // Looping Menu Tabs
    MenuTabs.forEach((tab) => { return tab } );
    // Map menu tab then render
    const renderMenuTabs =  MenuTabs.map((tab, i) => 
      // console.log(tab.eventkey);
      // console.log(tab.name);
      <Nav.Link eventKey={tab.eventkey}  className="menu-tab" key={i}>
        {tab.name}
        {/* {tab.component} */}
      </Nav.Link>
    );
        // Looping Tab Component
        MenuTabs.forEach((tab) => { return tab } );
        // Map menu tab then render
        const renderComponentTab =  MenuTabs.map((tab, i) => 
          // console.log(tab.eventkey);
          // console.log(tab.name);
          <Tab.Pane eventKey={tab.eventkey} className="component-tab" key={i}>
            {tab.component}
        </Tab.Pane>
        );    
    
    return (
      <Container className="content" fluid>
        <Container className="menu-section section" fluid>
          <div className="title">
            <h1 className="d-flex justify-content-center">Our Menu</h1>
            <p  className="d-flex justify-content-center"> We Use the freshest ingredients</p>
          </div>
          {/* <Container className="d-flex justify-content-center" fluid> */}
            <Tab.Container defaultActiveKey="appetizers" id="uncontrolled-tab" className="flex-column" fluid>
              <Row className="tab-body">
                <Col sm={3} xs={2}>
                  <Nav variant="tabs" className="flex-column">
                    <Nav.Item>
                      {renderMenuTabs}
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9} xs={10}>
                <Tab.Content>
                  {renderComponentTab}
                </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>   
          {/* </Container> */}
        </Container>

      </Container>
    )
  }
}

export default Menu;