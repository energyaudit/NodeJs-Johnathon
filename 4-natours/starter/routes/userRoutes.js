/////////////////////////////////
/////////////////////////////////version 1,split route handler into controller-MVC
// const express = require('express');
// //handlers
// const getAllUsers = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
// const createUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
// const getUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
// const updateUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
// const deleteUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet defined!'
//   });
// };
// const router = express.Router();

// router
//   .route('/')
//   .get(getAllUsers)
//   .post(createUser);

// router
//   .route('/:id')
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);

// module.exports = router;
/////////////////////////////////
/////////////////////////////////version 2,split route handler into controller-MVC
// const express = require('express');
// const userController = require('./../controllers/userController');//all following user handler lines replaced by this line
// //handlers,following handlers lines split into usercontrollers to be comment out
// // const getAllUsers = (req, res) => {
// //   res.status(500).json({
// //     status: 'error',
// //     message: 'This route is not yet defined!'
// //   });
// // };
// // const createUser = (req, res) => {
// //   res.status(500).json({
// //     status: 'error',
// //     message: 'This route is not yet defined!'
// //   });
// // };
// // const getUser = (req, res) => {
// //   res.status(500).json({
// //     status: 'error',
// //     message: 'This route is not yet defined!'
// //   });
// // };
// // const updateUser = (req, res) => {
// //   res.status(500).json({
// //     status: 'error',
// //     message: 'This route is not yet defined!'
// //   });
// // };
// // const deleteUser = (req, res) => {
// //   res.status(500).json({
// //     status: 'error',
// //     message: 'This route is not yet defined!'
// //   });
// // };
// const router = express.Router();
// //all handlers method add "userController." in front
// // router following lines be commented out by replacement
// //   .route('/')
// //   .get(getAllUsers)
// //   .post(createUser);

// // router
// //   .route('/:id')
// //   .get(getUser)
// //   .patch(updateUser)
// //   .delete(deleteUser);
// router
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

// module.exports = router;

/////////////////////////////////
/////////////////////////////////version 3,authentication ,Modelling Users
const express = require('express');
const userController = require('./../controllers/userController'); //all following user handler lines replaced by this line
const authController = require('./../controllers/authController');
const router = express.Router();
//for signup there is only post,so no need get,patch,delete
router.post('/signup', authController.signup); //this is the authentication function just created.so need add import line above
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
/////////////////////////////////
/////////////////////////////////version ?
// const express = require('express');
// const userController = require('./../controllers/userController');

// const router = express.Router();

// router
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

// module.exports = router;
