class AppError extends Error {
  constructor(message, statusCode) {
    super(message); //build in error class has only one para

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; //this is operational error, so set this property to true

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
