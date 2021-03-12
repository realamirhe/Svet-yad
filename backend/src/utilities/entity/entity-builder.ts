import { Entity, Record } from './types'

export abstract class EntityBuilder {
  static create: (record: Record) => Entity
}
