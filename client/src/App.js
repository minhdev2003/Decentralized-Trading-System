// Ngoc Minh NGO - 103496945

// Importing the CSS file for styling
import "./App.css";

// Importing necessary components and libraries
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import History from "./components/History";
import Footer from './components/Footer';

// Creating the App component
function App() {
  // Rendering the JSX code
  return (
    <Router>
      <Header /> {/* Rendering the Header component */}
      <div className="App">
        <Route path="/" exact> {/* Setting route for home page */}
          <Home /> {/* Rendering the Home component */}
        </Route>
        <Route path="/cart"> {/* Setting route for cart page */}
          <Cart /> {/* Rendering the Cart component */}
        </Route>
        <Route path="/history"> {/* Setting route for history page */}
          <History /> {/* Rendering the History component */}
        </Route>
      </div>
      <Footer/> {/* Rendering the Footer component */}
    </Router>
  );
}

export default App; // Exporting the App component to be used in other files
