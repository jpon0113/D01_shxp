import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index')
  getHello() {
    return { name: 'J胖', age: '20' };
  }

  @Get('news')
  getNews(): string {
    return 'custom fn';
  }

  @Get('product')
  getProduct(): string {
    return this.appService.getProduct();
  }
}
