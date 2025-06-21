import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  getNews() {
    return [{ title: '111' }, { title: '222' }];
  }
}
