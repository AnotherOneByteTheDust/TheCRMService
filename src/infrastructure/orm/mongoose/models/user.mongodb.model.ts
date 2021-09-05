import mongoose, { Schema } from 'mongoose'
import { MONGO_SCHEMA_OPTIONS } from '../core'

const UserSchema = new Schema({
  email: { type: String, required: true, immutable: true },
  username: { type: String, required: true, immutable: true },
  password: { type: String, required: true },
  token: { type: String, default: '' },
  isAdmin: { type: Boolean, required: true, default: false },
  enabled: { type: Boolean, required: true, default: true },
  deleted: { type: Boolean, required: true, default: false },
  lastLoginAt: { type: Date, default: '' }
}, MONGO_SCHEMA_OPTIONS)

export const User = mongoose.model('User', UserSchema)
