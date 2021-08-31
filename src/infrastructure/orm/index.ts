import { mongoose, MONGO_URI } from './mongoose/core'

export const runOrm = async () => {
  await mongoose.connect(MONGO_URI)
}

export const stopOrm = async () => {
  await mongoose.disconnect()
}
