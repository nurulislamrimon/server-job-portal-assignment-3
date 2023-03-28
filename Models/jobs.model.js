const mongoose = require('mongoose');
const validator = require("validator");
const ObjectId = mongoose.Types.ObjectId;


const JobsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Job title is required"],
        trim: true,
        unique: true,
        minLength: [3, "Title must be atleast 3 characters!"],
        maxLength: [100, "Title is too large!"],
    },
    jobType: {
        type: String,
        required: [true, "Job type is required!"],
        lowercase: true,
    },
    location: {
        type: String,
        required: [true, "Location is required!"],
    },
    salary: {
        type: String,
        required: true
    },
    manager: [{
        name: String,
        email: {
            type: String,
            require: true,
            validate: validator.isEmail
        },
        userId: {
            type: ObjectId,
            ref: "User"
        }
    }],
    description: String,
    deadline: {
        type: String,
        required: true,
        validate: [validator.isDate, "Deadline date must be in '2023-05-23' format!"]
    },
    candidates: [{
        name: String,
        mobile: String,
        candidateId: {
            type: ObjectId,
            ref: "Candidate"
        }
    }]
})


const Jobs = mongoose.model("Job", JobsSchema);
module.exports = Jobs;