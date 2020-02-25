/////////////////////////////////
/////////////////////////////////version1,it is good practice put related functions into seperated files not put everything into app.js file
const app = require('./app');//'./' means current folder or app is same folder level of server.js
const port = 3000;
app.listen(port, () => {//not know what is app yet,so need import app,so go to app.js final export app first
  console.log(`app running on port ${port}`);
});
/////////////////////////////////
/////////////////////////////////version ?
// const dotenv = require('dotenv');
// const app = require('./app');

// dotenv.config({ path: './config.env' });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
