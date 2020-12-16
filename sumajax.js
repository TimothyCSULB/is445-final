const displayResults = (result) => {
    const divElement = document.getElementById("output");

    divElement.innerHTML = "";

    const array = [];

    var firstnum = document.getElementById("startNum").value;
    var secnum = document.getElementById("endNum").value;
    var increment = document.getElementById("incrNum").value;

    this.array.push(firstnum, secnum, increment);

    var sum = array.reduce(function(a, b) {
        return a + b;
    }, 0);


}