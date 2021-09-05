import { UserDomainModel, NewUserDomainModel } from '@domain/models'

export type UserDto = Omit<UserDomainModel, 'id'> & { _id: string }
export type NewUserInputDto = Pick<NewUserDomainModel, 'email' | 'password' | 'username'>
export type NewUserDatabaseDto = NewUserDomainModel
