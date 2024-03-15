
let EmpHours = [];

document.getElementById("btnLog").addEventListener('click', function() {
    let EmpId = document.getElementById("txtEmpId").value;
    let EmpName = document.getElementById("txtEmpName").value;
    let EmpHrs = document.getElementById("txtEmpHrs").value;

    EmpHours.push([EmpId, EmpName, EmpHrs]);

    DrawTable();
});

function DrawTable() {
    let TableBody = "";
    let Total = 0;
    for(let x = 0; x < EmpHours.length; x++) {
        TableBody += "<tr>";
        TableBody += "<td>"+ EmpHours[x][0]+"</td>";
        TableBody += "<td>"+ EmpHours[x][1]+"</td>";
        TableBody += "<td>"+ EmpHours[x][2]+"</td>";
        TableBody += "<td><button class='btn btn-danger btn-sm' onclick='remove("+x+");'>Remove</buton></td>";
        TableBody += "</tr>";

        Total += parseFloat(EmpHours[x][2]);
    }

    document.getElementById("p-total").innerText = Total;
    document.getElementById("tableBody").innerHTML = TableBody;
}

function remove(index) {
    EmpHours.splice(index, 1);
    DrawTable();
}