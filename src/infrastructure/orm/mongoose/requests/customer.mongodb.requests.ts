import { CustomerDto, NewCustomerDatabaseDto } from '@infrastructure/dtos/customer.dtos'
import { Customer } from '../models'

export const create = async (newCustomerData: NewCustomerDatabaseDto): Promise<void> => {
  // Not saving data into database!
  await (new Customer(newCustomerData)).save()
}

export const getCustomerById = async (id: string): Promise<CustomerDto | null> => {
  return Customer.findById(id).select('-_id ').lean<CustomerDto>()
}

export const getCustomers = async (): Promise<CustomerDto[]> => {
  return Customer.find({}).lean<CustomerDto[]>()
}

export const deleteCustomer = async (customerId: string): Promise<void> => {
  const conditions = { _id: customerId }
  await Customer.deleteOne(conditions)
}
