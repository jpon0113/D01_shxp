import { Controller, Get } from '@nestjs/common';

@Controller('admin/user')
export class UserController {
  @Get()
  index() {
    return 'admin user page';
  }
}
