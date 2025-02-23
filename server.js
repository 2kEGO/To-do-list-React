const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
import userRoutes from './backend/routes/userRoutes.js'
import connectdb from './backend/utils/connect-mongodb.js'

dotenv.config()

// Setup Port
const port = process.env.VITE_PORT || 3000


const app = express();

//Middeleware

app.use(express.json());
app.use(cors());

// use routes
app.use('/api', userRoutes);

connectdb();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});