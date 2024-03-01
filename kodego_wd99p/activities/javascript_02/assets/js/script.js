let engField = document.getElementById("eng-grade");
engField.addEventListener('keyup', function() {

    let totGrade = parseFloat(document.getElementById("eng-grade").value) + parseFloat(document.getElementById("math-grade").value) + parseFloat(document.getElementById("data-str-grade").value) + parseFloat(document.getElementById("com-prog-grade").value) + parseFloat(document.getElementById("web-prog-grade").value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});

let mathField = document.getElementById("math-grade");
mathField.addEventListener('keyup', function() {

    let totGrade = parseFloat(document.getElementById("eng-grade").value) + parseFloat(document.getElementById("math-grade").value) + parseFloat(document.getElementById("data-str-grade").value) + parseFloat(document.getElementById("com-prog-grade").value) + parseFloat(document.getElementById("web-prog-grade").value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});

let dataStrField = document.getElementById("data-str-grade");
dataStrField.addEventListener('keyup', function() {

    let totGrade = parseFloat(document.getElementById("eng-grade").value) + parseFloat(document.getElementById("math-grade").value) + parseFloat(document.getElementById("data-str-grade").value) + parseFloat(document.getElementById("com-prog-grade").value) + parseFloat(document.getElementById("web-prog-grade").value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});

let comProgField = document.getElementById("com-prog-grade");
comProgField.addEventListener('keyup', function() {

    let totGrade = parseFloat(document.getElementById("eng-grade").value) + parseFloat(document.getElementById("math-grade").value) + parseFloat(document.getElementById("data-str-grade").value) + parseFloat(document.getElementById("com-prog-grade").value) + parseFloat(document.getElementById("web-prog-grade").value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});

let webProgField = document.getElementById("web-prog-grade");
webProgField.addEventListener('keyup', function() {

    let totGrade = parseFloat(document.getElementById("eng-grade").value) + parseFloat(document.getElementById("math-grade").value) + parseFloat(document.getElementById("data-str-grade").value) + parseFloat(document.getElementById("com-prog-grade").value) + parseFloat(document.getElementById("web-prog-grade").value);

    document.getElementById("tot-grade").value = totGrade.toFixed(2);
    document.getElementById("ave-grade").value = (totGrade / 5).toFixed(2);
});