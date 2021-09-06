import { mongooseLogger } from '@logger'

import mongoose from 'mongoose'
import Bluebird from 'bluebird'

mongoose.Promise = Bluebird

mongoose.connection.on('connected', () => {
  mongooseLogger('info', `Database '${mongoose.connection.db.databaseName}' connection success.`)
})

mongoose.connection.on('disconnected', () => {
  mongooseLogger('info', 'Database connection closed.')
})

mongoose.connection.on('error', ({ message }) => {
  mongooseLogger('info', `Database initialization error. ${message}`)
})

const MONGO_USER = process.env.MONGO_USER
const MONGO_PASS = process.env.MONGO_PASS
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DB = process.env.MONGO_DB

const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`

const MONGO_OPTIONS = {
  useCreateIndex: true,
  useNewUrlParser: true
}

const MONGO_SCHEMA_OPTIONS = {
  versionKey: false,
  timestamps: true,
  toJSON: {
    versionKey: false
  }
}

export { mongoose, MONGO_DB, MONGO_URI, MONGO_OPTIONS, MONGO_SCHEMA_OPTIONS }
