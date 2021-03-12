import { Entity, EntityBuilder, Record } from 'src/utilities/entity'

export class Word implements Entity {
  constructor(private readonly name: string) {}
}

interface wordEntities {
  name: string
}

export class WordEntityBuilder implements EntityBuilder {
  static create(record: Record): Word {
    const word = record.get('word')
    // TODO: cast type `as Record<wordEntities>`
    const { name } = word.properties
    return new Word(name)
  }
}
