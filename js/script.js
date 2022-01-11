document.getElementById('button1').addEventListener('click', getText);

//For text file
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

//For JSON file
