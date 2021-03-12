import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app/app.module'
import { SwaggerModule } from '@nestjs/swagger'
import * as configs from './main-configs'
import { ApiExceptionsFilter } from './utilities/exception/api-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, configs.NEST_FACTORY_OTPTIONS)

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
