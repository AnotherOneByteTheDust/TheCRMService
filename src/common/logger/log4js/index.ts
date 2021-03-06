import { logger } from './config'

type LogTypes = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'mark'

export const appLogger = (logType: LogTypes, message: string) => logger[logType](`[application] - ${message}`)
export const serverLogger = (logType: LogTypes, message: string) => logger[logType](`[server] - ${message}`)
export const mongooseLogger = (logType: LogTypes, message: string) => logger[logType](`[mongoose] - ${message}`)
export const serviceLogger = (logType: LogTypes, message: string, service: string) => logger[logType](`[${service}] - ${message}`)
export const endpointLogger = (logType: LogTypes, message: string, endpoint: string) => logger[logType](`[${endpoint}] - ${message}`)
