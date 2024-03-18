document.querySelector("#btn-add").addEventListener('click',function() {
    let li = document.createElement("li");
    let input = document.createElement("input");
    li.className = "list-group-item";
    input.type = "number";
    input.placeholder = "Enter Grade";
    input.className = "form-control";
    li.append(input);
    document.querySelector("#input-area").append(li);
})

function calcGrade() {
    let grade = document.getElementsByTagName("input");
    total = 0;
    for(let i = 0; i < grade.length; i++) {
        total += parseFloat(grade[i].value);
        average = total / parseFloat(grade.length);
    }
    document.getElementById("grade-result").innerText = "Grade Result: " + average.toFixed(2);
}

document.querySelector("#btn-calc").addEventListener('click',function() {
    calcGrade();
})

document.querySelector("#btn-remove").addEventListener('click',function() {
    document.querySelector("li:last-child").remove();
    calcGrade();
})