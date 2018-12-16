import {createLogger, format, transports} from "winston";

const logMessageFormat = format.combine(
  format.simple(),
  format.printf((info) => {
    const timestamp = new Date().toISOString();
    return `${timestamp} ${info.level.toUpperCase()}: ${info.message}`;
  }),
);

export const logger = createLogger({
  level: "info",
  transports: [
    new transports.Console({
      format: logMessageFormat,
    }),
  ],
});
