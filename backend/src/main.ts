import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { SwaggerModule } from '@nestjs/swagger'
import * as configs from './bootstrap-configs'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, configs.NEST_FACTORY_OTPTIONS)

  // Swagger
  const swaggerConfig = configs.getSwaggerDocumentBuilderConfig()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}

bootstrap()
