import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
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

const Services = models.services || model("services", userSchema);

export default Services;
