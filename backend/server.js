import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes.js'
import connectToMongoDB from './db/connectToMongoDB.js'

const PORT = process.env.PORT || 5000
const app = express()

dotenv.config()

app.use(express.json()) // to parse the incoming request with JSON payloads ( from red.body)

app.use('/api/auth', authRoutes)

// app.get('/', (req, res) => {
//   //root route http://localhost:5000/
//   res.send('Hello world!!!')
// })

app.listen(PORT, () => {
  connectToMongoDB()

  console.log(`Server running on port ${PORT}`)
})
