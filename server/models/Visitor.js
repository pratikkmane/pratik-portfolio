import mongoose from 'mongoose'

// One document per unique browser. Only a random id is stored, never an IP address.
const visitorSchema = new mongoose.Schema(
  {
    visitorId: { type: String, required: true, unique: true },
    ref: { type: String, default: '' },
    referrerHost: { type: String, default: '' },
    device: { type: String, default: 'desktop' },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

export default mongoose.model('Visitor', visitorSchema, 'visitors')
