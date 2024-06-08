const lib = require('./lib.js')

const express = require('express');

const server = express();
server.listen(8080);
console.log("hello world");

// import { diff,multiply } from "./lib.js";

// console.log(diff(4,5),multiply(8,6));

// const a = 5;

// const fs = require('fs');
// const t1 = performance.now();
// const txt = fs.readFileSync('demo.txt', 'utf-8')

// console.log(txt)

// const txt = fs.readFile('demo.txt', 'utf-8',(err,txt)=>{
//     console.log(txt);

// })


// console.log(lib.sum(4,5));
// const t2 = performance.now();

// console.log(t2 - t1);




