const Jobs = require("../Models/jobs.model")
const User = require("../Models/user.model")

exports.getJobById = async (id) => {
    const result = await Jobs.findById(id);
    return result;
}

exports.getAlljobs = async (query) => {
    // getting filters
    const excludeFields = ["sort", "limit", "skip"];
    let filters = { ...query };
    excludeFields.forEach(exItem => {
        delete filters[exItem];
    });
    filters = JSON.stringify(filters);
    filters = filters.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
    filters = JSON.parse(filters);
    // fetching data
    const result = await Jobs.find(filters).select("-candidates").sort(query.sort);
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