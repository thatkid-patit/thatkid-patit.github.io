let engField = document.getElementById("eng-grade");
let mathField = document.getElementById("math-grade");
let dataStrField = document.getElementById("data-str-grade");
let comProgField = document.getElementById("com-prog-grade");
let webProgField = document.getElementById("web-prog-grade");

engField.addEventListener('keyup', function() {
    let totGrade = parseFloat(engField.value) + parseFloat(mathField.value) + parseFloat(dataStrField.value) + parseFloat(comProgField.value) + parseFloat(webProgField.value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});


mathField.addEventListener('keyup', function() {
    let totGrade = parseFloat(engField.value) + parseFloat(mathField.value) + parseFloat(dataStrField.value) + parseFloat(comProgField.value) + parseFloat(webProgField.value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});


dataStrField.addEventListener('keyup', function() {
    let totGrade = parseFloat(engField.value) + parseFloat(mathField.value) + parseFloat(dataStrField.value) + parseFloat(comProgField.value) + parseFloat(webProgField.value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});


comProgField.addEventListener('keyup', function() {
    let totGrade = parseFloat(engField.value) + parseFloat(mathField.value) + parseFloat(dataStrField.value) + parseFloat(comProgField.value) + parseFloat(webProgField.value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});


webProgField.addEventListener('keyup', function() {
    let totGrade = parseFloat(engField.value) + parseFloat(mathField.value) + parseFloat(dataStrField.value) + parseFloat(comProgField.value) + parseFloat(webProgField.value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});