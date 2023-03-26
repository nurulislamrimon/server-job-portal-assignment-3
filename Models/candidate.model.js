const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types;
const validator = require("validator");

const CandidateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: validator.isEmail
    },
    cv: String,
    appliedFor: [{
        title: String,
        jobId: {
            type: ObjectId,
            ref: "Job"
        }
    }]
})

const Candidate = mongoose.model("Candidate", CandidateSchema);
module.exports = Candidate;