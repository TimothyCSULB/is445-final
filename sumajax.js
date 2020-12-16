const displayResults = (result) => {
    const divElement = document.getElementById("output");

    divElement.innerHTML = "";
    
    if (result.trans === "Error") {
        divElement.innerHTML += `
        <h2>Import Failed</h2><br>
        <p>${result.result}</p>
        `
    } else {
        if (result.startNum < result.endNum) {
            divElement.innerHTML += `<h3 style="color:red;">Ending Number must be less than starting number!</h3>`;
        } else {
            var array = [];

            var firstnum = document.getElementById("startNum").value;
            var secnum = document.getElementById("endNum").value;
            var increment = document.getElementById("incrNum").value;

            this.array.push(firstnum, secnum, increment);

            var sum = array.reduce(function(a, b) {
                return a + b;
            }, 0);

            divElement.innerHTML += `
            <p>The sum of the numbers from ${firstnum} to ${secnum} is <b>${sum}<b><p>

        `
        };
    };
};
