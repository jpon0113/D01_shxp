import {
  Controller,
  Get,
  Query,
  Request,
  Post,
  Body,
  Render,
  Response,
  UsePipes,
} from '@nestjs/common';
import * as Joi from 'joi';
import { UserPipe } from '../pipe/user.pipe';

const userSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(6).max(66).required(),
});

@Controller('user')
export class UserController {
  @Get()
  @UsePipes(new UserPipe(userSchema))
  @Render('default/user')
  index(@Query() info) {
    console.log('info', info);
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
