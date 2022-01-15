"use strict"
const user = {email: 'jdoe@gmail.com'}

try {
    //Produce ReferenceError
    // myFunction();

    //Produce TypeError
    //null.myFunction();

    //Produce SyntaxError
    //eval('Hello World');

    //Produce URIError
    // decodeURIComponent('%');
    if(!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name')
    }

} catch(error) {
     console.log(error);
    // console.log(error.message);
    // console.log(error.name);
    // console.log(error instanceof TypeError);
} finally {
    console.log('Runs regardless of result....')
}

console.log('Program continues...')