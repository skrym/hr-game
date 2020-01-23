const express = require('express')
const {
  Nuxt,
  Builder
} = require('nuxt')
// const cookieParser = require('cookie-parser')

const errorHandler = require('./middleware/errorHandler')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const start = async () => {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const {
    host,
    port
  } = nuxt.options.server

  // Connect to DataBase 
  const connectDB = require('./db')
  connectDB()

  const app = express()

  // Body parser
  app.use(express.json())

  // Cookie parse
  // app.use(cookieParser())

  // Add Routes
  const offices = require('./routes/offices')
  const workers = require('./routes/workers')
  const users = require('./routes/users')
  app.use('/api/v1/offices', offices)
  app.use('/api/v1/workers', workers)
  app.use('/api/v1/users', users)

  app.use(errorHandler)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Running server
  const server = app.listen(
    port,
    console.log(`Server listening on http://${host}:${port}`)
  )

  // Handle unhandled promise rejection
  process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err}`)
    // Close server
    server.close(() => process.exit(1))
  })
}
start()