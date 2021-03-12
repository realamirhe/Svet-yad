import { DocumentBuilder } from '@nestjs/swagger'
const pkginfo = require('pkginfo')(module, 'name', 'version')
export const NEST_FACTORY_OTPTIONS = { cors: true }

export const getSwaggerDocumentBuilderConfig = () =>
  new DocumentBuilder()
    .setTitle(module.exports.name)
    .setDescription('The Svet yad main API descriptions')
    .setVersion(module.exports.version)
    .addTag('memoization')
    .build()
