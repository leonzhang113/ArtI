import express from 'express'
import createHttpError from 'http-errors'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import dbInit from './db.init.js'
// Routes
import { UserRoute } from './Routes/User.route.js'
import { BoardsRoute } from './Routes/Boards.route.js'
import { AuthRoute } from './Routes/Auth.route.js'

const app = express()
app.use(cors())
app.use(express.json()) // allows express to parse req.body
app.use(express.urlencoded({ extended: true }))

const PORT = 8080 || process.env.PORT

dbInit()

app.get('/', (req, res) => {
  res.send('Hello World')
})

// USER ROUTES
app.use('/api/v1/user', UserRoute)
app.use('/api/v1/boards', BoardsRoute)

// LOGIN AUTHENTICATION
app.use('/api/v1/auth', AuthRoute)

// 404 handler and pass to error handler
app.use((req, res, next) => {
  next(createHttpError(404, 'Not found'))
})

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
