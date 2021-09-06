export interface UserDomainModel {
  id: string
  password: string
  email: string
  username: string
  token: string | null
  isAdmin: boolean
  lastLoginAt: string | null
  createdAt: string
  updatedAt: string
}

export type NewUserDomainModel = Pick<UserDomainModel, 'email' | 'username' | 'password'>
