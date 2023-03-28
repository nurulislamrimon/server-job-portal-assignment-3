const Jobs = require("../Models/jobs.model")
const User = require("../Models/user.model")


exports.assignedJobToManager = async (email, { _id, title }) => {
    const job = { jobId: _id, title };
    const result = await User.findOneAndUpdate(
        { email: email },
        { $push: { assignedJobs: job } })
    return result;
}

exports.postJobsService = async (job) => {
    const result = await Jobs.create(job);
    return result;
}