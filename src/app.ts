import { runServer, stopServer } from '@infrastructure/server'
import { runOrm, stopOrm } from '@infrastructure/orm'
import { checkStartup } from './preset'
import { appLogger } from '@logger'

const startApplication = async () => {
  try {
    await runOrm()
    runServer()
  } catch ({ message }) {
    appLogger('error', 'Application starting error')
  }
}

const closeApplication = async () => {
  stopServer()
  await stopOrm()
}

checkStartup()

process.on('SIGINT', async () => closeApplication())

startApplication()
