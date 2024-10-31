const pool = require('../db/db');

async function getTicket(req, res) {
  try {
    const result = await pool.query(
      'SELECT t.*, e.event_name, e.date, e.venue FROM tickets t JOIN events e ON t.event_id = e.id WHERE t.token_id = $1',
      [req.params.tokenId]
    );
    
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Ticket not found' });
      return;
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function mintTicket(req, res) {
  const { tokenId, eventId, owner } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO tickets (token_id, event_id, owner) VALUES ($1, $2, $3) RETURNING *',
      [tokenId, eventId, owner]
    );
    
    await pool.query(
      'UPDATE events SET tickets_sold = tickets_sold + 1 WHERE id = $1',
      [eventId]
    );
    
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getTicket, mintTicket };
