//Ngoc Minh Ngo - 103496945
//Tristan Lee - 104000826
//Arjun Yattukulan - 104557908

import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import HomeSlider from "./Carousel";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  // Using CartState to get the product state values
  const {
    productState: { sort, byStock, byBestOffer, byRating, searchQuery },
  } = CartState();

  // Initializing state variables
  const [prodss, setProds] = useState([]);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetching all products when component mounts
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/home");
        setProds(res.data);
      } catch (err) {
        setError(err); // Set error state if there is an error
      }
    };
    fetchAllProducts();
  }, []);
  const products = prodss.map(({ id, name, price, image, inStock, BestOffer, ratings }) => ({
    id,
    name,
    price,
    image,
    inStock,
    BestOffer,
    ratings,
  }));

  // Transforming products based on sorting, filtering, and searching criteria
  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byBestOffer) {
      sortedProducts = sortedProducts.filter((prod) => prod.BestOffer);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div>
      <HomeSlider />
      <div className="home">
        <Filters />
        <div className="productContainer">
          {error ? ( // Check if there is an error
            <h2 className="error">Error: We're currently facing connectivity issues. Please try again later</h2> // Render the error message
          ) : (
            transformProducts().map((prod) => (
              <SingleProduct prod={prod} key={prod.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
