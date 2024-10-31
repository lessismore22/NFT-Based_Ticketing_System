const pool = require('./db');

async function initializeDatabase() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        contract_address TEXT NOT NULL,
        event_name TEXT NOT NULL,
        date TEXT NOT NULL,
        venue TEXT NOT NULL,
        total_tickets INTEGER NOT NULL,
        tickets_sold INTEGER DEFAULT 0,
        base_price TEXT NOT NULL,
        organizer TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS tickets (
        token_id TEXT PRIMARY KEY,
        event_id INTEGER REFERENCES events(id),
        owner TEXT NOT NULL,
        is_valid BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } finally {
    client.release();
  }
}

module.exports = initializeDatabase;
