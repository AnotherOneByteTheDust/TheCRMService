import express from 'express'

import { createUser } from '@domain/services'
import { NewUserInputDto } from '@infrastructure/dtos'
import { mapNewUserFromDtoToDomainModel } from '@infrastructure/mappers'
import { endpointLogger } from '@logger'
import { CREATED } from 'src/common/utils'

const signupRoutes = express.Router()
const SIGNUP_ENDPOINT = '/signup'

signupRoutes.post(SIGNUP_ENDPOINT, async (req, res, next) => {
  const newUserData = req.body as NewUserInputDto
  endpointLogger('debug', `Signup request for user '${newUserData.username}' : '${newUserData.email}'.`, SIGNUP_ENDPOINT)

  try {
    await createUser(mapNewUserFromDtoToDomainModel(newUserData))
    res.status(CREATED).end('User created')
  } catch (error) {
    next(error)
  }
})

export { signupRoutes }
