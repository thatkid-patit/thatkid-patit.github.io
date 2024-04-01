let oddNum = [];
let evenNum = [];
function sortNum(b,a) {
    let input = parseFloat(prompt("Enter a number:"));
    if(input == 0) {
        console.log(`Even numbers: ${b.join(",")}`);
        console.log(`Odd numbers: ${a.join(",")}`);
        console.log("***End of Program***")
        return;
    }
    if(input % 2 == 0) {
        b.unshift(input);
    }else if(input % 2 == 1) {
        a.unshift(input);
    }
    sortNum(b,a);
};

sortNum(evenNum,oddNum);