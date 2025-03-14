import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, 
        },

        password: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            require: true,
            unique: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        },

    },

    { timestamps: true }
);

export default mongoose.model('User', userSchema);