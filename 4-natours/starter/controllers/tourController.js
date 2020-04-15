/////////////////////////////////
/////////////////////////////////version 1

// const fs = require('fs');
// //now the ${__dirname} is routes, so very important to change to add .. before/dev-data,because need go up one level to reach dev-data level
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );
// exports.getAllTours = (req, res) => {
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
// exports.getTour = (req, res) => {
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
// exports.createTour = (req, res) => {
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
// exports.updateTour = (req, res) => {
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
// exports.deleteTour = (req, res) => {
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
/////////////////////////////////
/////////////////////////////////version 2,route handler lot of similar code check if id valid so create a new middlewear to dry

// const fs = require('fs');
// //now the ${__dirname} is routes, so very important to change to add .. before/dev-data,because need go up one level to reach dev-data level
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );
// //use middleware to write the id valid check fucntion
// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is :${val}`); //check if function running
//   if (req.params.id * 1 > tours.length) {
//     //if cannot find this id of tour,the return is critical ornot even response 404 still goto next step

//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price'
//     });
//   }
//   //everything ok then goto next()
//   next();
// };
// exports.getAllTours = (req, res) => {
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
// exports.getTour = (req, res) => {
//   //app.get('/api/v1/tours/:id:y?' y? means optional
//   console.log(req.params); //:id means define id as para,and will return value from req
//   //from above log you can see the id got is string,use js trick of *1 to coerce into integer
//   const id = req.params.id * 1;
//   //handle if request out of range id
//   // if (id > tours.length) {
//   //   return res.status(404).json({
//   //     status: 'fail',
//   //     message: 'Invalid ID'
//   //   });
//   // }
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
// exports.createTour = (req, res) => {
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
// exports.updateTour = (req, res) => {
//   //invalid id lines comment out replace by function
//   // if (req.params.id * 1 > tours.length) {
//   //   //if cannot find this id of tour
//   //   return res.status(404).json({
//   //     status: 'fail',
//   //     message: 'Invalid ID'
//   //   });
//   // }
//   //only put place hodler ,not real patch
//   res.status(201).json({
//     status: 'success',
//     data: {
//       tour: '<Update tour here>'
//     }
//   });
// };
// exports.deleteTour = (req, res) => {
//   //check id valid lines comment out to make new function
//   // if (req.params.id * 1 > tours.length) {
//   //   //if cannot find this id of tour
//   //   return res.status(404).json({
//   //     status: 'fail',
//   //     message: 'Invalid ID'
//   //   });
//   // }
//   //only put place hodler ,not real patch
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };
/////////////////////////////////
/////////////////////////////////version 3,require tour model into controller,deleted related lines of read data from json file,from now on only use data from mongodb.

// // const fs = require('fs');//  ////  lines deleted because not read from json file anymore
// //'./../' means current folder go up one level
// const Tour = require('./../models/tourModel');
// //now the ${__dirname} is routes, so very important to change to add .. before/dev-data,because need go up one level to reach dev-data level
// // following lines deleted ,because for testing only
// // const tours = JSON.parse(
// //   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// // );
// //use middleware to write the id valid check fucntion
// ////  following lines deleted because not read from json file anymore
// // exports.checkID = (req, res, next, val) => {
// //   console.log(`Tour id is :${val}`); //check if function running
// //   if (req.params.id * 1 > tours.length) {
// //     //if cannot find this id of tour,the return is critical ornot even response 404 still goto next step

// //     return res.status(404).json({
// //       status: 'fail',
// //       message: 'Invalid ID'
// //     });
// //   }
// //   next();
// // };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price'
//     });
//   }
//   //everything ok then goto next()
//   next();
// };
// exports.getAllTours = (req, res) => {
//   console.log(req.requestTime);
//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime
//     ////following lines deleted because above tours commented out
//     // results: tours.length,
//     // data: {
//     //   tours
//     // }
//   });
// };
// exports.getTour = (req, res) => {
//   //app.get('/api/v1/tours/:id:y?' y? means optional
//   console.log(req.params); //:id means define id as para,and will return value from req
//   //from above log you can see the id got is string,use js trick of *1 to coerce into integer
//   const id = req.params.id * 1;
//   //handle if request out of range id
//   // if (id > tours.length) {
//   //   return res.status(404).json({
//   //     status: 'fail',
//   //     message: 'Invalid ID'
//   //   });
//   // }

//   //// follwing lines deleted because tour commented out
//   // const tour = tours.find(el => el.id === id); //find is array method loop array current elemnt to find
//   // // if(id>tours.length){//if cannot find this id
//   // if (!tour) {
//   //   //if cannot find this id of tour
//   //   return res.status(404).json({
//   //     status: 'fail',
//   //     message: 'Invalid ID'
//   //   });
//   // }

//   // res.status(200).json({
//   //   status: 'success',
//   //   data: {
//   //     tours: tour
//   //   }
//   // });
// };
// //// follwing lines deleted because tour commented out
// // exports.createTour = (req, res) => {
// //   //need MIDDLEWARES so go up to get it
// //   // console.log(req.body);
// //   const newId = tours[tours.length - 1].id + 1;
// //   const newTour = Object.assign({ id: newId }, req.body); //Object.assign merge 2 object,to merge the newid into it
// //   tours.push(newTour);
// //   //tours is object so need stringify to make it can write into .json file
// //   fs.writeFile(
// //     `${__dirname}/dev-data/data/tours-simple.json`,
// //     JSON.stringify(tours),
// //     err => {
// //       //// follwing lines deleted because tour commented out
// //this call back has only err as para
// // res.status(201).json({
// //   status: 'success',
// //   data: {
// //     tour: newTour
// //   }
// // });
// //     }
// //   );
// // res.send('Done');//this must comment out ,if response send twice,error
// //to key tour value is a object
// // };
// exports.createTour = (req, res) => {
//   res.status(201).json({
//     status: 'success'
//   });
// };

// exports.updateTour = (req, res) => {
//   //invalid id lines comment out replace by function
//   // if (req.params.id * 1 > tours.length) {
//   //   //if cannot find this id of tour
//   //   return res.status(404).json({
//   //     status: 'fail',
//   //     message: 'Invalid ID'
//   //   });
//   // }
//   //only put place hodler ,not real patch
//   res.status(201).json({
//     status: 'success'
//     //// follwing lines deleted because tour commented out
//     // data: {
//     //   tour: '<Update tour here>'
//     // }
//   });
// };
// exports.deleteTour = (req, res) => {
//   //check id valid lines comment out to make new function
//   // if (req.params.id * 1 > tours.length) {
//   //   //if cannot find this id of tour
//   //   return res.status(404).json({
//   //     status: 'fail',
//   //     message: 'Invalid ID'
//   //   });
//   // }
//   //only put place hodler ,not real patch
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };

/////////////////////////////////
/////////////////////////////////version 4,deleted related lines of read data from json file,from now on only use data from mongodb.delete commented lines

// const Tour = require('./../models/tourModel');
// //following lines deleted because mongodb schema check this now.
// // exports.checkBody = (req, res, next) => {
// //   if (!req.body.name || !req.body.price) {
// //     return res.status(400).json({
// //       status: 'fail',
// //       message: 'Missing name or price'
// //     });
// //   }
// //   //everything ok then goto next()
// //   next();
// // };
// exports.getAllTours = (req, res) => {
//   console.log(req.requestTime);
//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime
//   });
// };
// exports.getTour = async (req, res) => {
//   console.log(req.params); //:id means define id as para,and will return value from req

//   const id = req.params.id * 1;
// };

// exports.createTour = (req, res) => {
//   //document method
//   // const newTour=new Tour({})
//    // newTour.save()
//   res.status(201).json({
//     status: 'success'
//   });
// };

// exports.updateTour = (req, res) => {
//   res.status(201).json({
//     status: 'success'
//   });
// };
// exports.deleteTour = (req, res) => {
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };

/////////////////////////////////
/////////////////////////////////version 5,from now on only use data from mongodb.delete commented lines,create document-tour

// const Tour = require('./../models/tourModel');

// exports.getAllTours = (req, res) => {
//   console.log(req.requestTime);
//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime
//   });
// };
// exports.getTour = async (req, res) => {
//   console.log(req.params); //:id means define id as para,and will return value from req

//   const id = req.params.id * 1;
// };
// //following lines change to mongdb create document
// // exports.createTour = (req, res) => {
// //   //document method
// //   // const newTour=new Tour({})
// //   // newTour.save()
// //   res.status(201).json({
// //     status: 'success'
// //   });
// // };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = (req, res) => {
//   res.status(201).json({
//     status: 'success'
//   });
// };
// exports.deleteTour = (req, res) => {
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };
/////////////////////////////////
/////////////////////////////////version 6,read documents from mongodb.

// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async(req, res) => {
//   // console.log(req.requestTime);//delete,now use mongodb
//   const tours =await Tour.find()//return a promise await-and value is array, so need goto function top line add async
//   //find also change into json format for us,next step put all these lines into try{}
//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime,
//     results:tours.length,
//     data: {
//       tours
//     }
//   });
// };
// exports.getTour = async (req, res) => {
//   console.log(req.params); //:id means define id as para,and will return value from req

//   const id = req.params.id * 1;
// };
// //following lines change to mongdb create document
// // exports.createTour = (req, res) => {
// //   //document method
// //   // const newTour=new Tour({})
// //   // newTour.save()
// //   res.status(201).json({
// //     status: 'success'
// //   });
// // };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = (req, res) => {
//   res.status(201).json({
//     status: 'success'
//   });
// };
// exports.deleteTour = (req, res) => {
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };

/////////////////////////////////
/////////////////////////////////version 7,read documents from mongodb.put getalltours codes lines into try{}

// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async (req, res) => {
//   try {
//     const tours = await Tour.find(); //return a promise await-and value is array, so need goto function top line add async
//     //find also change into json format for us,next step put all these lines into try{}
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()//Model.prototype.save(),means use for instance not class
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = (req, res) => {
//   res.status(201).json({
//     status: 'success'
//   });
// };
// exports.deleteTour = (req, res) => {
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };
/////////////////////////////////
/////////////////////////////////version 8,update documents from mongodb.
// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async (req, res) => {
//   try {
//     const tours = await Tour.find(); //return a promise await-and value is array, so need goto function top line add async
//     //find also change into json format for us,next step put all these lines into try{}
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = (req, res) => {
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };
/////////////////////////////////
/////////////////////////////////version 9,delete documents from mongodb.

// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async (req, res) => {
//   try {
//     const tours = await Tour.find(); //return a promise await-and value is array, so need goto function top line add async
//     //find also change into json format for us,next step put all these lines into try{}
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 10,making API better, Filtering.
// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async (req, res) => {
//   try {
//     console.log(req.query);
//     const tours = await Tour.find({
//       duration: 5,
//       difficulty: 'easy'
//     }); //return a promise await-and value is array, so need goto function top line add async
//     //find also change into json format for us,next step put all these lines into try{}
//        res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 12,making API better, Filtering.await
// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async (req, res) => {
//   try {
//     //build query
//     const queryObj = { ...req.query };
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     excludedFields.forEach(el => delete queryObj[el]); //delete excludeFields
//     console.log(req.query, queryObj);
//     //{ duration: '5', difficulty: 'easy' } method same as req.query
//     //change following req.query to queryObj.follwing line commented out
//     // const tours = await Tour.find(req.query);
//     const tours = await Tour.find(queryObj);
//     //using mongoose chained method
//     // const tours = await Tour.find()
//     //   .where('duration')
//     //   .equals(5)
//     //   .where('difficulty')
//     //   .equals('easy');
//     //Execute Query

//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 12,making API better, Filtering.await
// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async (req, res) => {
//   try {
//     //build query
//     //1)Filtering
//     const queryObj = { ...req.query };
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     excludedFields.forEach(el => delete queryObj[el]); //delete excludeFields
//     console.log(req.query, queryObj);
//     //{ duration: '5', difficulty: 'easy' } method same as req.query
//     //change following req.query to queryObj.follwing line commented out
//     // const tours = await Tour.find(req.query);
//     // const tours = await Tour.find(queryObj);//assign to a variable of the returned promise
//     //2)Advanced filtering
//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//     console.log(JSON.parse(queryStr));
//     const query = await Tour.find(JSON.parse(queryStr));

//     //using mongoose chained method
//     // const tours = await Tour.find()
//     //   .where('duration')
//     //   .equals(5)
//     //   .where('difficulty')
//     //   .equals('easy');
//     //Execute Query
//     const tours = await query;
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 12,making API better, sorting
// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async (req, res) => {
//   try {
//     //build query
//     //1A)Filtering
//     const queryObj = { ...req.query };
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     excludedFields.forEach(el => delete queryObj[el]); //delete excludeFields
//     console.log(req.query, queryObj);

//     //1B)Advanced filtering
//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//     console.log(JSON.parse(queryStr));
//     //change following line const to let,that we need change it now
//     // const query = await Tour.find(JSON.parse(queryStr));
//     let query = Tour.find(JSON.parse(queryStr));
//     //2)sorting
//     if (req.query.sort) {
//       // const sortBy=req.query.sort.split(',').join(' ');//split into array then join by space
//       query = query.sort(req.query.sort);//Will be changed to sortBy next step
//     }
//     const tours = await query;
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 12,making API better, sorting
// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async (req, res) => {
//   try {
//     //build query
//     //1A)Filtering
//     const queryObj = { ...req.query };
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     excludedFields.forEach(el => delete queryObj[el]); //delete excludeFields
//     console.log(req.query, queryObj);

//     //1B)Advanced filtering
//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//     console.log(JSON.parse(queryStr));
//     //change following line const to let,that we need change it now
//     // const query = await Tour.find(JSON.parse(queryStr));
//     let query = Tour.find(JSON.parse(queryStr));
//     //2)sorting
//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(',').join(' '); //split into array then join by space
//       // query = query.sort(req.query.sort);//Will be changed to sortBy next step
//       query = query.sort(sortBy);
//     } else {
//       query = query.sort('-createdAt'); //default sorting
//     }
//     //fileds limiting
//     if (req.query.fields) {
//       const fields = req.query.fields.split(',').join(' ');
//       // query=query.select('name duration price');
//       query = query.select(fields);
//     } else {
//       query = query.select('-__v');
//     }
//     const tours = await query;
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 13,making API better, pagination
// const Tour = require('./../models/tourModel');
// // exports.getAllTours = (req, res) => {//delete and add async
// exports.getAllTours = async (req, res) => {
//   try {
//     //build query
//     //1A)Filtering
//     const queryObj = { ...req.query };
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     excludedFields.forEach(el => delete queryObj[el]); //delete excludeFields
//     console.log(req.query, queryObj);

//     //1B)Advanced filtering
//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//     console.log(JSON.parse(queryStr));
//     //change following line const to let,that we need change it now
//     // const query = await Tour.find(JSON.parse(queryStr));
//     let query = Tour.find(JSON.parse(queryStr));
//     //2)sorting
//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(',').join(' '); //split into array then join by space
//       // query = query.sort(req.query.sort);//Will be changed to sortBy next step
//       query = query.sort(sortBy);
//     } else {
//       query = query.sort('-createdAt'); //default sorting
//     }
//     //fileds limiting
//     if (req.query.fields) {
//       const fields = req.query.fields.split(',').join(' ');
//       // query=query.select('name duration price');
//       query = query.select(fields);
//     } else {
//       query = query.select('-__v');
//     }
//     //4)pagination
//     const page = req.query.page * 1 || 1; //trick of change string to number,*1,||1 by default it is 1.
//     const limit = req.query.limit * 1 || 100;
//     const skip = (page - 1) * limit;
//     //page=3&limit=10,page1,1-10,page 2:11-20,page 3:21-30,
//     //change following line place holder to variable
//     // query = query.skip(2).limit(10);
//     query = query.skip(skip).limit(limit);
//     if (req.query.page) {
//       const numTours = await Tour.countDocuments();
//       if (skip >= numTours) throw new Error('This page does not exist'); //because this line inside try block,so if throw error then will go to catch err block to show the error
//     }
//     //execute query
//     const tours = await query;
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 14,making API better, alias filtering
// const Tour = require('./../models/tourModel');
// exports.aliasTopTours = (req, res, next) => {
//   req.query.limit = '5';
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next();
// };
// exports.getAllTours = async (req, res) => {
//   try {
//     //build query
//     //1A)Filtering
//     const queryObj = { ...req.query };
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     excludedFields.forEach(el => delete queryObj[el]); //delete excludeFields
//     console.log(req.query, queryObj);

//     //1B)Advanced filtering
//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//     console.log(JSON.parse(queryStr));
//     //change following line const to let,that we need change it now
//     // const query = await Tour.find(JSON.parse(queryStr));
//     let query = Tour.find(JSON.parse(queryStr));
//     //2)sorting
//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(',').join(' '); //split into array then join by space
//       // query = query.sort(req.query.sort);//Will be changed to sortBy next step
//       query = query.sort(sortBy);
//     } else {
//       query = query.sort('-createdAt'); //default sorting
//     }
//     //fileds limiting
//     if (req.query.fields) {
//       const fields = req.query.fields.split(',').join(' ');
//       // query=query.select('name duration price');
//       query = query.select(fields);
//     } else {
//       query = query.select('-__v');
//     }
//     //4)pagination
//     const page = req.query.page * 1 || 1; //trick of change string to number,*1,||1 by default it is 1.
//     const limit = req.query.limit * 1 || 100;
//     const skip = (page - 1) * limit;
//     //page=3&limit=10,page1,1-10,page 2:11-20,page 3:21-30,
//     //change following line place holder to variable
//     // query = query.skip(2).limit(10);
//     query = query.skip(skip).limit(limit);
//     if (req.query.page) {
//       const numTours = await Tour.countDocuments();
//       if (skip >= numTours) throw new Error('This page does not exist'); //because this line inside try block,so if throw error then will go to catch err block to show the error
//     }
//     //execute query
//     const tours = await query;
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 15,API features,make class and method filter{} first

// const Tour = require('./../models/tourModel');
// exports.aliasTopTours = (req, res, next) => {
//   req.query.limit = '5';
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next();
// };

// class APIFeatures {
//   constructor(query, queryString) {
//     //queryString is from route,query as para not inside to make it reusable
//     this.query = query;
//     this.queryString = queryString;
//   }
//   filter() {} //next step move filtering code below into {}
// }
// exports.getAllTours = async (req, res) => {
//   try {
//     //build query
//     //1A)Filtering,following filtering function 8lines will move in to class APIfeature method filtering(){}
//     const queryObj = { ...req.query };
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     excludedFields.forEach(el => delete queryObj[el]); //delete excludeFields
//     console.log(req.query, queryObj);

//     //1B)Advanced filtering
//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//     console.log(JSON.parse(queryStr));
//     //change following line const to let,that we need change it now
//     // const query = await Tour.find(JSON.parse(queryStr));
//     let query = Tour.find(JSON.parse(queryStr));
//     //2)sorting
//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(',').join(' '); //split into array then join by space
//       // query = query.sort(req.query.sort);//Will be changed to sortBy next step
//       query = query.sort(sortBy);
//     } else {
//       query = query.sort('-createdAt'); //default sorting
//     }
//     //fileds limiting
//     if (req.query.fields) {
//       const fields = req.query.fields.split(',').join(' ');
//       // query=query.select('name duration price');
//       query = query.select(fields);
//     } else {
//       query = query.select('-__v');
//     }
//     //4)pagination
//     const page = req.query.page * 1 || 1; //trick of change string to number,*1,||1 by default it is 1.
//     const limit = req.query.limit * 1 || 100;
//     const skip = (page - 1) * limit;
//     //page=3&limit=10,page1,1-10,page 2:11-20,page 3:21-30,
//     //change following line place holder to variable
//     // query = query.skip(2).limit(10);
//     query = query.skip(skip).limit(limit);
//     if (req.query.page) {
//       const numTours = await Tour.countDocuments();
//       if (skip >= numTours) throw new Error('This page does not exist'); //because this line inside try block,so if throw error then will go to catch err block to show the error
//     }
//     //execute query
//     const tours = await query;
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 16,API features,refactoring APIfeatures

// const Tour = require('./../models/tourModel');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// class APIFeatures {
//   constructor(query, queryString) {
//     //queryString is from route-express,query as para not inside to make it reusable
//     this.query = query;
//     this.queryString = queryString;
//   }
//   filter() {
//     //moving filtering code below into {}
//     //1A)Filtering,following filtering function 8lines will move in to class APIfeature method filtering(){}
//     // const queryObj = { ...req.query };
//     const queryObj = { ...this.queryString }; //class method req.query not available in class,so change to this.
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     excludedFields.forEach(el => delete queryObj[el]); //delete excludeFields
//     // console.log(req.query, queryObj);

//     //1B)Advanced filtering
//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//     console.log(JSON.parse(queryStr));
//     //following line inside method to be commented out,so not query directly,use this
//     // let query = Tour.find(JSON.parse(queryStr));
//     this.query = this.query.find(JSON.parse(queryStr)); //save into query property of object this
//     return this; //if not return then next sort cannot chain,this is the query object
//   }
//   // sort() {} //next step,move all sort code into {}
//   sort() {
//     // if (req.query.sort) {
//     if (this.queryString.sort) {
//       const sortBy = this.queryString.sort.split(',').join(' '); //split into array then join by space
//       // query = query.sort(req.query.sort);//Will be changed to sortBy next step
//       this.query = this.query.sort(sortBy); //change following 2 lines 4 query into this.query
//       // query = query.sort(sortBy);
//     } else {
//       this.query = this.query.sort('-createdAt'); //default sorting
//       //  query = query.sort('-createdAt'); //default sorting
//     }
//     return this; //for next chain
//   }
//   limitFields() {
//     // if (req.query.fields) {//req.query change to this.queryString
//     if (this.queryString.fields) {
//       //req.query changed to this.queryString
//       // const fields = req.query.fields.split(',').join(' ');
//       const fields = this.queryString.fields.split(',').join(' ');
//       // query=query.select('name duration price');
//       this.query = this.query.select(fields);
//     } else {
//       this.query = this.query.select('-__v');
//     }
//     return this; //for next chain
//   }
//   paginate() {
//     // req.query changed to this.queryString
//     // const page = req.query.page * 1 || 1; //req.query change to this.queryString
//     const page = this.queryString.page * 1 || 1; //trick of change string to number,*1,||1 by default it is 1.
//     const limit = this.queryString.limit * 1 || 100;
//     const skip = (page - 1) * limit;

//     //query changed to this .query
//     this.query = this.query.skip(skip).limit(limit);
//     //following out of documents actually not error, so deleted so far
//     // if (this.queryString.page) {
//     //   const numTours = await Tour.countDocuments();
//     //   if (skip >= numTours) throw new Error('This page does not exist'); //because this line inside try block,so if throw error then will go to catch err block to show the error
//     // }
//     return this; //for next chain
//   }
// }
// exports.getAllTours = async (req, res) => {
//   try {
//     //build query
//     //2)sorting, commented out move into sort(){}
//     // if (req.query.sort) {
//     //   const sortBy = req.query.sort.split(',').join(' '); //split into array then join by space
//     //   // query = query.sort(req.query.sort);//Will be changed to sortBy next step
//     //   query = query.sort(sortBy);
//     // } else {
//     //   query = query.sort('-createdAt'); //default sorting
//     // }
//     //fileds limiting,commented out into this.query
//     // if (req.query.fields) {
//     //   const fields = req.query.fields.split(',').join(' ');
//     //   // query=query.select('name duration price');
//     //   query = query.select(fields);
//     // } else {
//     //   query = query.select('-__v');
//     // }
//     //4)pagination,commented out into paginate(){}this.queryString
//     // const page = req.query.page * 1 || 1; //trick of change string to number,*1,||1 by default it is 1.
//     // const limit = req.query.limit * 1 || 100;
//     // const skip = (page - 1) * limit;
//     // //page=3&limit=10,page1,1-10,page 2:11-20,page 3:21-30,
//     // //change following line place holder to variable
//     // // query = query.skip(2).limit(10);
//     // query = query.skip(skip).limit(limit);
//     // if (req.query.page) {
//     //   const numTours = await Tour.countDocuments();
//     //   if (skip >= numTours) throw new Error('This page does not exist'); //because this line inside try block,so if throw error then will go to catch err block to show the error
//     // }
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort
//     //following line commented out that not query anymore,must change to features.query
//     // const tours = await query;
//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     //document method
//     // const newTour = new Tour({})
//     // newTour.save()
//     //req.body from post is the para passed,create return promise save to newTour variable
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 17,API features,refactoring APIfeatures code move into seperate file
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };
// //following class move into util
// // class APIFeatures {
// //   constructor(query, queryString) {
// //     //queryString is from route-express,query as para not inside to make it reusable
// //     this.query = query;
// //     this.queryString = queryString;
// //   }
// //   filter() {
// //     const queryObj = { ...this.queryString }; //class method req.query not available in class,so change to this.
// //     const excludedFields = ['page', 'sort', 'limit', 'fields'];
// //     excludedFields.forEach(el => delete queryObj[el]); //delete excludeFields

// //     //1B)Advanced filtering
// //     let queryStr = JSON.stringify(queryObj);
// //     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
// //     console.log(JSON.parse(queryStr));

// //     this.query = this.query.find(JSON.parse(queryStr)); //save into query property of object this
// //     return this; //if not return then next sort cannot chain,this is the query object
// //   }
// //   // sort() {} //next step,move all sort code into {}
// //   sort() {
// //     // if (req.query.sort) {
// //     if (this.queryString.sort) {
// //       const sortBy = this.queryString.sort.split(',').join(' '); //split into array then join by space
// //       // query = query.sort(req.query.sort);//Will be changed to sortBy next step
// //       this.query = this.query.sort(sortBy); //change following 2 lines 4 query into this.query
// //       // query = query.sort(sortBy);
// //     } else {
// //       this.query = this.query.sort('-createdAt'); //default sorting
// //       //  query = query.sort('-createdAt'); //default sorting
// //     }
// //     return this; //for next chain
// //   }
// //   limitFields() {
// //     // if (req.query.fields) {//req.query change to this.queryString
// //     if (this.queryString.fields) {
// //       //req.query changed to this.queryString
// //       // const fields = req.query.fields.split(',').join(' ');
// //       const fields = this.queryString.fields.split(',').join(' ');
// //       // query=query.select('name duration price');
// //       this.query = this.query.select(fields);
// //     } else {
// //       this.query = this.query.select('-__v');
// //     }
// //     return this; //for next chain
// //   }
// //   paginate() {
// //     // req.query changed to this.queryString
// //     // const page = req.query.page * 1 || 1; //req.query change to this.queryString
// //     const page = this.queryString.page * 1 || 1; //trick of change string to number,*1,||1 by default it is 1.
// //     const limit = this.queryString.limit * 1 || 100;
// //     const skip = (page - 1) * limit;

// //     //query changed to this .query
// //     this.query = this.query.skip(skip).limit(limit);

// //     return this; //for next chain
// //   }
// // }
// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 18,Aggregation Pipeline: Matching and Grouping
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     const stats = await Tour.aggregate([]);//aggregate para is a array ,array is stages,each stage is a object
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 19,Aggregation Pipeline: Matching and Grouping
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     const stats = await Tour.aggregate([]); //aggregate para is a array ,array is stages,each stage is a object
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 20,Aggregation Pipeline: Matching and Grouping,by null
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     //group  by id null means group everything together,aggregate is also await process
//     const stats = await Tour.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           _id: null,
//           numTours: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgRating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       }
//     ]); //aggregate para is a array ,array is stages,each stage is a object
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 21,Aggregation Pipeline: Matching and Grouping by id
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     //group  by id null means group everything together,aggregate is also await process
//     const stats = await Tour.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           _id: '$difficulty',
//           numTours: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgRating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       }
//     ]); //aggregate para is a array ,array is stages,each stage is a object
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 22,Aggregation Pipeline: Grouping by id,_id: '$difficulty','$difficulty' is not object
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     //group  by id null means group everything together,aggregate is also await process
//     const stats = await Tour.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           _id: '$difficulty',
//           numTours: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgRating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       }
//     ]); //aggregate para is a array ,array is stages,each stage is a object
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 23,Aggregation Pipeline: Grouping by id,add operator toupper
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     //group  by id null means group everything together,aggregate is also await process
//     const stats = await Tour.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           // _id: '$difficulty',//this line commented out replace by toUpper
//           _id: { $toUpper: '$difficulty' },
//           numTours: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgRating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       }
//     ]); //aggregate para is a array ,array is stages,each stage is a object
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 24,Aggregation Pipeline: Grouping by id,sort
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     //group  by id null means group everything together,aggregate is also await process
//     const stats = await Tour.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           // _id: '$difficulty',//this line commented out replace by toUpper
//           _id: { $toUpper: '$difficulty' },
//           numTours: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgRating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       },
//       {
//         $sort: { avgPrice: 1 }
//       }
//       // ,
//       //       {
//       //   $match: { _id: { $ne: 'EASY' } }
//       // }
//     ]); //aggregate para is a array ,array is stages,each stage is a object
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 25,Aggregation Pipeline: get monthly plan,between 2 date
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     //group  by id null means group everything together,aggregate is also await process
//     const stats = await Tour.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           // _id: '$difficulty',//this line commented out replace by toUpper
//           _id: { $toUpper: '$difficulty' },
//           numTours: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgRating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       },
//       {
//         $sort: { avgPrice: 1 }
//       }
//       // ,
//       //       {
//       //   $match: { _id: { $ne: 'EASY' } }
//       // }
//     ]); //aggregate para is a array ,array is stages,each stage is a object
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getMonthlyPlan = async (req, res) => {
//   try {
//     const year = req.params.year * 1; // 2021

//     const plan = await Tour.aggregate([//write a query get full tours first then add the aggregate
//       {
//         $unwind: '$startDates'
//       },
//       {
//         $match: {
//           startDates: {
//             $gte: new Date(`${year}-01-01`),
//             $lte: new Date(`${year}-12-31`)
//           }
//         }
//       }
//     ]);

//     res.status(200).json({
//       status: 'success',
//       data: {
//         plan
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 27,Aggregation Pipeline: get monthly plan,group by startdate and how many
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     //group  by id null means group everything together,aggregate is also await process
//     const stats = await Tour.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           // _id: '$difficulty',//this line commented out replace by toUpper
//           _id: { $toUpper: '$difficulty' },
//           numTours: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgRating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       },
//       {
//         $sort: { avgPrice: 1 }
//       }

//     ]); //aggregate para is a array ,array is stages,each stage is a object
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getMonthlyPlan = async (req, res) => {
//   try {
//     const year = req.params.year * 1; // 2021

//     const plan = await Tour.aggregate([//write a query get full tours first then add the aggregate
//       {
//         $unwind: '$startDates'
//       },
//       {
//         $match: {
//           startDates: {
//             $gte: new Date(`${year}-01-01`),
//             $lte: new Date(`${year}-12-31`)
//           }
//         }
//       },
//       {
//         $group: {
//           _id: { $month: '$startDates' },
//           numTourStarts: { $sum: 1 }
//         }
//       }
//     ]);

//     res.status(200).json({
//       status: 'success',
//       data: {
//         plan
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 26,Aggregation Pipeline: get monthly plan,group by startdate and how many,tour itself
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     //group  by id null means group everything together,aggregate is also await process
//     const stats = await Tour.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           // _id: '$difficulty',//this line commented out replace by toUpper
//           _id: { $toUpper: '$difficulty' },
//           numTours: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgRating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       },
//       {
//         $sort: { avgPrice: 1 }
//       }

//     ]); //aggregate para is a array ,array is stages,each stage is a object
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getMonthlyPlan = async (req, res) => {
//   try {
//     const year = req.params.year * 1; // 2021

//     const plan = await Tour.aggregate([//write a query get full tours first then add the aggregate
//       {
//         $unwind: '$startDates'
//       },
//       {
//         $match: {
//           startDates: {
//             $gte: new Date(`${year}-01-01`),
//             $lte: new Date(`${year}-12-31`)
//           }
//         }
//       },
//       {
//         $group: {
//           _id: { $month: '$startDates' },
//           numTourStarts: { $sum: 1 },
//           tours: { $push: '$name' }
//         }
//       },
//       {
//         $addFields: { month: '$_id' }
//       },
//       {
//         $project: {
//           _id: 0
//         }
//       },
//       {
//         $sort: { numTourStarts: -1 }
//       },
//       {
//         $limit: 12
//       }
//     ]);

//     res.status(200).json({
//       status: 'success',
//       data: {
//         plan
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 27,Catching Errors in Async Functions,create funciton catchAsync
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //execute query
//     //Tour.find() is queryObj,req.query is queryStr from express
//     const features = new APIFeatures(Tour.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//     const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//     //SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTour = async (req, res) => {
//   try {
//     //req.params.id is the id in file tourRoute.js router.route('/:id')
//     const tour = await Tour.findById(req.params.id);
//     // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// const catchAsync = fn => {//next step create a catchAsync file and import it.
//   return (req, res, next) => {
//     //express to call
//     // fn(req, res, next).catch(err => next(err));
//     fn(req, res, next).catch(next); //the catched error in next will be handled by global error handle
//   };
//   //async return promise,next pass error to next,catch here instead of try,catch
// };
// //following lines createTour change into catchAsync function that no need try,catch,and catchAsync take car catch part
// // exports.createTour = async (req, res) => {
// //   try {
// exports.createTour = catchAsync(async (req, res, next) => {
//   const newTour = await Tour.create(req.body);

//   res.status(201).json({
//     status: 'success',
//     data: {
//       tour: newTour
//     }
//   });
//   // } catch (err) {//catch part all commented out no need anymore
//   //   res.status(400).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true
//     });

//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getTourStats = async (req, res) => {
//   try {
//     //group  by id null means group everything together,aggregate is also await process
//     const stats = await Tour.aggregate([
//       {
//         $match: { ratingsAverage: { $gte: 4.5 } }
//       },
//       {
//         $group: {
//           // _id: '$difficulty',//this line commented out replace by toUpper
//           _id: { $toUpper: '$difficulty' },
//           numTours: { $sum: 1 },
//           numRatings: { $sum: '$ratingsQuantity' },
//           avgRating: { $avg: '$ratingsAverage' },
//           avgPrice: { $avg: '$price' },
//           minPrice: { $min: '$price' },
//           maxPrice: { $max: '$price' }
//         }
//       },
//       {
//         $sort: { avgPrice: 1 }
//       }
//     ]); //aggregate para is a array ,array is stages,each stage is a object
//     res.status(200).json({
//       status: 'success',
//       data: {
//         stats
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
// exports.getMonthlyPlan = async (req, res) => {
//   try {
//     const year = req.params.year * 1; // 2021

//     const plan = await Tour.aggregate([
//       //write a query get full tours first then add the aggregate
//       {
//         $unwind: '$startDates'
//       },
//       {
//         $match: {
//           startDates: {
//             $gte: new Date(`${year}-01-01`),
//             $lte: new Date(`${year}-12-31`)
//           }
//         }
//       },
//       {
//         $group: {
//           _id: { $month: '$startDates' },
//           numTourStarts: { $sum: 1 },
//           tours: { $push: '$name' }
//         }
//       },
//       {
//         $addFields: { month: '$_id' }
//       },
//       {
//         $project: {
//           _id: 0
//         }
//       },
//       {
//         $sort: { numTourStarts: -1 }
//       },
//       {
//         $limit: 12
//       }
//     ]);

//     res.status(200).json({
//       status: 'success',
//       data: {
//         plan
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
/////////////////////////////////
/////////////////////////////////version 28,Catching Errors in Async Functions,create file catchAsync then import
// const Tour = require('./../models/tourModel');
// const APIFeatures = require('./../utils/apiFeatures');
// const catchAsync = require('./../utils/catchAsync');

// exports.aliasTopTours = (req, res, next) => {
//   //res is response
//   req.query.limit = '5'; //in url everything is string
//   req.query.sort = '-ratingAverage,price';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   next(); //make middleware move to next
// };
// //folloiwng line and catch lines commented out , move into actchAsync
// exports.getAllTours = catchAsync(async (req, res, next) => {
//   // exports.getAllTours = async (req, res) => {
//   //   try {
//   //execute query
//   //Tour.find() is queryObj,req.query is queryStr from express
//   const features = new APIFeatures(Tour.find(), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

//   const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
//   //SEND RESPONSE
//   res.status(200).json({
//     status: 'success',
//     requestedAt: req.requestTime,
//     results: tours.length,
//     data: {
//       tours
//     }
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });
// //folloiwng line and catch lines commented out , move into actchAsync
// exports.getTour = catchAsync(async (req, res, next) => {
//   // exports.getTour = async (req, res) => {
//   //   try {
//   //req.params.id is the id in file tourRoute.js router.route('/:id')
//   const tour = await Tour.findById(req.params.id);
//   // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour
//     }
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });
// //following function catchAsync commented out as a independent file
// // const catchAsync = fn => {
// //   //next step create a catchAsync file and import it.
// //   return (req, res, next) => {
// //     //express to call
// //     // fn(req, res, next).catch(err => next(err));
// //     fn(req, res, next).catch(next); //the catched error in next will be handled by global error handle
// //   };
// //   //async return promise,next pass error to next,catch here instead of try,catch
// // };
// //following lines createTour change into catchAsync function that no need try,catch,and catchAsync take car catch part
// // exports.createTour = async (req, res) => {
// //   try {
// exports.createTour = catchAsync(async (req, res, next) => {
//   const newTour = await Tour.create(req.body);

//   res.status(201).json({
//     status: 'success',
//     data: {
//       tour: newTour
//     }
//   });
//   // } catch (err) {//catch part all commented out no need anymore
//   //   res.status(400).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });
// //folloiwng line and catch lines commented out , move into actchAsync
// // exports.updateTour = async (req, res) => {
// //   try {
// exports.updateTour = catchAsync(async (req, res, next) => {
//   const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true
//   });

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour
//     }
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });
// //folloiwng line and catch lines commented out , move into actchAsync
// // exports.deleteTour = async (req, res) => {
// //   try {
// exports.deleteTour = catchAsync(async (req, res, next) => {
//   await Tour.findByIdAndDelete(req.params.id);

//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });
// //folloiwng line and catch lines commented out , move into actchAsync
// // exports.getTourStats = async (req, res) => {
// //   try {
// exports.getTourStats = catchAsync(async (req, res, next) => {
//   //group  by id null means group everything together,aggregate is also await process
//   const stats = await Tour.aggregate([
//     {
//       $match: { ratingsAverage: { $gte: 4.5 } }
//     },
//     {
//       $group: {
//         // _id: '$difficulty',//this line commented out replace by toUpper
//         _id: { $toUpper: '$difficulty' },
//         numTours: { $sum: 1 },
//         numRatings: { $sum: '$ratingsQuantity' },
//         avgRating: { $avg: '$ratingsAverage' },
//         avgPrice: { $avg: '$price' },
//         minPrice: { $min: '$price' },
//         maxPrice: { $max: '$price' }
//       }
//     },
//     {
//       $sort: { avgPrice: 1 }
//     }
//   ]); //aggregate para is a array ,array is stages,each stage is a object
//   res.status(200).json({
//     status: 'success',
//     data: {
//       stats
//     }
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });
// //folloiwng line and catch lines commented out , move into actchAsync
// // exports.getMonthlyPlan = async (req, res) => {
// //   try {
// exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
//   const year = req.params.year * 1; // 2021

//   const plan = await Tour.aggregate([
//     //write a query get full tours first then add the aggregate
//     {
//       $unwind: '$startDates'
//     },
//     {
//       $match: {
//         startDates: {
//           $gte: new Date(`${year}-01-01`),
//           $lte: new Date(`${year}-12-31`)
//         }
//       }
//     },
//     {
//       $group: {
//         _id: { $month: '$startDates' },
//         numTourStarts: { $sum: 1 },
//         tours: { $push: '$name' }
//       }
//     },
//     {
//       $addFields: { month: '$_id' }
//     },
//     {
//       $project: {
//         _id: 0
//       }
//     },
//     {
//       $sort: { numTourStarts: -1 }
//     },
//     {
//       $limit: 12
//     }
//   ]);

//   res.status(200).json({
//     status: 'success',
//     data: {
//       plan
//     }
//   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err
//   //   });
//   // }
// });
/////////////////////////////////
/////////////////////////////////version 29,Catching Errors in Async Functions,delete catch part commente lines and other commented lines,add 404 handle
const Tour = require('./../models/tourModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
exports.aliasTopTours = (req, res, next) => {
  //res is response
  req.query.limit = '5'; //in url everything is string
  req.query.sort = '-ratingAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next(); //make middleware move to next
};
//folloiwng line and catch lines commented out , move into actchAsync
exports.getAllTours = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate(); //Tour.find() is query,req.query is queryStr,chain filter,sort

  const tours = await features.query; //this the query to execute now which saved in property of features,await query result comeback
  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours
    }
  });
});
//folloiwng line and catch lines commented out , move into actchAsync
exports.getTour = catchAsync(async (req, res, next) => {
  // exports.getTour = async (req, res) => {
  //   try {
  //req.params.id is the id in file tourRoute.js router.route('/:id')
  const tour = await Tour.findById(req.params.id);
  if (!tour) {
    return next(new AppError('No tour found with that ID', 404)); //next pass to global error handler
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});

exports.createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour
    }
  });
});
//folloiwng line and catch lines commented out , move into actchAsync
// exports.updateTour = async (req, res) => {
//   try {
exports.updateTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!tour) {
    //if not found this tour.of course cannot update it
    return next(new AppError('No tour found with that ID', 404)); //next pass to global error handler
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});
//folloiwng line and catch lines commented out , move into actchAsync
// exports.deleteTour = async (req, res) => {
//   try {
exports.deleteTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);
  // const tour = await Tour.findByIdAndDelete(req.params.id);
  if (!tour) {
    //if not found this tour.of course cannot delete it
    return next(new AppError('No tour found with that ID', 404)); //next pass to global error handler
  }
  res.status(204).json({
    status: 'success',
    data: null
  });
});
//folloiwng line and catch lines commented out , move into actchAsync
// exports.getTourStats = async (req, res) => {
//   try {
exports.getTourStats = catchAsync(async (req, res, next) => {
  //group  by id null means group everything together,aggregate is also await process
  const stats = await Tour.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        // _id: '$difficulty',//this line commented out replace by toUpper
        _id: { $toUpper: '$difficulty' },
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    },
    {
      $sort: { avgPrice: 1 }
    }
  ]); //aggregate para is a array ,array is stages,each stage is a object
  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  });
});
//folloiwng line and catch lines commented out , move into actchAsync
// exports.getMonthlyPlan = async (req, res) => {
//   try {
exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1; // 2021

  const plan = await Tour.aggregate([
    //write a query get full tours first then add the aggregate
    {
      $unwind: '$startDates'
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numTourStarts: { $sum: 1 },
        tours: { $push: '$name' }
      }
    },
    {
      $addFields: { month: '$_id' }
    },
    {
      $project: {
        _id: 0
      }
    },
    {
      $sort: { numTourStarts: -1 }
    },
    {
      $limit: 12
    }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      plan
    }
  });
});
/////////////////////////////////
/////////////////////////////////version ?
// const fs = require('fs');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);

//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price'
//     });
//   }
//   next();
// };

// exports.getAllTours = (req, res) => {
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

// exports.getTour = (req, res) => {
//   console.log(req.params);
//   const id = req.params.id * 1;

//   const tour = tours.find(el => el.id === id);

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour
//     }
//   });
// };

// exports.createTour = (req, res) => {
//   // console.log(req.body);

//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);

//   tours.push(newTour);

//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     err => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour
//         }
//       });
//     }
//   );
// };

// exports.updateTour = (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: '<Updated tour here...>'
//     }
//   });
// };

// exports.deleteTour = (req, res) => {
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// };
