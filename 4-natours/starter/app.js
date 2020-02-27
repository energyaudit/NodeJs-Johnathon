/////////////////////////////////
/////////////////////////////////version1,use express server and respond txt
// const express = require('express');
// const app = express(); //assign the function to app
// app.get('/', (req, res) => {
//   res.status(200).send('Hello from server side!');
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version2,add post,use express server and respond json
// const express = require('express');
// const app = express(); //assign the function to app
// app.get('/', (req, res) => {
//   // res.status(200).send('Hello from server side!');
//   //by express can response json by json method which node.js must done by programmer

//   res.status(200).json({
//     message: 'Hello from server side!',
//     app: 'Natours'
//   });
// });
// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version3,build api,get first
// const express = require('express');
// const fs = require('fs');
// const app = express(); //assign the function to app
// // app.get('/', (req, res) => {
// //   // res.status(200).send('Hello from server side!');
// //   //by express can response json by json method which node.js must done by programmer

// //   res.status(200).json({
// //     message: 'Hello from server side!',
// //     app: 'Natours'
// //   });
// // });
// // app.post('/', (req, res) => {
// //   res.send('You can post to this endpoint...');
// // });
// //route handler
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)); //use fs here,so goto top require it
// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data:{
//       tours
//     }
//   })
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version3,build api,post
// const express = require('express');
// const fs = require('fs');
// const app = express(); //assign the function to app
// app.use(express.json()); //middleware,modify the incoming data
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// ); //use fs here,so goto top require it
// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours
//     }
//   });
// });
// app.post('/api/v1/tours', (req, res) => {
//   //need MIDDLEWARES so go up to get it
//   console.log(req.body);
//   res.send('Done');
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version4,change to use in database
// const express = require('express');
// const fs = require('fs');
// const app = express(); //assign the function to app
// app.use(express.json()); //middleware,modify the incoming data
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// ); //use fs here,so goto top require it
// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours
//     }
//   });
// });
// app.post('/api/v1/tours', (req, res) => {
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
//  // res.send('Done');//this must comment out ,if response send twice,error
//  //to key tour value is a object
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version5,add id at end of endpoints,add patch
// const express = require('express');
// const fs = require('fs');
// const app = express(); //assign the function to app
// app.use(express.json()); //middleware,modify the incoming data
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// ); //use fs here,so goto top require it
// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours
//     }
//   });
// });
// app.get('/api/v1/tours/:id', (req, res) => {
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
// });
// app.post('/api/v1/tours', (req, res) => {
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
// });
// app.patch('/api/v1/tours/:id', (req, res) => {
//   if (req.params.id*1>tours.length) {
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
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version 6,add delete endpoints
// const express = require('express');
// const fs = require('fs');
// const app = express(); //assign the function to app
// app.use(express.json()); //middleware,modify the incoming data
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// ); //use fs here,so goto top require it
// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours
//     }
//   });
// });
// app.get('/api/v1/tours/:id', (req, res) => {
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
// });
// app.post('/api/v1/tours', (req, res) => {
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
// });
// app.patch('/api/v1/tours/:id', (req, res) => {
//   if (req.params.id*1>tours.length) {
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
// });
// app.delete('/api/v1/tours/:id', (req, res) => {
//   if (req.params.id*1>tours.length) {
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
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version 6,take getAllTours,post,delete out as function
// const express = require('express');
// const fs = require('fs');
// const app = express(); //assign the function to app
// app.use(express.json()); //middleware,modify the incoming data
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// ); //use fs here,so goto top require it
// const getAllTours = (req, res) => {
//   res.status(200).json({
//     status: 'success',
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
// const updateTour =(req, res) => {
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
// }
// const deleteTour=(req, res) => {
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
// }
// app.get('/api/v1/tours', getAllTours);//no () need call this function
// app.get('/api/v1/tours/:id', getTour);//no () need call this function
// //by use functions,code looks much more organized and nicer
// app.post('/api/v1/tours', createTour);//no () need call this function
// app.patch('/api/v1/tours/:id',updateTour);//no () need call this function
// app.delete('/api/v1/tours/:id',deleteTour );//no () need call this function
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version 7,take getAllTours,post,delete out as function
// const express = require('express');
// const fs = require('fs');
// const app = express(); //assign the function to app
// app.use(express.json()); //middleware,modify the incoming data
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// ); //use fs here,so goto top require it
// const getAllTours = (req, res) => {
//   res.status(200).json({
//     status: 'success',
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
// app.get('/api/v1/tours', getAllTours); //no () need call this function
// app.get('/api/v1/tours/:id', getTour); //no () need call this function
// //by use functions,code looks much more organized and nicer
// app.post('/api/v1/tours', createTour); //no () need call this function
// app.patch('/api/v1/tours/:id', updateTour); //no () need call this function
// app.delete('/api/v1/tours/:id', deleteTour); //no () need call this function
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
// //use route so an change version,get and post can wirte together
// //seperate handler and route to export and reuse later too
// app
//   .route('/api/v1/tours')
//   .get(getAllTours)
//   .post(createTour);
// app
//   .route('/api/v1/tours/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);
/////////////////////////////////
/////////////////////////////////version 8,middlewares
// const express = require('express');
// const fs = require('fs');
// const morgan = require('morgan');
// // 1) MIDDLEWARES

// const app = express(); //assign the function to app
// app.use(morgan('dev'));
// app.use(express.json()); //middleware,modify the incoming data
// app.use((req, res, next) => {
//   //next is third parameter which next function in pipeline
//   console.log('Hello from the middleware 👋');
//   next();
// }); //middleware declare should at top before others

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// ); //use fs here,so goto top require it

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
// // app.get('/api/v1/tours', getAllTours); //no () need call this function
// // app.get('/api/v1/tours/:id', getTour); //no () need call this function
// // //by use functions,code looks much more organized and nicer
// // app.post('/api/v1/tours', createTour); //no () need call this function
// // app.patch('/api/v1/tours/:id', updateTour); //no () need call this function
// // app.delete('/api/v1/tours/:id', deleteTour); //no () need call this function

// //use route so an change version,get and post can wirte together
// //seperate handler and route to export and reuse later too
// // 3) ROUTES
// app
//   .route('/api/v1/tours')
//   .get(getAllTours)
//   .post(createTour);

// // app.use((req, res, next) => {
// //   //next is third parameter which next function in pipeline
// //   console.log('Hello from the middleware 👋');
// //   next();
// // });
// app
//   .route('/api/v1/tours/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);
// app
//   .route('/api/v1/users')
//   .get(getAllUsers)
//   .post(createUser);

// app
//   .route('/api/v1/users/:id')
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);

// //create server
// const port = 3000;

// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });

/////////////////////////////////
/////////////////////////////////version 8,slip files into dedicated
// const express = require('express');
// const fs = require('fs');
// const morgan = require('morgan');
// // 1) MIDDLEWARES

// const app = express(); //assign the function to app
// app.use(morgan('dev'));
// app.use(express.json()); //middleware,modify the incoming data
// app.use((req, res, next) => {
//   //next is third parameter which next function in pipeline
//   console.log('Hello from the middleware 👋');
//   next();
// }); //middleware declare should at top before others

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// ); //use fs here,so goto top require it
////route handler
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

// //use route so an change version,get and post can wirte together
// //seperate handler and route to export and reuse later too
// // 3) ROUTES
// //use middlewear to replace tour route,replace app to tourRouter
//  //create sub app
// const tourRouter = express.Router();
// const userRouter = express.Router();

// //app
// tourRouter
//   .route('/')
//   .get(getAllTours)
//   .post(createTour);

// //app
// tourRouter
//   .route('/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);
// //app
// userRouter
//   .route('/')
//   .get(getAllUsers)
//   .post(createUser);

// //app
// userRouter
//   .route('/:id')
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);
//   app.use('/api/v1/tours', tourRouter);
//   app.use('/api/v1/users', userRouter);
// //create server
// const port = 3000;

// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version 9,slip files into dedicated route module folder and 
// const express = require('express');
// const fs = require('fs');
// const morgan = require('morgan');
// // 1) MIDDLEWARES

// const app = express(); //assign the function to app
// app.use(morgan('dev'));
// app.use(express.json()); //middleware,modify the incoming data
// app.use((req, res, next) => {
//   //next is third parameter which next function in pipeline
//   console.log('Hello from the middleware 👋');
//   next();
// }); //middleware declare should at top before others

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// ); //use fs here,so goto top require it
// //route handler,folowing route handler all cut into route module 
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

// //use route so an change version,get and post can wirte together
// //seperate handler and route to export and reuse later too
// // 3) ROUTES
// //use middlewear to replace tour route,replace app to tourRouter
//  //create sub app
// const tourRouter = express.Router();
// const userRouter = express.Router();

// //app
// tourRouter
//   .route('/')
//   .get(getAllTours)
//   .post(createTour);

// //app
// tourRouter
//   .route('/:id')
//   .get(getTour)
//   .patch(updateTour)
//   .delete(deleteTour);
// //app
// userRouter
//   .route('/')
//   .get(getAllUsers)
//   .post(createUser);

// //app
// userRouter
//   .route('/:id')
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);
//   app.use('/api/v1/tours', tourRouter);
//   app.use('/api/v1/users', userRouter);
// //create server
// const port = 3000;

// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });

/////////////////////////////////
/////////////////////////////////version 10,replace code lines with modules
// const express = require('express');
// // const fs = require('fs');//moved to tourRoutes.js
// const morgan = require('morgan');
// const tourRouter = require('./routes/tourRoutes');//following tourRoutes lines will be replaced by this 
// const userRouter = require('./routes/userRoutes');//following userRoutes lines will be replaced by this 

// // 1) MIDDLEWARES

// const app = express(); //assign the function to app
// app.use(morgan('dev'));
// app.use(express.json()); //middleware,modify the incoming data
// app.use((req, res, next) => {
//   //next is third parameter which next function in pipeline
//   console.log('Hello from the middleware 👋');
//   next();
// }); //middleware declare should at top before others

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });
// // const tours = JSON.parse(
// //   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// // ); //use fs here,so goto top require it
// // //route handler,folowing route handler all cut into route module 
// // const getAllTours = (req, res) => {
// //   console.log(req.requestTime);
// //   res.status(200).json({
// //     status: 'success',
// //     requestedAt: req.requestTime,
// //     results: tours.length,
// //     data: {
// //       tours
// //     }
// //   });
// // };
// // const getTour = (req, res) => {
// //   //app.get('/api/v1/tours/:id:y?' y? means optional
// //   console.log(req.params); //:id means define id as para,and will return value from req
// //   //from above log you can see the id got is string,use js trick of *1 to coerce into integer
// //   const id = req.params.id * 1;
// //   //handle if request out of range id
// //   if (id > tours.length) {
// //     return res.status(404).json({
// //       status: 'fail',
// //       message: 'Invalid ID'
// //     });
// //   }
// //   const tour = tours.find(el => el.id === id); //find is array method loop array current elemnt to find
// //   // if(id>tours.length){//if cannot find this id
// //   if (!tour) {
// //     //if cannot find this id of tour
// //     return res.status(404).json({
// //       status: 'fail',
// //       message: 'Invalid ID'
// //     });
// //   }

// //   res.status(200).json({
// //     status: 'success',
// //     data: {
// //       tours: tour
// //     }
// //   });
// // };
// // const createTour = (req, res) => {
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
// //       //this call back has only err as para
// //       res.status(201).json({
// //         status: 'success',
// //         data: {
// //           tour: newTour
// //         }
// //       });
// //     }
// //   );
// //   // res.send('Done');//this must comment out ,if response send twice,error
// //   //to key tour value is a object
// // };
// // const updateTour = (req, res) => {
// //   if (req.params.id * 1 > tours.length) {
// //     //if cannot find this id of tour
// //     return res.status(404).json({
// //       status: 'fail',
// //       message: 'Invalid ID'
// //     });
// //   }
// //   //only put place hodler ,not real patch
// //   res.status(201).json({
// //     status: 'success',
// //     data: {
// //       tour: '<Update tour here>'
// //     }
// //   });
// // };
// // const deleteTour = (req, res) => {
// //   if (req.params.id * 1 > tours.length) {
// //     //if cannot find this id of tour
// //     return res.status(404).json({
// //       status: 'fail',
// //       message: 'Invalid ID'
// //     });
// //   }
// //   //only put place hodler ,not real patch
// //   res.status(204).json({
// //     status: 'success',
// //     data: null
// //   });
// // };

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


// //seperate handler and route to export and reuse later too
// // 3) ROUTES
//   app.use('/api/v1/tours', tourRouter);//all following lines replaced by these 2 lines now
//   app.use('/api/v1/users', userRouter);
// //use middlewear to replace tour route,replace app to tourRouter
//  //following tourRoutes lines replaced by module so comment them out
// // const tourRouter = express.Router();
// // const userRouter = express.Router();

// // //app
// // tourRouter
// //   .route('/')
// //   .get(getAllTours)
// //   .post(createTour);

// // //app
// // tourRouter
// //   .route('/:id')
// //   .get(getTour)
// //   .patch(updateTour)
// //   .delete(deleteTour);
// // //app
// // userRouter
// //   .route('/')
// //   .get(getAllUsers)
// //   .post(createUser);

// // //app
// // userRouter
// //   .route('/:id')
// //   .get(getUser)
// //   .patch(updateUser)
// //   .delete(deleteUser);

// //create server
// const port = 3000;

// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });

/////////////////////////////////
/////////////////////////////////version 11,replace code lines with modules,delete the comment out licensed
// const express = require('express');
// // const fs = require('fs');//moved to tourRoutes.js
// const morgan = require('morgan');
// const tourRouter = require('./routes/tourRoutes');//following tourRoutes lines will be replaced by this 
// const userRouter = require('./routes/userRoutes');//following userRoutes lines will be replaced by this 

// // 1) MIDDLEWARES

// const app = express(); //assign the function to app
// app.use(morgan('dev'));
// app.use(express.json()); //middleware,modify the incoming data
// app.use((req, res, next) => {
//   //next is third parameter which next function in pipeline
//   console.log('Hello from the middleware 👋');
//   next();
// }); //middleware declare should at top before others

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// // 3) ROUTES
//   app.use('/api/v1/tours', tourRouter);//all following lines replaced by these 2 lines now
//   app.use('/api/v1/users', userRouter);

// //create server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}`);
// });

/////////////////////////////////
/////////////////////////////////version 12,splict the server lines into server.js,so need export app first for server.js to import app
// const express = require('express');
// // const fs = require('fs');//moved to tourRoutes.js
// const morgan = require('morgan');
// const tourRouter = require('./routes/tourRoutes');//following tourRoutes lines will be replaced by this 
// const userRouter = require('./routes/userRoutes');//following userRoutes lines will be replaced by this 

// // 1) MIDDLEWARES

// const app = express(); //assign the function to app
// app.use(morgan('dev'));
// app.use(express.json()); //middleware,modify the incoming data
// app.use((req, res, next) => {
//   //next is third parameter which next function in pipeline
//   console.log('Hello from the middleware 👋');
//   next();
// }); //middleware declare should at top before others

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// // 3) ROUTES
//   app.use('/api/v1/tours', tourRouter);//all following lines replaced by these 2 lines now
//   app.use('/api/v1/users', userRouter);

//   module.exports=app;
// //create server,following server lines to be commented out ,split into server.js
// // const port = 3000;//make sure comment out these lines or not the server.js will have 3000 already in use error message
// // app.listen(port, () => {
// //   console.log(`app running on port ${port}`);
// // });
////////////////////////////////
/////////////////////////////////version 13,make static files have routes
// const express = require('express');
// // const fs = require('fs');//moved to tourRoutes.js
// const morgan = require('morgan');
// const tourRouter = require('./routes/tourRoutes');//following tourRoutes lines will be replaced by this 
// const userRouter = require('./routes/userRoutes');//following userRoutes lines will be replaced by this 

// // 1) MIDDLEWARES

// const app = express(); //assign the function to app
// app.use(morgan('dev'));
// app.use(express.json()); //middleware,modify the incoming data
//  app.use(express.static(`${__dirname}/public`));//make static files have routes
// app.use((req, res, next) => {
//   //next is third parameter which next function in pipeline
//   console.log('Hello from the middleware 👋');
//   next();
// }); //middleware declare should at top before others

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// // 3) ROUTES
//   app.use('/api/v1/tours', tourRouter);//all following lines replaced by these 2 lines now
//   app.use('/api/v1/users', userRouter);

//   module.exports=app;

//   ////////////////////////////////
// /////////////////////////////////version 14,read environment from config.env
const express = require('express');
// const fs = require('fs');//moved to tourRoutes.js
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');//following tourRoutes lines will be replaced by this 
const userRouter = require('./routes/userRoutes');//following userRoutes lines will be replaced by this 

// 1) MIDDLEWARES

const app = express(); //assign the function to app
app.use(morgan('dev'));//comment out and only use if env=development,if not comment out will have port 3000 already in use,so only one morgan allowed

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
app.use(express.json()); //middleware,modify the incoming data
 app.use(express.static(`${__dirname}/public`));//make static files have routes
app.use((req, res, next) => {
  //next is third parameter which next function in pipeline
  console.log('Hello from the middleware 👋');
  next();
}); //middleware declare should at top before others

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
  app.use('/api/v1/tours', tourRouter);//all following lines replaced by these 2 lines now
  app.use('/api/v1/users', userRouter);

  module.exports=app;
/////////////////////////////////
/////////////////////////////////version?
// const express = require('express');
// const morgan = require('morgan');

// const tourRouter = require('./routes/tourRoutes');
// const userRouter = require('./routes/userRoutes');

// const app = express();

// // 1) MIDDLEWARES
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//   console.log('Hello from the middleware 👋');
//   next();
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// // 3) ROUTES
// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

// module.exports = app;
