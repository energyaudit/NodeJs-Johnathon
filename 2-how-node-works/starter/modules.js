
// // /////////////////////////////////
// // /////////////////////////////////version1
// console.log(arguments);
// console.log("module wrapper: \n",require("module").wrapper);
// // // /////////////////////////////////
// // // /////////////////////////////////version2
// // // module.exports

// const C = require("./test-module-1");//class use capital,so C is capital
// const calc1 = new C();
// console.log(calc1.add(2, 5));

// // // exports
// const calc2 = require("./test-module-2");//to be replaced by destructring
// console.log(calc2.multiply(2, 5));
// // // /////////////////////////////////version3
// // // module.exports

// const C = require("./test-module-1");//class use capital,so C is capital
// const calc1 = new C();
// console.log(calc1.add(2, 5));

// // // exports object
// // const calc2 = require("./test-module-2");//to be replaced by destructring
// const { add, multiply } = require("./test-module-2");
// console.log(multiply(2, 5));
// /////////////////////////////////
// /////////////////////////////////version4

 console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require("./test-module-2");
const { add, multiply } = require("./test-module-2");
console.log(multiply(2, 5));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();