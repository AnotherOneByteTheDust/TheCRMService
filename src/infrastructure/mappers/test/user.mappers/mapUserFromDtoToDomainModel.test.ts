import { UserDto } from '@infrastructure/dtos'
import { UserDomainModel } from '@domain/models'
import { mapUserFromDtoToDomainModel } from '@infrastructure/mappers'

describe('[MAPPERS] User mapper - mapUserFromDtoToDomainModel', () => {
  it('maps succesfully from DTO to Domain', () => {
    const originData: UserDto = {
      _id: '1',
      email: 'email@mail.com',
      username: 'username',
      password: '1234567',
      isAdmin: false,
      token: '',
      lastLoginAt: '',
      createdAt: '',
      updatedAt: ''
    }

    const expectedData: UserDomainModel = {
      id: '1',
      email: 'email@mail.com',
      username: 'username',
      password: '1234567',
      isAdmin: false,
      token: '',
      lastLoginAt: '',
      createdAt: '',
      updatedAt: ''
    }

    const mappedData = mapUserFromDtoToDomainModel(originData)

    expect(mappedData).toEqual(expectedData)
  })
})
