const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [100, "Name is too large"]
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email!"]
    },
    mobile: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        lowercase: true,
        enum: {
            values: ["candidate", "hiring manager", "admin"],
            message: "Role should not be {VALUE}, it's must be candidate,hiring manager, admin"
        },
        required: true,
    },
    address: {
        type: String,
    },
    assignedJobs: [{
        title: String,
        jobId: {
            type: ObjectId,
            ref: "Job"
        }
    }]
},
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema);
module.exports = User;