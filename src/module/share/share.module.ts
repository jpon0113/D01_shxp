import { Module } from '@nestjs/common';
import { BaseService } from './service/base/base.service';

@Module({
  providers: [BaseService],
  // expose service ,引入當前模塊就可以使用裡面的服務
  exports: [BaseService],
})
export class ShareModule {}
