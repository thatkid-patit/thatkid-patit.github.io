let itemDetailsArr = [];
let cartItemDetailsArr = [];
function newItem() {
    let itemSku = document.getElementById("input-sku").value;
    let itemName = document.getElementById("input-name").value;
    let itemImage = document.getElementById("input-image").value;
    let itemPrice = document.getElementById("input-price").value;
    let itemDetailsIndex = document.getElementById("item-details-index").value;
    if(itemDetailsIndex == "") {
        if (itemSku == "" || itemName == "" || itemImage == "" || itemPrice == "") {
            alert("All fields should be filled!");
            return;
        }
        if (noduplicateSku(itemSku) == false ) {
            alert("SKU already exists!");
            return;
        }
        let itemDetailsObj = {
            itemSkuObj: itemSku,
            itemNameObj: itemName,
            itemImageObj: itemImage,
            itemPriceObj: itemPrice,
        }
        itemDetailsArr.unshift(itemDetailsObj);
    }else{
        itemDetailsArr[itemDetailsIndex] = {
            itemSkuObj: itemSku,
            itemNameObj: itemName,
            itemImageObj: itemImage,
            itemPriceObj: itemPrice,
        }
    }
    document.getElementById("add-modify-btn").innerHTML = "<button type='button' class='btn btn-info mb-3' id='add-btn'  onclick='newItem();'>Add Item</button>";

addItems();
clearFields ();
}

function addItems() {
    let itemCard = ""
    for(let object = 0; object < itemDetailsArr.length; object++) {
        itemCard += "<div class='card mx-auto mb-5' style='max-width: 18rem; min-width: 18rem; height: max-content;'><img id='item-image' src='" + itemDetailsArr[object].itemImageObj + "' class='card-img-top' alt='item'><div class='card-body'><h5 id='item-name' class='card-title'>" + itemDetailsArr[object].itemNameObj + "</h5><p id='item-price' class='card-text'>$ " + itemDetailsArr[object].itemPriceObj + "</p><p id='item-sku' class='card-text d-none'>" + itemDetailsArr[object].itemSkuObj + "</p><div><a id='cart-btn' href='#' class='btn btn-success mx-1' onclick='addToCart(" + object + ");'>Cart</a><a id='modify-btn' href='#' class='btn btn-warning mx-1' onclick='modifyItem(" + object + ");'>Modify</a><a id='remove-btn' href='#' class='btn btn-danger mx-1' onclick='removeItem(" + object + ");'>Remove</a></div></div></div></div>"
    }
    document.getElementById("added-items-section").innerHTML = itemCard;
}

function clearFields () {
    document.getElementById("input-sku").value = "";
    document.getElementById("input-name").value = "";
    document.getElementById("input-image").value = "";
    document.getElementById("input-price").value = "";
    document.getElementById("item-details-index").value = "";
}

function removeItem(card) {
    itemDetailsArr.splice(card,1);
    addItems();
}

function modifyItem(card) {
    let itemDetailsIndex = itemDetailsArr[card];
    document.getElementById("add-modify-btn").innerHTML = "<button type='button' class='btn btn-warning mb-3' id='add-btn'  onclick='newItem();'>Update Item</button>";
    document.getElementById("input-sku").value = itemDetailsIndex.itemSkuObj;
    document.getElementById("input-name").value = itemDetailsIndex.itemNameObj;
    document.getElementById("input-image").value = itemDetailsIndex.itemImageObj;
    document.getElementById("input-price").value = itemDetailsIndex.itemPriceObj;
    document.getElementById("item-details-index").value = card;
}

function noduplicateSku(sku) {
    for(let object = 0; object < itemDetailsArr.length; object++) {
        if (itemDetailsArr[object].itemSkuObj == sku) {
            return false;
        }
    }
    return true;
}

function addToCart(index) {
    let card = 0;
    let sameCard = false;
    while(card < cartItemDetailsArr.length) {
        if(cartItemDetailsArr[card].itemSkuObj == itemDetailsArr[index].itemSkuObj) {
            sameCard = true;
            break;
        }
        card++;
    }
    

    if(sameCard) {
        cartItemDetailsArr[card].itemQuantityObj = !cartItemDetailsArr[card].itemQuantityObj
            ? 1
            : parseInt(cartItemDetailsArr[card].itemQuantityObj) + 1;
    }else{
        cartItemDetailsArr.push(itemDetailsArr[index]);
        cartItemDetailsArr[cartItemDetailsArr.length - 1].itemQuantityObj = 1;
    }
    drawCartTable();
}

function drawCartTable() {
    let cartTable = "";
    for(let card = 0; card < cartItemDetailsArr.length; card++) {
        cartTable += "<tr><td>" + (card + 1) + "</td><td><img src='" + cartItemDetailsArr[card].itemImageObj + "' class='rounded-circle' style='height: 40px; width: 40px;' alt='item image'></td><td>" + cartItemDetailsArr[card].itemSkuObj + "</td><td>"+ cartItemDetailsArr[card].itemNameObj +"</td><td>" + "$ " + cartItemDetailsArr[card].itemPriceObj + "</td><td>" + cartItemDetailsArr[card].itemQuantityObj + "</td><td>" + "$ " + (parseFloat(cartItemDetailsArr[card].itemQuantityObj) * parseFloat(cartItemDetailsArr[card].itemPriceObj)).toFixed(2) + "</td><td><button id='minus-btn' type='button' class='btn btn-danger mx-1' onclick='minus(" + card + ");'>Minus</button><button id='plus-btn' type='button' class='btn btn-warning mx-1' onclick='plus(" + card + ");'>Plus</tr>";
    }
    document.getElementById("cart-items-section").innerHTML = cartTable;
}



function minus(index) {
    let quantity = cartItemDetailsArr[index].itemQuantityObj;
  
    if (quantity > 1) cartItemDetailsArr[index].itemQuantityObj = parseInt(cartItemDetailsArr[index].itemQuantityObj) - 1;
    else cartItemDetailsArr.splice(index, 1);
  
    drawCartTable();
}

function plus(index) {
    cartItemDetailsArr[index].itemQuantityObj = parseInt(cartItemDetailsArr[index].itemQuantityObj) + 1;
    drawCartTable();
}