import { Entity, EntityBuilder, Record } from 'src/utilities/entity'

export class Paragraph implements Entity {
  constructor(private readonly id: string, private readonly content: string) {}
}

interface paragraphEntities {
  id: string
  content: string
}

export class ParagraphEntityBuilder implements EntityBuilder {
  static create(record: Record): Paragraph {
    const paragraph = record.get('paragraph')
    // TODO: cast type `as Record<paragraphEntities>`
    const { id, content } = paragraph.properties
    return new Paragraph(id, content)
  }
}
