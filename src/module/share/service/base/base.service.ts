import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  getData() {
    return 'share module service getData';
  }
}
