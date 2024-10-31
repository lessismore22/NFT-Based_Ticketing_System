
// API Routes
app.post('/api/events', async (req, res) => {
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
  });
  
  app.get('/api/events', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM events ORDER BY date');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.get('/api/tickets/:tokenId', async (req, res) => {
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
  });
  
  app.post('/api/tickets/mint', async (req, res) => {
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
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });