import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function startNextApp() {
  const app = await NestFactory.create(AppModule);
  const port = 5000;
  await app.listen(port);
  console.log(`server on : http://localhost:${port}`);
}

startNextApp();
