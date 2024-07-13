const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

// require routes
const taskRoutes = require('./routes/tasks');
const eventRoutes = require('./routes/events');
const noteRoutes = require('./routes/notes');

// get Connection String
const connectionString = process.env.MONGO_CONNECTION_STRING;

mongoose.connect(connectionString);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


// setup and launch server
const app = express();
app.use(express.json()); // Middleware for parsing JSON

// middleware for parsing routes
app.use('/tasks', taskRoutes);
app.use('/events', eventRoutes);
app.use('/notes', noteRoutes);


// listening on port number
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));