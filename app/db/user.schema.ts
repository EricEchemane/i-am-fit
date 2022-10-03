import { Schema, InferSchemaType } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    picture: {
        type: String,
        required: [true, "Image is required"],
    },
    gender: {
        type: String,
        required: [true, "Gender is required"],
    },
    yearLevel: {
        type: Number,
        required: [true, "Year level is required"],
        min: [7, "Year level must be greater than 0"],
        max: [12, "Year level must be less than 13"],
    },
    height: {
        type: Number,
        required: [true, "Height is required"],
        min: [0, "Height cannot be zero"],
    },
    weight: {
        type: Number,
        required: [true, "Weight is required"],
        min: [0, "Weight cannot be zero"],
    },
    birthDate: {
        type: String,
        require: [true, "Birth date is required"],
    },
    bmiHistory: [{
        date: String,
        bmi: Number,
    }],
    bmrHistory: [{
        date: String,
        bmr: Number,
    }],
});

export type IUser = InferSchemaType<typeof userSchema>;
export default userSchema;