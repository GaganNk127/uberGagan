const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();

const connectToDb = require('./db/db.js');
const userRoutes = require('./routes/user.routes')

// Middleware
app.use(cors());
app.use(express.json()); // Optional: If you're working with JSON data in requests
app.use(express.urlencoded({extended:true}));

// Connect to MongoDB
connectToDb();

// Routes
app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/user',userRoutes);

module.exports = app;
