import winston from 'winston';
const { combine, timestamp, printf, colorize, align, splat, simple } = winston.format;

export const Logger = winston.createLogger({
  level: 'silly', // Everything is logged
  format: combine(
    colorize({ all: true }),
    splat(),
    simple(),
    align(),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  exitOnError: false,
  transports: [
    new winston.transports.Console(),
  ],
});
