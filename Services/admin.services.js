const User = require("../models/user.model");
const { getUserByIDService } = require("./user.services");

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

exports.getAllManagersService = async () => {
  const result = await User.find({ role: "hiring manager" }).select(
    "-password"
  );
  return result;
};

exports.updateRoleToManagerService = async (id) => {
  const userPresentRole = await getUserByIDService(id);
  if (userPresentRole === "hiring manager") {
    const result = await User.findByIdAndUpdate(id, {
      $set: { role: "hiring manager" },
    });
    return result;
  } else {
    throw new Error("This user already a 'Hiring Manager'");
  }
};
