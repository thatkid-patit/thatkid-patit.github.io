let Execute = document.getElementById("btnExecute");

Execute.addEventListener('click', function() {
    let Limit = document.getElementById("txtLimit").value;
    let Divs = "";

    for(var x = 1; x <= Limit; x++) {
        Divs += "<div class='text-center rounded-circle bg-primary m-1' style='width: 40px; height: 40px;'>" + x + "</div>";
    }
    
    document.getElementById("div-wrapper").innerHTML = Divs;
});


let Options  = "";
for(var opts = 1; opts <= 1000; opts++) {
    Options  += "<option value='"+ opts +"'>" + opts +"</option>";
}

document.getElementById("selOptions").innerHTML = Options;