import { Controller, Get, Query, Request, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  index() {
    return 'user';
  }

  @Get('add')
  addData(@Query() query) {
    return query;
  }

  @Get('edit')
  editData(@Request() req) {
    return '@Request';
  }
  //通过@Body()装饰器获取post传值
  @Post('create')
  create(@Body() body) {
    return '@Body';
  }
}
