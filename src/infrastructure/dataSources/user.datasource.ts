import { NewUserDomainModel } from '../../domain/models'
import { mongodb } from '../orm'

export const createUser = async (newUserData: NewUserDomainModel): Promise<void> => {
  await mongodb.requests.user.create(newUserData)
}
