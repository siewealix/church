import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String, required: true },
    date: { type: Date, required: true, index: true },
    location: { type: String, required: true },
    image: { type: String },
    published: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export default mongoose.model('Event', eventSchema);
