import { mongooseLogger } from '@logger'
import { mongoose, MONGO_URI, MONGO_OPTIONS } from './config'

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)
    mongooseLogger('info', 'Database connection established')
  } catch ({ message }) {
    mongooseLogger('error', `Database connection error. ${message}`)
    throw new Error()
  }
}
