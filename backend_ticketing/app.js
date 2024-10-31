const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/events');
const ticketRoutes = require('./routes/tickets');
const initializeDatabase = require('./db/init');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize database tables
initializeDatabase();

// Define routes
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);

module.exports = app;
