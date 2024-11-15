//Ngoc Minh Ngo - 103496945

// Import necessary dependencies and components from React Bootstrap and custom components.
import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

// Define the Filters component.
const Filters = () => {
  // Destructure the necessary state and dispatch functions from the CartState context.
  const {
    productDispatch,
    productState: { byStock, byBestOffer, sort, byRating },
  } = CartState();
  
  return (
    // Create a container for the filters.
    <div className="filters">
    <span className="title">Filter Products</span>
    
    {/* Create a radio button for sorting products from low to high price. */}
    <span>
    <Form.Check
    inline
    label="Low to high"
    name="group1"
    type="radio"
    id={`inline-1`}
    onChange={() =>
      productDispatch({
        type: "SORT_BY_PRICE",
        payload: "lowToHigh",
      })
    }
    checked={sort === "lowToHigh" ? true : false}
    />
    </span>
    
    {/* Create a radio button for sorting products from high to low price. */}
    <span>
    <Form.Check
    inline
    label="High to low"
    name="group1"
    type="radio"
    id={`inline-2`}
    onChange={() =>
      productDispatch({
        type: "SORT_BY_PRICE",
        payload: "highToLow",
      })
    }
    checked={sort === "highToLow" ? true : false}
    />
    </span>
    
    {/* Create a checkbox to include out-of-stock products in the listing. */}
    <span>
    <Form.Check
    inline
    label="Include Out of Stock"
    name="group1"
    type="checkbox"
    id={`inline-3`}
    onChange={() =>
      productDispatch({
        type: "FILTER_BY_STOCK",
      })
    }
    checked={byStock}
    />
    </span>
    
    {/* Create a checkbox to show only products with the best offer. */}
    <span>
    <Form.Check
    inline
    label="Best Offer Only"
    name="group1"
    type="checkbox"
    id={`inline-4`}
    onChange={() =>
      productDispatch({
        type: "FILTER_BY_OFFER",
      })
    }
    checked={byBestOffer}
    />
    </span>
    
    {/* Create a rating filter using a custom Rating component. */}
    <span>
    <label style={{ paddingRight: 10 }}>Rating: </label>
    <Rating
    rating={byRating}
    onClick={(i) =>
      productDispatch({
        type: "FILTER_BY_RATING",
        payload: i + 1,
      })
    }
    style={{ cursor: "pointer" }}
    />
    </span>
    
    {/* Create a button to clear all applied filters. */}
    <Button 
    onClick={() =>
      productDispatch({
        type: "CLEAR_FILTERS",
      })
    }
    >
    Clear Filters
    </Button>
    </div>
    );
  };
  
  // Export the Filters component for use in other parts of the application.
  export default Filters;
  