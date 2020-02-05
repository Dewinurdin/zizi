import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

import Appetizer from './Appetizer';
import BentoBox from './BentoBox';
import Entrees from './Entrees';
import NoodleRice from './NoodleRice';
import SushiRolls from './SushiRolls';
import SushiSashimi from './SushiSashimi';
import LunchSpecial from './LunchSpecial';

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
      // <Nav variant="tabs" defaultActiveKey={tab.eventkey} className="menu-tab"></Nav>
      <Tab eventKey={tab.eventkey} title={tab.name} className="menu-tab" key={i}>
        {tab.component}
      </Tab>
    );
    
    return (
      <Container className="section-container" fluid>
        {/* <div className="section_title"> */}
          <h2>ZIZI MENU</h2>
        {/* </div> */}
        {/* <Container className="menu-container" fluid> */}
          <Tabs defaultActiveKey="appetizers" id="uncontrolled-tab" className="flex-column" fluid>
            {renderMenuTabs}
          </Tabs>     
        {/* </Container> */}
      </Container>
    )
  }
}

export default Menu;