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
        credentials.unshift([emId,emNm,emHrs]);
        printCredentials();
        clearFields();
        document.getElementById("btn-log").innerTEXT = "Log Hours";
    }
})

function printCredentials() {
    let table = "";
    let total = 0;
    for(let i = 0; i < credentials.length; i++) {
        table += "<tr><td>" + credentials[i][0] + "</td><td>" + credentials[i][1] + "</td><td>" + credentials[i][2] + "</td><td><button class='btn bg-insane2 text-white mx-1'  onclick='removeCredentials("+ i +")'>Delete</button><button class='btn bg-sunny text-black mx-1'  onclick='editCredentials("+ i +")'>Edit</button></td></tr>";
        total += parseFloat(credentials[i][2]);
    }    
    document.getElementById("man-hour-data").innerHTML = table;
    document.getElementById("man-hours-total").innerText = (total.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function clearFields() {
    document.getElementById("em-id").value = "";
    document.getElementById("em-nm").value = "";
    document.getElementById("em-hrs").value = "";
}

function removeCredentials(index) {
    credentials.splice(index,1);
    printCredentials();
 }

function editCredentials(index) {
    [emId,emNm,emHrs] = [credentials[index][0],credentials[index][1],credentials[index][2]];
    document.getElementById("em-id").value = emId;
    document.getElementById("em-nm").value = emNm;
    document.getElementById("em-hrs").value = emHrs;
    credentials.splice(index,1);
}
