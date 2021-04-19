//==================================================
// Chat Log
// TCS Simplilearn
// Timothy Nguyen 1973441

// Combine SocketIO With MongoDB capabilities
//==================================================

//Setting up environment variables
let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let url = "mongodb://localhost:27017/meanstack";
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Set up Schema
let ChatSchema = mongoose.Schema({
    name: String,
    message: String
})

//Database connection without warning 
const mongooseDbOption = { // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, mongooseDbOption); //ready to connect 

//Connect the data 
mongoose.connection


let ChatModel = mongoose.model("chats", ChatSchema, "Chats");

//Access to HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

//Retrieves name/message in database and prints to page
app.get("/showLog", (req, res) => {
    let tableFormat = "";
    let data = ChatModel.find().select({
        "name": 1,
        "message": 1,
        "_id": 0
    });
    //console.log(data);
    data.exec(function(err, logging) {
        if (err) console.log(err);

        res.send(logging);
    })
})

//Initial Client Connection
io.on("connection", (socket) => {
    console.log("Client Connected To Application...");
    //Socket IO Message Display
    socket.on("chat", (msg) => {
        let chat = new ChatModel(msg);
        chat.save((err, result) => {
            if (!err) {
                console.log("Chat successfully saved");
            } else {
                console.log(err);
            }
            //mongoose.disconnect();
        })
        console.log(msg);
    })
})

// Port number can be changed as necessary
http.listen(9090, () => console.log('server running on port number 9090'));