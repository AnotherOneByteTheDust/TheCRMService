import { appLogger } from '@logger'

const requiredEnvVariables = [
  'NODE_ENV',
  'SERVER_PORT',
  'LOGGER_LEVEL',
  'MONGO_USER',
  'MONGO_PASS',
  'MONGO_HOST',
  'MONGO_PORT',
  'MONGO_DB'
]

export const checkStartup = () => {
  const nonConfiguredVariables = requiredEnvVariables.reduce(
    (result: string[], variable) => process.env[variable] ? result : [...result, variable],
    []
  )

  if (nonConfiguredVariables.length) {
    appLogger('error', 'Environment variables are not well configured.')
    process.exit(1)
  } else {
    appLogger('info', 'Environment is configured correctly.')
  }
}
