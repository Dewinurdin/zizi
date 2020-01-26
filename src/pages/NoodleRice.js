import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class NoodleRice extends React.Component {

  render(){
    const MenuItem = [
      // { name: "Combination", price: "$14.99" },
      // { name: "Tempura Udon", descriptions: "Udon Noodle Soup Served with Shrimp & Vegetable Tempura" },
      { name: "Japanese Pan Udon", descriptions: "Udon Noodle Soup Served with Shrimp & your choice of meat" },
      { name: "Yakisoba", descriptions: "Soba Noodle Soup Served with Shrimp & your choice of meat" },
      { name: "Hibachi Style Fried Rice", descriptions: "Rice, vegetables & your choice of meat stir-fried in Teriyaki Sauce" },
    ];
    const ProteinChoices = [
      { protein: "Chicken", price: "$9.99" },
      { protein: "Beef", price: "$10.99" },
      { protein: "Shrimp", price: "$12.99" },
      { protein: "Combination", price: "$14.99" },
    ];
    
    const RiceItem = [
      { orange: "Orange chicken", price: "8.99" },
      { sesameChicken: "Sesame Chicken", price: "8" },
      { generalTsaoChicken: "General Tsao Chicken", price: "$8" }
    ];

    // Looping Menu Item
    MenuItem.forEach((item, index) => { return item } );

    // Looping Protein Choices 
    ProteinChoices.forEach((choice, index) => { return choice } );

    const renderProteinItem = ProteinChoices.map((protein, index) =>
      <h5>{protein.name}</h5>
    );
    
    // Map menu item then render
    const renderMenuItem =  MenuItem.map((item, index) => 
      <div className="menu-item" key={index}> 
        {item.name} 
        {renderProteinItem}
      </div>
    );


    const renderPrice = MenuItem.map((item, index) => 
      <div className="menu-price" key={index}> 
        {item.price} 
      </div>
    );

    return (
      <div>
        <Row className="center">
          <Col>
            <h3>Noodle</h3>
              {renderMenuItem}
          </Col>
          <Col>
            <div>
              <h3>Rice</h3>
              {renderPrice}
            </div>
          </Col>
        </Row>  
    </div>
    );
  }
}

export default NoodleRice;