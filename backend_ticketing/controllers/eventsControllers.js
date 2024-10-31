const pool = require('../db/db');

async function createEvent(req, res) {
  const { contractAddress, eventName, date, venue, totalTickets, basePrice, organizer } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO events (contract_address, event_name, date, venue, total_tickets, base_price, organizer) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [contractAddress, eventName, date, venue, totalTickets, basePrice, organizer]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllEvents(req, res) {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY date');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createEvent, getAllEvents };
