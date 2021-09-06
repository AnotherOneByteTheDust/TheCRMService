import { NewCustomerDomainModel } from '@domain/models'
import { mongodb } from '../orm'

export const createCustomer = async (newCustomerData: NewCustomerDomainModel): Promise<void> => {
  await mongodb.requests.customer.create(newCustomerData)
}
