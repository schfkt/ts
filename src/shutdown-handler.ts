import http from "http";
import {logger} from "./logger";

export const initShutdownHandler = (server: http.Server) => {
  const gracefulShutdown = () => {
    logger.info("Shutting down the server");
    server.close();
    setTimeout(() => process.exit(0), 10000);
  };

  process.on("SIGINT", gracefulShutdown);
  process.on("SIGTERM", gracefulShutdown);
};
