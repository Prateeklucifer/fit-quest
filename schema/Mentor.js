import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    imageURL: {
      type: String,
    },
  },
  { timestamps: true }
);

const Mentor = models.mentors || model("mentors", userSchema);

export default Mentor;