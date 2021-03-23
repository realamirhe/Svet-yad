import { DocumentBuilder } from '@nestjs/swagger'

require('pkginfo')(module, 'name', 'version')
export const NEST_FACTORY_OPTIONS = { cors: true }

export const getSwaggerDocumentBuilderConfig = () =>
  new DocumentBuilder()
    .setTitle(module.exports.name)
    .setDescription('The Svet yad main API descriptions')
    .setVersion(module.exports.version)
    .addTag('main')
    .build()

export const NEO4J_OPTIONS = {
  scheme: 'neo4j',
  host: '0.0.0.0',
  port: 7687,
  username: process.env.NEO4J_DB_USERNAME,
  password: process.env.NEO4J_DB_PASSWORD,
}
