import { NewCustomerDomainModel } from '@domain/models'
import { customerDataSource } from '@infrastructure/dataSources'

const saveCustomer = async (newCustomerData: NewCustomerDomainModel): Promise<void> => customerDataSource.createCustomer(newCustomerData)

export const createCustomer = async (newCustomerData: NewCustomerDomainModel): Promise<void> => {
  try {
    await saveCustomer(newCustomerData)
  } catch ({ message }) {
    throw new Error(message)
  }
}
