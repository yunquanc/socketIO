const Koa = require("koa");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { log } = require("console");

const app = new Koa();
const httpServer = createServer(app.callback());
const io = new Server(httpServer, {
  /* options */
});

io.of("/ws").on("connection", (socket) => {
  // ...
  log("------------->", socket);
  socket.on("test", (args) => {
    // ...
    log("------------->", args);
    io.of("/ws").emit("test", { name: "John" });
  });
});

httpServer.listen(3000);
