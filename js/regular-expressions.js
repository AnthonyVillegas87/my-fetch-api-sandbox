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


///////// ================= CHARACTER SETS & QUANTIFIERS
//BRACKETS [] - CHAR SETS
re = /gr[ae]y/i   // === OPTIONAL A OR E CHAR
re = /[GF]ray/;   // === OPTIONAL G OR F CHAR
re = /[^GF]ray/i;   // === OPTIONAL ANYTHING EXCEPT G OR F CHAR
re = /[A-Z]ray/;   // === OPTIONAL ANY UPPERCASE CHAR
re = /[a-z]ray/;   // === OPTIONAL ANY LOWERCASE CHAR
re = /[A-Za-z]ray/;   // === OPTIONAL ANY CASE CHAR
re = /[0-9]ray/; //===== OPTIONAL ANY DIGIT


//BRACES {} - QUANTIFIERS
re = /Hel{2}o/i;  //===== MATCH {AMOUNT} OF DIGITS
re = /Hel{2,4}o/i;  //===== MATCH {AMOUNT} OF DIGITS
re = /Hel{2,}o/i;  //===== MATCH AT LEAST {AMOUNT} OF DIGITS

//PARENTHESES () - GROUPING
re = /([0-9]x){3}/


//SHORTHAND CHAR CLASSES
re = /\w/;  //WORD CHAR - ALPHANUMERIC 0R _
re = /\w+/;  // + = ONE OR MORE
re = /\W/;  //NON-WORD CHAR - ALPHANUMERIC 0R _
re = /\d/;  //MATCH ANY DIGIT
re = /\d+/;  //MATCH ANY DIGIT 0 OR MORE
re = /\D/;  //MATCH ANY NON-DIGIT
re = /\s/;  //MATCH WHITESPACE CHAR
re = /\S/;  //MATCH NON-WHITESPACE CHAR
re = /Hell\b/i;  //WORD BOUNDARY

//ASSERTIONS
re = /x(?=y)/  //MATCH X ONLY IF FOLLOWED BY Y


//STRING TO MATCH
const str = 'Hello';

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