let btnMorning = document.getElementById("btn-morning");
btnMorning.addEventListener('click', function(){
    let morningOutput = "Good Morning";
    document.getElementById("greet-output").innerText = morningOutput;

    let nameOutput = document.getElementById("name-input").value;
    document.getElementById("name-output").innerText = nameOutput.toUpperCase();
});

let btnAfternoon = document.getElementById("btn-afternoon");
btnAfternoon.addEventListener('click', function(){
    let afternoonOutput = "Good Afternoon";
    document.getElementById("greet-output").innerText = afternoonOutput;

    let nameOutput = document.getElementById("name-input").value;
    document.getElementById("name-output").innerText = nameOutput.toUpperCase();
});

let btnEvening = document.getElementById("btn-evening");
btnEvening.addEventListener('click', function(){
    let eveningOutput = "Good Evening";
    document.getElementById("greet-output").innerText = eveningOutput;

    let nameOutput = document.getElementById("name-input").value;
    document.getElementById("name-output").innerText = nameOutput.toUpperCase();
});