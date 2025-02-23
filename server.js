const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
import userRoutes from './backend/routes/userRoutes.js'
import connectdb from './backend/utils/connect-mongodb.js'