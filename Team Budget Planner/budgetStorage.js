
var projectObj =[];

function retrieve() {
    var obj = JSON.parse(sessionStorage.getItem("budget"));
    var body=document.getElementById("tbody");


    var total = 0;
    obj.forEach(function (budgetItem){
     var tr ="<tr>"
     tr+="<td>"+ budgetItem.clientName+"</td>"
     tr+="<td>"+ budgetItem.projectName+"</td>"
     tr+="<td>"+ budgetItem.budget+"</td>"
     body.innerHTML+=tr;
     total =+total + +budgetItem.budget;
     
});
    document.getElementById("totalBudget").value=total;
 
}

function save(){
    var obj = JSON.parse(sessionStorage.getItem("budget"));
    obj.forEach(function (previousItems){
    projectObj.push(previousItems);

    }); 
    var data = readFormData();
    projectObj.push(data);      
    resetData();
    sessionStorage.setItem("budget",JSON.stringify(projectObj));
 
}

function readFormData() {
    var obj = {}    // empty object
    obj.clientName = document.getElementById("clientName").value;
    obj.projectName= document.getElementById("projectName").value;
    obj.budget = document.getElementById("budget").value;
//    console.log(obj);
    return obj; 
}

function resetData() {
    document.getElementById("clientName").value="";
    document.getElementById("projectName").value="";
    document.getElementById("budget").value="";
    }