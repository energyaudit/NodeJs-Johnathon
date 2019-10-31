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
fs.readFile('./dev-data/data.json', 'utf-8', (err, data) => {
    // console.log(data);
});

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('ERROR! 💥');


    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written 😁');
            })
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

//////////server5

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
// console.log(slugs);

// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);
//////////server4
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
/////server1
// const server = http.createServer((req, res) => {
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
//    if (pathName === '/' || pathName === '/overview') {
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
//////////server3
const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else if (pathName === '/api') {
        console.log('${__dirname}');
      fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
        //  fs.readFile(`./dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data);
            console.log(productData);
            res.writeHead(200, {'Content-type': 'application/json' });
            res.end(data);
        });
    }
    else {
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
