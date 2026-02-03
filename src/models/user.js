import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 12
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email address"]
    },

    password: {
        type: String,
        required: true,
    },
    
    role: {
        type: String,
        enum: ['manager', 'staff'],
        default: 'staff'
    }
})

const User = new mongoose.model("user", userSchema);

export {
    User
}