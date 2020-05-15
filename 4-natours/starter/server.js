/////////////////////////////////
/////////////////////////////////version1,it is good practice put related functions into seperated files not put everything into app.js file
// const app = require('./app');//'./' means current folder or app is same folder level of server.js
// const port = 3000;
// app.listen(port, () => {//not know what is app yet,so need import app,so go to app.js final export app first
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version2,it is good practice put related functions into seperated files not put everything into app.js file
// const app = require('./app');//'./' means current folder or app is same folder level of server.js
// console.log(app.get('env'));
//  console.log(process.env);
// const port = 3000;
// app.listen(port, () => {//not know what is app yet,so need import app,so go to app.js final export app first
//   console.log(`app running on port ${port}`);
// });
/////////////////////////////////
/////////////////////////////////version 3.use dotenv to read enviroment para from config
// const dotenv = require('dotenv');
// const app = require('./app');

// dotenv.config({ path: './config.env' });
// console.log(process.env);
// // const port = 3000;
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
/////////////////////////////////
/////////////////////////////////version 4.use dotenv to read enviroment para ,add mongodb para
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
// const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// );
// console.log('after replacepassword', DB);
// dotenv.config({ path: './config.env' });
// console.log(`path ./ is pwd:  ${process.env.PWD}`);
// console.log('process.env is a big object:\n', process.env);
// mongoose
//   .connect(process.env.DATABASE_LOCAL, {
//     // .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(con => {
//     console.log(con.connections);
//     console.log('DB connection successful!');
//   });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

/////////////////////////////////
/////////////////////////////////version 5.use dotenv to read enviroment para ,add mongodb schema
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
// const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// );
// dotenv.config({ path: './config.env' });
// console.log(`path ./ is pwd:  ${process.env.PWD}`);
// // console.log('process.env is a big object:\n', process.env);
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log('DB connection successful!'));

// const tourSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   price: Number
// });
// // const port = 3000;
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
/////////////////////////////////
/////////////////////////////////version 6.use dotenv to read enviroment para , mongodb schema change into object
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
// const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// );
// dotenv.config({ path: './config.env' });
// console.log(`path ./ is pwd:  ${process.env.PWD}`);
// // console.log('process.env is a big object:\n', process.env);
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log('DB connection successful!'));
// //on required pass array[value,error msg,default]
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   rating: {
//     type: Number,
//     default: 4.5
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   }
// });
// //Tour T capital means deal with model
// const Tour = mongoose.model('Tour', tourSchema);
// const testTour = new Tour({
//   name: 'The Forest Hiker',
//   rating: 4.7,
//   price: 596
// });
// testTour
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log('err😂', err);
//   });
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

/////////////////////////////////
/////////////////////////////////version 7.use dotenv to read enviroment para , mongodb schema change into object
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
// const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// );
// dotenv.config({ path: './config.env' });
// console.log(`path ./ is pwd:  ${process.env.PWD}`);
// // console.log('process.env is a big object:\n', process.env);
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log('DB connection successful!'));
// //on required pass array[value,error msg,default]
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   rating: {
//     type: Number,
//     default: 4.5
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   }
// });
// //Tour T capital means deal with model
// const Tour = mongoose.model('Tour', tourSchema);
// const testTour = new Tour({
//   name: 'The Park Camper',

//   price: 996
// });
// testTour
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log('err😂', err);
//   });
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
/////////////////////////////////
/////////////////////////////////version 8.use dotenv to read enviroment para , mongodb schema change into object
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
// const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// );
// dotenv.config({ path: './config.env' });
// console.log(`path ./ is pwd:  ${process.env.PWD}`);
// // console.log('process.env is a big object:\n', process.env);
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log('DB connection successful!'));
// //following lines move into tourmodel
// //on required pass array[value,error msg,default]
// // const tourSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: [true, 'A tour must have name'],
// //     unique: true
// //   },
// //   rating: {
// //     type: Number,
// //     default: 4.5
// //   },
// //   price: {
// //     type: Number,
// //     default: 4.5,
// //     required: [true, 'A tour must have price']
// //   }
// // });
// // //Tour T capital means deal with model
// // const Tour = mongoose.model('Tour', tourSchema);
// ////follwing lines deleted that testing add document only
// // const testTour = new Tour({
// //   name: 'The Park Camper',

// //   price: 996
// // });
// // testTour
// //   .save()
// //   .then(doc => {
// //     console.log(doc);
// //   })
// //   .catch(err => {
// //     console.log('err😂', err);
// //   });
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

/////////////////////////////////
/////////////////////////////////version 9.Errors Outside Express: Unhandled Rejections
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
// const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// );
// dotenv.config({ path: './config.env' });
// console.log(`path ./ is pwd:  ${process.env.PWD}`);
// // console.log('process.env is a big object:\n', process.env);
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log('DB connection successful!'))
//   .catch(err => console.log('ERROR'));

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

/////////////////////////////////
/////////////////////////////////version 10.Errors Outside Express: Unhandled Rejections,global unnadled rejection
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' });
// const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// );
// dotenv.config({ path: './config.env' });
// console.log(`path ./ is pwd:  ${process.env.PWD}`);
// // console.log('process.env is a big object:\n', process.env);
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log('DB connection successful!'));
// // following line commented out replaced by global Unhandled event
// //   .catch(err => console.log('ERROR'));

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
// //Global unhandledRejection , subscribed to a event
// process.on('unhandledRejection', err => {
//   console.log('UNHANDLED REJECTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   // server.close(() => {
//   //   process.exit(1);//stop the app,1 is uncaught exception,it immediatly abort all request,so should gracelfully shutdown server, in oerder to close server so must assgin the above app to a constant as sever to use here
//   // });
// });
/////////////////////////////////
/////////////////////////////////version 11.Errors Outside Express: Unhandled Rejections,global unnadled rejection
const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  //event listener,should listen at very begining before other code espeically the application
  //bugs happened and not taken care anywhere,uncaught exception
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message); //err will show all the property/stack and too long
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
dotenv.config({ path: './config.env' });
console.log(`path ./ is pwd:  ${process.env.PWD}`);
// console.log('process.env is a big object:\n', process.env);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));
// following line commented out replaced by global Unhandled event
//   .catch(err => console.log('ERROR'));

const port = process.env.PORT || 3000;
//assign following line to a constant server
// app.listen(port, () => {
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
//Global unhandledRejection , subscribed to a event
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    //stop the app,1 is uncaught exception,it immediatly abort all request,
    //so should gracelfully shutdown server,exit(0) means success
    process.exit(1); //in oerder to close server so must assgin the above app to a constant as sever to use here
  });
});
/////////////////////////////////
/////////////////////////////////version ?.use dotenv to read enviroment para from config
// const dotenv = require('dotenv');
// dotenv.config({ path: './config.env' }); //this must before require app
// const app = require('./app');

// //console.log(process.env);//commented out or delete that no need
// // const port = 3000;//commented out or delete that no need
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
