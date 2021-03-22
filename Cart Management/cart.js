var cartSize = 0;
var cartTotalPrice = 0;
var cartItem = /** @class */ (function() {
    function cartItem(name, price, id) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return cartItem;
}());

function populateTable() {
    var currentArray = JSON.parse(localStorage.getItem("shoppingCartItems"));
    var tableContents = document.getElementById("insertCart");
    for (var _i = 0, currentArray_1 = currentArray; _i < currentArray_1.length; _i++) {
        var item = currentArray_1[_i];
        tableContents.innerHTML += "<tr><th scope='row'>" + item.name + "</th><th>" + item.price + "</th></tr>";
        // <th scope="row">itemName</tr>
        cartTotalPrice = +cartTotalPrice + +item.price;
    }
    var subTotal = document.getElementById("subtotal");
    cartTotalPrice.toLocaleString();
    subTotal.innerHTML = "Your Total Price Is: $" + cartTotalPrice;
}

function updateCartSize() {
    cartSize++;
    var cartTotal = document.getElementById("cartSize");
    cartTotal.innerHTML = 'Cart Size: ' + cartSize;
}

function checkAdded() {
    var prevArray = JSON.parse(localStorage.getItem("shoppingCartItems"));
    if (prevArray == null) {
        return;
    } else {
        shoppingCart = prevArray;
    }
    for (var _i = 0, prevArray_1 = prevArray; _i < prevArray_1.length; _i++) {
        var item = prevArray_1[_i];
        if (item.id == 1) {
            var button = document.getElementById("itemOneAdd");
            button.disabled = true;
            button.value = "Sold Out";
            updateCartSize();
        }
        if (item.id == 2) {
            var button = document.getElementById("itemTwoAdd");
            button.disabled = true;
            button.value = "Sold Out";
            updateCartSize();
        }
        if (item.id == 3) {
            var button = document.getElementById("itemThreeAdd");
            button.disabled = true;
            button.value = "Sold Out";
            updateCartSize();
        }
        if (item.id == 4) {
            var button = document.getElementById("itemFourAdd");
            button.disabled = true;
            button.value = "Sold Out";
            updateCartSize();
        }
        if (item.id == 5) {
            var button = document.getElementById("itemFiveAdd");
            button.disabled = true;
            button.value = "Sold Out";
            updateCartSize();
        }
        if (item.id == 6) {
            var button = document.getElementById("itemSixAdd");
            button.disabled = true;
            button.value = "Sold Out";
            updateCartSize();
        }
    }
}
var shoppingCart = new Array();

function addObject(itemName, itemPrice, itemId) {
    var newItem = new cartItem(itemName, itemPrice, itemId);
    console.log(newItem);
    shoppingCart.push(newItem);
    localStorage.setItem("shoppingCartItems", JSON.stringify(shoppingCart));
    updateCartSize();
}

function addItemOne() {
    var itemName = document.getElementById("itemOne").textContent;
    var itemPrice = parseInt(document.getElementById("itemOnePrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " " + itemPrice);
    addObject(itemName, itemPrice, 1);
}

function addItemTwo() {
    var itemName = document.getElementById("itemTwo").textContent;
    var itemPrice = parseInt(document.getElementById("itemTwoPrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice, 2);
}

function addItemThree() {
    var itemName = document.getElementById("itemThree").textContent;
    var itemPrice = parseInt(document.getElementById("itemThreePrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice, 3);
}

function addItemFour() {
    var itemName = document.getElementById("itemFour").textContent;
    var itemPrice = parseInt(document.getElementById("itemFourPrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice, 4);
}

function addItemFive() {
    var itemName = document.getElementById("itemFive").textContent;
    var itemPrice = parseInt(document.getElementById("itemFivePrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice, 5);
}

function addItemSix() {
    var itemName = document.getElementById("itemSix").textContent;
    var itemPrice = parseInt(document.getElementById("itemSixPrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice, 6);
}