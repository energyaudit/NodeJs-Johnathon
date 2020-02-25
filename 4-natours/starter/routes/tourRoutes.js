// /////////////////////////////////
// /////////////////////////////////version 1
// const express = require('express');
// const router = express.Router(); //by convention use router only not tourRouter,so need change following corresponding to Router too.
// const fs = require('fs');
// //now the ${__dirname} is routes, so very important to change to add .. before/dev-data,because need go up one level to reach dev-data level
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );
// const getAllTours = (req, res) => {
//   console.log(req.requestTime);
//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime,
//     results: tours.length,
//     data: {
//       tours
//     }
//   });
// };
// const getTour = (req, res) => {
//   //app.get('/api/v1/tours/:id:y?' y? means optional
//   console.log(req.params); //:id means define id as para,and will return value from req
//   //from above log you can see the id got is string,use js trick of *1 to coerce into integer
//   const id = req.params.id * 1;
//   //handle if request out of range id
//   if (id > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   const tour = tours.find(el => el.id === id); //find is array method loop array current elemnt to find
//   // if(id>tours.length){//if cannot find this id
//   if (!tour) {
//     //if cannot find this id of tour
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tours: tour
//     }
//   });
// };
// const createTour = (req, res) => {
//   //need MIDDLEWARES so go up to get it
//   // console.log(req.body);
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body); //Object.assign merge 2 object,to merge the newid into it
//   tours.push(newTour);
//   //tours is object so need stringify to make it can write into .json file
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     err => {
//       //this call back has only err as para
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour
//         }
//       });
//     }
//   );
//   // res.send('Done');//this must comment out ,if response send twice,error
//   //to key tour value is a object
// };
// const updateTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     //if cannot find this id of tour
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   //only put place hodler ,not real patch
//   res.status(201).json({
//     status: 'success',
//     data: {
//       tour: '<Update tour here>'
//     }
//   });
// };
// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     //if cannot find this id of tour
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   //only put place hodler ,not real patch
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };

// //tourRouter//change to Router match top name change
// router.route('/')
//   .get(getAllTours)
//   .post(createTour);

// //tourRouter//change to Router match top name change
// router.route('/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);

// module.exports = router;//if have only one thing to export use module.exports

/////////////////////////////////
/////////////////////////////////version 2,split into controller
const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router(); //by convention use router only not tourRouter,so need change following corresponding to Router too.
const fs = require('fs');
//now the ${__dirname} is routes, so very important to change to add .. before/dev-data,because need go up one level to reach dev-data level
//handlers,all follow handlers lines commented out into controller
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );
// const getAllTours = (req, res) => {
//   console.log(req.requestTime);
//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime,
//     results: tours.length,
//     data: {
//       tours
//     }
//   });
// };
// const getTour = (req, res) => {
//   //app.get('/api/v1/tours/:id:y?' y? means optional
//   console.log(req.params); //:id means define id as para,and will return value from req
//   //from above log you can see the id got is string,use js trick of *1 to coerce into integer
//   const id = req.params.id * 1;
//   //handle if request out of range id
//   if (id > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   const tour = tours.find(el => el.id === id); //find is array method loop array current elemnt to find
//   // if(id>tours.length){//if cannot find this id
//   if (!tour) {
//     //if cannot find this id of tour
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tours: tour
//     }
//   });
// };
// const createTour = (req, res) => {
//   //need MIDDLEWARES so go up to get it
//   // console.log(req.body);
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body); //Object.assign merge 2 object,to merge the newid into it
//   tours.push(newTour);
//   //tours is object so need stringify to make it can write into .json file
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     err => {
//       //this call back has only err as para
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour
//         }
//       });
//     }
//   );
//   // res.send('Done');//this must comment out ,if response send twice,error
//   //to key tour value is a object
// };
// const updateTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     //if cannot find this id of tour
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   //only put place hodler ,not real patch
//   res.status(201).json({
//     status: 'success',
//     data: {
//       tour: '<Update tour here>'
//     }
//   });
// };
// const deleteTour = (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     //if cannot find this id of tour
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   //only put place hodler ,not real patch
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };
//routes
//tourRouter//all the following route method change to added "tourController."" in front 
router.route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

//tourRouter//change to Router match top name change
router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
//all following routs  methods replaced by tourController. add infront
// router.route('/')
//   .get(getAllTours)
//   .post(createTour);

// //tourRouter//change to Router match top name change
// router.route('/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);

module.exports = router;//if have only one thing to export use module.exports
/////////////////////////////////
/////////////////////////////////version ?
// const express = require('express');
// const tourController = require('./../controllers/tourController');

// const router = express.Router();

// router.param('id', tourController.checkID);

// router
//   .route('/')
//   .get(tourController.getAllTours)
//   .post(tourController.checkBody, tourController.createTour);

// router
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

// module.exports = router;
