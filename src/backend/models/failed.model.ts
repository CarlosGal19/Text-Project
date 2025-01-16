import { Schema, model } from "mongoose";

const FailedSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    }
})

export const Failed = model("Failed", FailedSchema);
