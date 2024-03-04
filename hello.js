/*
 * @Date: 2024-03-01 14:10:38
 * @LastEditors: liqunwu wlqsmiling@gmail.com
 * @LastEditTime: 2024-03-01 15:26:14
 * @FilePath: \FE\hello.js
 */
'use strict'
var a = 1;
var b = 2;
console.log(a + b);

var person = {
    name:"Bob",
    age:20,
    tags:['js','web','mobile']
};

console.log(person);
console.log(`hehe 
haha
${a}
bb`)

var a = new Map();
var s = new Set();
console.log('your browser support map and set')

function tempp() {
    console.log(a);
}
tempp();

(function(x){
    console.log(x);
})(4)