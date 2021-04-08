//==================================================
// Task Planner With NodeJS Implementation
// Simplilearn TCS
// Timothy Nguyen 1973441
//==================================================

let http = require("http");
let url = require("url");
let port = 9999;

//==================================================
// Contains HTML for adding tasks 
//==================================================
let taskInfo = `
    <div> Insert New Tasks Here! </div> <br/>
    <form action="/login" method="get">
        <label>Employee Id</label>
        <input type="text" name="user"/><br/>
        <label>Task Id</label>
        <input type="password" name="pass"/><br/>
        <label>Task Name</label>
        <input type="text" name="user"/><br/>
        <label>Deadline</label>
        <input type="text" name="user"/><br/>
        <input type="submit" value="Sign In!"/>
        <input type="reset" value="reset"/>
    </form>
`
    //==================================================
    //  HTML for deleting tasks by ID
    //==================================================
let deleteInfo = `
    <div> Delete Tasks Here! </div> <br/>
    <form> 
        <label> Task Id </label>
        <input type ="text" name="taskDelete"/> <br/>
        <input type = "button" value = "Delete Task"> <br/><br/>
    </form>

    `
    //==================================================
    // Show All Tasks
    //==================================================
let showInfo =
    `<form>
        <input type ="button" value="Show Tasks!"/>
    </form>`
let server = http.createServer((req, res) => {
    //console.log(url.parse(req.url,true))
    var pathInfo = url.parse(req.url, true).pathname;
    if (req.url == "/") {
        res.setHeader("content-type", "text/html"); // by default data consider as a html 
        res.write(taskInfo);
        res.write(deleteInfo);
        res.end(showInfo)
    }
})
server.listen(port, () => console.log(`running on port num ${port}`));