export interface UserDomainModel {
  id: string
  username: string
  password: string
  isAdmin: boolean
  isCoreAdmin: boolean
  token: string
}

export type NewUserDomainModel = Pick<UserDomainModel, 'username' | 'password' | 'isAdmin' >
export type UpdateUserDomainModel = Pick<UserDomainModel, 'username' | 'password' | 'isAdmin'>
export type AuthenticatedUserDomainModel = Pick<UserDomainModel, 'token'>
