let cartSize=0;

class  cartItem{
    name:string;
    price:number;
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }

}

function checkAdded(){
    
}

let shoppingCart = new Array<cartItem>();

function addObject(itemName:string,itemPrice:number){
    let newItem=new cartItem(itemName,itemPrice);
    console.log(newItem);
    shoppingCart.push(newItem);
    localStorage.setItem("shoppingCartItems",JSON.stringify(shoppingCart));
}

function addItemOne(){
    let itemName = document.getElementById("itemOne").textContent;
    let itemPrice=parseInt(document.getElementById("itemOnePrice").textContent.replace('$',""));
    console.log("Added" + itemName + " "+itemPrice);
    addObject(itemName,itemPrice);

}

function addItemTwo(){
    let itemName=document.getElementById("itemTwo").textContent;
   let itemPrice=parseInt(document.getElementById("itemTwoPrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice);
}

function addItemThree(){
    let itemName=document.getElementById("itemThree").textContent;
    let itemPrice=parseInt(document.getElementById("itemThreePrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice);
}

function addItemFour(){
    let itemName=document.getElementById("itemFour").textContent;
    let itemPrice=parseInt(document.getElementById("itemFourPrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice);
}

function addItemFive(){
    let itemName=document.getElementById("itemFive").textContent;
    let itemPrice=parseInt(document.getElementById("itemFivePrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice);
}

function addItemSix(){
    let itemName=document.getElementById("itemSix").textContent;
    let itemPrice=parseInt(document.getElementById("itemSixPrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice);
}