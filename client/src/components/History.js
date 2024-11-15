//Arjun Yattukulan - 104557908


// Import necessary dependencies and components from React, React Bootstrap, and custom components.
import { useEffect, useState } from "react";
import { Col, Button, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import "./styles.css";
import { Link } from "react-router-dom";

// Define the History component.
const History = () => {
  // Destructure the cart state from the CartState context.
  const {
    state: { cart },
  } = CartState();
  
  // Use state to keep track of the total cost of items in the cart.
  const [total, setTotal] = useState();
  
  // Calculate the total cost whenever the cart contents change.
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
      );
    }, [cart]);
    
    return (
      <div className="home">
      <div className="productContainer">
      <ListGroup>
      {/* Display the title for the transaction history. */}
      <h1 className="HistoryTitle">Transaction History</h1>
      
      {/* Map through each product in the cart and display its details. */}
      {cart.map((prod) => (
        <ListGroup.Item key={prod.id}>
        <Row>
        <Col md={2}>
        {/* Display the product image. */}
        <Image src={prod.image} alt={prod.name} fluid rounded />
        </Col>
        <Col md={2}>
        {/* Display the product name. */}
        <span>{prod.name}</span>
        </Col>
        <Col md={2}>BNB {prod.price}</Col>
        <Col md={2}>
        {/* Display the product's rating using a custom Rating component. */}
        <Rating rating={prod.ratings} />
        </Col>
        <Col md={2}>
        {/* Display the quantity of the product in the transaction. */}
        <span>Quantity: {prod.qty}</span>
        </Col>
        </Row>
        </ListGroup.Item>
        ))}
        </ListGroup>
        </div>
        <div className="filters summary">
        {/* Display the subtotal and total cost of items in the cart. */}
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: BNB {total}</span>
        
        {/* Create a link to return to the home page. */}
        <Link to="/">
        <Button type="button">Back to Home</Button>
        </Link>
        </div>
        </div>
        );
      };
      
      // Export the History component for use in other parts of the application.
      export default History;
      
      