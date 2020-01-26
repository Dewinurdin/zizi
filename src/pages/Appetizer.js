import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Appetizer extends React.Component {

  render(){
    const MenuItem = [
      { name: "Takoyaki", price: "$5" },
      { name: "Vegetable Croquette", price: "$4" },
      { name: "Avocado Bomb", price: "$9" },
      { name: "Tempura (Vegetable / Red Snapper / Shrimp & Vegetable)", price: "$8.99" },
      { name: "Spring Roll (3 pcs)", price: "$3" },
      { name: "Chicken Wings", price: "$5" },
      { name: "Black Pepper Tuna", price: "$10" },
      { name: "Black Pepper Tuna Salad", price: "$ ??" },
      { name: "Stuffed Jalapeno", price: "$7" },
      { name: "Squid Legs", price: "$7" },
      { name: "Egg Roll (2 pcs)", price: "$3.2" },
      { name: "Edamame", price: "$4" },
      { name: "Spicy Edamame", price: "$5" },
      { name: "Dumling (7 pcs)", price: "$5" },
      { name: "Heart Attack", price: "$8.99" },
    ];

    // Looping Menu Item
    MenuItem.forEach((item, index) => { return item } );
    
    // Map menu item then render
    const renderMenuItem =  MenuItem.map((item, index) => <div className="menu-item" key={index}> {item.name} </div>);
    const renderPrice = MenuItem.map((item, index) => <div className="menu-price" key={index}> {item.price} </div> );

    return (
      <div className="menu-page" key={this.props.i}>
        <Row className="center">
          <Col>
              {renderMenuItem}
          </Col>
          <Col>
            <div>
              {renderPrice}
            </div>
          </Col>
        </Row>  
    </div>
    );
  }
}

export default Appetizer;