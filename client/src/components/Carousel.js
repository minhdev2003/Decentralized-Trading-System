//Tristan Lee - 104000826

// Import necessary dependencies and components from React Bootstrap and your custom styles.
import { Carousel } from 'react-bootstrap';
import "./styles.css";

// Define the HomeSlider component.
const HomeSlider = () => {
    return (
        <>
        {/* Render the carousel */}
        <Carousel>
        {/* First slide */}
        <Carousel.Item interval={1000}>
        <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2972&q=80"
        alt="First slide"
        />
        <Carousel.Caption>
        <h1>Decentralized Trading System</h1>
        <p>Make Your Transactions Easy.</p>
        </Carousel.Caption>
        </Carousel.Item>
        
        {/* Second slide */}
        <Carousel.Item interval={500}>
        <img
        className="d-block w-100"
        src="https://bowergroupasia.com/wp-content/uploads/2020/10/out-of-the-shadows-cybersecurity-in-australia-and-the-indo-pacific.jpg"
        alt="Second slide"
        />
        <Carousel.Caption>
        <h1>Decentralized Trading System</h1>
        <p>Make Your Transactions Easy.</p>
        </Carousel.Caption>
        </Carousel.Item>
        
        {/* Third slide */}
        <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://wallpapers.com/images/hd/trading-wallpaper-ynfqhj74ml8p96ca.jpg"
        alt="Third slide"
        />
        <Carousel.Caption>
        <h1>Decentralized Trading System</h1>
        <p>Make Your Transactions Easy.</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </>
        );
    };
    
    // Export the HomeSlider component for use in other parts of the application.
    export default HomeSlider;
    