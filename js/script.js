document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);
//For local text file
function getText() {
    fetch('text.txt')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            console.log(data);
            // show data on page
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(error) {
            console.log(error);
        });

}

//For local JSON file
function getJson() {
    fetch('posts.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title}</li>
                            <li>${post.body}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(error) {
            console.log(error);
        });
}