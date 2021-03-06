import { NewUserInputDto, UserDto } from '../dtos'
import { NewUserDomainModel, UserDomainModel } from '../../domain/models'

export const mapUserFromDtoToDomainModel = (user: UserDto): UserDomainModel | null => {
  const { _id, ...otherUserfields } = user

  return {
    id: _id,
    ...otherUserfields
  }
}

export const mapNewUserFromDtoToDomainModel = (newUserDto: NewUserInputDto): NewUserDomainModel => {
  const { username, password, email } = newUserDto

  return {
    email,
    username,
    password
  }
}
