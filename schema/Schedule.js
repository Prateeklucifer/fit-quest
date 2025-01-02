import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
    {
        time: {
            type: String,
            required: [true, "paragraph1 is required"],
        },
        monday: {
            type: String,
            required: [true, "paragraph2 is required"],
        },
        tuesday: {
            type: String,
            required: [true, "paragraph3 is required"],
        },
        wednesday: {
            type: String,
            required: [true, "paragraph4 is required"],
        },
        thursday: {
            type: String,
            required: [true, "paragraph5 is required"],
        },
        friday: {
            type: String,
            required: [true, "paragraph5 is required"],
        }
    },
    { timestamps: true }
);

const Schedule = models.schedule || model("schedule", userSchema);

export default Schedule;
