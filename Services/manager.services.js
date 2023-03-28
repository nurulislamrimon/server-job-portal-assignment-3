const Jobs = require("../Models/jobs.model");

exports.getJobsByManagerService = async (email) => {
    const result = await Jobs.find({ "manager.email": email });
    return result;
}
