//==================================================
// Call Record Analysis
// TCS Simplilearn
// Timothy Nguyen 1973441
// 
// With a given preset JSON file, save to database
//==================================================

//Two implementations are given, the uncommented is mongoose method and other
// is mongoDB Modules

let mongoose = require("mongoose");
let fs = require("fs");
let url = "mongodb://localhost:27017/meanstack"; //Db name is meanstack
mongoose.Promise = global.Promise;

const mongooseDBOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, mongooseDBOption);
let db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => {

    //Defining the JSON data
    let CallSchema = mongoose.Schema({
        _id: Number,
        source: String,
        destination: String,
        destinationLocation: String,
        callDuration: String,
        roaming: String,
        callCharge: String,
    });


    let CallRecord = mongoose.model("CallRecord", CallSchema, "CallRecords");


    let call = new CallRecord


    if (fs.existsSync("call_data.json")) {
        let data = fs.readFileSync("call_data.json");
        let jsonString = data.toString();
        let anotherJSON = JSON.parse(jsonString);
        anotherJSON.forEach((record) => {
            let call = new CallRecord(record);
            call.save((err, result) => {
                if (!err) {
                    console.log("Saved Record");
                } else {
                    console.log(err);
                }
                mongoose.disconnect();
            })
        })
    } else {
        console.log("Could not find call_data.json");
    }


});


// Below is the MongoDB Module Implementation
// Comments with "Remove Me!" should remove the whole line and comment the entirety of 
// above to run via  MongoDB Modules

/* //Remove Me!

let mongoClient = require("mongodb").MongoClient;
var fs = require("fs");
let url = "mongodb://localhost:27017"
mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
    if (!err1) {
        let db = client.db("meanstack");

        if (fs.existsSync("call_data.json")) {
            let data = fs.readFileSync("call_data.json");
            let jsonString = data.toString();
            let anotherJSON = JSON.parse(jsonString);

            //This code lists the keys of the JSON file. 
            //May be used in future iterations for dynamically loading JSON to DB
 //Remove Me!*/
/* 
//for (var key in anotherJSON[0]) {
//   console.log(key);
//}
*/


/*//Remove Me!
debugger; //Lets you see what data is currently already stored

for (let j = 0; j < anotherJSON.length; j++) {
    db.collection("callRecords").insertOne(anotherJSON[j], (err2, result) => {
        if (!err2) {
            console.log(result.insertedCount);
        } else {
            console.log(err2.message);
        }
        client.close();
    });
}
}


}


}); 
//Remove Me!*/