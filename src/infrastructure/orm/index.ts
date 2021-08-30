import * as mongodb from 'mongoose'
import { MONGO_URI, MONGO_OPTIONS } from './mongoose/core'

export const runOrm = async () => {
  await mongodb.connect(MONGO_URI, MONGO_OPTIONS)
}

export const stopOrm = async () => {
  await mongodb.disconnect()
}
