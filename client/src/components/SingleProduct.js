//Ngoc Minh Ngo - 103496945

// Import necessary dependencies and components from React Bootstrap and custom components.
import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

// Define the SingleProduct component that displays individual product information.
const SingleProduct = ({ prod }) => {
  // Destructure the state and dispatch function from the CartState context.
  const {
    state: { cart },
    dispatch,
  } = CartState();
  
  return (
    <div className="products">
    <Card>
    {/* Display the product image with the product name as an alt attribute. */}
    <Card.Img variant="top" src={prod.image} alt={prod.name} />
    
    <Card.Body>
    {/* Display the product name. */}
    <Card.Title>{prod.name}</Card.Title>
    
    <Card.Subtitle style={{ paddingBottom: 10 }}>
    {/* Display the product price and indicate if it's the best offer or most rare. */}
    <span>BNB {prod.price}</span>
    {prod.BestOffer ? (
      <div>Best Offer</div>
      ) : (
        <div>Most Rare</div>
        )}
        
        {/* Display the product's rating using a custom Rating component. */}
        <Rating rating={prod.ratings} />
        </Card.Subtitle>
        
        {/* Check if the product is in the cart and display an appropriate button. */}
        {cart.some((p) => p.id === prod.id) ? (
          // If the product is in the cart, display a "Remove from Cart" button.
          <Button
          variant="danger"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod,
            })
          }
          >
          Remove from Cart
          </Button>
          ) : (
            // If the product is not in the cart, display an "Add to Cart" button.
            <Button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              })
            }
            // Disable the button if the product is out of stock.
            disabled={!prod.inStock}
            >
            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
            )}
            </Card.Body>
            </Card>
            </div>
            );
          };
          
          // Export the SingleProduct component for use in other parts of the application.
          export default SingleProduct;
          
          