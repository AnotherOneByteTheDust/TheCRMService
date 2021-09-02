import { createServer } from 'http'
import express from 'express'
import helmet from 'helmet'
import { urlencoded, json } from 'body-parser'
import { serverLogger } from '@logger'
import { signupRoutes } from './routes'

const app = express()
const port = parseInt(process.env.SERVER_PORT ?? '3000', 10)

app.use(json())
app.use(helmet())
app.use(urlencoded({ extended: true }))

app.use(signupRoutes)

const server = createServer(app)

const runServer = () => server.listen(port, () => serverLogger('info', `Server running in http://localhost:${port}`))

const stopServer = () => {
  serverLogger('info', 'Closing server...')
  server.close()
}

export { runServer, stopServer }
