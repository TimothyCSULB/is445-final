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
                tdCount = result.rows[0]
                divElement.innerHTML += '<h2> Wait for results<h2>'
            });
            if (tdCount !== result.result.length) {
                divElement.innerHTML += `
                <h2> Import Summary<h2>
                <p>Initial number of books in the database: ${result}<p>
                <p>Books successfully inserted: ${tdCount}<p>
                <p>Resulting number of books in the database <b>${result.result}<b><p>
                <h4>Detailed Errors: <h4>
                <p>Book ID ${book.book_id} - Error: Duplicate key value violates unique constraint "book_pkey"<p>
            `
            } else {
                divElement.innerHTML += `
                <h2> Import Summary<h2>
                <p>Initial number of books in the database: ${result}<p>
                <p>Books successfully inserted: ${tdCount.count}<p>
                <p>Resulting number of books in the database <b>${result.result}<b><p>
            `
            }
           //divElement.innerHTML = "Test";
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