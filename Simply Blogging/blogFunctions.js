var allBlogs = [];
var count = 0;
/*
    Timothy Nguyen
    Simply Blogging
    TCS Simplilearn
    03/17/2021
*/
function addBlog() {
    var title = document.getElementById("title").value;
    var desc = document.getElementById("description").value;

    var imageInfo = document.getElementById("imageId").files[0].name;
    count++;
    localStorage.setItem("numBlogs", count);
    storeObject(title, desc, imageInfo);

    resetData();

}

function resetData() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("imageId").value = "";
}

function loadPreviousBlogs() {
    var obj = JSON.parse(localStorage.getItem("blogs"));
    var counter = 0;
    obj.forEach(function(previousBlogs) {
        allBlogs.push(previousBlogs);
        var gridLayout = document.getElementById("insertHere");
        var col = "<div class = 'col-sm myBlogs'><div class ='col-sm-offset-12'>"
        col += "<h1 class='display-2 text'>" + previousBlogs.title + "</h1></br>"
        col += "<p class='lead text2'>" + previousBlogs.desc + "</p></br>"
        col += "<p><img src =\"" + previousBlogs.info + "\" class='images'/>"
        col += "</div></div>"
        counter++;
        gridLayout.innerHTML += col;
        if (counter % 3 == 0) {
            gridLayout.innerHTML += "</div> <div class= 'row' >"
        }
    });
    count = JSON.parse(localStorage.getItem("numBlogs"));

}

function storeObject(title, desc, imageInfo) {

    var obj = {}
    obj.title = title;
    obj.desc = desc;
    obj.info = imageInfo;
    allBlogs.push(obj);
    localStorage.setItem("blogs", JSON.stringify(allBlogs));
}