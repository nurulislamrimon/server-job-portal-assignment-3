const User = require("../models/user.model");

const verifyAuthorization = (...roles) => {
  return async (req, res, next) => {
    try {
      const userEmail = req.headers.decoded.email;
      const user = await User.findOne({ email: userEmail });
      const isAuthorized = roles.includes(user.role);
      if (!isAuthorized) {
        const unAuthorizedError = new Error(
          "You are not authorized for this action!"
        );
        unAuthorizedError.code = 404;
        throw unAuthorizedError;
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  };
};

module.exports = verifyAuthorization;
