//==================================================
// Node JS Logging + Debugging
// Simplilearn TCS
// Timothy Nguyen 1973441
//==================================================


let obj = require("readline-sync");
let fs = require("fs");
let recordArray = new Array();
//==================================================
// Class  LogFunctions contains functions to log data
//==================================================
class LogFunctions {


    //==================================================
    // Constructs a new LogFunctions class with 
    // local variables for reading input and json files
    // Also includes array with all records of logs
    //==================================================
    constructor() {

    }


    //==================================================
    // Does all functions including reading old, retrieving new
    // and writing
    //==================================================
    doAllFunctions() {
        this.readOldData();
        this.getNewData();
        this.writeAllData();
    }


    //==================================================
    // Prompts User For User-Data and saves into an array
    //==================================================
    getNewData() {

        let amountOfRecords = obj.questionInt("How many records would you like to store?");
        for (let i = 0; i < amountOfRecords; i++) {
            let firstName = obj.question("Enter First Name: ");
            let lastName = obj.question("Enter Last Name: ");
            let gender = obj.question("Enter Gender (Male/Female/Nonbinary): ");
            let email = obj.question("Enter Email: ");
            let date = new Date();
            debugger; //Lets you see the data the user entered
            console.log("\n");
            let thisObj = {
                "name": firstName + " " + lastName,
                "gender": gender,
                "email": email,
                "date": date.getUTCMonth() + "-" + date.getUTCDate() + "-" + date.getUTCFullYear(),
                "time": date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds() + "(UTC Time)"
            };

            recordArray.push(thisObj);
            debugger; //Ensure data was pushed to array

        }
    }

    //==================================================
    // Writes all data into a JSON file
    //==================================================
    writeAllData() {
        let jsonArray = JSON.stringify(recordArray);
        fs.writeFileSync("dataRecord.json", jsonArray);
        console.log("File written");
    }

    //==================================================
    // Reads previous JSON file and loads into Array
    //==================================================
    readOldData() {
        if (fs.existsSync("dataRecord.json")) {
            let data = fs.readFileSync("dataRecord.json");
            let jsonString = data.toString();
            let anotherJSON = JSON.parse(jsonString);
            debugger; //Lets you see what data is currently already stored
            for (let j = 0; j < anotherJSON.length; j++) {
                let name = anotherJSON[j].name;
                let gender = anotherJSON[j].gender;
                let email = anotherJSON[j].email;
                let date = anotherJSON[j].date;
                let time = anotherJSON[j].time;
                console.log("Data Entry Found: " + name + " " + gender + " " + email + " " + date + " " + time)
                let oldObj = { "name:": name, "gender": gender, "email": email, "date": date, "time": time }
                recordArray.push(oldObj);
            }
        }
    }

}


//==================================================
// Exports the LogFunctions class 
//==================================================

module.exports = { LogFunctions, obj, fs, recordArray }