const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const validator = require("validator");

const CandidateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: validator.isEmail,
      lowercase: true,
    },
    cv: {
      type: String,
      // validate: validator.isURL,
    },
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    appliedFor: {
      title: {
        type: String,
        required: true,
      },
      jobId: {
        type: ObjectId,
        ref: "Job",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Candidate = mongoose.model("Candidate", CandidateSchema);
module.exports = Candidate;
