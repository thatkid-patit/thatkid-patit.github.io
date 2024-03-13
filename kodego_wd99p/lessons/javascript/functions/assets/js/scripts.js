
function sum(num1, num2, action) {
    let Total = num1 + num2;
    return Total;
}

document.getElementById("btn-alert").addEventListener('click', function() {
    let Total = sum(5,5, "alert");
    alert(Total);
});

document.getElementById("btn-log").addEventListener('click', function() {
    let Total = sum(10,10,"log");
    console.log(Total);
});

function greet(GreetingType = 'Magandang Buhay') {
    document.getElementById("p-greeting").innerText = GreetingType;
}

document.getElementById("btn-morning").addEventListener('click', function() {
    greet('Good Morning');
});

document.getElementById("btn-afternoon").addEventListener('click', function() {
    greet('Good Afternoon');
});

document.getElementById("btn-evening").addEventListener('click', 
    function() {
        console.log("Hello WD99p");
    }
);

function BiliGin(Flavor, MixedGin) { //Function Declaration

    if (Flavor != "pineapple")
        console.log("Palitan ng Pineapple");
    else {
        console.log("Bumibili ng Gin");
        MixedGin();
    }
}

// function TimplaGin() {
//     console.log("Nagtitimpla ng Gin");
// }


// BiliGin('grapes', function() {
//     console.log("Nagtitimpla ng Gin");
// });


// scope of variables

let StudentName = "Jevon";

const Person = function() {

    StudentName = "Mati"; //local
    console.log("Local Var : " + StudentName);

}

Person(); //hoisting

console.log("Global Var : " + StudentName);

