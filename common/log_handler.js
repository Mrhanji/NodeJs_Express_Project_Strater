import winston from 'winston';
import fs from 'fs-extra';
import chalk from 'chalk';

const logFilePath = './logs/project.log';

// Ensure the log directory and file exist
fs.ensureFileSync(logFilePath);

const logConfiguration = {
    transports: [
        new winston.transports.File({
            filename: logFilePath,
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
            )
        })
    ]
};

const logger = winston.createLogger(logConfiguration);

const log = (message) => {
    if (process.env.ENABLE_LOGGING === 'true') {
        logger.info(message);
    }
};

// Override console methods
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;
const originalConsoleLog = console.log;

console.error = (message, ...optionalParams) => {
    log(`ERROR: ${message}`);
    originalConsoleError(chalk.red(message), ...optionalParams);
};

console.warn = (message, ...optionalParams) => {
    log(`WARN: ${message}`);
    originalConsoleWarn(chalk.yellow(message), ...optionalParams);
};

console.info = (message, ...optionalParams) => {
    log(`INFO: ${message}`);
    originalConsoleInfo(chalk.blue(message), ...optionalParams);
};

console.log = (message, ...optionalParams) => {
    log(`LOG: ${message}`);
    originalConsoleLog(chalk.green(message), ...optionalParams);
};

export default log;