import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

export function setupSwagger(app: any) {
  const config = new DocumentBuilder()
    .setTitle('TaskFlow AI REST API')
    .setDescription(
      'Production-grade NestJS & PostgreSQL (Supabase) REST API featuring OpenAPI/Swagger documentation, AI task synthesis, and cloud health monitoring.',
    )
    .setVersion('1.0.0')
    .setContact('Deshan Fernando', 'https://github.com/deshanFdo', 'deshanfernando67@gmail.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addTag('tasks', 'CRUD and querying for PostgreSQL tasks')
    .addTag('ai', 'OpenAI-powered task synthesis and entity enrichment')
    .addTag('health', 'Server and database telemetry metrics')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  const swaggerOptions = {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-standalone-preset.min.js',
    ],
    customSiteTitle: 'TaskFlow AI API Docs | NestJS + Supabase',
  };

  SwaggerModule.setup('docs', app, document, swaggerOptions);
  SwaggerModule.setup('api', app, document, swaggerOptions);
  return document;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  setupSwagger(app);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger documentation available at http://localhost:${port}/docs`);
}

if (!process.env.VERCEL) {
  bootstrap();
}
