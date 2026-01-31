import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    roleTitle: { type: String, required: true },
    bio: { type: String },
    photo: { type: String },
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

teamMemberSchema.index({ order: 1 });

export default mongoose.model('TeamMember', teamMemberSchema);
