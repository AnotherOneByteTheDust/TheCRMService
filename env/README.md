# Environment configuration

## :warning: WARNING :warning:
**THESE FILES MUST NEVER BE PUSHED TO ANY REPOSITORY DUE TO THEY CAN CONTAIN SENSIBLE INFORMATION OF THE PROJECT**

This project uses two different environment files:
-   `.env` for production/deployment code
-   `.env.dev` for development code

The content of these files must have this format:

```sh
NODE_ENV="development" | "production"

SERVER_PORT=3000

LOGGER_LEVEL="off" | "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "all"

MONGO_USER="thecrmservice"
MONGO_PASS="thecrmservice"
MONGO_HOST="localhost"
MONGO_PORT="27019"
MONGO_DB="the-crm-service"
```