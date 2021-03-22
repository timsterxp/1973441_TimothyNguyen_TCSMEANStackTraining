let cartSize=0;
let cartTotalPrice=0;
class  cartItem{
    name:string;
    price:number;
    id:number;
    constructor(name:string,price:number,id:number){
        this.id=id;
        this.name=name;
        this.price=price;
    }

}

function populateTable(){
    let currentArray = JSON.parse(localStorage.getItem("shoppingCartItems"));
    let tableContents = document.getElementById("insertCart");
    for (let item of currentArray){
        tableContents.innerHTML+="<tr><th scope='row'>"+item.name+"</th><th>"+item.price+"</th></tr>";
        // <th scope="row">itemName</tr>
        cartTotalPrice= +cartTotalPrice+ +item.price;
    }

    let subTotal= document.getElementById("subtotal");
    cartTotalPrice.toLocaleString();
    subTotal.innerHTML= "Your Total Price Is: $"+cartTotalPrice;
   

}
function updateCartSize(){
    cartSize++;
    let cartTotal = document.getElementById("cartSize");
    cartTotal.innerHTML='Cart Size: '+ cartSize;
}

function checkAdded(){
    let prevArray = JSON.parse(localStorage.getItem("shoppingCartItems"));
    if (prevArray==null){
        return;
    }else {
        shoppingCart=prevArray;
    }
    for (let item of prevArray){
        if (item.id==1){
            let button = (document.getElementById("itemOneAdd") as HTMLInputElement);
            button.disabled=true;
            button.value="Sold Out";
            updateCartSize();
        }
        if (item.id==2){
            let button = (document.getElementById("itemTwoAdd") as HTMLInputElement);
            button.disabled=true;
            button.value="Sold Out";

            updateCartSize();
        }
        if (item.id==3){
            let button = (document.getElementById("itemThreeAdd") as HTMLInputElement);
            button.disabled=true;
            button.value="Sold Out";

            updateCartSize();
        }
        if (item.id==4){
            let button = (document.getElementById("itemFourAdd") as HTMLInputElement);
            button.disabled=true;
            button.value="Sold Out";

            updateCartSize();
        }
        if (item.id==5){
            let button = (document.getElementById("itemFiveAdd") as HTMLInputElement);
            button.disabled=true;
            button.value="Sold Out";
  
            updateCartSize();
        }
        if (item.id==6){
            let button = (document.getElementById("itemSixAdd") as HTMLInputElement);
            button.disabled=true;
            button.value="Sold Out";

            updateCartSize();
        }
    }
   
}

let shoppingCart = new Array<cartItem>();

function addObject(itemName:string,itemPrice:number,itemId:number){
    let newItem=new cartItem(itemName,itemPrice,itemId);
    console.log(newItem);
    shoppingCart.push(newItem);
    localStorage.setItem("shoppingCartItems",JSON.stringify(shoppingCart));
    updateCartSize();
}

function addItemOne(){
    let itemName = document.getElementById("itemOne").textContent;
    let itemPrice=parseInt(document.getElementById("itemOnePrice").textContent.replace('$',""));
    console.log("Added" + itemName + " "+itemPrice);
    addObject(itemName,itemPrice,1);


}

function addItemTwo(){
    let itemName=document.getElementById("itemTwo").textContent;
   let itemPrice=parseInt(document.getElementById("itemTwoPrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice,2);
}

function addItemThree(){
    let itemName=document.getElementById("itemThree").textContent;
    let itemPrice=parseInt(document.getElementById("itemThreePrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice,3);
}

function addItemFour(){
    let itemName=document.getElementById("itemFour").textContent;
    let itemPrice=parseInt(document.getElementById("itemFourPrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice,4);
}

function addItemFive(){
    let itemName=document.getElementById("itemFive").textContent;
    let itemPrice=parseInt(document.getElementById("itemFivePrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice,5);
}

function addItemSix(){
    let itemName=document.getElementById("itemSix").textContent;
    let itemPrice=parseInt(document.getElementById("itemSixPrice").textContent.replace('$',""));
    console.log("Added" + itemName + " ");
    addObject(itemName,itemPrice,6);
}