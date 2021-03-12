import { Entity, EntityBuilder, Record } from 'src/utilities/entity'

export class Language implements Entity {
  constructor(private readonly id: string, private readonly local: string) {}
}

interface languageEntities {
  id: string
  local: string
}

export class LanguageEntityBuilder implements EntityBuilder {
  static create(record: Record): Language {
    const language = record.get('language')
    // TODO: cast type `as Record<languageEntities>`
    const { id, local } = language.properties
    return new Language(id, local)
  }
}
