import mongoose, { Schema } from 'mongoose'
import { MONGO_SCHEMA_OPTIONS } from '../core'

const CustomerSchema = new Schema({
  name: { type: String, required: true, immutable: true },
  surname: { type: String, required: true, immutable: true },
  avatarUrl: { type: String, required: true },
  createdBy: { type: String /* required: true */ },
  lastModificationBy: { type: String /* required: true */ },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  enabled: { type: Boolean, required: true, default: true },
  deleted: { type: Boolean, required: true, default: false }
}, MONGO_SCHEMA_OPTIONS)

export const Customer = mongoose.model('Customer', CustomerSchema)
