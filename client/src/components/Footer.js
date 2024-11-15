// Ngoc Minh Ngo - 103496945
import "./styles.css"; // Importing the CSS file for styling

const Footer = () => {
    return (
        <div>
        <footer className="text-center text-white"> 
        {/* // Creating a footer element with text-center and text-white classes */}
        <div className="container p-4 pb-0"> 
        {/* // Adding a container div with padding classes */}
        <div className="text-center p-3" > 
        {/* // Adding a text-center div with padding class */}
        A Production of 
        <a className="text-white" href="/"> Team71</a> 
        {/* // Adding a link with text-white class and href to root directory */}
        </div>
        </div>
        
        </footer>
        
        </div>
        )
    }
    
    export default Footer; // Exporting the Footer component
    