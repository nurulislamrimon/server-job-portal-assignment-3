const mongoose = require('mongoose');
const validator = require("validator");
const ObjectId = mongoose.Schema.Types;


const JobSchema = mongoose.Schema({
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
        required: [true, "Job type is required"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    },
    salary: {
        type: String,
        required: true
    },
    assignedBy: [{
        name: String,
        userId: {
            type: ObjectId,
            ref: "User"
        }
    }],
    description: String,
    deadline: {
        type: String,
        validate: validator.isDate
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

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;