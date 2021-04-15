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

            /*
            for (var key in anotherJSON[0]) {
                console.log(key);
            }

            */


            debugger; //Lets you see what data is currently already stored
            for (let j = 0; j < anotherJSON.length; j++) {
                db.collection("callRecords").insertOne({ _id: anotherJSON[j]._id, source: anotherJSON[j].source, destination: anotherJSON[j].destination, sourceLocation: anotherJSON[j].sourceLocation, destinationLocation: anotherJSON[j].destinationLocation, callDuration: anotherJSON[j].callDuration, roaming: anotherJSON[j].roaming, callCharge: anotherJSON[j].callCharge }, (err2, result) => {
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