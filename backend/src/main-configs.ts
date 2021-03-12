import { DocumentBuilder } from '@nestjs/swagger'
const pkginfo = require('pkginfo')(module, 'name', 'version')
export const NEST_FACTORY_OTPTIONS = { cors: true }

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
  // TODO: handle passwords and username in dot env files for
  username: '',
  password: '',
}
