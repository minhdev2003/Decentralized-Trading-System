// Ngoc Minh NGO - 103496945

import { FaShoppingCart } from "react-icons/fa"; // Importing the FaShoppingCart icon from the react-icons/fa library
import { AiFillDelete,AiOutlineHistory  } from "react-icons/ai"; // Importing the AiFillDelete and AiOutlineHistory icons from the react-icons/ai library

import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  Col,
} from "react-bootstrap"; // Importing various components from the react-bootstrap library
import { Link, useLocation } from "react-router-dom"; // Importing the Link and useLocation functions from the react-router-dom library
import { CartState } from "../context/Context"; // Importing the CartState component from the "../context/Context" file
import "./styles.css"; // Importing the CSS file for styling

const Header = () => {
  const {
    state: { cart }, // Destructuring the cart property from the state object
    dispatch,
    productDispatch,
  } = CartState(); // Using the CartState component to get access to the cart state and dispatch functions
  
  return (
    <Navbar sticky="top" variant="dark" style={{ height: 80 }}> 
    {/* // Creating a navbar element with sticky positioning at the top, dark variant, and a height of 80px */}
    <Container>
    <Navbar.Brand>
    <Link to="/">Team71</Link> 
    {/* // Creating a link to the root directory with the text "Team71" */}
    </Navbar.Brand>
    {useLocation().pathname.split("/")[1] !== "cart" && ( // Checking if the current url does not have "/cart" as the second part
    <Nav className="flex-grow-1">
    <Col xs='auto'>
    <FormControl
    type="search"
    placeholder="Search a product..."
    className="m-auto"
    aria-label="Search"
    onChange={(e) => {
      productDispatch({
        type: "FILTER_BY_SEARCH",
        payload: e.target.value,
      });
    }}
    />
    </Col>
    </Nav>
    )}
    <Nav>
    <Link to='/history' className="HistoryBtn"><Button type="button"><AiOutlineHistory color="white" fontSize="25px" /></Button></Link> 
    {/* // Creating a link to "/history" with a button that contains the AiOutlineHistory icon */}
    
    <Dropdown alignRight> 
    {/* // Creating a dropdown menu aligned to the right */}
    <Dropdown.Toggle variant="success"> 
    {/* // Creating a toggle button for the dropdown with a success variant */}
    <FaShoppingCart color="white" fontSize="25px" /> 
    {/* // Displaying the FaShoppingCart icon with white color and a font size of 25px */}
    <Badge>{cart.length}</Badge> 
    {/* // Displaying a badge with the length of the cart array as its content */}
    </Dropdown.Toggle>
    
    <Dropdown.Menu style={{ minWidth: 370 }}>
    {/* // Creating a menu for the dropdown with a minimum width of 370px */}
    {cart.length > 0 ? ( // Checking if the cart is not empty
    <>
    {cart.map((prod) => (
      <span className="cartitem" key={prod.id}> 
      <img
      src={prod.image}
      className="cartItemImg"
      alt={prod.name}
      />
      
      <div className="cartItemDetail">
      <span>{prod.name}</span>
      <span>BNB {prod.price}</span>
      </div>
      <AiFillDelete
      fontSize="20px"
      style={{ cursor: "pointer" }}
      onClick={() =>
        dispatch({ // Dispatching an action to remove the product from the cart
          type: "REMOVE_FROM_CART",
          payload: prod,
        })
      }
      />
      </span>
      ))}
      <Link to="/cart">
      <Button style={{ width: "95%", margin: "0 10px" }}>
      Go To Cart
      </Button> 
      </Link>
      </>
      ) : (
        <span style={{ padding: 10 }}>Cart is Empty!</span> // Displaying a message when the cart is empty
        )}
        </Dropdown.Menu>
        </Dropdown>
        </Nav>
        </Container>
        </Navbar>
        );
      };
      
      export default Header; // Exporting the Header component
      