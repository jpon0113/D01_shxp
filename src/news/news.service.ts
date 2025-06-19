import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  findAll() {
    return [
      { title: '颱風7月來' },
      { title: '颱風8月來' },
      { title: '秋天下大雷雨' },
      { title: '地震頻繁' },
    ];
  }
}
