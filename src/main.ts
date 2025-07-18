import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 靜態資源: public
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    // 虛擬前綴 localhost:3000/static
    prefix: '/static/',
  });
  // 模板引擎: ejs
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  // cookie
  app.use(cookieParser('this signed cookies'));
  // session
  app.use(
    session({
      secret: 'session cat',
      cookie: { maxAge: 90000, httpOnly: true },
      rolling: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
