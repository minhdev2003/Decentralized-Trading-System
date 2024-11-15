//Ngoc Minh Ngo -103496945
// Import required modules for the application
import express from "express"; // Import the Express.js framework to build web applications
import mysql from "mysql"; // Import the MySQL module to connect to a MySQL database
import cors from "cors"; // Import the CORS middleware to enable Cross-Origin Resource Sharing

const app = express(); // Create an instance of the Express.js application

const db = mysql.createConnection({
    host: "localhost", // Specify the database host
    user: "root", // Specify the database username
    password: "mysqlpass123", // Specify the database password
    database: "test" // Specify the database name
});

app.use(express.json()); // Middleware to parse JSON data in request bodies
app.use(cors()); // Middleware to enable Cross-Origin Resource Sharing

// Route handler for GET request to the "/home" path
app.get('/home', (req, res) => {
    db.query('SELECT * FROM products', (err, data) => {    
      // Check if there is an error executing the SQL query
      if (err) return res.json(err); // Send a JSON response containing the error message
      res.json(data); // Send a JSON response containing the retrieved data
    });
  });

// Route handler for GET request to the root path "/"
app.get("/", (req, res) => {
    res.json("hello this is the backend"); // Send a JSON response with the message "hello this is the backend"
});

app.listen(8000, () => {
    console.log("Connected to backend!"); // Log a message to the console when the server is successfully running and connected to the backend
});
