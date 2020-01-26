import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Appetizer from './Appetizer';
import BentoBox from './BentoBox';
import Desserts from './Desserts';
import Entrees from './Entrees';
import NoodleRice from './NoodleRice';
import Ramen from './Ramen';
import SaladSoup from './SaladSoup';
import SushiRolls from './SushiRolls';
import SushiSashimi from './SushiSashimi';
import LunchSpecial from './LunchSpecial';

class Menu extends React.Component {
  render (){
    const MenuTabs = [
      {eventkey:"appetizers", name: "Appetizers", component: <Appetizer/>},
      {eventkey:"saladsoup", name: "Salads & Soups", component: <SaladSoup/>},
      {eventkey:"sushisashimi", name: "Sushi & Sashimi", component: <SushiSashimi/>},
      {eventkey:"noodlerice", name: "Noodle & Rice", component: <NoodleRice/>},
      {eventkey:"ramen", name: "Ramen", component: <Ramen/>},
      {eventkey:"sushirolls", name: "Sushi Rolls", component: <SushiRolls/>},
      {eventkey:"entrees", name: "Entrees", component: <Entrees/>},
      {eventkey:"bentobox", name: "Bento Box", component: <BentoBox/>},
      {eventkey:"desserts", name: "Desserts", component: <Desserts/>},
      {eventkey:"lunchspecial", name: "Lunch Special", component: <LunchSpecial />},
    ];
    // Looping Menu Tabs
    MenuTabs.forEach((tab) => { return tab } );

    // Map menu tab then render
    const renderMenuTabs =  MenuTabs.map((tab, i) => 
      // console.log(tab.eventkey);
      // console.log(tab.name);
      <Tab eventKey={tab.eventkey} title={tab.name} className="menu-tab" key={i}>
        {tab.component}
      </Tab>

    );
    
    return (
      <div className="section-container">
        <div className="section_title">
          <h2>ZIZI MENU</h2>
        </div>
        <div className="menu-container">
          <Tabs defaultActiveKey="appetizers" id="uncontrolled-tab">
            {renderMenuTabs}
          </Tabs>     
        </div>
      </div>
    )
  }
}

export default Menu;