// Fetch api call button
function apiFetch () {

    // get the list for the output
    const listEl = document.querySelector('ul');
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
            listEl.insertAdjacentHTML("beforeend", `<br><br><p> Linode ID: ${post.id}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode label: ${post.label} </p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode region: ${post.region}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode type: ${post.type}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode status: ${post.status}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode ipv4: ${post.ipv4}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode ipv6: ${post.ipv6}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode image: ${post.image}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode disk: ${post.specs.disk}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode memory: ${post.specs.memory}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode vcpus: ${post.specs.vcpus}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode created: ${post.created}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode updated: ${post.updated}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p> Linode transfer quota: ${post.alerts.transfer_quota}</p> <br><br>`);
        });
    }   
    )
    .catch(error => {
        // output the error to the html page
        document.getElementById("result").innerHTML = JSON.stringify(error);
    }
    );
}
