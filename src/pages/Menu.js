import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Appetizer from './Appetizer';


class Menu extends React.Component {
  render (){
    return (
      <div className="menu-container">
        <div className="section_title">
          <h2>ZIZI MENU</h2>
          </div>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="appetizers" title="Appetizers" className="menu-tab">
            <Appetizer/>
            </Tab>
            <Tab eventKey="saladandsoup" title="Salad &amp; Soup" className="menu-tab">
            </Tab>
            <Tab eventKey="sushiandsashimi" title="Sushi &amp; Sashimi" className="menu-tab">
            </Tab>
            <Tab eventKey="noodleandrice" title="Noodle &amp; Rice" className="menu-tab">
            </Tab>
            <Tab eventKey="ramen" title="Ramen" className="menu-tab">
            </Tab>
            <Tab eventKey="sushirolls" title="Sushi Roll" className="menu-tab">
            </Tab>
            <Tab eventKey="entrees" title="Entrees" className="menu-tab">
            </Tab>
            <Tab eventKey="bento" title="Bento Box" className="menu-tab">
            </Tab>
            <Tab eventKey="dessert" title="Desserts" className="menu-tab">
            </Tab>
          </Tabs>     
      </div>
    )
  }
}

export default Menu;