export interface CustomerDomainModel {
  id: string
  name: string
  surname: string
  avatarUrl: string
  createdBy: string
  lastModificationBy: string
  createdAt: string
  updatedAt: string
}

export type NewCustomerDomainModel = Pick<CustomerDomainModel, 'name' | 'surname' | 'avatarUrl'>
