const adminServices = require("../services/admin.services");

exports.adminCandidateController = async (req, res, next) => {
  try {
    const result = await adminServices.getAllCandidatesService();

    res.send({
      status: "success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.adminCandidateDetailsController = async (req, res, next) => {
  try {
    const result = await adminServices.getCandidateByIdService(req.params.id);
    res.send({
      status: "success",
      data: result,
    });
    console.log(`Candidate ${result._id} is responsed!`);
  } catch (error) {
    next(error);
  }
};

exports.adminManagersController = async (req, res, next) => {
  const result = await adminServices.getAllManagersService();
  try {
    res.send({
      status: "success",
      data: result,
    });
    console.log(`${result.length} managers responsed!`);
  } catch (error) {
    next(error);
  }
};

exports.updateRoleToManagerController = async (req, res, next) => {
  try {
    const result = await adminServices.updateRoleToManagerService(
      req.params.id
    );

    res.send({
      status: "success",
      data: `${result._id} is updated to manager!`,
    });
    console.log(`${result._id} is updated to manager!`);
  } catch (error) {
    next(error);
  }
};
