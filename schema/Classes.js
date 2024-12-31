import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    timing: {
      type: String,
      required: [true, "description is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "image URL is required"],
    },
  },
  { timestamps: true }
);

const Classes = models.classes || model("classes", userSchema);

export default Classes;
