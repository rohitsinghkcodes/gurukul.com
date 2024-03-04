import mongoose from 'mongoose'

const papersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
    },
    pdf: {
      data: Buffer,
      contentType: String,
    },
    slug:{
        type: String,
        lowercase: true
    }
  },
);

export default mongoose.model("papers", papersSchema);