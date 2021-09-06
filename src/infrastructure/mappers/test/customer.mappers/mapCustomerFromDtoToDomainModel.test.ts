import { CustomerDto } from '@infrastructure/dtos'
import { CustomerDomainModel } from '@domain/models'
import { mapCustomerFromDtoToDomainModel } from '@infrastructure/mappers'

describe('[MAPPERS] Customer mapper - mapCustomerFromDtoToDomainModel', () => {
  it('maps succesfully from DTO to Domain', () => {
    const originData: CustomerDto = {
      _id: '1',
      name: 'name',
      surname: 'surname',
      avatarUrl: 'url',
      createdBy: 'user_identifier',
      lastModificationBy: 'user_identifier',
      createdAt: 'Timestamp',
      updatedAt: 'Timestamp'
    }

    const expectedData: CustomerDomainModel = {
      id: '1',
      name: 'name',
      surname: 'surname',
      avatarUrl: 'url',
      createdBy: 'user_identifier',
      lastModificationBy: 'user_identifier',
      createdAt: 'Timestamp',
      updatedAt: 'Timestamp'
    }

    const mappedData = mapCustomerFromDtoToDomainModel(originData)

    expect(mappedData).toEqual(expectedData)
  })
})
