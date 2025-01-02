import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    para1: {
      type: String,
      required: [true, "paragraph1 is required"],
    },
    para2: {
      type: String,
      required: [true, "paragraph2 is required"],
    },
    para3: {
      type: String,
      required: [true, "paragraph3 is required"],
    },
    para4: {
      type: String,
      required: [true, "paragraph4 is required"],
    },
    para5: {
      type: String,
      required: [true, "paragraph5 is required"],
    }
  },
  { timestamps: true }
);

const About = models.about || model("about", userSchema);

export default About;
