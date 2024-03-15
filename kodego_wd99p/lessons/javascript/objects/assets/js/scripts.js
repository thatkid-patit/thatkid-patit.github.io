let ArrPerson = ["Jesthony", "Bernal", "Morales"];
let [firstname, , lastname] = ArrPerson;

// key & value pair
let ObjPerson = {
  firstname: "Jesthony",
  middlename: "Bernal",
  lastname: "Morales",
  age: 34,
  isMarried: true,
  skills: ["Web Developer", "Computer Technician", "Mason"],
  runWork: function (office) {
    alert("I am working at " + office);
    return "Working";
  },
};

let ObjFruits = {
  fruit1: "apple",
  fruit2: "grapes",
  fruit3: "pineapple",
  fruit4: "mango",
};

// for in loop
for (let susi in ObjFruits) {
  //   console.log(ObjFruits[susi]);
}

ObjFruits.fruit2 = "ubas";
// console.log("\n\n");
// for in loop
for (let susi in ObjFruits) {
  //   console.log(ObjFruits[susi]);
}

let ObjName = {
  first: "Jesthony",
  middle: "Bernal",
  last: "Morales",
};
// console.log(ShowObjNames(ObjName));

function ShowObjNames({ first, middle, last }) {
  return {
    code: 200,
    status: "ok",
    message: "Name have been validated",
    data: {
      firstname: first,
      middlename: middle,
      lastname: last,
    },
  };
}

let ArrStudents = [
  {
    firstName: "Jessica",
    lastName: "Velasquez",
  },
  {
    firstName: "Emmanuel",
    lastName: "San Juan",
  },
  {
    firstName: "John Patrick",
    lastName: "Lascano",
  },
  {
    firstName: "John Michael",
    lastName: "Dela Cruz",
  },
];

for (let x = 0; x < ArrStudents.length; x++) {
  console.log(ArrStudents[x].firstName);
}
