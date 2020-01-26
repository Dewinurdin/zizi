import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class SushiSashimi extends React.Component {

  render(){
    const MenuItem = [
      { name: "Tuna", sashimiprice: "$13.99", sushiprice: "$6.50" },
      { name: "Snapper", sashimiprice: "$11.99", sushiprice: "5.99" },
      { name: "White Tuna", sashimiprice: "$12.99", sushiprice: "5.99" },
      { name: "Salmon", sashimiprice: "$12.99", sushiprice: "5.99" },
      { name: "Smoked Salmon", sashimiprice: "$12.99", sushiprice: "5.99" },
      { name: "Yellowtail (Hamachi)", sashimiprice: "$13.99", sushiprice: "6.99" },
      { name: "Eel (Unagi)", sashimiprice: "$14.99", sushiprice: "7.99" },
      { name: "Shrimp (Ebi)", sashimiprice: "$11.99", sushiprice: "4.99" },
      { name: "Scallop (Hotate)", sashimiprice: "$11.99", sushiprice: "4.99" },
      { name: "Squid (Ika)", sashimiprice: "$11.99", sushiprice: "4.99" },
      { name: "Salmon Egg (Ikura)", sashimiprice: "$12.99", sushiprice: "5.99" },
      { name: "Flying Fish Egg (Tobiko)", sashimiprice: "$11.99", sushiprice: "4.99" },
      { name: "Smelt Fish Egg (Masago)", sashimiprice: "$11.99", sushiprice: "4.99" },
    ];

    // Looping Menu Item
    MenuItem.forEach((item, index) => { return item } );
    
    // Map menu item then render
    const renderMenuItem =  MenuItem.map((item, index) => <div className="menu-item" key={index}> {item.name} </div>);
    const sushiPrice = MenuItem.map((item, index) => <div className="menu-price" key={index}> {item.sushiprice} </div> );

    return (
      <div>
        <Row className="center">
          <Col>
            <h3>Selections</h3>
            {renderMenuItem}
          </Col>
          <Col>
            <h3>Sushi</h3> <h5>(3 pcs)</h5>
              {sushiPrice}
          </Col>
          <Col>
            <h3>Sashimi </h3> <h5>(5 pcs)</h5>
              {sushiPrice}
          </Col>

        </Row>  
    </div>
    );
  }
}

export default SushiSashimi;