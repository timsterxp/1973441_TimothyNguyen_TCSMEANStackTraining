var allBlogs = [];
function addBlog(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var imageInfo = document.getElementById("imageId").files[0].name;
    console.log(title)
    console.log(desc);
    console.log(imageInfo);
    storeObject(title,desc,imageInfo);z
    document.getElementById("titleInfo").innerHTML=title;
    document.getElementById("descInfo").innerHTML=desc;
    document.getElementById("imageInfo").src=imageInfo;
}

function loadPreviousBlogs(){
    var obj = JSON.parse(localStorage.getItem("blogs"));
    obj.forEach(function(previousBlogs){
        allBlogs.push(previousItems);
    });
}

function storeObject{title,desc,imageInfo}{
    
    var obj = {}
    obj.title=title;
    obj.desc=desc;
    obj.info=imageInfo;
    return obj;
}

//Example Function from DomOperations.html
//To be revised
function showNewBlog(){
    var table = document.getElementById("employeeList")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  // row created 
   
    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML=data.name;                 // value placed 
   
    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML=data.age;                 // value placed
   
}