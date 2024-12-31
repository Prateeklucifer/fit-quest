import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FAQs = models.faqs || model("faqs", userSchema);

export default FAQs;
