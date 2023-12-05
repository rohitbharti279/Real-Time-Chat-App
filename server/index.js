const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const port = 3001;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'https://localhost:3000', // React will be running on localhost 3000
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnection", ()=> {
        console.log("User Discomnected", socket.id);
    });
});

server.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT NUMBER:- ${port}`);
});
