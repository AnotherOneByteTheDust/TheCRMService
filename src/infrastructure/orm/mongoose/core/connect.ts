import { mongooseLogger } from '@logger'
import { mongoose, MONGO_URI } from './config'

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    mongooseLogger('info', 'Database connection established')
  } catch ({ message }) {
    mongooseLogger('error', `Database connection error. ${message}`)
    throw new Error()
  }
}
