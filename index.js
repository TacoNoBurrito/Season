const config = require("./config.json");
const path = require("path");
const express = require("express");
const { uvPath } = require("@titaniumnetwork-dev/ultraviolet");
const { createBareServer } = require("@tomphttp/bare-server-node");
const http = require("http");

const bare = createBareServer("/b/");
const server = http.createServer();

const app = express();
app.use(express.static(path.join(__dirname, "static")));
app.use("/uv/", express.static(uvPath));

server.on("request", (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res);
        return;
    }
    app(req, res);
});

server.on("upgrade", (req, socket, head) => {
    if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head);
        return;
    }
    socket.end();
});

server.on("listening", () => {
    console.log(`Season running. http://localhost:${server.address().port}`);
});

server.listen(config.Port);
