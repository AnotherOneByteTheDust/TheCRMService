import { NewCustomerDomainModel, CustomerDomainModel } from '@domain/models'

export type NewCustomerDatabaseDto = NewCustomerDomainModel
export type CustomerDto = Omit<CustomerDomainModel, 'id'> & { _id: string }
export type NewCustomerInputDto = Pick<NewCustomerDomainModel, 'name' | 'surname' | 'avatarUrl'>
