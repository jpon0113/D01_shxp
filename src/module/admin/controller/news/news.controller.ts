import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../../service/news/news.service';
import { AppService } from '../../../../app.service';

@Controller('admin/news')
export class NewsController {
  constructor(
    private newsService: NewsService,
    private appService: AppService,
  ) {}
  @Get()
  index() {
    console.log(this.newsService.getNews());
    console.log(this.appService.getConfig());
    return 'admin news ';
  }
}
