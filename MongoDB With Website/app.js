//==================================================
// MongoDB With Website Connection
// TCS Simplilearn
// Timothy Nguyen 1973441
//
// Creation of HTML that connects with MongoDB
// -Features: Add, Delete, Update and Fetch
//==================================================


let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
/*
index.html                  get 
retreive all course         get
create, delete and update   post 

*/


let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let CourseSchema = mongoose.Schema({
    _id: Number,
    cname: String,
    description: String,
    amount: Number
})

let CourseModel = mongoose.model("courses", CourseSchema, "Courses");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.get("/addCourse", (req, res) => {
    res.sendFile(__dirname + "/addCourse.html");
})
app.get("/deleteCourse", (req, res) => {
    res.sendFile(__dirname + "/deleteCourse.html");
})
app.get("/updateCourse", (req, res) => {
    res.sendFile(__dirname + "/updateCourse.html");
})
app.get("/fetchCourse", (req, res) => {
    res.sendFile(__dirname + "/fetchCourse.html");
})
app.post("/storeCDetails", (req, res) => {
    /*
    retreive data from body part 
    connected to database 
    store in database. 
        res.sendFile(__dirname+"/index.html")
    */

    let course = new CourseModel({
        _id: req.body.cid,
        cname: req.body.cname,
        description: req.body.description,
        amount: req.body.amount
    });

    console.log("Hello");
})
app.post("/deleteCDetails/:cid", (req, res) => {
    /*
    retreive data from body part 
    connected to database 
    store in database. 
        res.sendFile(__dirname+"/index.html")
    */
})

app.get("/get", (req, res) => {
    /*
        retrieve records from mongodb and store in array 
        
        res.json(arrayName);

    */
})
app.listen(9090, () => console.log("running.."));