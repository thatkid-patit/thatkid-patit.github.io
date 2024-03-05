
//For comparing / Operators
// >        : Greater than
// <        : Less Than
// ==       : Equal
// !=       : Not Equal
// >=       : Greater Than or Equal
// <=       : Less Than or Equal

//kung ang Age ay mas mababa sa AdultAge
let AdultAge = 18;
let Age = 21;
let PersonType = "";

PersonType = (Age >= AdultAge) ? "Adult" : "Minor";

// if (Age >= AdultAge) 
//     PersonType = "Adult";
// else
//     PersonType = "Minor";

console.log(PersonType);

//Grading System
// 1,2,3,5
// 90 - 100 => 1
// 80 - 89  => 2
// 75 - 79  => 3
// < 74     => 5

let Grade = 100;
let TransmutedGrade = 0;

// 90 - 100 => 1 AND, 
if ( Grade >= 90 && Grade <= 100)
{
    TransmutedGrade = 1;
}
else if (Grade >= 80 && Grade <= 89)
{
    TransmutedGrade = 2;
}
else if (Grade >= 75 && Grade <= 79)
{
    TransmutedGrade = 3;
}
else
{
    TransmutedGrade = 5;
}

// console.log("Transmuted Grade : " + TransmutedGrade);


let Operation = "add";
let FirstNum = 10;
let SecondNum = 5;
let Total = 0;

if (Operation == "add")
{
    Total = FirstNum + SecondNum;
}
else if (Operation == "sub")
{
    Total = FirstNum - SecondNum;
}
else if (Operation == "multi")
{
    Total = FirstNum * SecondNum;
}
else if (Operation == "div")
{
    Total = FirstNum / SecondNum;
}
else 
{
    console.log("Invalid operation");
}

console.log(Total);


let isMarried = true;
let NewAge = "32";

if (NewAge === 32)
    console.log("Wala na sa kalendaryo");
else 
    console.log("Bata pa");

if (isMarried === "true") 
    console.log("KASAL NA");
else 
    console.log("SINGLE PA");