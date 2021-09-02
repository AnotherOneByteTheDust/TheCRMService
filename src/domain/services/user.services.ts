import { NewUserDomainModel } from '@domain/models'
import { userDataSource } from '@infrastructure/dataSources'

const saveUser = async (newUserData: NewUserDomainModel): Promise<void> => userDataSource.createUser(newUserData)

export const createUser = async (newUserData: NewUserDomainModel): Promise<void> => {
  try {
    await saveUser(newUserData)
  } catch ({ message }) {
    throw new Error()
  }
}
