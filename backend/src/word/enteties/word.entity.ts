import { Entity, EntityBuilder, Record } from 'src/utilities/entity'

export class Word implements Entity {
  constructor(private readonly name: string) {}
}

export class WordEntityBuilder implements EntityBuilder {
  static create(record: Record): Word {
    const name = record.get('name')
    return new Word(name)
  }
}
