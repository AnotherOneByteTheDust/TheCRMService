import { NewUserInputDto } from '@infrastructure/dtos'
import { NewUserDomainModel } from '@domain/models'
import { mapNewUserFromDtoToDomainModel } from '@infrastructure/mappers'

describe('[MAPPERS] User mapper - mapNewUserFromDtoToDomainModel', () => {
  it('maps succesfully from DTO to Domain', () => {
    const originData: NewUserInputDto = {
      email: 'test@email.com',
      username: 'Username',
      password: '1234567'
    }

    const expectedData: NewUserDomainModel = {
      email: 'test@email.com',
      username: 'Username',
      password: '1234567'
    }

    const mappedData = mapNewUserFromDtoToDomainModel(originData)

    expect(mappedData).toEqual(expectedData)
  })
})
