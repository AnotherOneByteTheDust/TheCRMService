import { NewCustomerDatabaseDto } from '@infrastructure/dtos/customer.dtos'
import { Customer } from '../models'

export const create = async (newCustomerData: NewCustomerDatabaseDto): Promise<void> => {
  // Not saving data into database!
  await (new Customer(newCustomerData)).save()
}
