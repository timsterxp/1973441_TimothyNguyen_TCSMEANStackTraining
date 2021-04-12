//==================================================
// Socket IO
// TCS Simplilearn
// Timothy Nguyen 1973441

// Show-cases SocketIO capabilities by taking input from html
// and printing it to server console
//==================================================
let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket) => {
    console.log("Client Connected To Application...");

    socket.on("chat", (msg) => {
        console.log(msg);
    })
})

// Port number can be changed as necessary
http.listen(9090, () => console.log('server running on port number 9090'));