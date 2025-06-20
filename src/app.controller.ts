import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index')
  index(@Request() req): any {
    req.session.username = 'session user';
    return { name: 'J胖', age: '20' };
  }

  @Get('session')
  session(@Request() req): string {
    console.log(req.session.username);
    return 'get user';
  }

  // @Get('product')
  // getProduct(): string {
  //   return this.appService.getProduct();
  // }
}
