const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:8080"],
    },
})
io.on("connection", socket => {
    console.log("2")
    console.log(socket.id)
})