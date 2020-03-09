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
/////////////////////////////////version ?.use dotenv to read enviroment para from config
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }); //this must before require app
const app = require('./app');

//console.log(process.env);//commented out or delete that no need
// const port = 3000;//commented out or delete that no need
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});


