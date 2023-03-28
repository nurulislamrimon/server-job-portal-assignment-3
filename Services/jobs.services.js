const Jobs = require("../Models/jobs.model")
const User = require("../Models/user.model")

exports.getJobById = async (id) => {
    const result = await Jobs.findById(id);
    return result;
}

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

exports.updateJobByIdService = async (id, updateData) => {
    if (updateData.manager) {
        delete updateData.manager;
    }
    const result = await Jobs.updateOne({ _id: id }, { $set: updateData }, { new: true }, (err, data) => {
        if (err) {
            throw new Error("Failed to update data!")
        } else {
            return data
        }

    });
    return result;
}