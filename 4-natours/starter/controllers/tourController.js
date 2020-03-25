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

const Tour = require('./../models/tourModel');
// exports.getAllTours = (req, res) => {//delete and add async
exports.getAllTours = async (req, res) => {
  try {
    console.log(req.query);
    const tours = await Tour.find(); //return a promise await-and value is array, so need goto function top line add async
    //find also change into json format for us,next step put all these lines into try{}
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
exports.getTour = async (req, res) => {
  try {
    //req.params.id is the id in file tourRoute.js router.route('/:id')
    const tour = await Tour.findById(req.params.id);
    // findById(req.params.id) is shortcut of Tour.findOne({ _id: req.params.id })
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
exports.createTour = async (req, res) => {
  try {
    //document method
    // const newTour = new Tour({})
    // newTour.save()
    //req.body from post is the para passed,create return promise save to newTour variable
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
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
