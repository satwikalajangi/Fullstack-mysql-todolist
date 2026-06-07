require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the database successfully!');
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Fetching tasks for frontend loading...');

  db.query('SELECT * FROM todoItems', (err, results) => {
    if (err) {
      console.log('Error fetching items from database:', err.message);
      return res.status(500).send({ error: 'Failed to fetch items' });
    } 
    
    // Convert database column names to match your frontend object properties!
    const formattedResults = results.map(row => ({
      name: row.ItemDescription, // Maps database text to 'name'
      dueDate: row.dueDate       // Maps database date to 'dueDate'
    }));

    res.status(200).json(formattedResults); 
  });
});

// FIXED ROUTE
app.post('/add-item', (req, res) => {
  console.log(req.body); 

  const itemText = req.body.text;
  const itemDate = req.body.date;

  // Guard clause to make sure input isn't empty
  if (!itemText) {
    return res.status(400).send({ error: "Item text is required" });
  }

  // Use ? placeholder for database safety
  const sqlInsert = "INSERT INTO todoItems (ItemDescription, dueDate) VALUES (?, ?)";

  db.query(sqlInsert, [itemText, itemDate || null], (err, results) => {
    if (err) {
      console.log('Error occurred during database insert:', err.message);
      // Send error response inside the callback if it fails
      return res.status(500).send({ error: 'Database insertion failed' });
    }
    
    console.log('Created successfully');
    // ONLY ONE response sent here after the database finishes its job
    res.status(200).send({ message: "Item added successfully", id: results.insertId });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});