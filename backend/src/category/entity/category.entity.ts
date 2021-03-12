import { Entity, EntityBuilder, Record } from 'src/utilities/entity'

export class Category implements Entity {
  constructor(private readonly id: string, private readonly name: string) {}
}

interface categoryEntities {
  id: string
  name: string
}

export class CategoryEntityBuilder implements EntityBuilder {
  static create(record: Record): Category {
    const category = record.get('category')
    // TODO: cast type `as Record<categoryEntities>`
    const { id, name } = category.properties
    return new Category(id, name)
  }
}
