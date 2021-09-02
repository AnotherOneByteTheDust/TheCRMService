import { User } from '../models/user.mongodb.model'
import { NewUserDatabaseDto } from '../../../dtos'

export const create = async (newUserData: NewUserDatabaseDto): Promise<void> => {
  // Not saving data into database!
  await (new User(newUserData)).save()
}
