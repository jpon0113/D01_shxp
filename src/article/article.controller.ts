import { Controller, Get, Response } from '@nestjs/common';
import { NewsService } from '../news/news.service';
@Controller('article')
export class ArticleController {
  constructor(private newsService: NewsService) {}
  @Get('cookie')
  cookie(@Response() res) {
    // 設定cookie
    // res.cookie('username', 'zhangsan', { maxAge: 14000, httpOnly: true });
    res.cookie('username', 'zhangsan', {
      maxAge: 564000,
      httpOnly: true,
      signed: true,
    });

    // return { username: 'aaaaaaaaaaaa' };

    res.send('取得cookie');
  }

  @Get()
  index() {
    return this.newsService.findAll();
  }
  @Get('add')
  addArticle() {
    return 'article add';
  }
}
