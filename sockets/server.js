const socketio = require("socket.io");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
const server = app.listen(port, function(){
    console.log("Listening on port " + port);
});
const io = socketio(server)

io.on('connection', (socket) => {
    console.log('New connection');

    socket.on('sendMessage', (data) => {
        socket.broadcast.emit("messageRecieved", data);
        socket.emit("messageRecieved", data);

        
    })
})