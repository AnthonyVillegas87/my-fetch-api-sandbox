"use strict"

// let re;
// re = /hello/i; //i = case insensitive
// re = /hello/g; //g = Global search

// console.log(re);
// console.log(re.source);

/////////////===============   REGEX EVALUATION FUNCTIONS

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
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);


/////////////=================  REGEX METACHARACTER SYMBOLS

let re;
//Literal Characters
re = /hello/;
re = /hello/i;

//Meta Character symbols
re = /^h/i;    // === MUST START WITH
re = /d$/i;    // === MUST END WITH
re = /^hello$/i;    // === MUST END/BEGIN WITH
re = /^h.llo$/i;    // === MATCHES ANY ONE CHAR
re = /h*llo/i;    // === MATCHES ANY CHAR 0 OR MORE TIMES
re = /gre?a?y/i   // === OPTIONAL CHAR
re = /gre?a?y\?/i   // === ESCAPE CHAR




//STRING TO MATCH
const str = 'Grey?';

//LOG RESULTS
const result = re.exec(str);
console.log(result);

function regTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} DOES NOT match${re.source}`)
    }
}

regTest(re, str);