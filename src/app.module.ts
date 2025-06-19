import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ArticleController } from './article/article.controller';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';

import { AppService } from './app.service';
import { NewsService } from './news/news.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ArticleController,
    UserController,
    NewsController,
  ],
  providers: [AppService, NewsService],
})
export class AppModule {}
