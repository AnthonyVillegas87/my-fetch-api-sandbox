"use strict"

let re;
re = /hello/i; //i = case insensitive
// re = /hello/g; //g = Global search

console.log(re);
console.log(re.source);


//exec() - Return result in an array
// const result = re.exec('Hello world');
// console.log(result);

//test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

//match() - Returns result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

//search()- Returns index of the first match, if not FOUND returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

//replace() - Returns new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);