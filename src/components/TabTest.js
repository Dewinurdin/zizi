import React from 'react';

// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

import Appetizer from '../pages/Appetizer';
import BentoBox from '../pages/BentoBox';
import Entrees from '../pages/Entrees';
import NoodleRice from '../pages/NoodleRice';
import SushiRolls from '../pages/SushiRolls';
import SushiSashimi from '../pages/SushiSashimi';
import LunchSpecial from '../pages/LunchSpecial';

import '../pages/Menu/Menu.css';

const queries = {
  // xs: '(max-width: 320px)', //query for xs devices
  xs: window.matchMedia('(max-width: 320px)'),
  // sm: '(max-width: 720px)',
  sm: window.matchMedia('(max-width: 720px)'),
  // md: '(max-width: 1024px)'
  md: window.matchMedia('(max-width: 1024px)'),
  lg: window.matchMedia('min-width: 1025px')
  }

  class TabTest extends React.Component {
    render (){
      // const mediaQueryLists = {}; //Add all MediaQueryList object here.
      // const keys = Object.keys(queries);
      // const matches = {}; //contains initial query matches
  
      const MenuTabs = [
        { eventkey:"appetizers", name: "Appetizers", component: <Appetizer /> },
        { eventkey:"sushisashimi", name: "Sushi & Sashimi", component: <SushiSashimi/> },
        { eventkey:"noodlerice", name: "Rice & Noodles", component: <NoodleRice/> },
        { eventkey:"sushirolls", name: "Sushi Rolls", component: <SushiRolls/> },
        { eventkey:"bentobox", name: "Bento Box", component: <BentoBox/> },
        { eventkey:"entrees_desserts", name: "Entrees & Desserts", component: <Entrees/> },
        { eventkey:"lunchspecial", name: "Lunch Special", component: <LunchSpecial /> },
      ];
                // Looping Tab Component
          // MenuTabs.forEach((tab) => { return tab } );
          // // Map menu tab then render
          // const renderComponentTab =  MenuTabs.map((tab, i) => 
          //   // console.log(tab.eventkey);
          //   // console.log(tab.name);
          //   <Tab.Pane eventKey={tab.eventkey} className="component-tab" key={i}>
          //     {tab.component}
          // </Tab.Pane>
          // );    
{/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
</Tabs>
           */}
      // Looping Menu Tabs
      MenuTabs.forEach((tab) => { return tab } );
      // Map menu tab then render
      const renderMenuTabs =  MenuTabs.map((tab, i) => 
        // <Tabs defaultActiveKey="appetizers" key={i} id="uncontrolled-tab-example">
        //   <Tab eventKey={tab.eventkey} title={tab.title}>
        //     {/* Component goes here */}
        //     {MenuTabs.component}
        //   </Tab>
        // </Tabs>
        <Tabs defaultActiveKey={tab.eventkey} key={i}>
          <Tab eventKey={tab.eventkey} title={tab.name}>
            {tab.component}
          </Tab>
        </Tabs>
      );      
      return (
        <Container className="content" id="menu" fluid>
          <Container className="menu-section section" fluid>
            <div className="title">
              <h1 className="d-flex justify-content-center">Our Menu</h1>
              <p  className="d-flex justify-content-center menu-subtitle"> We Use the freshest ingredients</p>
            </div>
            {/* <Container className="d-flex justify-content-center" fluid> */}
            {renderMenuTabs}
          </Container>
  
        </Container>
      )
    }
  }
  
  export default TabTest;