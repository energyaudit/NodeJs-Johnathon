// /////////////////////////////////
// /////////////////////////////////version 1,read whole data into memory, no good to use too much memory
// const fs = require("fs");
// const server = require("http").createServer();

// server.on("request", (req, res) => {
//   // Solution 1
//   fs.readFile("test-file.txt", (err, data) => {
//     if (err) console.log(err);
//     res.end(data);
//   });
// });
  

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening...");
// });
// // /////////////////////////////////
// /////////////////////////////////version 8
// const fs = require("fs");
// const server = require("http").createServer();

// server.on("request", (req, res) => {
// //   // Solution 1
// //   fs.readFile("test-file.txt", (err, data) => {
// //     if (err) console.log(err);
// //     res.end(data);
// //   });
// // });
  
//   // Solution 2: Streams
//   const readable = fs.createReadStream("test-file.txt");
//   readable.on("data", chunk => {
//     res.write(chunk);
//   });
//   readable.on("end", () => {
//     res.end();//no need send data again that  res.write(chunk) already send,res.end() just notify ready to send

//   });
//   readable.on("error", err => {
//     console.log(err);
//     res.statusCode = 500;
//     res.end("File not found!");
//   });
//   });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening...");
// });

// /////////////////////////////////
// /////////////////////////////////version9, fix the back pressure
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // Solution 2: Streams
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", chunk => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", err => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });

  // Solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
 // readableSource.pipe(writeableDest)
});


server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
