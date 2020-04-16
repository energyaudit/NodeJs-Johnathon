//////////////////////////////////
/////////////////////////////////// version1 ,
// module.exports = (err, req, res, next) => {
//   //globalErrorHandler ,4 arguments middleware,err first
//   console.log(err.stack); //show where the error happened

//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   res.status(err.statusCode).json({
//     status: err.status,
//     message: err.message
//   });
// };
//////////////////////////////////
///////////////////////////////////version2,Errors During Development vs Production, make a if else to differentiate dev&prod
// module.exports = (err, req, res, next) => {
//   console.log(err.stack); //show where the error happened
//   if (process.env.NODE_ENV === 'development') {
//   } else if (process.env.NODE_ENV === 'production') {
//   }
//   //following lines will move into development
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   res.status(err.statusCode).json({
//     status: err.status,
//     message: err.message
//   });
// };
//////////////////////////////////
///////////////////////////////////version3,Errors During Development vs Production, make a if else to differentiate dev&prod
// module.exports = (err, req, res, next) => {
//   console.log(err.stack); // show where the error happened
//     err.statusCode = err.statusCode || 500;
//     err.status = err.status || 'error';
//   if (process.env.NODE_ENV === 'development') {

//     res.status(err.statusCode).json({
//       status: err.status,
//       error: err,
//       message: err.message,
//       stack: err.stack
//     });
//   } else if (process.env.NODE_ENV === 'production') {
//     // production not want all err and stack
//     res.status(err.statusCode).json({
//       status: err.status,
//       message: err.message
//     });
//   }
// };
//////////////////////////////////
/////////////////////////////////// version4,Errors During Development vs Production,make send error function
// const sendErrorDev = (err, res) => {
//   res.status(err.statusCode).json({
//     status: err.status,
//     error: err,
//     message: err.message,
//     stack: err.stack
//   });
// };

// const sendErrorProd = (err, res) => {
//   res.status(err.statusCode).json({
//     status: err.status,
//     message: err.message
//   });
// };
// module.exports = (err, req, res, next) => {
//   console.log(err.stack); // show where the error happened
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   if (process.env.NODE_ENV === 'development') {
//     sendErrorDev(err, res); //this function replaced following 6 lines
//     // res.status(err.statusCode).json({
//     //   status: err.status,
//     //   error: err,
//     //   message: err.message,
//     //   stack: err.stack
//     // });
//   } else if (process.env.NODE_ENV === 'production') {
//     sendErrorProd(error, res); //this function replaced following 6 lines
//     // res.status(err.statusCode).json({
//     //   status: err.status,
//     //   message: err.message
//     // });
//   }
// };
//////////////////////////////////
///////////////////////////////////version5,Errors Development vs Production,delete commented and in prod only send operation error ornot just simple
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
  } else {
  }
  // follwing 3 lines move into err.isOperational branch
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
};
module.exports = (err, req, res, next) => {
  console.log(err.stack); // show where the error happened
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res); //this function replaced following 6 lines
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorProd(error, res); //this function replaced following 6 lines
  }
};
//////////////////////////////////
///////////////////////////////////version ?
// const AppError = require('./../utils/appError');

// const handleCastErrorDB = err => {
//   const message = `Invalid ${err.path}: ${err.value}.`;
//   return new AppError(message, 400);
// };

// const handleDuplicateFieldsDB = err => {
//   const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
//   console.log(value);

//   const message = `Duplicate field value: ${value}. Please use another value!`;
//   return new AppError(message, 400);
// };
// const handleValidationErrorDB = err => {
//   const errors = Object.values(err.errors).map(el => el.message);

//   const message = `Invalid input data. ${errors.join('. ')}`;
//   return new AppError(message, 400);
// };

// const sendErrorDev = (err, res) => {
//   res.status(err.statusCode).json({
//     status: err.status,
//     error: err,
//     message: err.message,
//     stack: err.stack
//   });
// };

// const sendErrorProd = (err, res) => {
//   // Operational, trusted error: send message to client
//   if (err.isOperational) {
//     res.status(err.statusCode).json({
//       status: err.status,
//       message: err.message
//     });

//     // Programming or other unknown error: don't leak error details
//   } else {
//     // 1) Log error
//     console.error('ERROR 💥', err);

//     // 2) Send generic message
//     res.status(500).json({
//       status: 'error',
//       message: 'Something went very wrong!'
//     });
//   }
// };

// module.exports = (err, req, res, next) => {
//   // console.log(err.stack);

//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';

//   if (process.env.NODE_ENV === 'development') {
//     sendErrorDev(err, res);
//   } else if (process.env.NODE_ENV === 'production') {
//     let error = { ...err };

//     if (error.name === 'CastError') error = handleCastErrorDB(error);
//     if (error.code === 11000) error = handleDuplicateFieldsDB(error);
//     if (error.name === 'ValidationError')
//       error = handleValidationErrorDB(error);

//     sendErrorProd(error, res);
//   }
// };
