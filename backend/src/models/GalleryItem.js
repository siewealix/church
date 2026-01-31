import mongoose from 'mongoose';

const galleryItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    published: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export default mongoose.model('GalleryItem', galleryItemSchema);
