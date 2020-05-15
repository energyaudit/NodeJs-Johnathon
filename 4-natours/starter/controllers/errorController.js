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
//   } else {
//     // Programming or other unknown error: don't leak error details
//     // 1) Log error
//     console.error('ERROR 💥', err);

//     // 2) Send generic message
//     res.status(500).json({
//       status: 'error',
//       message: 'Something went very wrong!'
//     });
//   }
//   // follwing 3 lines move into err.isOperational branch
//   // res.status(err.statusCode).json({
//   //   status: err.status,
//   //   message: err.message
//   // });
// };
// module.exports = (err, req, res, next) => {
//   console.log(err.stack); // show where the error happened
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   if (process.env.NODE_ENV === 'development') {
//     sendErrorDev(err, res); //this function replaced following 6 lines
//   } else if (process.env.NODE_ENV === 'production') {
//     sendErrorProd(err, res); //this function replaced following 6 lines
//   }
// };
//////////////////////////////////
///////////////////////////////////version6,Handling Invalid Database IDs
// const AppError = require('./../utils/appError');

// const handleCastErrorDB = err => {
//   const message = `Invalid ${err.path}: ${err.value}.`; //will show client the err filed,err value,for exp:Invalid _id: wwwww
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
//   // follwing 3 lines move into err.isOperational branch
//   // res.status(err.statusCode).json({
//   //   status: err.status,
//   //   message: err.message
//   // });
// };
// module.exports = (err, req, res, next) => {
//   // following 3 lines commented out
//   console.log(err.stack); // show where the error happened
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   console.log('process.env.NODE_ENV is: ', process.env.NODE_ENV);
//   if (process.env.NODE_ENV === 'development') {
//     sendErrorDev(err, res); //this function replaced following 6 lines
//   } else if (process.env.NODE_ENV === 'production') {
//     let error = { ...err }; //err will be use as para,so not use err anymore and create new one error,let means it will change,use destructor

//     if (error.name === 'CastError') error = handleCastErrorDB(error); //use error as para create new app error
//     // sendErrorProd(err, res); //this function replaced following 6 lines,change err to error
//     sendErrorProd(error, res);
//   }
// };
//////////////////////////////////
///////////////////////////////////version7,Handling Duplicate Database Fields
// const AppError = require('./../utils/appError');

// const handleCastErrorDB = err => {
//   const message = `Invalid ${err.path}: ${err.value}.`; //will show client the err filed,err value,for exp:Invalid _id: wwwww
//   return new AppError(message, 400);
// };
// const handleDuplicateFieldsDB = err => {
//   //this funtion for production only
//   const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]; //errmsg is filed in postman of " "errmsg": "E11000 duplicate key error collection...",this error also created by mongo.
//   // const value = err.errmsg.match(/(["'])(\\?.)*?\1/); //console all the values,it will show array, so we only interested first one index is 0.
//   console.log('the wrong value postman send is :  ', value);

//   const message = `Duplicate field value: ${value}. Please use another value!`;
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
//   // following 3 lines commented out
//   console.log(err.stack); // show where the error happened
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   console.log('process.env.NODE_ENV is: ', process.env.NODE_ENV);
//   if (process.env.NODE_ENV === 'development') {
//     sendErrorDev(err, res); //this function replaced following 6 lines
//   } else if (process.env.NODE_ENV === 'production') {
//     let error = { ...err }; //err will be use as para,so not use err anymore and create new one error,let means it will change,use destructor

//     if (error.name === 'CastError') error = handleCastErrorDB(error); //use error as para create new app error
//     if (error.code === 11000) error = handleDuplicateFieldsDB(error);
//     sendErrorProd(error, res);
//   }
// };
//////////////////////////////////
///////////////////////////////////version8,Handling Duplicate Database Fields
// const AppError = require('./../utils/appError');

// const handleCastErrorDB = err => {
//   const message = `Invalid ${err.path}: ${err.value}.`; //will show client the err filed,err value,for exp:Invalid _id: wwwww
//   return new AppError(message, 400);
// };
// const handleDuplicateFieldsDB = err => {
//   //this funtion for production only
//   const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]; //errmsg is filed in postman of " "errmsg": "E11000 duplicate key error collection...",this error also created by mongo.
//   // const value = err.errmsg.match(/(["'])(\\?.)*?\1/); //console all the values,it will show array, so we only interested first one index is 0.
//   console.log('the wrong value postman send is :  ', value);

//   const message = `Duplicate field value: ${value}. Please use another value!`;
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
//   // following 3 lines commented out
//   console.log(err.stack); // show where the error happened
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   console.log('process.env.NODE_ENV is: ', process.env.NODE_ENV);
//   if (process.env.NODE_ENV === 'development') {
//     sendErrorDev(err, res); //this function replaced following 6 lines
//   } else if (process.env.NODE_ENV === 'production') {
//     let error = { ...err }; //err will be use as para,so not use err anymore and create new one error,let means it will change,use destructor

//     if (error.name === 'CastError') error = handleCastErrorDB(error); //use error as para create new app error
//     if (error.code === 11000) error = handleDuplicateFieldsDB(error);
//     sendErrorProd(error, res);
//   }
// };
//////////////////////////////////
///////////////////////////////////version9,Handling Mongoose Validation Errors
// const AppError = require('./../utils/appError');

// const handleCastErrorDB = err => {
//   const message = `Invalid ${err.path}: ${err.value}.`; //will show client the err filed,err value,for exp:Invalid _id: wwwww
//   return new AppError(message, 400);
// };
// const handleDuplicateFieldsDB = err => {
//   //this funtion for production only
//   const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]; //errmsg is filed in postman of " "errmsg": "E11000 duplicate key error collection...",this error also created by mongo.
//   // const value = err.errmsg.match(/(["'])(\\?.)*?\1/); //console all the values,it will show array, so we only interested first one index is 0.
//   console.log('the wrong value postman send is :  ', value);

//   const message = `Duplicate field value: ${value}. Please use another value!`;
//   return new AppError(message, 400);
// };
// const handleValidationErrorDB = err => {
//   //loop to get all objects inside error object:errors,message,name,statuscode,stack,.....,
//   const errors = Object.values(err.errors).map(el => el.message); //  const errors is arrary,map(=>) will iterate it.
//   const message = `Invalid input data. ${errors.join('. ')}`; //join all of them into one string
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
//   // following 3 lines commented out
//   console.log(err.stack); // show where the error happened
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   console.log('process.env.NODE_ENV is: ', process.env.NODE_ENV);
//   if (process.env.NODE_ENV === 'development') {
//     sendErrorDev(err, res); //this function replaced following 6 lines
//   } else if (process.env.NODE_ENV === 'production') {
//     let error = { ...err }; //err will be use as para,so not use err anymore and create new one error,let means it will change,use destructor

//     if (error.name === 'CastError') error = handleCastErrorDB(error); //use error as para create new app error
//     if (error.code === 11000) error = handleDuplicateFieldsDB(error);
//     if (error.name === 'ValidationError')
//       error = handleValidationErrorDB(error); //use development error object,all its value are lot of object too,then found object: error.name:'ValidationError'
//     sendErrorProd(error, res);
//   }
// };
//////////////////////////////////
///////////////////////////////////version10, Errors Outside Express: Unhandled Rejections
const AppError = require('./../utils/appError');

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`; //will show client the err filed,err value,for exp:Invalid _id: wwwww
  return new AppError(message, 400);
};
const handleDuplicateFieldsDB = err => {
  //this funtion for production only
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]; //errmsg is filed in postman of " "errmsg": "E11000 duplicate key error collection...",this error also created by mongo.
  // const value = err.errmsg.match(/(["'])(\\?.)*?\1/); //console all the values,it will show array, so we only interested first one index is 0.
  console.log('the wrong value postman send is :  ', value);

  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};
const handleValidationErrorDB = err => {
  //loop to get all objects inside error object:errors,message,name,statuscode,stack,.....,
  const errors = Object.values(err.errors).map(el => el.message); //  const errors is arrary,map(=>) will iterate it.
  const message = `Invalid input data. ${errors.join('. ')}`; //join all of them into one string
  return new AppError(message, 400);
};
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error('ERROR 💥', err);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }
};
module.exports = (err, req, res, next) => {
  // following 3 lines commented out
  console.log(err.stack); // show where the error happened
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  console.log('process.env.NODE_ENV is: ', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res); //this function replaced following 6 lines
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err }; //err will be use as para,so not use err anymore and create new one error,let means it will change,use destructor

    if (error.name === 'CastError') error = handleCastErrorDB(error); //use error as para create new app error
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error); //use development error object,all its value are lot of object too,then found object: error.name:'ValidationError'
    sendErrorProd(error, res);
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
