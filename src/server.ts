import "source-map-support/register";

import http from "http";
import {logger} from "./logger";
import {initShutdownHandler} from "./shutdown-handler";

const port = process.env.NODE_PORT || 1337;

export const server = http.createServer((req, res) => {
  logger.info(`${req.method} ${req.url}`);
  res.end("Hello!");
});

server.listen(port);
initShutdownHandler(server);
logger.info(`Server is listening on port ${port}...`);
