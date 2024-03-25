let input1 = prompt("Enter starting number:");
let input2 = prompt("Enter ending number:");
base = parseFloat(input1);
limit = parseFloat(input2);
if(base > limit) {
    console.log(`Invalid input`);
}else{
    for(var n = base; n <= limit; n++) {
        console.log(n);
    }
};
