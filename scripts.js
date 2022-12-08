// load on page load
window.onload = function() {
// make new button and add to document
const button = document.createElement('button');
button.innerText = 'Fetch';
button.onclick = function() {

    // get the token from the input field
    const token = document.getElementById("userInput").value;
    // get the url from the input field
    const url = 'https://api.linode.com/v4/linode/instances';
    // fetch the api data from the url
    fetch(url, {
        method: 'GET',
        headers: {
        authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // output the data to the html page
        document.getElementById("result").innerHTML = JSON.stringify(data);
    }
    )
    .catch(error => {
        // output the error to the html page
        document.getElementById("result").innerHTML = JSON.stringify(error);
    }
    );
}
document.body.appendChild(button);

// make new button and add to document
const button2 = document.createElement('button');
button2.innerText = 'Clear';
button2.onclick = function() {
    // clear the input field
    document.getElementById("userInput").value = "";
    document.getElementById("result").innerHTML = "";
}
document.body.appendChild(button2);

// make new button and add to document
const button3 = document.createElement('button');
button3.innerText = 'Copy';
button3.onclick = function() {
    // copy the data from the html page
    const copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
document.body.appendChild(button3);

// make new button and add to document
const button4 = document.createElement('button');
button4.innerText = 'Download';

button4.onclick = function() {
    // download the data from the html page
    const data = document.getElementById("result").innerText;
    const blob = new Blob([data], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
document.body.appendChild(button4);

function jsonFormat() {
    var obj = JSON.parse(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = JSON.stringify(obj, undefined, 4);
}
}