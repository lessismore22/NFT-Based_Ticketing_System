const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const { connect, keyStores } = require('near-api-js');

const app = express();
app.use(cors());
app.use(express.json());

