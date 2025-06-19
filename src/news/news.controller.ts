import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsServices: NewsService) {}

  @Get()
  @Render('default/news')
  service() {
    return {
      newsList: this.newsServices.findAll(),
    };
  }
  //http://localhost:3000/news/adda
  // @Get('a*a')
  // indexA() {
  //   // Query.id
  //   return '模糊匹配';
  // }

  @Get('add')
  addData(@Query('id') id) {
    // Query.id
    console.log(id);
    return 'Query';
  }

  // http://localhost:3000/news/123 | http://localhost:3000/news/xxxxx
  @Get(':id')
  index(@Param() param) {
    console.log(param);
    return ':id';
  }
}
