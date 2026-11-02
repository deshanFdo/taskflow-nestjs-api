import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import express, { Express, Request, Response } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';

dotenv.config();

const server: Express = express();
let isAppInitialized = false;

export function setupSwagger(app: any) {
  const config = new DocumentBuilder()
    .setTitle('UniBench FYP REST API')
    .setDescription(
      'Production-grade NestJS & PostgreSQL (Supabase) REST API tracking the UniBench Final Year Research Project. Features OpenAPI/Swagger 3.0 documentation, AI research synthesis, and live cloud telemetry.',
    )
    .setVersion('1.0.0')
    .setContact('Deshan Fernando', 'https://github.com/deshanFdo', 'deshanfernando67@gmail.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addTag('auth', 'Authentication and researcher registration')
    .addTag('tasks', 'CRUD and querying for user-isolated PostgreSQL tasks')
    .addTag('ai', 'OpenAI-powered task synthesis and entity enrichment')
    .addTag('health', 'Server and database telemetry metrics')
    .addBearerAuth()
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

export async function createNestServer(): Promise<Express> {
  if (!isAppInitialized) {
    // Shield internal Swagger documentation from public access in production
    server.use(['/docs', '/api'], (req: Request, res: Response, next: any) => {
      const isDevKeyProvided = req.query.key === 'developer';
      const isExplicitlyEnabled = process.env.ENABLE_SWAGGER === 'true';
      if (process.env.NODE_ENV === 'production' && !isExplicitlyEnabled && !isDevKeyProvided) {
        return res.redirect('/');
      }
      next();
    });

    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
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
    await app.init();
    isAppInitialized = true;
  }
  return server;
}

// Default export required by Vercel Function runtime
export default async function handler(req: Request, res: Response) {
  await createNestServer();
  return server(req, res);
}

// Local bootstrap
if (!process.env.VERCEL) {
  createNestServer().then(() => {
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
      console.log(`Dashboard UI available at http://localhost:${port}`);
      console.log(`Swagger documentation available at http://localhost:${port}/docs`);
    });
  });
}
