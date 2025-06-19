import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  index() {
    return 'article index';
  }
  @Get('add')
  addArticle() {
    return 'article add';
  }
}
