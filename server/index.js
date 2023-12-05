const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const port = 3001;

app.use(cors());

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT NUMBER:- ${port}`);
});
