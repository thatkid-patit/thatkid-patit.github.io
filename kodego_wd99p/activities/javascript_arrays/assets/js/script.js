let credentials = [];

document.getElementById("btn-log").addEventListener('click',function() {
    let emId = document.getElementById("em-id").value;
    let emNm = document.getElementById("em-nm").value;
    let emHrs = document.getElementById("em-hrs").value;
    if(emId == "") {
        alert("Please enter a valid Employee ID!");
    }else if(emNm == ""){
        alert("Please enter a valid Employee Name!");
    }else if(emHrs == "") {
        alert("Please enter a valid man-hour!");
    }else{
        credentials.push([emId,emNm,emHrs]);
        printCredentials();
        clearFields();
        computeTotalManHrs();
    }
})

function clearFields() {
    document.getElementById("em-id").value = "";
    document.getElementById("em-nm").value = "";
    document.getElementById("em-hrs").value = "";
}

function removeCredentials(index) {
   credentials.splice(index,1);
   printCredentials();
   computeTotalManHrs();
}

function printCredentials() {
    let table = "";
    for(let i = 0; i < credentials.length; i++)
        table += "<tr><td>" + credentials[i][0] + "</td><td>" + credentials[i][1] + "</td><td>" + (credentials[i][2]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</td><td><button class='btn bg-insane2 text-white'  onclick='removeCredentials("+ i +")'>Delete</button></td></tr>";
    document.getElementById("man-hour-data").innerHTML = table;
}

function computeTotalManHrs() {
    let total = 0;
    for(let i = 0; i < credentials.length; i++)
        total += parseFloat(credentials[i][2]); 
    document.getElementById("man-hours-total").innerText = (total.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}