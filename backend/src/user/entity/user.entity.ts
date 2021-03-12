import { Entity, EntityBuilder, Record } from 'src/utilities/entity'

export class User implements Entity {
  constructor(private readonly id: string, private readonly name: string) {}
}

interface userEntities {
  id: string
  name: string
}

export class UserEntityBuilder implements EntityBuilder {
  static create(record: Record): User {
    const user = record.get('user')
    // TODO: cast type `as Record<userEntities>`
    const { id, name } = user.properties
    return new User(id, name)
  }
}
