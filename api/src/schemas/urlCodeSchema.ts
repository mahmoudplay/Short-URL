import mongoose, {Schema, SchemaTypes } from "mongoose";

const urlSchema = new Schema({
    username: {
        type: SchemaTypes.String,
        unique: true,
    },
    redirURL: SchemaTypes.String,
});

export default mongoose.model("urlCode", urlSchema, "urlCodes");