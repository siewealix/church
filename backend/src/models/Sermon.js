import mongoose from 'mongoose';

const sermonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    preacher: { type: String, required: true },
    date: { type: Date, required: true, index: true },
    description: { type: String, required: true },
    mediaUrl: { type: String },
    notes: { type: String },
    published: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export default mongoose.model('Sermon', sermonSchema);
