
let ArrStudents = ['alexa', 'jaileen', 'diether', 'emman'];
console.log(ArrStudents);

//sort
ArrStudents.sort();
console.log(ArrStudents);

// reverse
ArrStudents.reverse();
console.log(ArrStudents);
//string
let StringStudents = ArrStudents.join('|');
console.log(StringStudents);

//Destructuring
let ArrFoods = ['hamburger', 'hotdog', 'spaghetti', 'chicken', 'sundae', 'fries', 'sprite'];
// let Burger = ArrFoods[0];
// let Hotdog = ArrFoods[1];
// let Spaghetti = ArrFoods[2];

let [Burger, Hotdog, ...OtherFoods] = ArrFoods;

let ArrGrades = [89, 95, 94, 50];
let [Math, Science, PE, Programming] = ArrGrades;
console.log(PE);

//Value Swap
let Num1 = 10;
let Num2 = 5;

console.log(Num1, Num2);
[Num1, Num2] = [Num2, Num1];
console.log(Num1, Num2);

//Updating Array
let ArrSubjects = ['Math', 'Science', 'Programming'];
console.log(ArrSubjects);
ArrSubjects[2] = "Web Development";
console.log(ArrSubjects);

