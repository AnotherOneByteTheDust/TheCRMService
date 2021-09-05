import { NewCustomerInputDto, CustomerDto } from '@infrastructure/dtos'
import { NewCustomerDomainModel, CustomerDomainModel } from '@domain/models'

export const mapCustomerFromDtoToDomainModel = (customer: CustomerDto): CustomerDomainModel | null => {
  const { _id, ...otherUserfields } = customer

  return {
    id: _id,
    ...otherUserfields
  }
}

export const mapNewCustomerFromDtoToDomainModel = (newCustomerDto: NewCustomerInputDto): NewCustomerDomainModel => {
  const { name, surname, avatarUrl } = newCustomerDto

  return {
    name,
    surname,
    avatarUrl
  }
}
