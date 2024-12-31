import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    price: {
      type: String,
      required: [true, "price is required"],
    },
    benifit1: {
      type: String,
    },
    benifit2: {
      type: String,
    },
    benifit3: {
      type: String,
    },
    benifit4: {
      type: String,
    },
  },
  { timestamps: true }
);

const Pricing = models.pricing || model("pricing", userSchema);

export default Pricing;
