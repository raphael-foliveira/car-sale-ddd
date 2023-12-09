import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApplicationExceptionFilter } from './infrastructure/http/exception-filters/application-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new ApplicationExceptionFilter());
  await app.listen(3000);
}
bootstrap();
