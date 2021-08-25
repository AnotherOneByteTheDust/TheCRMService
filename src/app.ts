import { runServer, stopServer } from './infraestructure/server'

const startApplication = () => {
  runServer()
}

const closeApplication = () => {
  stopServer()
}

process.on('SIGINT', async () => closeApplication())

startApplication()
