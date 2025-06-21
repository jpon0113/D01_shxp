import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../../../app.service';
import { BaseService } from '../../../share/service/base/base.service';

@Controller('news')
export class NewsController {
  constructor(
    private appService: AppService,
    private baseService: BaseService,
  ) {}

  @Get()
  index() {
    console.log(this.appService.getConfig());
    console.log(this.baseService.getData());
    return 'news-page';
  }
}
