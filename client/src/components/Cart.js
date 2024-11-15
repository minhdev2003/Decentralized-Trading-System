//Ngoc Minh Ngo - 103496945

// Import necessary dependencies and components from React, React Bootstrap, and custom components.
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { Link } from "react-router-dom";

// Define the Cart component.
const Cart = () => {
  // Destructure the cart state and dispatch function from the CartState context.
  const {
    state: { cart },
    dispatch,
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
        {/* Allow the user to change the quantity of the product. */}
        <Form.Control
        as="select"
        value={prod.qty}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_CART_QTY",
            payload: {
              id: prod.id,
              qty: e.target.value,
            },
          })
        }
        >
        {[...Array(prod.inStock).keys()].map((x) => (
          <option key={x + 1}>{x + 1}</option>
          ))}
          </Form.Control>
          </Col>
          <Col md={2}>
          {/* Provide a button to remove the product from the cart. */}
          <Button
          type="button"
          variant="light"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod,
            })
          }
          >
          <AiFillDelete fontSize="20px" />
          </Button>
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
          
          {/* Create a link to proceed to the checkout page. */}
          <Link to="/history">
          <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
          </Button>
          </Link>
          </div>
          </div>
          );
        };
        
        // Export the Cart component for use in other parts of the application.
        export default Cart;
        
        