const adminServices = require("../Services/admin.services");

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

exports.adminCandidateDetails = async (req, res, next) => {
  try {
    const result = await adminServices.getCandidateByIdService(req.params.id);
    res.send({
      status: "success",
      data: result,
    });
    console.log(result);
  } catch (error) {
    next(error);
  }
};
