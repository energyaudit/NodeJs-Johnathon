// // // /////////////////////////////////
// // // /////////////////////////////////version1,
// class Calculator {
//   add(a, b) {
//     return a + b;
//   }

//   multiply(a, b) {
//     return a * b;
//   }

//   divide(a, b) {
//     return a / b;
//   }
// }

// module.exports = Calculator;

// // // /////////////////////////////////
// // // /////////////////////////////////version2, use expression

//use expression to assign to module.exports directly
module.exports = class {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
};
