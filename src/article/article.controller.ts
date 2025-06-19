import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../news/news.service';
@Controller('article')
export class ArticleController {
  constructor(private newsService: NewsService) {}

  @Get()
  index() {
    return this.newsService.findAll();
  }
  @Get('add')
  addArticle() {
    return 'article add';
  }
}
