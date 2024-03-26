let minimum = parseFloat(prompt("Enter initial number:"));
let maximum = parseFloat(prompt("Enter limiting number:"));

function printEven(min,max) {
    if(min > max) {
        return;
    }else if(min % 2 == 0) {
        console.log(min);
    }
    min++;
    printEven(min,max);
}

printEven(minimum,maximum);