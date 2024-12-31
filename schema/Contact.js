import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    subject: {
      type: String,
      required: [true, "subject is required"],
    },
    msg: {
      type: String,
      required: [true, "message is required"],
    },
  },
  { timestamps: true }
);

const Contact = models.contact || model("contact", userSchema);

export default Contact;
