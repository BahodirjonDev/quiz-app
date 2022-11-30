const express = require('express')
const app = express()
const dotenv = require('dotenv').config('./.env')
const { connectDb } = require('./db')
const router = require('./route')
const cors = require('cors')
app.use(cors())
connectDb()
app.use('/', router)
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}`);
})