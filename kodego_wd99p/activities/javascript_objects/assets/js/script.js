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
        let itemDetailsObj = {
            itemSkuObj: itemDetailsArr[itemDetailsIndex].itemSkuObj,
            itemNameObj: itemName,
            itemImageObj: itemImage,
            itemPriceObj: itemPrice,
        }
        itemDetailsArr[itemDetailsIndex] = itemDetailsObj;
        cartItemDetailsArr[itemDetailsIndex] = itemDetailsObj;
        document.getElementById("add-modify-btn").innerHTML = "<button type='button' class='btn btn-info mb-3' id='add-btn'  onclick='newItem();'>Add Item</button>";
    }
    addItems();
    clearFields ();
}

function addItems() {
    let itemCard = ""
    for(let object = 0; object < itemDetailsArr.length; object++) {
        itemCard += "<div class='card mx-auto mb-5' style='max-width: 18rem; min-width: 18rem; height: max-content;'><img id='item-image' src='" + itemDetailsArr[object].itemImageObj + "' class='card-img-top' alt='item'><div class='card-body'><h5 id='item-name' class='card-title'>" + itemDetailsArr[object].itemNameObj + "</h5><p id='item-price' class='card-text'>$ " + itemDetailsArr[object].itemPriceObj.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</p><p id='item-sku' class='card-text d-none'>" + itemDetailsArr[object].itemSkuObj + "</p><div><a id='cart-btn' href='#' class='btn btn-success mx-1' onclick='addCartItems();'>Cart</a><a id='modify-btn' href='#' class='btn btn-warning mx-1' onclick='modifyItem(" + object + ");'>Modify</a><a id='remove-btn' href='#' class='btn btn-danger mx-1' onclick='removeItem(" + object + ");'>Remove</a></div></div></div></div>"
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

// function addCartItems(card) {
//     let cartItemDetailsObj = card;

//     // let cartItemDetailsArr = [];
//     // let cartItemDetailsObj ={
//     //     cartItemSku: cartItemDetailsArr[card].itemSkuObj,
//     //     cartItemName: cartItemDetailsArr[card].itemNameObj,
//     //     cartItemImage: cartItemDetailsArr[card].itemImageObj,
//     //     cartItemPrice: cartItemDetailsArr[card].itemPriceObj,
//     // }

//     console.log(cartItemDetailsObj);





    // for(let x = 0; x < addCartItem.length; x++) {
    //     count += 1;
    //     itemCart += "<tr><td>" + count + "</td><td><img src='" + addCartItem[x].itemImageObj + "' class='rounded-circle' style='height: 40px; width: 40px;' alt='item image'></td><td>" + addCartItem[object].itemSkuObj + "</td><td>"+ addCartItem[x].itemNameObj +"</td><td>" + addCartItem[x].itemPriceObj + "</td><td>" + 1 + "</td><td>" + addCartItem[x].itemPriceObj + "</td><td><button id='minus-btn' type='button' class='btn btn-danger mx-1'>Minus</button><button id='plus-btn' type='button' class='btn btn-warning mx-1'>Plus</tr>";
    // }
    // document.getElementById("cart-items-section").innerHTML = itemCart;
}




// function addCartItems() {
//     let itemCart = "";
//     let count = 0;
//     for(let object = 0; object < cartItemDetailsArr.length; object++) {
//         count += 1;
//         itemCart += "<tr><td>" + count + "</td><td><img src='" + cartItemDetailsArr[object].itemImageObj + "' class='rounded-circle' style='height: 40px; width: 40px;' alt='item image'></td><td>" + cartItemDetailsArr[object].itemSkuObj + "</td><td>"+ cartItemDetailsArr[object].itemNameObj +"</td><td>" + cartItemDetailsArr[object].itemPriceObj + "</td><td>" + 1 + "</td><td>" + cartItemDetailsArr[object].itemPriceObj + "</td><td><button id='minus-btn' type='button' class='btn btn-danger mx-1'>Minus</button><button id='plus-btn' type='button' class='btn btn-warning mx-1'>Plus</tr>";
//     }
//     document.getElementById("cart-items-section").innerHTML = itemCart;
// }




    
    





// table += "<tr><td>" + xxxxxxxxxxxxxxx + "</td><td><img src='" + xxxxxxxxxxxxxxx + "' class='rounded-circle' style='height: 40px; width: 40px;' alt='item image'></td><td>" + xxxxxxxxxxxxxxx + "</td><td>"+ xxxxxxxxxxxxxxx +"</td><td>" + xxxxxxxxxxxxxxx + "</td><td>" + xxxxxxxxxxxxxxx + "</td><td>" + xxxxxxxxxxxxxxx + "</td><td><button id='minus-btn' type='button' class='btn btn-danger mx-1'>Minus</button><button id='plus-btn' type='button' class='btn btn-warning mx-1'>Plus</tr>"

// document.getElementById("cart-items-section").innerHTML = table;