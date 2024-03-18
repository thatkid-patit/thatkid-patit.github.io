// document.getElementById("btnRed").addEventListener("click", function () {
//   document.body.style.color = "#dc3545";
// });

// let Lis = document.getElementsByTagName("li");
// for (var x = 0; x < Lis.length; x++) {
//   Lis[x].style.color = "red";
// }

// let LiClass = document.getElementsByClassName("li-highlight");
// for (const li of LiClass) {
//   li.style.backgroundColor = "black";
// }

// let Btn = document.querySelector(""); // first instance

// let Lis = document.querySelectorAll("button, li"); // all instances
// console.log(Lis);

// document.querySelector("#btnRed").addEventListener("click", function () {
//   document.querySelector("li:first-child").classList.add("text-danger");
// });

document.querySelector("#btnAdd").addEventListener("click", function () {
  let GradeName = document.querySelector("#txtGradeName").value;
  let Input = document.createElement("input");
  Input.className = "form-control form-control-sm";
  Input.type = "number";
  //String Literal
  Input.placeholder = `Enter Grade ${GradeName}`;
  Input.value = 0;

  let Li = document.createElement("li");
  Li.className = "mt-2";

  //ipasok si input kay LI
  Li.append(Input);
  //   console.log(Li);

  // ipasok si LI kay parent
  document.querySelector("#ul-parent").append(Li);

  document.querySelector("#txtGradeName").value = "";
  document.querySelector("#txtGradeName").focus();
});

document.querySelector("#btnRemove").addEventListener("click", function () {
  document.querySelector("li:last-child").remove();
});
