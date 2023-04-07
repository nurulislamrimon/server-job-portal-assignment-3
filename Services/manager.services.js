const Jobs = require("../models/jobs.model");

exports.getJobsByManagerService = async (email) => {
  const result = await Jobs.find({ "manager.email": email }).populate(
    "manager.id"
  );
  return result;
};
