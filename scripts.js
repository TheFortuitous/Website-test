// load on page load
window.onload = function() {

// make new input field and add to document
const input = document.createElement('input');
input.type = "text";
input.id = "userInput";
input.value="a2dc78de9649963f8d153fcf8f74b527bad41008beb1cf72d48c8d7292a8fcc5"
input.placeholder = "Enter your API token here";
document.body.appendChild(input);

// Fetch api call button
const button = document.createElement('button');
const listEl = document.querySelector('ul');
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
        //document.getElementById("result").innerHTML = JSON.stringify(data)
        data.data.forEach(post => {
            listEl.insertAdjacentHTML("beforeend", `<p>${post.id}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.label}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.region}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.type}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.status}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.ipv4}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.ipv6}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.image}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.backups}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.specs.disk}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.specs.memory}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.specs.vcpus}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.created}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.updated}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.hypervisor}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.group}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.tags}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.alerts.cpu}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.alerts.network_in}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.alerts.network_out}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.alerts.transfer_quota}</li>`);
            listEl.insertAdjacentHTML("beforeend", `<li>${post.alerts.io}</li>`);
        });
    }   
    )
    .catch(error => {
        // output the error to the html page
        document.getElementById("result").innerHTML = JSON.stringify(error);
    }
    );
}
document.body.appendChild(button);

// Clear button
const button2 = document.createElement('button');
button2.innerText = 'Clear';
button2.onclick = function() {
    // clear the input field
    document.getElementById("userInput").value = "";
    document.getElementById("result").innerHTML = "";
}
document.body.appendChild(button2);

// Download button
const button3 = document.createElement('button');
button3.innerText = 'Download';

button3.onclick = function() {
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
document.body.appendChild(button3);

// Checkbox for formatting json (Bad format) (Doesnt really help)
const checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.id = "format";
checkbox.onclick = function() {
    if (checkbox.checked == true) {
        formatJson();
    }
}   
document.body.appendChild(checkbox);
const label = document.createElement('label');
label.innerText = 'Format';
document.body.appendChild(label);

// Format the json
function formatJson() {
    var obj = JSON.parse(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = JSON.stringify(obj, null, 2);
}

// Result from API call result
const div = document.createElement('div');
div.id = "result";
document.body.appendChild(div);

// format the result into a readable format
div.style.whiteSpace = "pre";





// Style the page
document.body.style = "text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: 20px;";
input.style = "width: 500px; height: 30px; font-size: 20px; margin: 10px;";
button.style = "width: 100px; height: 30px; font-size: 20px; margin: 10px;";
button2.style = "width: 100px; height: 30px; font-size: 20px; margin: 10px;";
button3.style = "width: 100px; height: 30px; font-size: 20px; margin: 10px;";
checkbox.style = "width: 20px; height: 20px; font-size: 20px; margin: 10px;";
label.style = "font-size: 20px; margin: 10px;";
div.style = "width: auto; height: auto; font-size: 20px; margin: 10px;";


// end of window.onload
}