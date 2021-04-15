let mongoClient = require("mongodb").MongoClient;
var fs = require("fs");
let url = "mongodb://localhost:27017"

mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
    if (!err1) {
        let db = client.db("meanstack");

        if (fs.existsSync("call_data.json")) {
            let data = fs.readFileSync("dataRecord.json");
            let jsonString = data.toString();
            let anotherJSON = JSON.parse(jsonString);
            debugger; //Lets you see what data is currently already stored
            for (let j = 0; j < anotherJSON.length; j++) {
                let _id = anotherJSON[j]._id;
                let source = anotherJSON[j].source;
                let destination = anotherJSON[j].destination;
                let sourceLocation = anotherJSON[j].sourceLocation;
                let destinationLocation = anotherJSON[j].destinationLocation;
                let callDuration = anotherJSON[j].callDuration;
                let roaming = anotherJSON[j].roaming;
                let callCharge = anotherJSON[j].callCharge;

            }
        }


    }


    //Example to change
    db.collection("CallRecords").insertOne({ /*data here */ }, (err2, result) => {
        if (!err2) {
            console.log(result.insertedCount);
        } else {
            console.log(err2.message);
        }
        client.close();
    });

}
});