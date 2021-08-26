import { runServer, stopServer } from './infraestructure/server'
import { checkStartup } from './preset'

const startApplication = () => {
  runServer()
}

const closeApplication = () => {
  stopServer()
}

checkStartup()

process.on('SIGINT', async () => closeApplication())

startApplication()
