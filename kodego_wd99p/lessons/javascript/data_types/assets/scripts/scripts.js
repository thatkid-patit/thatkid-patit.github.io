//string
let FullName = "jesthony morales";
//integers / number / float point originally
let Age =  34;
let Weight = 145.50;
//boolean
let Married = true;

// string functions

//Upper Case
let btnUpperCase = document.getElementById("btn-upper-case");
btnUpperCase.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    
    document.getElementById("h1-output").innerText = FullName.toUpperCase();
});

//Lower Case
let btnLowerCase = document.getElementById("btn-lower-case");
btnLowerCase.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    
    document.getElementById("h1-output").innerText = FullName.toLowerCase();
});


//String Length
let btnLength = document.getElementById("btn-length");
btnLength.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    
    document.getElementById("h1-output").innerText = FullName.length;
});

//Output
let btnOutput = document.getElementById("btn-get-output");
btnOutput.addEventListener('click', function() {
    let Output = document.getElementById("h1-output").innerHTML;
    console.log(Output);
});

//Contatenation
let btnConcat = document.getElementById("btn-concat");
btnConcat.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("h1-output").innerText = "Welcome back, " + FullName;
    console.log(Output);
});

//Get selected letters
let btnSubstring = document.getElementById("btn-substring");
btnSubstring.addEventListener('click', function() {
    let FullName = document.getElementById("txt-fullname").value;

    let Substring = FullName.substring(0, (FullName.length - 1));
    document.getElementById("txt-fullname").value = Substring;
    document.getElementById("h1-output").innerText = Substring;
});


let total = 5 + 69 - 1;

console.log("Total => " + total);