//==================================================
// MongoDB With Website Connection
// TCS Simplilearn
// Timothy Nguyen 1973441
//
// Creation of HTML that connects with MongoDB
// -Features: Add, Delete, Update and Fetch
//==================================================


//==================================================
// Set up all variables/connections
//==================================================

let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
//Database URL Details 
let url = "mongodb://localhost:27017/meanstack";

//middleware enable data from post method.
app.use(bodyParser.urlencoded({ extended: true })); // enable body part data  
app.use(bodyParser.json()); // json data. 

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let CourseSchema = mongoose.Schema({
    _id: Number,
    cname: String,
    description: String,
    amount: Number
})

//Database connection without warning 
const mongooseDbOption = { // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, mongooseDbOption); //ready to connect 

//Connect the data 
mongoose.connection

let CourseModel = mongoose.model("courses", CourseSchema, "Courses");

//==================================================
// Get Methods to access HTML files
//==================================================

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


//==================================================
// Creates new Course Model and saves into MongoDB
//==================================================

app.post("/addCourse", (req, res) => {


    let course = new CourseModel({
        _id: req.body.cid,
        cname: req.body.cname,
        description: req.body.description,
        amount: req.body.amount
    });

    console.log(course);
    course.save((err, result) => {
            if (!err) {
                res.send("Record saved")
            } else {
                res.send("Error saving")
            }
        })
        //   res.sendFile(__dirname + "/index.html")


})

//==================================================
// Deletes course from database by ID
//==================================================

app.post("/deleteCourse", (req, res) => {
    let cid = req.body.cid;
    CourseModel.deleteOne({ _id: cid }, (err, result) => {
            if (!err) {
                if (result.deletedCount > 0) {
                    res.send("Record deleted successfully")
                } else {
                    res.send("Record not present");
                }
            } else {
                res.send("Error : " + err);
            }
        })
        // res.sendFile(__dirname + "/index.html")
})

//==================================================
// Update course by ID
//==================================================

app.post("/updateCourse", (req, res) => {
    let cid = req.body.cid;
    let updatePrice = req.body.amount;
    let newDescription = req.body.description;
    let newName = req.body.cname;
    CourseModel.updateMany({ _id: cid }, { $set: { cname: newName, description: newDescription, amount: updatePrice } }, (err, result) => {
            if (!err) {
                res.send("Record updated")
            } else {
                res.send("Error : " + err);
            }
        })
        // res.sendFile(__dirname + "/index.html")
})


//==================================================
// Fetch a table of courses
//==================================================

app.get("/fetchCourse", (req, res) => {


    CourseModel.find({}, (err, result) => {

        if (!err) {
            let table = `<table>
            <tr>
                <th style = "border:5px solid blue;">Course Id</th>
                <th style = "border:5px solid blue;">Name</th>
                <th style = "border:5px solid blue;">Description</th>
                <th style = "border:5px solid blue;">Amount</th>
            </tr>`;
            //res.json(result);
            for (course in result) {
                table += `<tr><th style = "border:3px solid skyblue;">${result[course]._id}</th><th style = "border:3px solid skyblue;">${result[course].cname}</th><th style = "border:3px solid skyblue;">${result[course].description}</th><th style = "border:3px solid skyblue;">${result[course].amount}</th></tr>`
            }
            res.write(table);
            res.end();
        }
    })

})
app.listen(9090, () => console.log("running.."));