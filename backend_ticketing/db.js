const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'nft_tickets',
  password: 'your_password',
  port: 5432,
});

module.exports = pool;
