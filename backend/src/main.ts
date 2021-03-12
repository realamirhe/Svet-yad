import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

const NEST_FACTORY_OTPTIONS = { cors: true }

async function bootstrap() {
  const app = await NestFactory.create(AppModule, NEST_FACTORY_OTPTIONS)
  await app.listen(3000)
}
bootstrap()
