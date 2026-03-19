import mongoose, {Schema, SchemaTypes } from "mongoose";

const urlSchema = new Schema({
    urlCode: {
        type: SchemaTypes.String,
        unique: true,
    },
    redirURL: SchemaTypes.String,
});

const shortedUrl = mongoose.model("urlCode", urlSchema, "urlCodes");

export default shortedUrl