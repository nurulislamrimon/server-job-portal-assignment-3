const User = require("../Models/user.model");

exports.getAllCandidatesService = async () => {
  const result = await User.find({ role: "candidate" }).select(
    "-password -appliedJobs -assignedJobs"
  );
  return result;
};

exports.getCandidateByIdService = async (id) => {
  const result = await User.findById(id)
    .select("-password")
    .populate("appliedJobs.applicationId");
  return result;
};
