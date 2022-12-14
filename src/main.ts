import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const swaggerConfig = new DocumentBuilder()
    .setTitle('SSC Microservice')
    .setDescription('Microservice Description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  return app.listen(process.env.PORT || 3000, '0.0.0.0');
})();
