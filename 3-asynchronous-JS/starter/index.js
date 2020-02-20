// // // // /////////////////////////////////
// // // // /////////////////////////////////version1,2 level nested call back
// const fs = require('fs');
// const superagent = require('superagent');
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed:${data}`);
//   superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     ).end((err,res)=>{
//       console.log(res.body);//found out body is object
//        console.log(res.body.message);//err,res)=> call back is another call back'(err, data) =>'
//     });
// });

// // // // /////////////////////////////////
// // // // /////////////////////////////////version3 level call back,call back hell created
// const fs = require('fs');
// const superagent = require('superagent');
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed:${data}`);
//   superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     ).end((err,res)=>{
//       if (err) return console.log(err.message);
//       console.log(res.body);//found out body is object
//        console.log(res.body.message);//err,res)=> call back is another call back'(err, data) =>'
//     fs.writeFile('dog-img.txt',res.body.message,err=>{
//      console.log('Random dog image saved to file!');
//     });
//     });
// });

// // // // /////////////////////////////////
// // // // /////////////////////////////////version4
// const fs = require('fs');
// const superagent = require('superagent');
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     if (err) return console.log(err.message);
//  console.log(`Breed:${data}`);
//   superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     ).end((err,res)=>{//comment out from here prelaced by then method
//       if (err) return console.log(err.message);
//       console.log(res.body);//found out body is object
//        console.log(res.body.message);//err,res)=> call back is another call back'(err, data) =>'
//     fs.writeFile('dog-img.txt',res.body.message,err=>{
//      console.log('Random dog image saved to file!');
//     });
//     });
// });
// // // /////////////////////////////////
// // // /////////////////////////////////version5.consume promise by then method
// const fs = require('fs');
// const superagent = require('superagent');
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//    if (err) return console.log(err.message);
//   console.log(`Breed:${data}`);
//   superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     ).then(res=>{
//       if (err) return console.log(err.message);//promise has catch handle error,so comment out this and move to catch branch
//       console.log(res.body);//found out body is object
//        console.log(res.body.message);//err,res)=> call back is another call back'(err, data) =>'
//     fs.writeFile('dog-img.txt',res.body.message,err=>{
//      console.log('Random dog image saved to file!');
//     });
//     });
// });
// // // // /////////////////////////////////
// // // // /////////////////////////////////version6.define promise,then ready to move nested call back into then ({})
// const fs = require('fs');
// const superagent = require('superagent');
// const readFilePro = file => {//Pro means promise
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file 😢');
//       resolve(data);//so this data is the resolve return
//     });
//   });
// };
// readFilePro(`${__dirname}/dog.txt`).then(data=>{});//you not have to use data again here,it is the return from resolve

// //   so all following of nested call back put into then for next version
// //  console.log(`Breed:${data}`);
// //   superagent.get(
// //       `https://dog.ceo/api/breed/${data}/images/random`
// //     ).then(res=>{
// //     //  if (err) return console.log(err.message);//promise has catch handle error,so comment out this and move to catch branch
// //       console.log(res.body);//found out body is object
// //        console.log(res.body.message);//err,res)=> call back is another call back'(err, data) =>'
// //     fs.writeFile('dog-img.txt',res.body.message,err=>{
// //      console.log('Random dog image saved to file!');
// //     });
// //     }).catch(err=>{
// //       console.log(err.message);
// //     });
// // });
// // // /////////////////////////////////
// // // /////////////////////////////////version7.consume promise by then method
// const fs = require('fs');
// const superagent = require('superagent');
// const readFilePro = file => {//Pro means promise
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file 😢');
//       resolve(data);//so this data is the resolve return
//     });
//   });
// };
// readFilePro(`${__dirname}/dog.txt`).then(data=>{//  console.log(`Breed:${data}`);
//   superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     ).then(res=>{
//     //  if (err) return console.log(err.message);//promise has catch handle error,so comment out this and move to catch branch
//       console.log(res.body);//found out body is object
//        console.log(res.body.message);//err,res)=> call back is another call back'(err, data) =>'
//     fs.writeFile('dog-img.txt',res.body.message,err=>{
//      console.log('Random dog image saved to file!');
//     });
//     }).catch(err=>{
//       console.log(err.message);
//     });

// });//you not have to use data again here,it is the return from resolve
// // // /////////////////////////////////
// // // /////////////////////////////////version8.already worked.make new writefile for next nested call back
// const fs = require('fs');
// const superagent = require('superagent');
// const readFilePro = file => {//Pro means promise
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file 😢');
//       resolve(data);//so this data is the resolve return
//     });
//   });
// };
// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, err => {
//       if (err) reject('Could not write file 😢');
//       resolve('success');//this resolve branch not return any value,so just return success string then
//     });
//   });
// };
////following are still nested call back,data=>,res=>{,err=>{
// readFilePro(`${__dirname}/dog.txt`).then(data=>{//  console.log(`Breed:${data}`);
//   superagent.get(//need add return here to change to then chain
//       `https://dog.ceo/api/breed/${data}/images/random`
//     ).then(res=>{
//     //  if (err) return console.log(err.message);//promise has catch handle error,so comment out this and move to catch branch
//       console.log(res.body);//found out body is object
//        console.log(res.body.message);//err,res)=> call back is another call back'(err, data) =>'
//     fs.writeFile('dog-img.txt',res.body.message,err=>{//need add return here to change to then chain
//      console.log('Random dog image saved to file!');
//     });
//     }).catch(err=>{
//       console.log(err.message);
//     });
// //next step use then chain to close all the call back
// });
// // // /////////////////////////////////
// // // /////////////////////////////////version8.after add return in front of each nested call back,we can chain them by promise resovle branch
// const fs = require('fs');
// const superagent = require('superagent');
// const readFilePro = file => {//Pro means promise,one para:file-it is file path string
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file 😢');
//       resolve(data);//so this data is the resolve return
//     });
//   });
// };
// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, err => {
//       if (err) reject('Could not write file 😢');
//       resolve('success');//this resolve branch not return any value,so just return success string then
//     });
//   });
// };
// readFilePro(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then(res=>{//the res is return of last promise reslove-superagent.get
//    console.log(res.body);//found out body is object
//        console.log(res.body.message);//err,res)=> call back is another call back'(err, data) =>'
//     fs.writeFile('dog-img.txt',res.body.message,err=>{//need add another return here to change to next then chain
//     //return writeFilePro('dog-img.txt', res.body.message);
//      console.log('Random dog image saved to file!');
//     });//key to chain is add return promise before each call back
//     }).catch(err=>{//this catch will catch each promise error(shared only one) instead of nested call back before each has its own
//       console.log(err.message);
//     });
// // // /////////////////////////////////
// // // /////////////////////////////////version9.after add return in front of each nested call back,we can chain them by promise resovle branch
// const fs = require('fs');
// const superagent = require('superagent');
// const readFilePro = file => {//Pro means promise
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file 😢');
//       resolve(data);//so this data is the resolve return
//     });
//   });
// };
// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, err => {
//       if (err) reject('Could not write file 😢');
//       resolve('success');//this resolve branch not return any value,so just return success string then
//     });
//   });
// };
// readFilePro(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then(res => {
//     console.log(res.body.message);
//     return writeFilePro('dog-img.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('Random dog image saved to file!');
//   })
//   .catch(err => {//all the reject will catch here
//     console.log(err);

// });

// // // /////////////////////////////////
// // // /////////////////////////////////version10.after add return in front of each nested call back,we can chain them by promise resovle branch
const fs = require('fs');
const superagent = require('superagent');
const readFilePro = file => {//Pro means promise
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😢');
      resolve(data);//so this data is the resolve return
    });
  });
};
const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write file 😢');
      resolve('success');//this resolve branch not return any value,so just return success string then
    });
  });
};
const getDogPic = async () => {
  //without error handling initial version,next step put all code into try{} then catch{}
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro = superagent.get(//promise 1
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(//promise 2
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(//promise 3
      `https://dog.ceo/api/breed/${data}/images/random`
    );//pass promise array
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    //use map create new array of messAGE
    const imgs = all.map(el => el.body.message);
    console.log(imgs);

    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('Random dog image saved to file!');

  return '2: READY 🐶';
};
// getDogPic();//working!amazing with such shorter simpler code compare to then
// // // /////////////////////////////////
// // // /////////////////////////////////version11.after add return in front of each nested call back,we can chain them by promise resovle branch
// const fs = require('fs');
// const superagent = require('superagent');
// const readFilePro = file => {
//   //Pro means promise
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file 😢');
//       resolve(data); //so this data is the resolve return
//     });
//   });
// };
// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, err => {
//       if (err) reject('Could not write file 😢');
//       resolve('success'); //this resolve branch not return any value,so just return success string then
//     });
//   });
// };
// const getDogPic = async () => {
//   //without error handling initial version,next step put all code into try{} then catch{}
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(`Breed: ${data}`);

//     const res1Pro = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const res2Pro = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const res3Pro = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const all = await Promise.all([res1Pro, res2Pro, res3Pro]); //second promise
//     const imgs = all.map(el => el.body.message);
//     console.log(imgs);

//     await writeFilePro('dog-img.txt', imgs.join('\n')); //third promise
//     console.log('Random dog image saved to file!');
//   } catch (err) {
//     console.log(err);
//     throw err; //if not throw then promise not goto reject
//   }
//   return '2: READY 🐶';
// };

// //getDogPic();//working!amazing with such shorter simpler code compare to then
// console.log('1: Will get dog pics!');
// getDogPic()
//   .then(x => {
//     console.log(x);
//     console.log('3: Done getting dog pics!');
//   })
//   .catch(err => {//next step, will change this part to async too
//     console.log('ERROR 💥');
//   });
// // // // /////////////////////////////////
// // // // /////////////////////////////////version11,change final part to async
// const fs = require('fs');
// const superagent = require('superagent');

// const readFilePro = file => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file 😢');
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, err => {
//       if (err) reject('Could not write file 😢');
//       resolve('success');
//     });
//   });
// };

// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(`Breed: ${data}`);

//     const res1Pro = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const res2Pro = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const res3Pro = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
//     const imgs = all.map(el => el.body.message);
//     console.log(imgs);

//     await writeFilePro('dog-img.txt', imgs.join('\n'));
//     console.log('Random dog image saved to file!');
//   } catch (err) {
//     console.log(err);

//     throw err;
//   }
//   return '2: READY 🐶';
// };

// (async () => {
//   try {
//     console.log('1: Will get dog pics!');
//     const x = await getDogPic();//retuen propmise
//     console.log(x);
//     console.log('3: Done getting dog pics!');
//   } catch (err) {
//     console.log('ERROR 💥');
//   }
// })();
