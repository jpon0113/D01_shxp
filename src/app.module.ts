import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { ArticleController } from './article/article.controller';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';
import { UploadController } from './upload/upload.controller';
import { UploadmanyController } from './uploadmany/uploadmany.controller';
import { AppService } from './app.service';
import { NewsService } from './news/news.service';
import { InitMiddleware } from './middleware/init.middleware';
import { UserMiddleware } from './middleware/user.middleware';
import { NewsMiddleware } from './middleware/news.middleware';
import { logger } from './middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [
    AppController,
    ArticleController,
    UserController,
    NewsController,
    UploadController,
    UploadmanyController,
  ],
  providers: [AppService, NewsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(InitMiddleware, NewsMiddleware, UserMiddleware, logger)
      .forRoutes(
        { path: 'u*r', method: RequestMethod.ALL },
        { path: 'news', method: RequestMethod.ALL },
      );
  }
}
