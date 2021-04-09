//==================================================
// Task Planner With NodeJS Implementation
// Simplilearn TCS
// Timothy Nguyen 1973441
//==================================================



//==================================================
// Modules used + global array
//==================================================
let http = require("http");
let url = require("url");
let fs = require("fs");
let port = 9999;
let taskArray = new Array();

//==================================================
// Contains HTML for adding tasks 
//==================================================
let taskInfo = `
    <div  style = "margin:auto; text-align:center;"  > Insert New Tasks Here! <br/><br/>
    <span style = "padding:8px; border: 5px solid black; display:inline-block;margin:auto; text-align:center;">
    <form action="/newTask"method="get">
        <label>Employee Id</label>
        <input type="text" name="empid" required/><br/>
        <label>Task Id   </label>
        <input type="text" name="taskid" required/><br/>
        <label>Task Name </label>
        <input type="text" name="taskname" required/><br/>
        <label>Deadline  </label>
        <input type="date" name="deadline" required/><br/><br/>
        <input type="submit" value="Add Task"/>
        <input type="reset" value="Reset"/>
    </form>
    </span>
    </div>
`

//==================================================
//  HTML for deleting tasks by ID
//==================================================
let deleteInfo = `<br/> <br/><br/>
    <div style = "margin:auto; text-align:center;"> Delete Tasks Here!  <br/><br/>
    <span style = "padding:10px;border:5px solid black; display:inline-block;">
    <form action="/deleteTask"  method="get"> 
        <label> Task Id </label>
        <input type ="text" name="taskDelete"/> <br/><br/>
        <input type = "submit" value = "Delete Task"> 
    </form>
    </span>
    </div>
    `

//==================================================
// Show All Tasks
//==================================================
let showInfo =
    `<br/><br/><br/> <br/><form action="/showInfo" style = " margin:auto; text-align:center;">
        <input type ="submit" value="Show Tasks!"/>
    </form>`


//==================================================
// Server running
//==================================================
let server = http.createServer((req, res) => {
    //console.log(url.parse(req.url,true))
    var pathInfo = url.parse(req.url, true).pathname;
    if (req.url == "/") {
        res.setHeader("content-type", "text/html"); // by default data consider as a html 
        res.write(taskInfo);
        res.write(deleteInfo);
        res.write(showInfo)
    }



    //==================================================
    // Each URL links to a different page representation
    // Most are the same in this case.
    //==================================================
    if (req.url.includes('/newTask')) {
        console.log(url.parse(req.url, true));
        let data = url.parse(req.url, true).query;

        addTask(data.taskid, data.empid, data.taskname, data.deadline);
        res.write(taskInfo);
        res.write(`Task: ` + data.taskname + ` (` + data.taskid + `)` + `<br/> Employee: ` + data.empid + '<br/> Due: ' + data.deadline + `<br> Added!`);
        res.write(deleteInfo);
        res.write(showInfo);

    } else if (req.url.includes('/deleteTask')) {

        let data = url.parse(req.url, true).query;
        console.log('Task to Delete ' + data.taskDelete);

        res.write(taskInfo);
        res.write(deleteInfo);

        if (deleteTask(data.taskDelete)) {
            res.write(`Task ` + data.taskDelete + ` was successfully deleted!`)
        } else {
            res.write(`Unable to find Task ID: ` + data.taskDelete)
        }

        res.end(showInfo);

    } else if (req.url.includes('/showInfo')) {
        let table = `<br/>
        <table style = "margin:auto;">
        <thead ><tr >
            <th style = "border:5px solid blue;">Employee ID</th>
            <th style = "border:5px solid blue;">Task Name</th>
            <th style = "border:5px solid blue;"> Task ID</th>
            <th style = "border:5px solid blue;">Deadline</th>
            </tr>
            </thead>`

        table += displayTable();
        table += '</table>'

        res.write(taskInfo);
        res.write(deleteInfo);
        res.write(showInfo);
        res.end(table);
    }
});


//==================================================
//  Adds a new task object to array
//==================================================
function addTask(taskId, employeeId, taskName, deadline) {
    oldTasks();
    let newTask = {
        "TaskID": taskId,
        "EmployeeID": employeeId,
        "TaskName": taskName,
        "Deadline": deadline
    }
    taskArray.push(newTask);
    saveTasks();

}
//==================================================
// Returns string representation of table in HTML 
// format
//==================================================
function displayTable() {
    let tableHTML = ``;
    if (fs.existsSync("taskRecords.json")) {

        let data = fs.readFileSync("taskRecords.json");
        let jsonString = data.toString();
        let currentTasks = JSON.parse(jsonString);
        for (let i = 0; i < currentTasks.length; i++) {
            tableHTML += `<tr>
                        <td style = "border:3px solid skyblue;"> ${currentTasks[i].EmployeeID} </td>
                        <td style= "border:3px solid skyblue;"> ${currentTasks[i].TaskName}</td>
                        <td style= "border:3px solid skyblue;"> ${currentTasks[i].TaskID}</td>
                        <td style= "border:3px solid skyblue;"> ${currentTasks[i].Deadline}</td>
                        </tr>`
        }
    }
    return tableHTML;
}
//==================================================
// Ensures previous JSON tasks are saved
//==================================================
function oldTasks() {
    if (fs.existsSync("taskRecords.json")) {
        let data = fs.readFileSync("taskRecords.json");
        let jsonString = data.toString();
        let anotherJSON = JSON.parse(jsonString);
        for (let j = 0; j < anotherJSON.length; j++) {
            let empId = anotherJSON[j].EmployeeID
            let taskId = anotherJSON[j].TaskID
            let taskName = anotherJSON[j].TaskName
            let deadline = anotherJSON[j].Deadline
            let oldObj = { "TaskID": taskId, "EmployeeID": empId, "TaskName": taskName, "Deadline": deadline }
            taskArray.push(oldObj);

        }
    }
}


//==================================================
// Saves new tasks into JSON
//==================================================
function saveTasks() {
    let jsonArray = JSON.stringify(taskArray);
    fs.writeFileSync("taskRecords.json", jsonArray);
}

//==================================================
// Finds all instances of a taskID and deletes them all
//==================================================
function deleteTask(taskId) {

    oldTasks();
    console.log("deleted");
    let elementsToDelete = new Array();
    let deleted = false;
    if (fs.existsSync("taskRecords.json")) {
        let data = fs.readFileSync("taskRecords.json");
        let jsonString = data.toString();
        let anotherJSON = JSON.parse(jsonString);

        for (let i = 0; i < anotherJSON.length; i++) {
            if (taskId == anotherJSON[i].TaskID) {
                elementsToDelete.push(i);
                deleted = true;
            }
        }


    }
    while (elementsToDelete.length > 0) {
        taskArray.splice(elementsToDelete.pop(), 1);
    }
    saveTasks();
    return deleted;
}


server.listen(port, () => console.log(`running on port num ${port}`));