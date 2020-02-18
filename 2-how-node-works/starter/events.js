// /////////////////////////////////
// /////////////////////////////////version 1,create emitter then listen on it,observe pattern
// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.on("newSale", () => {//this call back no para
//   console.log("There was a new sale!");
// });

// myEmitter.on("newSale", () => {
//   console.log("Costumer name: Jonas");
// });
// myEmitter.emit("newSale");
// /////////////////////////////////
// /////////////////////////////////version 2,add para to emitter call back function-third listener,so total 3 listener upto now
// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.on("newSale", () => {//this call back no para
//   console.log("There was a new sale!");
// });

// myEmitter.on("newSale", () => {
//   console.log("Costumer name: Jonas");
// });
// myEmitter.on("newSale", stock => {//single para :stock  no need ()
//   console.log(`There are now ${stock} items left in stock.`);
// });

// myEmitter.emit("newSale", 9);

// /////////////////////////////////
// /////////////////////////////////version 3,add para to emitter call back function-third listener,so total 3 listener upto now
// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.on("newSale", () => {//this call back no para
//   console.log("There was a new sale!");
// });

// myEmitter.on("newSale", () => {
//   console.log("Costumer name: Jonas");
// });
// myEmitter.on("newSale", stock => {//single para :stock  no need ()
//   console.log(`There are now ${stock} items left in stock.`);
// });

// myEmitter.emit("newSale", 9);
// // myEmitter.emit("newSale");

// /////////////////////////////////
// /////////////////////////////////version 4,inherit emitter for better coding practice
// const EventEmitter = require("events");

// // const myEmitter = new EventEmitter();//comment out to use inherit for better coding practice
// class Sales extends EventEmitter {
//   constructor() {
//     super();
//   }
// }

// const myEmitter = new Sales();

// myEmitter.on("newSale", () => {//this call back no para
//   console.log("There was a new sale!");
// });

// myEmitter.on("newSale", () => {
//   console.log("Costumer name: Jonas");
// });
// myEmitter.on("newSale", stock => {//single para :stock  no need ()
//   console.log(`There are now ${stock} items left in stock.`);
// });
// myEmitter.emit("newSale", 9);

/////////////////////////////////
/////////////////////////////////version 5,add server
const EventEmitter = require("events");
const http = require("http");
// const myEmitter = new EventEmitter();//comment out to use inherit for better coding practice
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();
myEmitter.on("newSale", () => {//this call back no para
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});
myEmitter.on("newSale", stock => {//single para :stock  no need ()
  console.log(`There are now ${stock} items left in stock.`);
});
myEmitter.emit("newSale", 9);
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request 😀");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
// /////////////////////////////////
// /////////////////////////////////version ?
// const EventEmitter = require("events");
// const http = require("http");

// class Sales extends EventEmitter {
//   constructor() {
//     super();
//   }
// }

// const myEmitter = new Sales();

// myEmitter.on("newSale", () => {
//   console.log("There was a new sale!");
// });

// myEmitter.on("newSale", () => {
//   console.log("Costumer name: Jonas");
// });

// myEmitter.on("newSale", stock => {
//   console.log(`There are now ${stock} items left in stock.`);
// });

// myEmitter.emit("newSale", 9);

// //

// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log("Request received!");
//   console.log(req.url);
//   res.end("Request received");
// });

// server.on("request", (req, res) => {
//   console.log("Another request 😀");
// });

// server.on("close", () => {
//   console.log("Server closed");
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Waiting for requests...");
// });
