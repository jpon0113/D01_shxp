import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}
  @Get()
  index() {
    return { result: 'api interface' };
  }

  @Get('user')
  userIndex() {
    return { result: 'user list api interface' };
  }

  @Get('news')
  newsIndex() {
    console.log(this.apiService.findNews());
    return { result: 'news list api interface' };
  }
}
