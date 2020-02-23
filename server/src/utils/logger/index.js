import { createLogger, format, transports } from 'winston';
import dayjs from 'dayjs';

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
	timestamp = dayjs(timestamp).format('MM-DD-YY HH:mm:ss');
	return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
	level: 'info',
	format: combine(label({ label: 'LOGGER' }), timestamp(), myFormat),
	transports: [ new transports.Console({ level: 'silly' }) ]
});

export default logger;
