db.auth('thecrmservice', 'thecrmservice')

db = db.getSiblingDB('the-crm-service')

db.createUser({
  user: 'thecrmservice',
  pwd: 'thecrmservice',
  roles: [
    {
      role: 'dbOwner',
      db: 'the-crm-service'
    }
  ]
})
