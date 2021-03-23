import { config } from 'dotenv'
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { MainModule } from './main.module'
import { SwaggerModule } from '@nestjs/swagger'
import * as configs from './main-configs'
import { ApiExceptionsFilter } from './utilities/exception/api-exception.filter'

config()

async function bootstrap() {
  const app = await NestFactory.create(MainModule, configs.NEST_FACTORY_OPTIONS)

  // Swagger
  const swaggerConfig = configs.getSwaggerDocumentBuilderConfig()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document)
  // Validator
  app.useGlobalPipes(new ValidationPipe())
  // Exceptions
  app.useGlobalFilters(new ApiExceptionsFilter())

  await app.listen(3000)
}

bootstrap()
