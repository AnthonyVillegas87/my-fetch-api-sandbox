document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternalData);
//For local text file
function getText() {
    fetch('text.txt')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            // show data on page
            document.getElementById('output').innerHTML = data;
        })
        .catch(error => console.log(error));


}

//For local JSON file
function getJson() {
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title}</li>
                            <li>${post.body}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error));
}

//For API data
function getExternalData() {
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error));
}