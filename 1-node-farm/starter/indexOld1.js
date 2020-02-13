// const hello='Hello world';
// console.log(hello);
const fs = require('fs');
const http = require('http');
const url = require('url');
//const slugify = require('slugify');
// const replaceTemplate = require('./modules/replaceTemplate');

/////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  console.log(data);
});
console.log('Will read file!');
// //fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => //(err, data1) is the call back
fs.readFile('./dev-data/data.json', 'utf-8', (err, data) => {
  //(err, data1) is the call back funciton
  // console.log(data);
});

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('ERROR! 💥');
  //call back (err, data1) call (err, data2),(err, data2) call (err, data3),(err, data3) call err =>
  //${data1}=read-this,so ./txt/${data1}.txt will find ./txt/read-this.txt
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log('call back data2:  ', data2);
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log('append txt:  ', data3);

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
        //this call back no data para
        console.log('this call back no data para:    Your file has been written 😁');
      });
    });
  });
});
console.log('Will read file!');

// /////////////////////////////////
// // SERVER
// const tempOverview = fs.readFileSync(
//   `${__dirname}/templates/template-overview.html`,
//   'utf-8'
// );
// const tempCard = fs.readFileSync(
//   `${__dirname}/templates/template-card.html`,
//   'utf-8'
// );
// const tempProduct = fs.readFileSync(
//   `${__dirname}/templates/template-product.html`,
//   'utf-8'
// );


/////server1
// const server = http.createServer((req, res) => {//(req, res)  is call back
//      console.log(req.url);
//     const pathName = req.url;
//     if (pathName === '/' || pathName === '/overview') {
//         res.end('This is the OVERVIEW');
//     } else if (pathName === '/product') {
//         res.end('This is the PRODUCT');
//     }
//      res.end('Hello from the server');
// });
////////////server2
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//    const pathName = req.url;
//    if (pathName === '/' || pathName === '/overview') {// '/'means root
//        res.end('This is the OVERVIEW');
//    } else if (pathName === '/product') {
//        res.end('This is the PRODUCT');
//    }else {
//         res.writeHead(404, {
//           'Content-type': 'text/html',
//           'my-own-header': 'hello-world'
//         });
//         res.end('<h1>Page not found!</h1>');
//       }
// });
//////////server3,build web API
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     const pathName = req.url;
//     if (pathName === '/' || pathName === '/overview') {
//         res.end('This is the OVERVIEW');
//     } else if (pathName === '/product') {
//         res.end('This is the PRODUCT');
//     } else if (pathName === '/api') {
//         console.log('${__dirname}');
//         fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
//             //  fs.readFile(`./dev-data/data.json`, 'utf-8', (err, data) => {
//             const productData = JSON.parse(data);
//             console.log(productData);
//             res.writeHead(200, { 'Content-type': 'application/json' });
//             res.end(data);
//         });
//     }
//     else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hello-world'
//         });
//         res.end('<h1>Page not found!</h1>');
//     }
// });

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000');
// });
//////////server4,take out the api data read only once and save in a variable
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
//     //  fs.readFile(`./dev-data/data.json`, 'utf-8', (err, data) => {
//     const productData = JSON.parse(data);
//     console.log(productData);
// });//run only once and run at beginning
// const dataObj = JSON.parse(data);
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     const pathName = req.url;
//     if (pathName === '/' || pathName === '/overview') {
//         res.end('This is the OVERVIEW');
//     } else if (pathName === '/product') {
//         res.end('This is the PRODUCT');
//     } else if (pathName === '/api') {
//         res.writeHead(200, { 'Content-type': 'application/json' });
//         res.end(data);
//     }
//     else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hello-world'
//         });
//         res.end('<h1>Page not found!</h1>');
//     }
// });

// // server.listen(8000, '127.0.0.1', () => {
// //     console.log('Listening to requests on port 8000');
// // });

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 3000');
// });
//////////server5,html template hold danymic data,filling template
// const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
// const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);//this is array

// const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
// console.log(slugs);


// const server = http.createServer((req, res) => {
//     const { query, pathname } = url.parse(req.url, true); //create object
//        console.log("the routing url is:   ",req.url);
//     //overview page

//     if (pathname === '/' || pathname === '/overview') {
//       res.writeHead(200, { 'Content-type': 'text/html' });
//       res.end(tempOverview);
//     } else if (pathname === '/product') {
//       console.log(query);
//       res.writeHead(200, { 'Content-type': 'text/html' });
//       const product = dataObj[query.id]; //dataObj is array
//       const output = replaceTemplate(tempProduct, product);
//       res.end(output);
//     } else if (pathname === '/api') {
//       res.writeHead(200, { 'Content-type': 'application/json' });
//       res.end(data);
//     } else {
//       res.writeHead(404, {
//         'Content-type': 'text/html',
//         'my-own-header': 'hello-world'
//       });
//       res.end('<h1>Page not found!</h1>');
//     }
//   });
  
//   server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000');
//   });
//////////server6
// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);
// const server = http.createServer((req, res) => {
//     const pathName = req.url;
//     // Overview page
//     if (pathName === '/' || pathName === '/overview') {
//         res.writeHead(200, {
//             'Content-type': 'text/html'
//         });

//         const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
//         const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
//         res.end(output);

//         // Product page
//     } else if (pathName === '/product') {
//         res.writeHead(200, {
//             'Content-type': 'text/html'
//         });
//         const product = dataObj[query.id];
//         const output = replaceTemplate(tempProduct, product);
//         res.end(output);

//         // API
//     } else if (pathName === '/api') {
//         res.writeHead(200, {
//             'Content-type': 'application/json'
//         });
//         res.end(data);

//         // Not found
//     } else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hello-world'
//         });
//         res.end('<h1>Page not found!</h1>');
//     }
// });
//////////server7
// const replaceTemplate = (temp, product) => {
//     // let output=temp.replace('{%PRODUCTNAME}%',produc.productName);//if not use regular expression,only replace first one
//     let output = temp.replace(/{%PRODUCTNAME}%/g, product.productName);//use regular expression and para:g-golabally, will change all of them one by one
//     //out good practice to manuplate para-temp directly, so assign it to a varaible by "let" declration
//     output = output.replace(/{%IMAGE%/g, product.image);
//     output = output.replace(/{%PRICE%/g, product.price);
//     output = output.replace(/{%FROM%/g, product.from);
//     output = output.replace(/{%NUTRIENTS%/g, product.nutrients);
//     output = output.replace(/{%QUANTITY%/g, product.quantity);
//     output = output.replace(/{%DESCRIPTION%/g, product.description);
//     output = output.replace(/{%ID%/g, product.id);

//     if(!product.organic) output=output.replace(/{%NOT_ORGANIC%}/g,'not-organic');//'not-organic' is class name
//     return output;
// }
// const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
// const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
// const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// //console.log(data);
// const dataObj = JSON.parse(data);
// const server = http.createServer((req, res) => {
//     console.log(req.url);

//     //overview page
//     const pathName = req.url;
//     if (pathName === '/' || pathName === '/overview') {
//         res.writeHead(200, { 'Content-type': 'text/html' });
//         const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el));
//         console.log(cardsHtml);
//         res.end(tempOverview);
//     } else if (pathName === '/product') {
//         res.end('This is the PRODUCT');
//     } else if (pathName === '/api') {
//         res.writeHead(200, { 'Content-type': 'application/json' });
//         res.end(data);
//     }
//     else {
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'hello-world'
//         });
//         res.end('<h1>Page not found!</h1>');
//     }
// });

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000');
// });

//////////server8
const replaceTemplate = (temp, product) => {
  // let output=temp.replace('{%PRODUCTNAME%',produc.productName);//if not use regular expression,only replace first one
  let output = temp.replace(/{%PRODUCTNAME%/g, product.productName); //use regular expression and para:g-golabally, will change all of them one by one
  //out good practice to manuplate para-temp directly, so assign it to a varaible by "let" declration
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic'); //'not-organic' is class name
  return output;
};
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
//console.log(data);
const dataObj = JSON.parse(data);
var path = require("path");
console.log(". = %s", path.resolve("."));
console.log("__dirname = %s", path.resolve(__dirname));
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true); //create object
     console.log("the routing url is:   ",req.url);
  //overview page
//console.log("req looks:   ",req)
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join(''); //not want array, use join into a big string
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);
  } else if (pathname === '/product') {
    console.log(query);
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id]; //dataObj is array
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
