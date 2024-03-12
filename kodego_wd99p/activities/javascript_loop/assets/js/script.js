let execute = document.getElementById("btn-execute");
execute.addEventListener('click', function() {
    let rowInput = document.getElementById("row-input").value;
    let output = "";
    for(var row = 1; row <= rowInput; row++) {
        let columnInput = document.getElementById("column-input").value;
        let output = "";
        for(var column = 1; column <= columnInput; column++) {
            output += "<span class='block text-center px-4 py-4 hover'>" + (column*row) + "</span>"
        }
        document.getElementById("output-section").innerHTML = output;
    }
})
