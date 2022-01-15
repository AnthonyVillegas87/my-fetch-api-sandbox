"use strict"
//INIT Github CLASS
const github = new Github();
//INIT UI CLASS
const ui = new UI();

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
                ui.showAlert('User not found', 'alert alert-danger');
              } else {
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
              }
            })
    } else {
        //Clear Profile
        ui.clearProfile();
    }
});