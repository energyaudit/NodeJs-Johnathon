/////////////////////////////////
// /////////////////////////////////version 1
// const fs = require("fs");


// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished");
//   });
//   console.log("----------------");

// console.log("Hello from the top-level code");

// // /////////////////////////////////
// /////////////////////////////////version 2
// const fs = require("fs");


// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished");
//    console.log("----------------");
//     setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));
//   });

//   console.log("----------------");

// console.log("Hello from the top-level code");
// // /////////////////////////////////
// /////////////////////////////////version 3,process.nextTick and cryto non-sync
// const fs = require("fs");
// const crypto = require("crypto");
// const start = Date.now();
// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished");
//    console.log("----------------");
//     setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));
//   });
//   //nextTick call back,
//    process.nextTick(() => console.log("Process.nextTick"));
//   console.log("----------------");
//   //use call back,non-sync
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512",()=>{
// console.log("time to enctypt:   ",Date.now() - start, "millisec Password encrypted");
//   });
  
// console.log("Hello from the top-level code");

// /////////////////////////////////
/////////////////////////////////version 4,change node.js thread pool size,change callback to sync to block loop event
////which is no good use experiences
const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
   console.log("----------------");
    setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));
  });
  //nextTick call back,
   process.nextTick(() => console.log("Process.nextTick"));
  console.log("----------------");
  //use call back,non-sync
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512",()=>{
// console.log("time to enctypt:   ",Date.now() - start, "millisec Password encrypted");
//   });
//     crypto.pbkdf2("password", "salt", 100000, 1024, "sha512",()=>{
// console.log("time to enctypt:   ",Date.now() - start, "millisec Password encrypted");
//   });
//     crypto.pbkdf2("password", "salt", 100000, 1024, "sha512",()=>{
// console.log("time to enctypt:   ",Date.now() - start, "millisec Password encrypted");
//   });
//     crypto.pbkdf2("password", "salt", 100000, 1024, "sha512",()=>{
// console.log("time to enctypt:   ",Date.now() - start, "millisec Password encrypted");
//   });
    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

console.log("Hello from the top-level code");

/////////////////////////////////
/////////////////////////////////version ?
// const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 4;

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished");
//   console.log("----------------");

//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));

//   process.nextTick(() => console.log("Process.nextTick"));

//   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
//   console.log(Date.now() - start, "Password encrypted");

//   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
//   console.log(Date.now() - start, "Password encrypted");

//   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
//   console.log(Date.now() - start, "Password encrypted");

//   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
//   console.log(Date.now() - start, "Password encrypted");
// });

// console.log("Hello from the top-level code");
