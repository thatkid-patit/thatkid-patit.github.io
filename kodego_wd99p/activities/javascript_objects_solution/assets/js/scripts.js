let Items = [];
let CartItems = [];

document.getElementById("btnAddItem").addEventListener("click", function () {
  let ItemIndex = document.getElementById("txtIndex").value;
  let ItemSku = document.getElementById("txtSku").value;
  let ItemName = document.getElementById("txtItemName").value;
  let ItemPhoto = document.getElementById("txtItemPhoto").value;
  let ItemPrice = document.getElementById("txtItemPrice").value;

  if (ItemIndex == "") {
    if (ItemSku == "" || ItemName == "" || ItemPhoto == "" || ItemPrice == "") {
      alert("Please fill in the required fields!");
      return;
    }
    // key value pair
    let ObjInfo = {
      sku: ItemSku,
      name: ItemName,
      photo: ItemPhoto,
      price: ItemPrice,
    };

    Items.push(ObjInfo);
  } else {
    Items[ItemIndex] = {
      sku: ItemSku,
      name: ItemName,
      photo: ItemPhoto,
      price: ItemPrice,
    };
  }

  document.getElementById("txtIndex").value = "";
  document.getElementById("txtSku").value = "";
  document.getElementById("txtItemName").value = "";
  document.getElementById("txtItemPhoto").value = "";
  document.getElementById("txtItemPrice").value = "";

  document.getElementById("btnAddItem").innerText = "Add Item";

  DrawCards();
});

function DrawCards() {
  let Cards = "";
  for (let x = 0; x < Items.length; x++) {
    Cards +=
      `<div class="col-md-4 mt-2">
        <div class="card">
            <img class="card-img-top" src="` +
      Items[x].photo +
      `" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">` +
      Items[x].name +
      `</h5>
            <p class="card-text">
                Amount : ` +
      Items[x].price +
      `
        </p>
        <button class="btn btn-success btn-sm" onclick='add(` +
      x +
      `)'>Cart</button>
        <button class="btn btn-warning btn-sm" onclick='edit(` +
      x +
      `)'>Modify</button>
        <button class="btn btn-danger btn-sm" onclick='remove(` +
      x +
      `)'>Remove</button>
        </div>
    </div>
</div>`;
  }

  document.getElementById("div-cards").innerHTML = Cards;
}

function edit(index) {
  let EditInfo = Items[index];
  document.getElementById("btnAddItem").innerText = "Update Item";

  document.getElementById("txtIndex").value = index;
  document.getElementById("txtSku").value = EditInfo.sku;
  document.getElementById("txtItemName").value = EditInfo.name;
  document.getElementById("txtItemPhoto").value = EditInfo.photo;
  document.getElementById("txtItemPrice").value = EditInfo.price;
}

function remove(index) {
  Items.splice(index, 1);
  DrawCards();
}

function isExists(idno) {
  for (let x = 0; x < Items.length; x++) {
    if (Items[x].sku == idno) return false;
  }
  return true;
}

// add to cart
function add(index) {
  let x = 0;
  let Found = false;
  console.log(CartItems);
  while (x < CartItems.length) {
    if (CartItems[x].sku == Items[index].sku) {
      Found = true;
      break; // to stop iteration
    }
    x++;
  }

  if (Found) {
    CartItems[x].qtys = !CartItems[x].qtys
      ? 1
      : parseInt(CartItems[x].qtys) + 1;
  } else {
    CartItems.push(Items[index]);
    CartItems[CartItems.length - 1].qtys = 1;
  }

  DrawTable();
}

function DrawTable() {
  let TableBody = "<tr>";
  for (let x = 0; x < CartItems.length; x++) {
    TableBody += "<tr>";
    TableBody += "<td>" + (x + 1) + "</td>";
    TableBody +=
      "<td><img class='rounded-circle' style='width: 100px; height: 100px;' src='" +
      CartItems[x].photo +
      "'></td>";
    TableBody += "<td >" + CartItems[x].sku + "</td>";
    TableBody += "<td>" + CartItems[x].name + "</td>";
    TableBody += "<td>" + CartItems[x].price + "</td>";
    TableBody += "<td>" + CartItems[x].qtys + "</td>";
    TableBody +=
      "<td>" +
      (parseFloat(CartItems[x].qtys) * parseFloat(CartItems[x].price)).toFixed(
        2
      ) +
      "</td>";
    TableBody +=
      `<td>
                <button class='btn btn-danger btn-sm' onclick='minus(` +
      x +
      `);'>Minus</button>
                <button class='btn btn-warning btn-sm' onclick='plus(` +
      x +
      `);'>Plus</button>
            </td>`;
    TableBody += "</tr>";
  }

  document.getElementById("tableBody").innerHTML = TableBody;
}

function minus(index) {
  let Qtys = CartItems[index].qtys;

  if (Qtys > 1) CartItems[index].qtys = parseInt(CartItems[index].qtys) - 1;
  else CartItems.splice(index, 1);

  DrawTable();
}

function plus(index) {
  CartItems[index].qtys = parseInt(CartItems[index].qtys) + 1;
  DrawTable();
}
