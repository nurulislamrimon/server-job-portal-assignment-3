const Jobs = require("../Models/jobs.model")

exports.postJobsService = async (job) => {
    const result = await Jobs.create(job);
    console.log(result);

    return result;
}