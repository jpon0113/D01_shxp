import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hi nestjs';
  }
  getProduct(): string {
    return 'product';
  }

  getConfig() {
    return { domain: 'www.xxx.com' };
  }
}
