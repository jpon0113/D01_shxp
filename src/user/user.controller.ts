import {
  Controller,
  Get,
  Query,
  Request,
  Post,
  Body,
  Render,
  Response,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  @Render('default/user')
  index() {
    return { name: 'J胖' };
  }

  @Get('add')
  addData(@Query() query) {
    return query;
  }

  @Get('edit')
  editData(@Request() req) {
    return '@Request';
  }

  @Post('create')
  create(@Body() body) {
    return '@Body';
  }
  @Post('doAdd')
  doAdd(@Body() body, @Response() res) {
    console.log(body);
    res.redirect('/user');
  }

  // @Get('cookie')
  // getCookie(@Request() req) {
  //   console.log(req.cookies.username);
  //   return req.cookies.username;
  // }
  @Get('cookie')
  getCookie(@Request() req) {
    // console.log(req.cookies.username);
    console.log(req.signedCookies.username);
    return 'cookie signedCookies';
  }
}
