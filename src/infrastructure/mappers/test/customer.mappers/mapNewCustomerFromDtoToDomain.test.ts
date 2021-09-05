import { NewCustomerInputDto } from '@infrastructure/dtos'
import { NewCustomerDomainModel } from '@domain/models'
import { mapNewCustomerFromDtoToDomainModel } from '@infrastructure/mappers'

describe('[MAPPERS] Customer mapper - mapNewCustomerFromDtoToDomainModel', () => {
  it('maps succesfully from DTO to Domain', () => {
    const originData: NewCustomerInputDto = {
      name: 'name',
      surname: 'surname',
      avatarUrl: 'url'
    }

    const expectedData: NewCustomerDomainModel = {
      name: 'name',
      surname: 'surname',
      avatarUrl: 'url'
    }

    const mappedData = mapNewCustomerFromDtoToDomainModel(originData)

    expect(mappedData).toEqual(expectedData)
  })
})
