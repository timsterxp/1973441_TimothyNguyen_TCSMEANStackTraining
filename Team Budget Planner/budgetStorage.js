
var projectObj =[];

function retrieve() {
    var obj = JSON.parse(sessionStorage.getItem("budget"));
 //   var table=document.getElementById("budgetDetails")
    var body=document.getElementById("tbody");
 //   var newRow=body.insertRow(body.length);

 obj.forEach(function (budgetItem){
     var tr ="<tr>"
     tr+="<td>"+ budgetItem.clientName+"</td>"
     tr+="<td>"+ budgetItem.projectName+"</td>"
     tr+="<td>"+ budgetItem.budget+"</td>"
     body.innerHTML+=tr;

     var x = budgetItem.clientName;
     console.log(x);
});

 

   // var x=budgetItem.projectName;
    //console.log(x);
    
 
}

function test(){
    var obj = JSON.parse(sessionStorage.getItem("budget"));
    obj.forEach(function (item){
    var x = item.clientName;
    console.log(x);
    });
}


function save(){
  
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