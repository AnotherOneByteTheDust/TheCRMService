import express from 'express'

import { createCustomer } from '@domain/services'
import { NewCustomerInputDto } from '@infrastructure/dtos'
import { mapNewCustomerFromDtoToDomainModel } from '@infrastructure/mappers'
import { endpointLogger } from '@logger'
import { CREATED, NOT_IMPLEMENTED } from 'src/common/utils'

const customerRoutes = express.Router()
const CUSTOMER_ENDPOINT = '/customers'

customerRoutes.post(CUSTOMER_ENDPOINT, async (req, res, next) => {
  const newCustomerData = req.body as NewCustomerInputDto
  endpointLogger('debug', `New customer request '${newCustomerData.name}.'`, CUSTOMER_ENDPOINT)

  try {
    await createCustomer(mapNewCustomerFromDtoToDomainModel(newCustomerData))
    res.status(CREATED).end('Customer created')
  } catch (error) {
    next(error)
  }
})

customerRoutes.get(CUSTOMER_ENDPOINT, async (req, res, next) => {
  endpointLogger('debug', 'Get customers request', CUSTOMER_ENDPOINT)
  res.status(NOT_IMPLEMENTED).end()
})

customerRoutes.get(CUSTOMER_ENDPOINT + '/:id', async (req, res, next) => {
  endpointLogger('debug', `Get customer request: id '${req.params.id}'`, CUSTOMER_ENDPOINT)
  res.status(NOT_IMPLEMENTED).end()
})

customerRoutes.put(CUSTOMER_ENDPOINT, async (req, res, next) => {
  endpointLogger('debug', 'Update customer request', CUSTOMER_ENDPOINT)
  res.status(NOT_IMPLEMENTED).end()
})

customerRoutes.delete(CUSTOMER_ENDPOINT + '/:id', async (req, res, next) => {
  endpointLogger('debug', `Delete customer request: id '${req.params.id}'`, CUSTOMER_ENDPOINT)
  res.status(NOT_IMPLEMENTED).end()
})

export { customerRoutes }
