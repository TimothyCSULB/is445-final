const displayResults = (result) => {
    const divElement = document.getElementById("result");

    divElement.innerHTML = "";

    if (result.trans === "Error") {
        divElement.innerHTML += `
        <h2>Import Failed</h2><br>
        <p>${result.result}</p>
        `
    } else {
        if (result.result.length === 0) {
            divElement.innerHTML += `<h3>No records found!</h3>`;
        } else {
            var tdCount = "";
            result.result.forEach(book => { 

            });
           //divElement.innerHTML = "Test";
           divElement.innerHTML += `
           <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                ${tdText}
            </tbody>
          </table>           
        `
        };
    };
};


document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("/import", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(result => {
            displayResults(result);
        })
        .catch(err => {
            console.error(err.message);
        });
});