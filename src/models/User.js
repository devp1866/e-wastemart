import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String,
}, {
    timestamps: true,
});

export const User = models.User || model('User', UserSchema);