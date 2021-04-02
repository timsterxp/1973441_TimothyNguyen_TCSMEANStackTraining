//==================================================
// Node JS Logging + Debugging
// Simplilearn TCS
// Timothy Nguyen 1973441
//==================================================


//==================================================
// Simple mainApp class to showcase-exporting 
// Creates new Class Object and calls Function 
// Prints to console to notify user of completion
//==================================================


let obj = require("./loggingFunction");
let log = new obj.LogFunctions();
log.doAllFunctions();
console.log("Completed");