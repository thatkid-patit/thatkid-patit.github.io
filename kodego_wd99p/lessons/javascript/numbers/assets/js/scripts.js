let btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener('click', function() {
    //string
    let FirstNumber = document.getElementById("num-first-number").value;
    let SecondNumber = document.getElementById("num-second-number").value;
    let total = parseFloat(FirstNumber) + parseFloat(SecondNumber);

    document.getElementById("p-total").innerText = total;
});

let btnRound = document.getElementById("btn-round");
btnRound.addEventListener('click', function() {
    //string
    let FirstNumber = document.getElementById("num-first-number").value;
    let SecondNumber = document.getElementById("num-second-number").value;
    let total = parseFloat(FirstNumber) + parseFloat(SecondNumber);

    document.getElementById("p-total").innerText = Math.round(total);
});

let btnCeil = document.getElementById("btn-ceil");
btnCeil.addEventListener('click', function() {
    //string
    let FirstNumber = document.getElementById("num-first-number").value;
    let SecondNumber = document.getElementById("num-second-number").value;
    let total = parseFloat(FirstNumber) + parseFloat(SecondNumber);

    document.getElementById("p-total").innerText = Math.ceil(total);
});

let btnFloor = document.getElementById("btn-floor");
btnFloor.addEventListener('click', function() {
    //string
    let FirstNumber = document.getElementById("num-first-number").value;
    let SecondNumber = document.getElementById("num-second-number").value;
    let total = parseFloat(FirstNumber) + parseFloat(SecondNumber);

    document.getElementById("p-total").innerText = Math.floor(total);
});

let btnRemainder = document.getElementById("btn-remainder");
btnRemainder.addEventListener('click', function() {
    //string
    let FirstNumber = document.getElementById("num-first-number").value;
    let SecondNumber = document.getElementById("num-second-number").value;
    let total = parseFloat(FirstNumber) % parseFloat(SecondNumber);

    document.getElementById("p-total").innerText = total;
});

let btnMulti = document.getElementById("btn-multi");
btnMulti.addEventListener('click', function() {
    //string
    let FirstNumber = document.getElementById("num-first-number").value;
    let SecondNumber = document.getElementById("num-second-number").value;

    let total = parseFloat(FirstNumber) * parseFloat(SecondNumber);

    document.getElementById("p-total").innerText = total.toFixed(2);
});

//Change Triggers/ Events
let txtFirstNumber = document.getElementById("num-first-number"); //html code 
let txtSecondNumber = document.getElementById("num-second-number");

txtFirstNumber.addEventListener('keyup', function() {
    let total = parseFloat(txtFirstNumber.value) + parseFloat(txtSecondNumber.value);
    document.getElementById("p-total").innerText = total;
});

txtSecondNumber.addEventListener('keyup', function() {    
    let total = parseFloat(txtFirstNumber.value) + parseFloat(txtSecondNumber.value);
    document.getElementById("p-total").innerText = total;
});


