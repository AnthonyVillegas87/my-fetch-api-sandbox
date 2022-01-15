"use strict"
//INIT Github
const github = new Github();

// Input search
const searchUser = document.getElementById('searchUser');

// Search event listener
searchUser.addEventListener('keyup', (e) => {
    //GET input text
    const userInput = e.target.value;

    if(userInput !== '') {
        //Make http call
        github.getUser(userInput)
            .then(data => {
              if(data.profile.message === 'Not Found') {
                //Show alert

              } else {
                //Show Profile

              }
            })
    } else {
        //Clear Profile

    }
});