let execute = document.getElementById("btn-execute");
execute.addEventListener('click', function() {
    let rowInput = document.getElementById("row-input").value;
    let output = "";
    for(var row = 1; row <= rowInput; row++) {
        let columnInput = document.getElementById("column-input").value;
        output += "<tr>";
        for(var column = 1; column <= columnInput; column++) {
            output += "<td>" + (column*row) + "</td>"
        }
        output += "</tr>";
    }
    document.getElementById("output-area").innerHTML = output;
})
