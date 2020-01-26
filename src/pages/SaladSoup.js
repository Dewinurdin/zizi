import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class SaladSoup extends React.Component {

  render(){
    const MenuItem = [
      { name: "Ginger Dressing Salad", price: "$3.99" },
      { name: "Cucumber Salad", price: "$4" },
      { name: "Seaweed Salad", price: "$5.99" },
      { name: "Salmon Avocado Salad", price: "$11.99" },
      { name: "Sashimi Salad", price: "$13.99" },
      { name: "Spicy Tuna Salad", price: "$12.99" },
      { name: "Miso Soup ", price: "$1.99" },
      { name: "Gyoza Soup ", price: "$5.99" },
      { name: "ZiZi Tea Leaf Salad ", price: "$7" },
    ];

    // Looping Menu Item
    MenuItem.forEach((item, index) => { return item } );
    
    // Map menu item then render
    const renderMenuItem =  MenuItem.map((item, index) => <div className="menu-item" key={index}> {item.name} </div>);
    const renderPrice = MenuItem.map((item, index) => <div className="menu-price" key={index}> {item.price} </div> );

    return (
      <div>
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

export default SaladSoup;