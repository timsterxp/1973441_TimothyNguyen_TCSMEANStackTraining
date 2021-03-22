var cartSize = 0;
var cartItem = /** @class */ (function() {
    function cartItem(name, price) {
        this.name = name;
        this.price = price;
    }
    return cartItem;
}());
var shoppingCart = new Array();

function addObject(itemName, itemPrice) {
    var newItem = new cartItem(itemName, itemPrice);
    console.log(newItem);
    shoppingCart.push(newItem);
    localStorage.setItem("shoppingCartItems", JSON.stringify(shoppingCart));
}

function addItemOne() {
    var itemName = document.getElementById("itemOne").textContent;
    var itemPrice = parseInt(document.getElementById("itemOnePrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " " + itemPrice);
    addObject(itemName, itemPrice);
}

function addItemTwo() {
    var itemName = document.getElementById("itemTwo").textContent;
    var itemPrice = parseInt(document.getElementById("itemTwoPrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice);
}

function addItemThree() {
    var itemName = document.getElementById("itemThree").textContent;
    var itemPrice = parseInt(document.getElementById("itemThreePrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice);
}

function addItemFour() {
    var itemName = document.getElementById("itemFour").textContent;
    var itemPrice = parseInt(document.getElementById("itemFourPrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice);
}

function addItemFive() {
    var itemName = document.getElementById("itemFive").textContent;
    var itemPrice = parseInt(document.getElementById("itemFivePrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice);
}

function addItemSix() {
    var itemName = document.getElementById("itemSix").textContent;
    var itemPrice = parseInt(document.getElementById("itemSixPrice").textContent.replace('$', ""));
    console.log("Added" + itemName + " ");
    addObject(itemName, itemPrice);
}