let EmpHours = [];

document.getElementById("btnLog").addEventListener("click", function () {
  let EmpIndex = document.getElementById("txtIndex").value;

  let EmpId = document.getElementById("txtEmpId").value;
  let EmpName = document.getElementById("txtEmpName").value;
  let EmpHrs = document.getElementById("txtEmpHrs").value;

  if (EmpIndex == "") {
    if (EmpId == "" || EmpName == "" || EmpHrs == "") {
      alert("Please fill in the required fields!");
      return;
    }

    if (isExists(EmpId) == false) {
      alert("Id Number already exists");
      return;
    }

    let ObjEmp = {
      empId: EmpId,
      empName: EmpName,
      empHrs: EmpHrs,
    };
    EmpHours.push(ObjEmp);
  } else {
    let ObjEmp = {
      empId: EmpHours[EmpIndex][0],
      empName: EmpName,
      empHrs: EmpHrs,
    };
    EmpHours[EmpIndex] = ObjEmp;
  }

  document.getElementById("txtIndex").value = "";
  document.getElementById("txtEmpId").value = "";
  document.getElementById("txtEmpName").value = "";
  document.getElementById("txtEmpHrs").value = "";

  document.getElementById("btnLog").innerText = "Log Hours";

  DrawTable();
});

function DrawTable() {
  let TableBody = "<tr>";
  for (let x = 0; x < EmpHours.length; x++) {
    TableBody += "<tr>";
    TableBody += "<td>" + EmpHours[x].empId + "</td>";
    TableBody += "<td>" + EmpHours[x].empName + "</td>";
    TableBody += "<td>" + EmpHours[x].empHrs + "</td>";
    TableBody +=
      `<td>
                <button class='btn btn-danger btn-sm' onclick='remove(` +
      x +
      `);'>Remove</button>
                <button class='btn btn-warning btn-sm' onclick='edit(` +
      x +
      `);'>Edit</button>
            </td>`;
    TableBody += "</tr>";
  }

  document.getElementById("tableBody").innerHTML = TableBody;
}

function remove(index) {
  EmpHours.splice(index, 1);
  DrawTable();
}

function edit(index) {
  let EditInfo = EmpHours[index];
  document.getElementById("btnLog").innerText = "Update Hours";
  document.getElementById("txtIndex").value = index;
  document.getElementById("txtEmpId").value = EditInfo.empId;
  document.getElementById("txtEmpName").value = EditInfo.empName;
  document.getElementById("txtEmpHrs").value = EditInfo.empHrs;
}

function isExists(idno) {
  for (let x = 0; x < EmpHours.length; x++) {
    if (EmpHours[x].empId == idno) return false;
  }

  return true;
}
