import mongoose from 'mongoose';

const ministrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    description: { type: String, required: true },
    leader: { type: String, required: true },
    schedule: { type: String },
    image: { type: String },
    published: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export default mongoose.model('Ministry', ministrySchema);
