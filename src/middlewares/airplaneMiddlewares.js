const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: true,
      message: "Something went wrong while creating airplane",
      data: {},
      error: {explanation:'model number is not found in onComing request in correct format'},
    });
  }
  next();
}

module.exports = {
    validateCreateRequest,
}