import { mongooseLogger } from '@logger'
import { mongoose } from './config'

export const disconnect = async () => {
  if (mongoose.connection.readyState) {
    mongooseLogger('info', 'Database disconnected successfully')
    await mongoose.disconnect()
  }
}
